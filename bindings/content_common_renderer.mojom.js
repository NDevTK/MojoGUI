// Auto-generated MojoJS binding
// Source: chromium_src/content/common/renderer.mojom
// Module: content.mojom

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
  createAgentSchedulingGroup(bootstrap) {
    return this.$.createAgentSchedulingGroup(bootstrap);
  }
  createAssociatedAgentSchedulingGroup(agent_scheduling_group) {
    return this.$.createAssociatedAgentSchedulingGroup(agent_scheduling_group);
  }
  transferSharedLastForegroundTime(last_foreground_time_region) {
    return this.$.transferSharedLastForegroundTime(last_foreground_time_region);
  }
  onNetworkConnectionChanged(connection_type, max_bandwidth_mbps) {
    return this.$.onNetworkConnectionChanged(connection_type, max_bandwidth_mbps);
  }
  onNetworkQualityChanged(effective_connection_type, http_rtt, transport_rtt, bandwidth_kbps) {
    return this.$.onNetworkQualityChanged(effective_connection_type, http_rtt, transport_rtt, bandwidth_kbps);
  }
  setWebKitSharedTimersSuspended(suspend) {
    return this.$.setWebKitSharedTimersSuspended(suspend);
  }
  updateScrollbarTheme(params) {
    return this.$.updateScrollbarTheme(params);
  }
  onSystemColorsChanged(aqua_color_variant) {
    return this.$.onSystemColorsChanged(aqua_color_variant);
  }
  updateSystemColorInfo(params) {
    return this.$.updateSystemColorInfo(params);
  }
  purgePluginListCache() {
    return this.$.purgePluginListCache();
  }
  purgeResourceCache() {
    return this.$.purgeResourceCache();
  }
  setProcessState(process_priority, visible_state) {
    return this.$.setProcessState(process_priority, visible_state);
  }
  setIsLockedToSite() {
    return this.$.setIsLockedToSite();
  }
  writeClangProfilingProfile() {
    return this.$.writeClangProfilingProfile();
  }
  setIsCrossOriginIsolated(value) {
    return this.$.setIsCrossOriginIsolated(value);
  }
  setIsWebSecurityDisabled(value) {
    return this.$.setIsWebSecurityDisabled(value);
  }
  setIsIsolatedContext(value) {
    return this.$.setIsIsolatedContext(value);
  }
  setWebUIResourceUrlToCodeCacheMap(resource_map) {
    return this.$.setWebUIResourceUrlToCodeCacheMap(resource_map);
  }
  initializeRenderer(user_agent, metadata, cors_exempt_header_list, origin_trials_settings, cpu_performance_tier, trace_id) {
    return this.$.initializeRenderer(user_agent, metadata, cors_exempt_header_list, origin_trials_settings, cpu_performance_tier, trace_id);
  }
};

content.mojom.RendererRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Renderer', [
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
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  createAgentSchedulingGroup(bootstrap) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      content.mojom.Renderer_CreateAgentSchedulingGroup_ParamsSpec,
      null,
      [bootstrap],
      false);
  }

  createAssociatedAgentSchedulingGroup(agent_scheduling_group) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      content.mojom.Renderer_CreateAssociatedAgentSchedulingGroup_ParamsSpec,
      null,
      [agent_scheduling_group],
      false);
  }

  transferSharedLastForegroundTime(last_foreground_time_region) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      content.mojom.Renderer_TransferSharedLastForegroundTime_ParamsSpec,
      null,
      [last_foreground_time_region],
      false);
  }

  onNetworkConnectionChanged(connection_type, max_bandwidth_mbps) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      content.mojom.Renderer_OnNetworkConnectionChanged_ParamsSpec,
      null,
      [connection_type, max_bandwidth_mbps],
      false);
  }

  onNetworkQualityChanged(effective_connection_type, http_rtt, transport_rtt, bandwidth_kbps) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      content.mojom.Renderer_OnNetworkQualityChanged_ParamsSpec,
      null,
      [effective_connection_type, http_rtt, transport_rtt, bandwidth_kbps],
      false);
  }

  setWebKitSharedTimersSuspended(suspend) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      content.mojom.Renderer_SetWebKitSharedTimersSuspended_ParamsSpec,
      null,
      [suspend],
      false);
  }

  updateScrollbarTheme(params) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      content.mojom.Renderer_UpdateScrollbarTheme_ParamsSpec,
      null,
      [params],
      false);
  }

  onSystemColorsChanged(aqua_color_variant) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      content.mojom.Renderer_OnSystemColorsChanged_ParamsSpec,
      null,
      [aqua_color_variant],
      false);
  }

  updateSystemColorInfo(params) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      content.mojom.Renderer_UpdateSystemColorInfo_ParamsSpec,
      null,
      [params],
      false);
  }

  purgePluginListCache() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      content.mojom.Renderer_PurgePluginListCache_ParamsSpec,
      null,
      [],
      false);
  }

  purgeResourceCache() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      content.mojom.Renderer_PurgeResourceCache_ParamsSpec,
      content.mojom.Renderer_PurgeResourceCache_ResponseParamsSpec,
      [],
      false);
  }

  setProcessState(process_priority, visible_state) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      content.mojom.Renderer_SetProcessState_ParamsSpec,
      null,
      [process_priority, visible_state],
      false);
  }

  setIsLockedToSite() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      content.mojom.Renderer_SetIsLockedToSite_ParamsSpec,
      null,
      [],
      false);
  }

  writeClangProfilingProfile() {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      content.mojom.Renderer_WriteClangProfilingProfile_ParamsSpec,
      content.mojom.Renderer_WriteClangProfilingProfile_ResponseParamsSpec,
      [],
      false);
  }

  setIsCrossOriginIsolated(value) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      content.mojom.Renderer_SetIsCrossOriginIsolated_ParamsSpec,
      null,
      [value],
      false);
  }

  setIsWebSecurityDisabled(value) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      content.mojom.Renderer_SetIsWebSecurityDisabled_ParamsSpec,
      null,
      [value],
      false);
  }

  setIsIsolatedContext(value) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      content.mojom.Renderer_SetIsIsolatedContext_ParamsSpec,
      null,
      [value],
      false);
  }

  setWebUIResourceUrlToCodeCacheMap(resource_map) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      content.mojom.Renderer_SetWebUIResourceUrlToCodeCacheMap_ParamsSpec,
      null,
      [resource_map],
      false);
  }

  initializeRenderer(user_agent, metadata, cors_exempt_header_list, origin_trials_settings, cpu_performance_tier, trace_id) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('Renderer', [
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(content.mojom.Renderer_CreateAgentSchedulingGroup_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.Renderer_CreateAssociatedAgentSchedulingGroup_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.Renderer_TransferSharedLastForegroundTime_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.Renderer_OnNetworkConnectionChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.Renderer_OnNetworkQualityChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.Renderer_SetWebKitSharedTimersSuspended_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.Renderer_UpdateScrollbarTheme_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.Renderer_OnSystemColorsChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.Renderer_UpdateSystemColorInfo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.Renderer_PurgePluginListCache_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.Renderer_PurgeResourceCache_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.Renderer_SetProcessState_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.Renderer_SetIsLockedToSite_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.Renderer_WriteClangProfilingProfile_ParamsSpec);
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.Renderer_SetIsCrossOriginIsolated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.Renderer_SetIsWebSecurityDisabled_ParamsSpec);
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.Renderer_SetIsIsolatedContext_ParamsSpec);
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.Renderer_SetWebUIResourceUrlToCodeCacheMap_ParamsSpec);
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.Renderer_InitializeRenderer_ParamsSpec);
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.Renderer_CreateAgentSchedulingGroup_ParamsSpec.$.structSpec);
          const result = this.impl.createAgentSchedulingGroup(params.bootstrap);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.Renderer_CreateAssociatedAgentSchedulingGroup_ParamsSpec.$.structSpec);
          const result = this.impl.createAssociatedAgentSchedulingGroup(params.agent_scheduling_group);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.Renderer_TransferSharedLastForegroundTime_ParamsSpec.$.structSpec);
          const result = this.impl.transferSharedLastForegroundTime(params.last_foreground_time_region);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.Renderer_OnNetworkConnectionChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onNetworkConnectionChanged(params.connection_type, params.max_bandwidth_mbps);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.Renderer_OnNetworkQualityChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onNetworkQualityChanged(params.effective_connection_type, params.http_rtt, params.transport_rtt, params.bandwidth_kbps);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.Renderer_SetWebKitSharedTimersSuspended_ParamsSpec.$.structSpec);
          const result = this.impl.setWebKitSharedTimersSuspended(params.suspend);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.Renderer_UpdateScrollbarTheme_ParamsSpec.$.structSpec);
          const result = this.impl.updateScrollbarTheme(params.params);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.Renderer_OnSystemColorsChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onSystemColorsChanged(params.aqua_color_variant);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.Renderer_UpdateSystemColorInfo_ParamsSpec.$.structSpec);
          const result = this.impl.updateSystemColorInfo(params.params);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.Renderer_PurgePluginListCache_ParamsSpec.$.structSpec);
          const result = this.impl.purgePluginListCache();
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.Renderer_PurgeResourceCache_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(content.mojom.Renderer_SetProcessState_ParamsSpec.$.structSpec);
          const result = this.impl.setProcessState(params.process_priority, params.visible_state);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.Renderer_SetIsLockedToSite_ParamsSpec.$.structSpec);
          const result = this.impl.setIsLockedToSite();
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.Renderer_WriteClangProfilingProfile_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(content.mojom.Renderer_SetIsCrossOriginIsolated_ParamsSpec.$.structSpec);
          const result = this.impl.setIsCrossOriginIsolated(params.value);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.Renderer_SetIsWebSecurityDisabled_ParamsSpec.$.structSpec);
          const result = this.impl.setIsWebSecurityDisabled(params.value);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.Renderer_SetIsIsolatedContext_ParamsSpec.$.structSpec);
          const result = this.impl.setIsIsolatedContext(params.value);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.Renderer_SetWebUIResourceUrlToCodeCacheMap_ParamsSpec.$.structSpec);
          const result = this.impl.setWebUIResourceUrlToCodeCacheMap(params.resource_map);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.Renderer_InitializeRenderer_ParamsSpec.$.structSpec);
          const result = this.impl.initializeRenderer(params.user_agent, params.metadata, params.cors_exempt_header_list, params.origin_trials_settings, params.cpu_performance_tier, params.trace_id);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

content.mojom.RendererReceiver = content.mojom.RendererReceiver;

content.mojom.RendererPtr = content.mojom.RendererRemote;
content.mojom.RendererRequest = content.mojom.RendererPendingReceiver;

