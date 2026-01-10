// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/mojom/renderer.mojom
// Module: extensions.mojom

'use strict';

// Module namespace
var extensions = extensions || {};
extensions.mojom = extensions.mojom || {};
var mojo_base = mojo_base || {};

extensions.mojom.ExtensionLoadedParamsSpec = { $: {} };
extensions.mojom.UserScriptWorldInfoSpec = { $: {} };
extensions.mojom.Renderer = {};
extensions.mojom.Renderer.$interfaceName = 'extensions.mojom.Renderer';
extensions.mojom.Renderer_ActivateExtension_ParamsSpec = { $: {} };
extensions.mojom.Renderer_SetActivityLoggingEnabled_ParamsSpec = { $: {} };
extensions.mojom.Renderer_LoadExtensions_ParamsSpec = { $: {} };
extensions.mojom.Renderer_UnloadExtension_ParamsSpec = { $: {} };
extensions.mojom.Renderer_SuspendExtension_ParamsSpec = { $: {} };
extensions.mojom.Renderer_SuspendExtension_ResponseParamsSpec = { $: {} };
extensions.mojom.Renderer_CancelSuspendExtension_ParamsSpec = { $: {} };
extensions.mojom.Renderer_SetDeveloperMode_ParamsSpec = { $: {} };
extensions.mojom.Renderer_SetUserScriptsAllowed_ParamsSpec = { $: {} };
extensions.mojom.Renderer_SetSessionInfo_ParamsSpec = { $: {} };
extensions.mojom.Renderer_SetSystemFont_ParamsSpec = { $: {} };
extensions.mojom.Renderer_SetWebViewPartitionID_ParamsSpec = { $: {} };
extensions.mojom.Renderer_SetScriptingAllowlist_ParamsSpec = { $: {} };
extensions.mojom.Renderer_UpdateUserScriptWorlds_ParamsSpec = { $: {} };
extensions.mojom.Renderer_ClearUserScriptWorldConfig_ParamsSpec = { $: {} };
extensions.mojom.Renderer_ShouldSuspend_ParamsSpec = { $: {} };
extensions.mojom.Renderer_ShouldSuspend_ResponseParamsSpec = { $: {} };
extensions.mojom.Renderer_TransferBlobs_ParamsSpec = { $: {} };
extensions.mojom.Renderer_TransferBlobs_ResponseParamsSpec = { $: {} };
extensions.mojom.Renderer_UpdatePermissions_ParamsSpec = { $: {} };
extensions.mojom.Renderer_UpdateDefaultPolicyHostRestrictions_ParamsSpec = { $: {} };
extensions.mojom.Renderer_UpdateUserHostRestrictions_ParamsSpec = { $: {} };
extensions.mojom.Renderer_UpdateTabSpecificPermissions_ParamsSpec = { $: {} };
extensions.mojom.Renderer_UpdateUserScripts_ParamsSpec = { $: {} };
extensions.mojom.Renderer_ClearTabSpecificPermissions_ParamsSpec = { $: {} };
extensions.mojom.Renderer_WatchPages_ParamsSpec = { $: {} };

// Struct: ExtensionLoadedParams
mojo.internal.Struct(
    extensions.mojom.ExtensionLoadedParamsSpec, 'extensions.mojom.ExtensionLoadedParams', [
      mojo.internal.StructField('manifest', 0, 0, mojo_base.mojom.DictionaryValueSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('location', 8, 0, extensions.mojom.ManifestLocationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('path', 16, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('active_permissions', 24, 0, extensions.mojom.PermissionSetSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('withheld_permissions', 32, 0, extensions.mojom.PermissionSetSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('tab_specific_permissions', 40, 0, mojo.internal.Map(mojo.internal.Int32, extensions.mojom.PermissionSetSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('policy_blocked_hosts', 48, 0, extensions.mojom.URLPatternSetSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('policy_allowed_hosts', 56, 0, extensions.mojom.URLPatternSetSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('id', 64, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('worker_activation_token', 72, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('guid', 80, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('creation_flags', 88, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('uses_default_policy_blocked_allowed_hosts', 92, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('user_scripts_allowed', 92, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 104]]);

// Struct: UserScriptWorldInfo
mojo.internal.Struct(
    extensions.mojom.UserScriptWorldInfoSpec, 'extensions.mojom.UserScriptWorldInfo', [
      mojo.internal.StructField('extension_id', 0, 0, extensions.mojom.ExtensionIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('world_id', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('csp', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('enable_messaging', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: Renderer
mojo.internal.Struct(
    extensions.mojom.Renderer_ActivateExtension_ParamsSpec, 'extensions.mojom.Renderer_ActivateExtension_Params', [
      mojo.internal.StructField('extension_id', 0, 0, extensions.mojom.ExtensionIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    extensions.mojom.Renderer_SetActivityLoggingEnabled_ParamsSpec, 'extensions.mojom.Renderer_SetActivityLoggingEnabled_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    extensions.mojom.Renderer_LoadExtensions_ParamsSpec, 'extensions.mojom.Renderer_LoadExtensions_Params', [
      mojo.internal.StructField('params', 0, 0, mojo.internal.Array(extensions.mojom.ExtensionLoadedParamsSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    extensions.mojom.Renderer_UnloadExtension_ParamsSpec, 'extensions.mojom.Renderer_UnloadExtension_Params', [
      mojo.internal.StructField('extension_id', 0, 0, extensions.mojom.ExtensionIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    extensions.mojom.Renderer_SuspendExtension_ParamsSpec, 'extensions.mojom.Renderer_SuspendExtension_Params', [
      mojo.internal.StructField('extension_id', 0, 0, extensions.mojom.ExtensionIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    extensions.mojom.Renderer_SuspendExtension_ResponseParamsSpec, 'extensions.mojom.Renderer_SuspendExtension_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    extensions.mojom.Renderer_CancelSuspendExtension_ParamsSpec, 'extensions.mojom.Renderer_CancelSuspendExtension_Params', [
      mojo.internal.StructField('extension_id', 0, 0, extensions.mojom.ExtensionIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    extensions.mojom.Renderer_SetDeveloperMode_ParamsSpec, 'extensions.mojom.Renderer_SetDeveloperMode_Params', [
      mojo.internal.StructField('developer_mode_only', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    extensions.mojom.Renderer_SetUserScriptsAllowed_ParamsSpec, 'extensions.mojom.Renderer_SetUserScriptsAllowed_Params', [
      mojo.internal.StructField('extension_id', 0, 0, extensions.mojom.ExtensionIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('allowed', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    extensions.mojom.Renderer_SetSessionInfo_ParamsSpec, 'extensions.mojom.Renderer_SetSessionInfo_Params', [
      mojo.internal.StructField('channel', 0, 0, extensions.mojom.ChannelSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('session', 8, 0, extensions.mojom.FeatureSessionTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    extensions.mojom.Renderer_SetSystemFont_ParamsSpec, 'extensions.mojom.Renderer_SetSystemFont_Params', [
      mojo.internal.StructField('font_family', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('font_size', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    extensions.mojom.Renderer_SetWebViewPartitionID_ParamsSpec, 'extensions.mojom.Renderer_SetWebViewPartitionID_Params', [
      mojo.internal.StructField('partition_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    extensions.mojom.Renderer_SetScriptingAllowlist_ParamsSpec, 'extensions.mojom.Renderer_SetScriptingAllowlist_Params', [
      mojo.internal.StructField('extension_ids', 0, 0, mojo.internal.Array(extensions.mojom.ExtensionIdSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    extensions.mojom.Renderer_UpdateUserScriptWorlds_ParamsSpec, 'extensions.mojom.Renderer_UpdateUserScriptWorlds_Params', [
      mojo.internal.StructField('infos', 0, 0, mojo.internal.Array(extensions.mojom.UserScriptWorldInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    extensions.mojom.Renderer_ClearUserScriptWorldConfig_ParamsSpec, 'extensions.mojom.Renderer_ClearUserScriptWorldConfig_Params', [
      mojo.internal.StructField('extension_id', 0, 0, extensions.mojom.ExtensionIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('world_id', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    extensions.mojom.Renderer_ShouldSuspend_ParamsSpec, 'extensions.mojom.Renderer_ShouldSuspend_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    extensions.mojom.Renderer_ShouldSuspend_ResponseParamsSpec, 'extensions.mojom.Renderer_ShouldSuspend_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    extensions.mojom.Renderer_TransferBlobs_ParamsSpec, 'extensions.mojom.Renderer_TransferBlobs_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    extensions.mojom.Renderer_TransferBlobs_ResponseParamsSpec, 'extensions.mojom.Renderer_TransferBlobs_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    extensions.mojom.Renderer_UpdatePermissions_ParamsSpec, 'extensions.mojom.Renderer_UpdatePermissions_Params', [
      mojo.internal.StructField('extension_id', 0, 0, extensions.mojom.ExtensionIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('active_permissions', 8, 0, extensions.mojom.PermissionSetSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('withheld_permissions', 16, 0, extensions.mojom.PermissionSetSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('policy_blocked_hosts', 24, 0, extensions.mojom.URLPatternSetSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('policy_allowed_hosts', 32, 0, extensions.mojom.URLPatternSetSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('uses_default_policy_host_restrictions', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    extensions.mojom.Renderer_UpdateDefaultPolicyHostRestrictions_ParamsSpec, 'extensions.mojom.Renderer_UpdateDefaultPolicyHostRestrictions_Params', [
      mojo.internal.StructField('default_policy_blocked_hosts', 0, 0, extensions.mojom.URLPatternSetSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('default_policy_allowed_hosts', 8, 0, extensions.mojom.URLPatternSetSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    extensions.mojom.Renderer_UpdateUserHostRestrictions_ParamsSpec, 'extensions.mojom.Renderer_UpdateUserHostRestrictions_Params', [
      mojo.internal.StructField('user_blocked_hosts', 0, 0, extensions.mojom.URLPatternSetSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('user_allowed_hosts', 8, 0, extensions.mojom.URLPatternSetSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    extensions.mojom.Renderer_UpdateTabSpecificPermissions_ParamsSpec, 'extensions.mojom.Renderer_UpdateTabSpecificPermissions_Params', [
      mojo.internal.StructField('extension_id', 0, 0, extensions.mojom.ExtensionIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('new_hosts', 8, 0, extensions.mojom.URLPatternSetSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('tab_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('update_origin_allowlist', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    extensions.mojom.Renderer_UpdateUserScripts_ParamsSpec, 'extensions.mojom.Renderer_UpdateUserScripts_Params', [
      mojo.internal.StructField('region', 0, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('owner', 8, 0, extensions.mojom.HostIDSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    extensions.mojom.Renderer_ClearTabSpecificPermissions_ParamsSpec, 'extensions.mojom.Renderer_ClearTabSpecificPermissions_Params', [
      mojo.internal.StructField('extension_ids', 0, 0, mojo.internal.Array(extensions.mojom.ExtensionIdSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('tab_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('update_origin_allowlist', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    extensions.mojom.Renderer_WatchPages_ParamsSpec, 'extensions.mojom.Renderer_WatchPages_Params', [
      mojo.internal.StructField('css_selectors', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

extensions.mojom.RendererPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

extensions.mojom.RendererRemote = class {
  static get $interfaceName() {
    return 'extensions.mojom.Renderer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      extensions.mojom.RendererPendingReceiver,
      handle);
    this.$ = new extensions.mojom.RendererRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

extensions.mojom.RendererRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  activateExtension(extension_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      extensions.mojom.Renderer_ActivateExtension_ParamsSpec,
      null,
      [extension_id],
      false);
  }

  setActivityLoggingEnabled(enabled) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      extensions.mojom.Renderer_SetActivityLoggingEnabled_ParamsSpec,
      null,
      [enabled],
      false);
  }

  loadExtensions(params) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      extensions.mojom.Renderer_LoadExtensions_ParamsSpec,
      null,
      [params],
      false);
  }

  unloadExtension(extension_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      extensions.mojom.Renderer_UnloadExtension_ParamsSpec,
      null,
      [extension_id],
      false);
  }

  suspendExtension(extension_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      extensions.mojom.Renderer_SuspendExtension_ParamsSpec,
      extensions.mojom.Renderer_SuspendExtension_ResponseParamsSpec,
      [extension_id],
      false);
  }

  cancelSuspendExtension(extension_id) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      extensions.mojom.Renderer_CancelSuspendExtension_ParamsSpec,
      null,
      [extension_id],
      false);
  }

  setDeveloperMode(developer_mode_only) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      extensions.mojom.Renderer_SetDeveloperMode_ParamsSpec,
      null,
      [developer_mode_only],
      false);
  }

  setUserScriptsAllowed(extension_id, allowed) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      extensions.mojom.Renderer_SetUserScriptsAllowed_ParamsSpec,
      null,
      [extension_id, allowed],
      false);
  }

  setSessionInfo(channel, session) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      extensions.mojom.Renderer_SetSessionInfo_ParamsSpec,
      null,
      [channel, session],
      false);
  }

  setSystemFont(font_family, font_size) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      extensions.mojom.Renderer_SetSystemFont_ParamsSpec,
      null,
      [font_family, font_size],
      false);
  }

  setWebViewPartitionID(partition_id) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      extensions.mojom.Renderer_SetWebViewPartitionID_ParamsSpec,
      null,
      [partition_id],
      false);
  }

  setScriptingAllowlist(extension_ids) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      extensions.mojom.Renderer_SetScriptingAllowlist_ParamsSpec,
      null,
      [extension_ids],
      false);
  }

  updateUserScriptWorlds(infos) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      extensions.mojom.Renderer_UpdateUserScriptWorlds_ParamsSpec,
      null,
      [infos],
      false);
  }

  clearUserScriptWorldConfig(extension_id, world_id) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      extensions.mojom.Renderer_ClearUserScriptWorldConfig_ParamsSpec,
      null,
      [extension_id, world_id],
      false);
  }

  shouldSuspend() {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      extensions.mojom.Renderer_ShouldSuspend_ParamsSpec,
      extensions.mojom.Renderer_ShouldSuspend_ResponseParamsSpec,
      [],
      false);
  }

  transferBlobs() {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      extensions.mojom.Renderer_TransferBlobs_ParamsSpec,
      extensions.mojom.Renderer_TransferBlobs_ResponseParamsSpec,
      [],
      false);
  }

  updatePermissions(extension_id, active_permissions, withheld_permissions, policy_blocked_hosts, policy_allowed_hosts, uses_default_policy_host_restrictions) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      extensions.mojom.Renderer_UpdatePermissions_ParamsSpec,
      null,
      [extension_id, active_permissions, withheld_permissions, policy_blocked_hosts, policy_allowed_hosts, uses_default_policy_host_restrictions],
      false);
  }

  updateDefaultPolicyHostRestrictions(default_policy_blocked_hosts, default_policy_allowed_hosts) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      extensions.mojom.Renderer_UpdateDefaultPolicyHostRestrictions_ParamsSpec,
      null,
      [default_policy_blocked_hosts, default_policy_allowed_hosts],
      false);
  }

  updateUserHostRestrictions(user_blocked_hosts, user_allowed_hosts) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      extensions.mojom.Renderer_UpdateUserHostRestrictions_ParamsSpec,
      null,
      [user_blocked_hosts, user_allowed_hosts],
      false);
  }

  updateTabSpecificPermissions(extension_id, new_hosts, tab_id, update_origin_allowlist) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      extensions.mojom.Renderer_UpdateTabSpecificPermissions_ParamsSpec,
      null,
      [extension_id, new_hosts, tab_id, update_origin_allowlist],
      false);
  }

  updateUserScripts(region, owner) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      extensions.mojom.Renderer_UpdateUserScripts_ParamsSpec,
      null,
      [region, owner],
      false);
  }

  clearTabSpecificPermissions(extension_ids, tab_id, update_origin_allowlist) {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      extensions.mojom.Renderer_ClearTabSpecificPermissions_ParamsSpec,
      null,
      [extension_ids, tab_id, update_origin_allowlist],
      false);
  }

  watchPages(css_selectors) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      extensions.mojom.Renderer_WatchPages_ParamsSpec,
      null,
      [css_selectors],
      false);
  }

};

extensions.mojom.Renderer.getRemote = function() {
  let remote = new extensions.mojom.RendererRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'extensions.mojom.Renderer',
    'context');
  return remote.$;
};

extensions.mojom.RendererReceiver = class {
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
    this.ordinalMap.set(19, 19); // Default ordinal 19 -> Index 19
    this.ordinalMap.set(20, 20); // Default ordinal 20 -> Index 20
    this.ordinalMap.set(21, 21); // Default ordinal 21 -> Index 21
    this.ordinalMap.set(22, 22); // Default ordinal 22 -> Index 22
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
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
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: ActivateExtension
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(extensions.mojom.Renderer_ActivateExtension_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ActivateExtension (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetActivityLoggingEnabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(extensions.mojom.Renderer_SetActivityLoggingEnabled_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetActivityLoggingEnabled (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: LoadExtensions
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(extensions.mojom.Renderer_LoadExtensions_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LoadExtensions (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: UnloadExtension
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(extensions.mojom.Renderer_UnloadExtension_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UnloadExtension (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SuspendExtension
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(extensions.mojom.Renderer_SuspendExtension_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SuspendExtension (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: CancelSuspendExtension
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(extensions.mojom.Renderer_CancelSuspendExtension_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CancelSuspendExtension (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: SetDeveloperMode
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(extensions.mojom.Renderer_SetDeveloperMode_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetDeveloperMode (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: SetUserScriptsAllowed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(extensions.mojom.Renderer_SetUserScriptsAllowed_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetUserScriptsAllowed (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: SetSessionInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(extensions.mojom.Renderer_SetSessionInfo_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetSessionInfo (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: SetSystemFont
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(extensions.mojom.Renderer_SetSystemFont_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetSystemFont (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: SetWebViewPartitionID
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(extensions.mojom.Renderer_SetWebViewPartitionID_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetWebViewPartitionID (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: SetScriptingAllowlist
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(extensions.mojom.Renderer_SetScriptingAllowlist_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetScriptingAllowlist (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: UpdateUserScriptWorlds
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(extensions.mojom.Renderer_UpdateUserScriptWorlds_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateUserScriptWorlds (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: ClearUserScriptWorldConfig
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(extensions.mojom.Renderer_ClearUserScriptWorldConfig_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearUserScriptWorldConfig (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: ShouldSuspend
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(extensions.mojom.Renderer_ShouldSuspend_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShouldSuspend (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: TransferBlobs
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(extensions.mojom.Renderer_TransferBlobs_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TransferBlobs (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: UpdatePermissions
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(extensions.mojom.Renderer_UpdatePermissions_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdatePermissions (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: UpdateDefaultPolicyHostRestrictions
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(extensions.mojom.Renderer_UpdateDefaultPolicyHostRestrictions_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateDefaultPolicyHostRestrictions (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: UpdateUserHostRestrictions
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(extensions.mojom.Renderer_UpdateUserHostRestrictions_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateUserHostRestrictions (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
           }
        }
        // Try Method 19: UpdateTabSpecificPermissions
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(extensions.mojom.Renderer_UpdateTabSpecificPermissions_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateTabSpecificPermissions (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 19 failed:', e);
           }
        }
        // Try Method 20: UpdateUserScripts
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(extensions.mojom.Renderer_UpdateUserScripts_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateUserScripts (20)');
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 20 failed:', e);
           }
        }
        // Try Method 21: ClearTabSpecificPermissions
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(extensions.mojom.Renderer_ClearTabSpecificPermissions_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearTabSpecificPermissions (21)');
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 21 failed:', e);
           }
        }
        // Try Method 22: WatchPages
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(extensions.mojom.Renderer_WatchPages_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WatchPages (22)');
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 22 failed:', e);
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
          const params = decoder.decodeStruct(extensions.mojom.Renderer_ActivateExtension_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.activateExtension');
          const result = this.impl.activateExtension(params.extension_id);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(extensions.mojom.Renderer_SetActivityLoggingEnabled_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setActivityLoggingEnabled');
          const result = this.impl.setActivityLoggingEnabled(params.enabled);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(extensions.mojom.Renderer_LoadExtensions_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.loadExtensions');
          const result = this.impl.loadExtensions(params.params);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(extensions.mojom.Renderer_UnloadExtension_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.unloadExtension');
          const result = this.impl.unloadExtension(params.extension_id);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(extensions.mojom.Renderer_SuspendExtension_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.suspendExtension');
          const result = this.impl.suspendExtension(params.extension_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, extensions.mojom.Renderer_SuspendExtension_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(extensions.mojom.Renderer_CancelSuspendExtension_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.cancelSuspendExtension');
          const result = this.impl.cancelSuspendExtension(params.extension_id);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(extensions.mojom.Renderer_SetDeveloperMode_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setDeveloperMode');
          const result = this.impl.setDeveloperMode(params.developer_mode_only);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(extensions.mojom.Renderer_SetUserScriptsAllowed_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setUserScriptsAllowed');
          const result = this.impl.setUserScriptsAllowed(params.extension_id, params.allowed);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(extensions.mojom.Renderer_SetSessionInfo_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setSessionInfo');
          const result = this.impl.setSessionInfo(params.channel, params.session);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(extensions.mojom.Renderer_SetSystemFont_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setSystemFont');
          const result = this.impl.setSystemFont(params.font_family, params.font_size);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(extensions.mojom.Renderer_SetWebViewPartitionID_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setWebViewPartitionID');
          const result = this.impl.setWebViewPartitionID(params.partition_id);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(extensions.mojom.Renderer_SetScriptingAllowlist_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setScriptingAllowlist');
          const result = this.impl.setScriptingAllowlist(params.extension_ids);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(extensions.mojom.Renderer_UpdateUserScriptWorlds_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.updateUserScriptWorlds');
          const result = this.impl.updateUserScriptWorlds(params.infos);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(extensions.mojom.Renderer_ClearUserScriptWorldConfig_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.clearUserScriptWorldConfig');
          const result = this.impl.clearUserScriptWorldConfig(params.extension_id, params.world_id);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(extensions.mojom.Renderer_ShouldSuspend_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.shouldSuspend');
          const result = this.impl.shouldSuspend();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, extensions.mojom.Renderer_ShouldSuspend_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(extensions.mojom.Renderer_TransferBlobs_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.transferBlobs');
          const result = this.impl.transferBlobs();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, extensions.mojom.Renderer_TransferBlobs_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(extensions.mojom.Renderer_UpdatePermissions_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.updatePermissions');
          const result = this.impl.updatePermissions(params.extension_id, params.active_permissions, params.withheld_permissions, params.policy_blocked_hosts, params.policy_allowed_hosts, params.uses_default_policy_host_restrictions);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(extensions.mojom.Renderer_UpdateDefaultPolicyHostRestrictions_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.updateDefaultPolicyHostRestrictions');
          const result = this.impl.updateDefaultPolicyHostRestrictions(params.default_policy_blocked_hosts, params.default_policy_allowed_hosts);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(extensions.mojom.Renderer_UpdateUserHostRestrictions_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.updateUserHostRestrictions');
          const result = this.impl.updateUserHostRestrictions(params.user_blocked_hosts, params.user_allowed_hosts);
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(extensions.mojom.Renderer_UpdateTabSpecificPermissions_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.updateTabSpecificPermissions');
          const result = this.impl.updateTabSpecificPermissions(params.extension_id, params.new_hosts, params.tab_id, params.update_origin_allowlist);
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(extensions.mojom.Renderer_UpdateUserScripts_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.updateUserScripts');
          const result = this.impl.updateUserScripts(params.region, params.owner);
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(extensions.mojom.Renderer_ClearTabSpecificPermissions_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.clearTabSpecificPermissions');
          const result = this.impl.clearTabSpecificPermissions(params.extension_ids, params.tab_id, params.update_origin_allowlist);
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(extensions.mojom.Renderer_WatchPages_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.watchPages');
          const result = this.impl.watchPages(params.css_selectors);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

extensions.mojom.RendererReceiver = extensions.mojom.RendererReceiver;

extensions.mojom.RendererPtr = extensions.mojom.RendererRemote;
extensions.mojom.RendererRequest = extensions.mojom.RendererPendingReceiver;

