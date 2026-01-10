// Auto-generated MojoJS binding
// Source: chromium_src/content/common/renderer.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};
var IPC = IPC || {};
var mojo_base = mojo_base || {};
var network = network || {};
var blink = blink || {};
var url = url || {};

content.mojom.RenderProcessVisibleStateSpec = { $: mojo.internal.Enum() };
content.mojom.UpdateScrollbarThemeParamsSpec = { $: {} };
content.mojom.UpdateSystemColorInfoParamsSpec = { $: {} };
content.mojom.Renderer = {};
content.mojom.Renderer.$interfaceName = 'content.mojom.Renderer';
content.mojom.Renderer_CreateAgentSchedulingGroup_ParamsSpec = { $: {} };
content.mojom.Renderer_CreateAssociatedAgentSchedulingGroup_ParamsSpec = { $: {} };
content.mojom.Renderer_TransferSharedLastForegroundTime_ParamsSpec = { $: {} };
content.mojom.Renderer_OnNetworkConnectionChanged_ParamsSpec = { $: {} };
content.mojom.Renderer_OnNetworkQualityChanged_ParamsSpec = { $: {} };
content.mojom.Renderer_SetWebKitSharedTimersSuspended_ParamsSpec = { $: {} };
content.mojom.Renderer_UpdateScrollbarTheme_ParamsSpec = { $: {} };
content.mojom.Renderer_OnSystemColorsChanged_ParamsSpec = { $: {} };
content.mojom.Renderer_UpdateSystemColorInfo_ParamsSpec = { $: {} };
content.mojom.Renderer_PurgePluginListCache_ParamsSpec = { $: {} };
content.mojom.Renderer_PurgeResourceCache_ParamsSpec = { $: {} };
content.mojom.Renderer_PurgeResourceCache_ResponseParamsSpec = { $: {} };
content.mojom.Renderer_SetProcessState_ParamsSpec = { $: {} };
content.mojom.Renderer_SetIsLockedToSite_ParamsSpec = { $: {} };
content.mojom.Renderer_WriteClangProfilingProfile_ParamsSpec = { $: {} };
content.mojom.Renderer_WriteClangProfilingProfile_ResponseParamsSpec = { $: {} };
content.mojom.Renderer_SetIsCrossOriginIsolated_ParamsSpec = { $: {} };
content.mojom.Renderer_SetIsWebSecurityDisabled_ParamsSpec = { $: {} };
content.mojom.Renderer_SetIsIsolatedContext_ParamsSpec = { $: {} };
content.mojom.Renderer_SetWebUIResourceUrlToCodeCacheMap_ParamsSpec = { $: {} };
content.mojom.Renderer_InitializeRenderer_ParamsSpec = { $: {} };

// Enum: RenderProcessVisibleState
content.mojom.RenderProcessVisibleState = {
  kVisible: 0,
  kHidden: 1,
};

// Struct: UpdateScrollbarThemeParams
mojo.internal.Struct(
    content.mojom.UpdateScrollbarThemeParamsSpec, 'content.mojom.UpdateScrollbarThemeParams', [
      mojo.internal.StructField('preferred_scroller_style', 0, 0, content.mojom.ScrollerStyleSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('initial_button_delay', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('autoscroll_button_delay', 12, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('has_initial_button_delay', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_autoscroll_button_delay', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('jump_on_track_click', 16, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('redraw', 16, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('scroll_view_rubber_banding', 16, 4, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: UpdateSystemColorInfoParams
mojo.internal.Struct(
    content.mojom.UpdateSystemColorInfoParamsSpec, 'content.mojom.UpdateSystemColorInfoParams', [
      mojo.internal.StructField('accent_color_$value', 0, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'accent_color_$flag', originalFieldName: 'accent_color' }),
      mojo.internal.StructField('accent_color_$flag', 4, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'accent_color_$value', originalFieldName: 'accent_color' }),
    ],
    [[0, 16]]);

// Interface: Renderer
mojo.internal.Struct(
    content.mojom.Renderer_CreateAgentSchedulingGroup_ParamsSpec, 'content.mojom.Renderer_CreateAgentSchedulingGroup_Params', [
      mojo.internal.StructField('bootstrap', 0, 0, mojo.internal.InterfaceRequest(IPC.mojom.ChannelBootstrapRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.Renderer_CreateAssociatedAgentSchedulingGroup_ParamsSpec, 'content.mojom.Renderer_CreateAssociatedAgentSchedulingGroup_Params', [
      mojo.internal.StructField('agent_scheduling_group', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.Renderer_TransferSharedLastForegroundTime_ParamsSpec, 'content.mojom.Renderer_TransferSharedLastForegroundTime_Params', [
      mojo.internal.StructField('last_foreground_time_region', 0, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.Renderer_OnNetworkConnectionChanged_ParamsSpec, 'content.mojom.Renderer_OnNetworkConnectionChanged_Params', [
      mojo.internal.StructField('connection_type', 0, 0, content.mojom.NetworkConnectionTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('max_bandwidth_mbps', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    content.mojom.Renderer_OnNetworkQualityChanged_ParamsSpec, 'content.mojom.Renderer_OnNetworkQualityChanged_Params', [
      mojo.internal.StructField('effective_connection_type', 0, 0, network.mojom.EffectiveConnectionTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('http_rtt', 8, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('transport_rtt', 16, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('bandwidth_kbps', 24, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    content.mojom.Renderer_SetWebKitSharedTimersSuspended_ParamsSpec, 'content.mojom.Renderer_SetWebKitSharedTimersSuspended_Params', [
      mojo.internal.StructField('suspend', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.Renderer_UpdateScrollbarTheme_ParamsSpec, 'content.mojom.Renderer_UpdateScrollbarTheme_Params', [
      mojo.internal.StructField('params', 0, 0, content.mojom.UpdateScrollbarThemeParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.Renderer_OnSystemColorsChanged_ParamsSpec, 'content.mojom.Renderer_OnSystemColorsChanged_Params', [
      mojo.internal.StructField('aqua_color_variant', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.Renderer_UpdateSystemColorInfo_ParamsSpec, 'content.mojom.Renderer_UpdateSystemColorInfo_Params', [
      mojo.internal.StructField('params', 0, 0, content.mojom.UpdateSystemColorInfoParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.Renderer_PurgePluginListCache_ParamsSpec, 'content.mojom.Renderer_PurgePluginListCache_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.Renderer_PurgeResourceCache_ParamsSpec, 'content.mojom.Renderer_PurgeResourceCache_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.Renderer_PurgeResourceCache_ResponseParamsSpec, 'content.mojom.Renderer_PurgeResourceCache_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.Renderer_SetProcessState_ParamsSpec, 'content.mojom.Renderer_SetProcessState_Params', [
      mojo.internal.StructField('process_priority', 0, 0, mojo_base.mojom.ProcessPrioritySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('visible_state', 8, 0, content.mojom.RenderProcessVisibleStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    content.mojom.Renderer_SetIsLockedToSite_ParamsSpec, 'content.mojom.Renderer_SetIsLockedToSite_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.Renderer_WriteClangProfilingProfile_ParamsSpec, 'content.mojom.Renderer_WriteClangProfilingProfile_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.Renderer_WriteClangProfilingProfile_ResponseParamsSpec, 'content.mojom.Renderer_WriteClangProfilingProfile_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.Renderer_SetIsCrossOriginIsolated_ParamsSpec, 'content.mojom.Renderer_SetIsCrossOriginIsolated_Params', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.Renderer_SetIsWebSecurityDisabled_ParamsSpec, 'content.mojom.Renderer_SetIsWebSecurityDisabled_Params', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.Renderer_SetIsIsolatedContext_ParamsSpec, 'content.mojom.Renderer_SetIsIsolatedContext_Params', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.Renderer_SetWebUIResourceUrlToCodeCacheMap_ParamsSpec, 'content.mojom.Renderer_SetWebUIResourceUrlToCodeCacheMap_Params', [
      mojo.internal.StructField('resource_map', 0, 0, mojo.internal.Map(url.mojom.UrlSpec.$, mojo.internal.Int32, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.Renderer_InitializeRenderer_ParamsSpec, 'content.mojom.Renderer_InitializeRenderer_Params', [
      mojo.internal.StructField('user_agent', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('metadata', 8, 0, blink.mojom.UserAgentMetadataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('cors_exempt_header_list', 16, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('origin_trials_settings', 24, 0, blink.mojom.OriginTrialsSettingsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('cpu_performance_tier', 32, 0, blink.mojom.PerformanceTierSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('trace_id', 40, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 56]]);

content.mojom.RendererPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.RendererRemote = class {
  static get $interfaceName() {
    return 'content.mojom.Renderer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.RendererPendingReceiver,
      handle);
    this.$ = new content.mojom.RendererRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.RendererRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createAgentSchedulingGroup(bootstrap) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.Renderer_CreateAgentSchedulingGroup_ParamsSpec,
      null,
      [bootstrap],
      false);
  }

  createAssociatedAgentSchedulingGroup(agent_scheduling_group) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content.mojom.Renderer_CreateAssociatedAgentSchedulingGroup_ParamsSpec,
      null,
      [agent_scheduling_group],
      false);
  }

  transferSharedLastForegroundTime(last_foreground_time_region) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      content.mojom.Renderer_TransferSharedLastForegroundTime_ParamsSpec,
      null,
      [last_foreground_time_region],
      false);
  }

  onNetworkConnectionChanged(connection_type, max_bandwidth_mbps) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      content.mojom.Renderer_OnNetworkConnectionChanged_ParamsSpec,
      null,
      [connection_type, max_bandwidth_mbps],
      false);
  }

  onNetworkQualityChanged(effective_connection_type, http_rtt, transport_rtt, bandwidth_kbps) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      content.mojom.Renderer_OnNetworkQualityChanged_ParamsSpec,
      null,
      [effective_connection_type, http_rtt, transport_rtt, bandwidth_kbps],
      false);
  }

  setWebKitSharedTimersSuspended(suspend) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      content.mojom.Renderer_SetWebKitSharedTimersSuspended_ParamsSpec,
      null,
      [suspend],
      false);
  }

  updateScrollbarTheme(params) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      content.mojom.Renderer_UpdateScrollbarTheme_ParamsSpec,
      null,
      [params],
      false);
  }

  onSystemColorsChanged(aqua_color_variant) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      content.mojom.Renderer_OnSystemColorsChanged_ParamsSpec,
      null,
      [aqua_color_variant],
      false);
  }

  updateSystemColorInfo(params) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      content.mojom.Renderer_UpdateSystemColorInfo_ParamsSpec,
      null,
      [params],
      false);
  }

  purgePluginListCache() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      content.mojom.Renderer_PurgePluginListCache_ParamsSpec,
      null,
      [],
      false);
  }

  purgeResourceCache() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      content.mojom.Renderer_PurgeResourceCache_ParamsSpec,
      content.mojom.Renderer_PurgeResourceCache_ResponseParamsSpec,
      [],
      false);
  }

  setProcessState(process_priority, visible_state) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      content.mojom.Renderer_SetProcessState_ParamsSpec,
      null,
      [process_priority, visible_state],
      false);
  }

  setIsLockedToSite() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      content.mojom.Renderer_SetIsLockedToSite_ParamsSpec,
      null,
      [],
      false);
  }

  writeClangProfilingProfile() {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      content.mojom.Renderer_WriteClangProfilingProfile_ParamsSpec,
      content.mojom.Renderer_WriteClangProfilingProfile_ResponseParamsSpec,
      [],
      false);
  }

  setIsCrossOriginIsolated(value) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      content.mojom.Renderer_SetIsCrossOriginIsolated_ParamsSpec,
      null,
      [value],
      false);
  }

  setIsWebSecurityDisabled(value) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      content.mojom.Renderer_SetIsWebSecurityDisabled_ParamsSpec,
      null,
      [value],
      false);
  }

  setIsIsolatedContext(value) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      content.mojom.Renderer_SetIsIsolatedContext_ParamsSpec,
      null,
      [value],
      false);
  }

  setWebUIResourceUrlToCodeCacheMap(resource_map) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      content.mojom.Renderer_SetWebUIResourceUrlToCodeCacheMap_ParamsSpec,
      null,
      [resource_map],
      false);
  }

  initializeRenderer(user_agent, metadata, cors_exempt_header_list, origin_trials_settings, cpu_performance_tier, trace_id) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      content.mojom.Renderer_InitializeRenderer_ParamsSpec,
      null,
      [user_agent, metadata, cors_exempt_header_list, origin_trials_settings, cpu_performance_tier, trace_id],
      false);
  }

};

content.mojom.Renderer.getRemote = function() {
  let remote = new content.mojom.RendererRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.Renderer',
    'context');
  return remote.$;
};

content.mojom.RendererReceiver = class {
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
    this.ordinalMap.set(12, 12); // Default ordinal 12 -> Index 12
    this.ordinalMap.set(13, 13); // Default ordinal 13 -> Index 13
    this.ordinalMap.set(14, 14); // Default ordinal 14 -> Index 14
    this.ordinalMap.set(15, 15); // Default ordinal 15 -> Index 15
    this.ordinalMap.set(16, 16); // Default ordinal 16 -> Index 16
    this.ordinalMap.set(17, 17); // Default ordinal 17 -> Index 17
    this.ordinalMap.set(18, 18); // Default ordinal 18 -> Index 18
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
        
        // Try Method 0: CreateAgentSchedulingGroup
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content.mojom.Renderer_CreateAgentSchedulingGroup_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateAgentSchedulingGroup (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: CreateAssociatedAgentSchedulingGroup
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content.mojom.Renderer_CreateAssociatedAgentSchedulingGroup_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateAssociatedAgentSchedulingGroup (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: TransferSharedLastForegroundTime
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content.mojom.Renderer_TransferSharedLastForegroundTime_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TransferSharedLastForegroundTime (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnNetworkConnectionChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content.mojom.Renderer_OnNetworkConnectionChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnNetworkConnectionChanged (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OnNetworkQualityChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content.mojom.Renderer_OnNetworkQualityChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnNetworkQualityChanged (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: SetWebKitSharedTimersSuspended
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content.mojom.Renderer_SetWebKitSharedTimersSuspended_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetWebKitSharedTimersSuspended (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: UpdateScrollbarTheme
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content.mojom.Renderer_UpdateScrollbarTheme_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateScrollbarTheme (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: OnSystemColorsChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content.mojom.Renderer_OnSystemColorsChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSystemColorsChanged (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: UpdateSystemColorInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content.mojom.Renderer_UpdateSystemColorInfo_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateSystemColorInfo (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: PurgePluginListCache
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content.mojom.Renderer_PurgePluginListCache_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PurgePluginListCache (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: PurgeResourceCache
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content.mojom.Renderer_PurgeResourceCache_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PurgeResourceCache (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: SetProcessState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content.mojom.Renderer_SetProcessState_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetProcessState (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: SetIsLockedToSite
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content.mojom.Renderer_SetIsLockedToSite_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetIsLockedToSite (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: WriteClangProfilingProfile
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content.mojom.Renderer_WriteClangProfilingProfile_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WriteClangProfilingProfile (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: SetIsCrossOriginIsolated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content.mojom.Renderer_SetIsCrossOriginIsolated_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetIsCrossOriginIsolated (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: SetIsWebSecurityDisabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content.mojom.Renderer_SetIsWebSecurityDisabled_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetIsWebSecurityDisabled (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: SetIsIsolatedContext
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content.mojom.Renderer_SetIsIsolatedContext_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetIsIsolatedContext (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: SetWebUIResourceUrlToCodeCacheMap
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content.mojom.Renderer_SetWebUIResourceUrlToCodeCacheMap_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetWebUIResourceUrlToCodeCacheMap (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: InitializeRenderer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content.mojom.Renderer_InitializeRenderer_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InitializeRenderer (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
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
          const params = decoder.decodeStruct(content.mojom.Renderer_CreateAgentSchedulingGroup_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createAgentSchedulingGroup');
          const result = this.impl.createAgentSchedulingGroup(params.bootstrap);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.Renderer_CreateAssociatedAgentSchedulingGroup_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createAssociatedAgentSchedulingGroup');
          const result = this.impl.createAssociatedAgentSchedulingGroup(params.agent_scheduling_group);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.Renderer_TransferSharedLastForegroundTime_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.transferSharedLastForegroundTime');
          const result = this.impl.transferSharedLastForegroundTime(params.last_foreground_time_region);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.Renderer_OnNetworkConnectionChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onNetworkConnectionChanged');
          const result = this.impl.onNetworkConnectionChanged(params.connection_type, params.max_bandwidth_mbps);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.Renderer_OnNetworkQualityChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onNetworkQualityChanged');
          const result = this.impl.onNetworkQualityChanged(params.effective_connection_type, params.http_rtt, params.transport_rtt, params.bandwidth_kbps);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.Renderer_SetWebKitSharedTimersSuspended_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setWebKitSharedTimersSuspended');
          const result = this.impl.setWebKitSharedTimersSuspended(params.suspend);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.Renderer_UpdateScrollbarTheme_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.updateScrollbarTheme');
          const result = this.impl.updateScrollbarTheme(params.params);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.Renderer_OnSystemColorsChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onSystemColorsChanged');
          const result = this.impl.onSystemColorsChanged(params.aqua_color_variant);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.Renderer_UpdateSystemColorInfo_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.updateSystemColorInfo');
          const result = this.impl.updateSystemColorInfo(params.params);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.Renderer_PurgePluginListCache_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.purgePluginListCache');
          const result = this.impl.purgePluginListCache();
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.Renderer_PurgeResourceCache_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.purgeResourceCache');
          const result = this.impl.purgeResourceCache();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.Renderer_PurgeResourceCache_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.Renderer_SetProcessState_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setProcessState');
          const result = this.impl.setProcessState(params.process_priority, params.visible_state);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.Renderer_SetIsLockedToSite_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setIsLockedToSite');
          const result = this.impl.setIsLockedToSite();
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.Renderer_WriteClangProfilingProfile_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.writeClangProfilingProfile');
          const result = this.impl.writeClangProfilingProfile();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.Renderer_WriteClangProfilingProfile_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.Renderer_SetIsCrossOriginIsolated_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setIsCrossOriginIsolated');
          const result = this.impl.setIsCrossOriginIsolated(params.value);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.Renderer_SetIsWebSecurityDisabled_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setIsWebSecurityDisabled');
          const result = this.impl.setIsWebSecurityDisabled(params.value);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.Renderer_SetIsIsolatedContext_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setIsIsolatedContext');
          const result = this.impl.setIsIsolatedContext(params.value);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.Renderer_SetWebUIResourceUrlToCodeCacheMap_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setWebUIResourceUrlToCodeCacheMap');
          const result = this.impl.setWebUIResourceUrlToCodeCacheMap(params.resource_map);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.Renderer_InitializeRenderer_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.initializeRenderer');
          const result = this.impl.initializeRenderer(params.user_agent, params.metadata, params.cors_exempt_header_list, params.origin_trials_settings, params.cpu_performance_tier, params.trace_id);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

content.mojom.RendererReceiver = content.mojom.RendererReceiver;

content.mojom.RendererPtr = content.mojom.RendererRemote;
content.mojom.RendererRequest = content.mojom.RendererPendingReceiver;

