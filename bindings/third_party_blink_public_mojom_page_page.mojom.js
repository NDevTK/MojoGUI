// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/page/page.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};
var network = network || {};
var skia = skia || {};
var color = color || {};

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
      mojo.internal.StructField('visibility', 0, 0, blink.mojom.PageVisibilityStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('pagehide_dispatch', 8, 0, blink.mojom.PagehideDispatchSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_frozen', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_in_back_forward_cache', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('eviction_enabled', 16, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: PageRestoreParams
mojo.internal.Struct(
    blink.mojom.PageRestoreParamsSpec, 'blink.mojom.PageRestoreParams', [
      mojo.internal.StructField('navigation_start', 0, 0, mojo_base.mojom.TimeTicksSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('view_transition_state', 8, 0, blink.mojom.ViewTransitionStateSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('pending_history_list_index', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('current_history_list_length', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ColorProviderColorMaps
mojo.internal.Struct(
    blink.mojom.ColorProviderColorMapsSpec, 'blink.mojom.ColorProviderColorMaps', [
      mojo.internal.StructField('light_colors_map', 0, 0, mojo.internal.Map(color.mojom.RendererColorIdSpec.$, skia.mojom.SkColorSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('dark_colors_map', 8, 0, mojo.internal.Map(color.mojom.RendererColorIdSpec.$, skia.mojom.SkColorSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('forced_colors_map', 16, 0, mojo.internal.Map(color.mojom.RendererColorIdSpec.$, skia.mojom.SkColorSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: PrerenderPageActivationParams
mojo.internal.Struct(
    blink.mojom.PrerenderPageActivationParamsSpec, 'blink.mojom.PrerenderPageActivationParams', [
      mojo.internal.StructField('was_user_activated', 0, 0, blink.mojom.WasActivatedOptionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('activation_start', 8, 0, mojo_base.mojom.TimeTicksSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('view_transition_state', 16, 0, blink.mojom.ViewTransitionStateSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Interface: PageBroadcast
mojo.internal.Struct(
    blink.mojom.PageBroadcast_SetPageLifecycleState_ParamsSpec, 'blink.mojom.PageBroadcast_SetPageLifecycleState_Params', [
      mojo.internal.StructField('state', 0, 0, blink.mojom.PageLifecycleStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('page_restore_params', 8, 0, blink.mojom.PageRestoreParamsSpec.$, null, true, 0, undefined),
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
      mojo.internal.StructField('prerender_page_activation_params', 0, 0, blink.mojom.PrerenderPageActivationParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.PageBroadcast_ActivatePrerenderedPage_ResponseParamsSpec, 'blink.mojom.PageBroadcast_ActivatePrerenderedPage_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.PageBroadcast_UpdateWebPreferences_ParamsSpec, 'blink.mojom.PageBroadcast_UpdateWebPreferences_Params', [
      mojo.internal.StructField('preferences', 0, 0, blink.mojom.WebPreferencesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.PageBroadcast_UpdateRendererPreferences_ParamsSpec, 'blink.mojom.PageBroadcast_UpdateRendererPreferences_Params', [
      mojo.internal.StructField('preferences', 0, 0, blink.mojom.RendererPreferencesSpec.$, null, false, 0, undefined),
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
      mojo.internal.StructField('color', 0, 0, skia.mojom.SkColorSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.PageBroadcast_CreateRemoteMainFrame_ParamsSpec, 'blink.mojom.PageBroadcast_CreateRemoteMainFrame_Params', [
      mojo.internal.StructField('token', 0, 0, blink.mojom.RemoteFrameTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('opener_frame_token', 8, 0, blink.mojom.FrameTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('replication_state', 16, 0, blink.mojom.FrameReplicationStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('devtools_frame_token', 24, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('navigation_metrics_token', 32, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('remote_frame_interfaces', 40, 0, blink.mojom.RemoteFrameInterfacesFromBrowserSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('remote_main_frame_interfaces', 48, 0, blink.mojom.RemoteMainFrameInterfacesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_loading', 56, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 72]]);

mojo.internal.Struct(
    blink.mojom.PageBroadcast_UpdatePageBrowsingContextGroup_ParamsSpec, 'blink.mojom.PageBroadcast_UpdatePageBrowsingContextGroup_Params', [
      mojo.internal.StructField('browsing_context_group_token', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.PageBroadcast_SetPageAttributionSupport_ParamsSpec, 'blink.mojom.PageBroadcast_SetPageAttributionSupport_Params', [
      mojo.internal.StructField('support', 0, 0, network.mojom.AttributionSupportSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.PageBroadcast_UpdateColorProviders_ParamsSpec, 'blink.mojom.PageBroadcast_UpdateColorProviders_Params', [
      mojo.internal.StructField('color_provider_colors', 0, 0, blink.mojom.ColorProviderColorMapsSpec.$, null, false, 0, undefined),
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
      [state, page_restore_params],
      false);
  }

  audioStateChanged(is_audio_playing) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.PageBroadcast_AudioStateChanged_ParamsSpec,
      null,
      [is_audio_playing],
      false);
  }

  activatePrerenderedPage(prerender_page_activation_params) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.PageBroadcast_ActivatePrerenderedPage_ParamsSpec,
      blink.mojom.PageBroadcast_ActivatePrerenderedPage_ResponseParamsSpec,
      [prerender_page_activation_params],
      false);
  }

  updateWebPreferences(preferences) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.PageBroadcast_UpdateWebPreferences_ParamsSpec,
      null,
      [preferences],
      false);
  }

  updateRendererPreferences(preferences) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.PageBroadcast_UpdateRendererPreferences_ParamsSpec,
      null,
      [preferences],
      false);
  }

  setHistoryIndexAndLength(index, length) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.PageBroadcast_SetHistoryIndexAndLength_ParamsSpec,
      null,
      [index, length],
      false);
  }

  setPageBaseBackgroundColor(color) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.PageBroadcast_SetPageBaseBackgroundColor_ParamsSpec,
      null,
      [color],
      false);
  }

  createRemoteMainFrame(token, opener_frame_token, replication_state, is_loading, devtools_frame_token, navigation_metrics_token, remote_frame_interfaces, remote_main_frame_interfaces) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.PageBroadcast_CreateRemoteMainFrame_ParamsSpec,
      null,
      [token, opener_frame_token, replication_state, is_loading, devtools_frame_token, navigation_metrics_token, remote_frame_interfaces, remote_main_frame_interfaces],
      false);
  }

  updatePageBrowsingContextGroup(browsing_context_group_token) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.PageBroadcast_UpdatePageBrowsingContextGroup_ParamsSpec,
      null,
      [browsing_context_group_token],
      false);
  }

  setPageAttributionSupport(support) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      blink.mojom.PageBroadcast_SetPageAttributionSupport_ParamsSpec,
      null,
      [support],
      false);
  }

  updateColorProviders(color_provider_colors) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      blink.mojom.PageBroadcast_UpdateColorProviders_ParamsSpec,
      null,
      [color_provider_colors],
      false);
  }

  setSupportsDraggableRegions(supports_draggable_regions) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      blink.mojom.PageBroadcast_SetSupportsDraggableRegions_ParamsSpec,
      null,
      [supports_draggable_regions],
      false);
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

blink.mojom.PageBroadcastReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
    this.ordinalMap.set(9, 9); // Default ordinal 9 -> Index 9
    this.ordinalMap.set(10, 10); // Default ordinal 10 -> Index 10
    this.ordinalMap.set(11, 11); // Default ordinal 11 -> Index 11
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: SetPageLifecycleState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.PageBroadcast_SetPageLifecycleState_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPageLifecycleState (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: AudioStateChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.PageBroadcast_AudioStateChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AudioStateChanged (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: ActivatePrerenderedPage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.PageBroadcast_ActivatePrerenderedPage_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ActivatePrerenderedPage (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: UpdateWebPreferences
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.PageBroadcast_UpdateWebPreferences_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateWebPreferences (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: UpdateRendererPreferences
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.PageBroadcast_UpdateRendererPreferences_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateRendererPreferences (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: SetHistoryIndexAndLength
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.PageBroadcast_SetHistoryIndexAndLength_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetHistoryIndexAndLength (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: SetPageBaseBackgroundColor
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.PageBroadcast_SetPageBaseBackgroundColor_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPageBaseBackgroundColor (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: CreateRemoteMainFrame
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.PageBroadcast_CreateRemoteMainFrame_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateRemoteMainFrame (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: UpdatePageBrowsingContextGroup
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.PageBroadcast_UpdatePageBrowsingContextGroup_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdatePageBrowsingContextGroup (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: SetPageAttributionSupport
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.PageBroadcast_SetPageAttributionSupport_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPageAttributionSupport (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: UpdateColorProviders
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.PageBroadcast_UpdateColorProviders_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateColorProviders (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: SetSupportsDraggableRegions
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.PageBroadcast_SetSupportsDraggableRegions_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetSupportsDraggableRegions (11)');
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
          const params = decoder.decodeStruct(blink.mojom.PageBroadcast_SetPageLifecycleState_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setPageLifecycleState');
          const result = this.impl.setPageLifecycleState(params.state, params.page_restore_params);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.PageBroadcast_SetPageLifecycleState_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.PageBroadcast_AudioStateChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.audioStateChanged');
          const result = this.impl.audioStateChanged(params.is_audio_playing);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.PageBroadcast_ActivatePrerenderedPage_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.activatePrerenderedPage');
          const result = this.impl.activatePrerenderedPage(params.prerender_page_activation_params);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.PageBroadcast_ActivatePrerenderedPage_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.PageBroadcast_UpdateWebPreferences_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.updateWebPreferences');
          const result = this.impl.updateWebPreferences(params.preferences);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.PageBroadcast_UpdateRendererPreferences_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.updateRendererPreferences');
          const result = this.impl.updateRendererPreferences(params.preferences);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.PageBroadcast_SetHistoryIndexAndLength_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setHistoryIndexAndLength');
          const result = this.impl.setHistoryIndexAndLength(params.index, params.length);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.PageBroadcast_SetPageBaseBackgroundColor_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setPageBaseBackgroundColor');
          const result = this.impl.setPageBaseBackgroundColor(params.color);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.PageBroadcast_CreateRemoteMainFrame_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createRemoteMainFrame');
          const result = this.impl.createRemoteMainFrame(params.token, params.opener_frame_token, params.replication_state, params.is_loading, params.devtools_frame_token, params.navigation_metrics_token, params.remote_frame_interfaces, params.remote_main_frame_interfaces);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.PageBroadcast_UpdatePageBrowsingContextGroup_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.updatePageBrowsingContextGroup');
          const result = this.impl.updatePageBrowsingContextGroup(params.browsing_context_group_token);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.PageBroadcast_SetPageAttributionSupport_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setPageAttributionSupport');
          const result = this.impl.setPageAttributionSupport(params.support);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.PageBroadcast_UpdateColorProviders_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.updateColorProviders');
          const result = this.impl.updateColorProviders(params.color_provider_colors);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.PageBroadcast_SetSupportsDraggableRegions_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setSupportsDraggableRegions');
          const result = this.impl.setSupportsDraggableRegions(params.supports_draggable_regions);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.PageBroadcastReceiver = blink.mojom.PageBroadcastReceiver;

blink.mojom.PageBroadcastPtr = blink.mojom.PageBroadcastRemote;
blink.mojom.PageBroadcastRequest = blink.mojom.PageBroadcastPendingReceiver;

