// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/mojom/renderer.mojom
// Module: extensions.mojom

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
  activateExtension(extension_id) {
    return this.$.activateExtension(extension_id);
  }
  setActivityLoggingEnabled(enabled) {
    return this.$.setActivityLoggingEnabled(enabled);
  }
  loadExtensions(params) {
    return this.$.loadExtensions(params);
  }
  unloadExtension(extension_id) {
    return this.$.unloadExtension(extension_id);
  }
  suspendExtension(extension_id) {
    return this.$.suspendExtension(extension_id);
  }
  cancelSuspendExtension(extension_id) {
    return this.$.cancelSuspendExtension(extension_id);
  }
  setDeveloperMode(developer_mode_only) {
    return this.$.setDeveloperMode(developer_mode_only);
  }
  setUserScriptsAllowed(extension_id, allowed) {
    return this.$.setUserScriptsAllowed(extension_id, allowed);
  }
  setSessionInfo(channel, session) {
    return this.$.setSessionInfo(channel, session);
  }
  setSystemFont(font_family, font_size) {
    return this.$.setSystemFont(font_family, font_size);
  }
  setWebViewPartitionID(partition_id) {
    return this.$.setWebViewPartitionID(partition_id);
  }
  setScriptingAllowlist(extension_ids) {
    return this.$.setScriptingAllowlist(extension_ids);
  }
  updateUserScriptWorlds(infos) {
    return this.$.updateUserScriptWorlds(infos);
  }
  clearUserScriptWorldConfig(extension_id, world_id) {
    return this.$.clearUserScriptWorldConfig(extension_id, world_id);
  }
  shouldSuspend() {
    return this.$.shouldSuspend();
  }
  transferBlobs() {
    return this.$.transferBlobs();
  }
  updatePermissions(extension_id, active_permissions, withheld_permissions, policy_blocked_hosts, policy_allowed_hosts, uses_default_policy_host_restrictions) {
    return this.$.updatePermissions(extension_id, active_permissions, withheld_permissions, policy_blocked_hosts, policy_allowed_hosts, uses_default_policy_host_restrictions);
  }
  updateDefaultPolicyHostRestrictions(default_policy_blocked_hosts, default_policy_allowed_hosts) {
    return this.$.updateDefaultPolicyHostRestrictions(default_policy_blocked_hosts, default_policy_allowed_hosts);
  }
  updateUserHostRestrictions(user_blocked_hosts, user_allowed_hosts) {
    return this.$.updateUserHostRestrictions(user_blocked_hosts, user_allowed_hosts);
  }
  updateTabSpecificPermissions(extension_id, new_hosts, tab_id, update_origin_allowlist) {
    return this.$.updateTabSpecificPermissions(extension_id, new_hosts, tab_id, update_origin_allowlist);
  }
  updateUserScripts(region, owner) {
    return this.$.updateUserScripts(region, owner);
  }
  clearTabSpecificPermissions(extension_ids, tab_id, update_origin_allowlist) {
    return this.$.clearTabSpecificPermissions(extension_ids, tab_id, update_origin_allowlist);
  }
  watchPages(css_selectors) {
    return this.$.watchPages(css_selectors);
  }
};

extensions.mojom.RendererRemoteCallHandler = class {
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
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  activateExtension(extension_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      extensions.mojom.Renderer_ActivateExtension_ParamsSpec,
      null,
      [extension_id],
      false);
  }

  setActivityLoggingEnabled(enabled) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      extensions.mojom.Renderer_SetActivityLoggingEnabled_ParamsSpec,
      null,
      [enabled],
      false);
  }

  loadExtensions(params) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      extensions.mojom.Renderer_LoadExtensions_ParamsSpec,
      null,
      [params],
      false);
  }

  unloadExtension(extension_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      extensions.mojom.Renderer_UnloadExtension_ParamsSpec,
      null,
      [extension_id],
      false);
  }

  suspendExtension(extension_id) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      extensions.mojom.Renderer_SuspendExtension_ParamsSpec,
      extensions.mojom.Renderer_SuspendExtension_ResponseParamsSpec,
      [extension_id],
      false);
  }

  cancelSuspendExtension(extension_id) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      extensions.mojom.Renderer_CancelSuspendExtension_ParamsSpec,
      null,
      [extension_id],
      false);
  }

  setDeveloperMode(developer_mode_only) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      extensions.mojom.Renderer_SetDeveloperMode_ParamsSpec,
      null,
      [developer_mode_only],
      false);
  }

  setUserScriptsAllowed(extension_id, allowed) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      extensions.mojom.Renderer_SetUserScriptsAllowed_ParamsSpec,
      null,
      [extension_id, allowed],
      false);
  }

  setSessionInfo(channel, session) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      extensions.mojom.Renderer_SetSessionInfo_ParamsSpec,
      null,
      [channel, session],
      false);
  }

  setSystemFont(font_family, font_size) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      extensions.mojom.Renderer_SetSystemFont_ParamsSpec,
      null,
      [font_family, font_size],
      false);
  }

  setWebViewPartitionID(partition_id) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      extensions.mojom.Renderer_SetWebViewPartitionID_ParamsSpec,
      null,
      [partition_id],
      false);
  }

  setScriptingAllowlist(extension_ids) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      extensions.mojom.Renderer_SetScriptingAllowlist_ParamsSpec,
      null,
      [extension_ids],
      false);
  }

  updateUserScriptWorlds(infos) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      extensions.mojom.Renderer_UpdateUserScriptWorlds_ParamsSpec,
      null,
      [infos],
      false);
  }

  clearUserScriptWorldConfig(extension_id, world_id) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      extensions.mojom.Renderer_ClearUserScriptWorldConfig_ParamsSpec,
      null,
      [extension_id, world_id],
      false);
  }

  shouldSuspend() {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      extensions.mojom.Renderer_ShouldSuspend_ParamsSpec,
      extensions.mojom.Renderer_ShouldSuspend_ResponseParamsSpec,
      [],
      false);
  }

  transferBlobs() {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      extensions.mojom.Renderer_TransferBlobs_ParamsSpec,
      extensions.mojom.Renderer_TransferBlobs_ResponseParamsSpec,
      [],
      false);
  }

  updatePermissions(extension_id, active_permissions, withheld_permissions, policy_blocked_hosts, policy_allowed_hosts, uses_default_policy_host_restrictions) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      extensions.mojom.Renderer_UpdatePermissions_ParamsSpec,
      null,
      [extension_id, active_permissions, withheld_permissions, policy_blocked_hosts, policy_allowed_hosts, uses_default_policy_host_restrictions],
      false);
  }

  updateDefaultPolicyHostRestrictions(default_policy_blocked_hosts, default_policy_allowed_hosts) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      extensions.mojom.Renderer_UpdateDefaultPolicyHostRestrictions_ParamsSpec,
      null,
      [default_policy_blocked_hosts, default_policy_allowed_hosts],
      false);
  }

  updateUserHostRestrictions(user_blocked_hosts, user_allowed_hosts) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      extensions.mojom.Renderer_UpdateUserHostRestrictions_ParamsSpec,
      null,
      [user_blocked_hosts, user_allowed_hosts],
      false);
  }

  updateTabSpecificPermissions(extension_id, new_hosts, tab_id, update_origin_allowlist) {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      extensions.mojom.Renderer_UpdateTabSpecificPermissions_ParamsSpec,
      null,
      [extension_id, new_hosts, tab_id, update_origin_allowlist],
      false);
  }

  updateUserScripts(region, owner) {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      extensions.mojom.Renderer_UpdateUserScripts_ParamsSpec,
      null,
      [region, owner],
      false);
  }

  clearTabSpecificPermissions(extension_ids, tab_id, update_origin_allowlist) {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      extensions.mojom.Renderer_ClearTabSpecificPermissions_ParamsSpec,
      null,
      [extension_ids, tab_id, update_origin_allowlist],
      false);
  }

  watchPages(css_selectors) {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
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
             decoder.decodeStructInline(extensions.mojom.Renderer_ActivateExtension_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.Renderer_SetActivityLoggingEnabled_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.Renderer_LoadExtensions_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.Renderer_UnloadExtension_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.Renderer_SuspendExtension_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.Renderer_CancelSuspendExtension_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.Renderer_SetDeveloperMode_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.Renderer_SetUserScriptsAllowed_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.Renderer_SetSessionInfo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.Renderer_SetSystemFont_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.Renderer_SetWebViewPartitionID_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.Renderer_SetScriptingAllowlist_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.Renderer_UpdateUserScriptWorlds_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.Renderer_ClearUserScriptWorldConfig_ParamsSpec);
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.Renderer_ShouldSuspend_ParamsSpec);
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.Renderer_TransferBlobs_ParamsSpec);
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.Renderer_UpdatePermissions_ParamsSpec);
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.Renderer_UpdateDefaultPolicyHostRestrictions_ParamsSpec);
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.Renderer_UpdateUserHostRestrictions_ParamsSpec);
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.Renderer_UpdateTabSpecificPermissions_ParamsSpec);
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.Renderer_UpdateUserScripts_ParamsSpec);
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.Renderer_ClearTabSpecificPermissions_ParamsSpec);
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.Renderer_WatchPages_ParamsSpec);
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.Renderer_ActivateExtension_ParamsSpec.$.structSpec);
          const result = this.impl.activateExtension(params.extension_id);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.Renderer_SetActivityLoggingEnabled_ParamsSpec.$.structSpec);
          const result = this.impl.setActivityLoggingEnabled(params.enabled);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.Renderer_LoadExtensions_ParamsSpec.$.structSpec);
          const result = this.impl.loadExtensions(params.params);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.Renderer_UnloadExtension_ParamsSpec.$.structSpec);
          const result = this.impl.unloadExtension(params.extension_id);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.Renderer_SuspendExtension_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(extensions.mojom.Renderer_CancelSuspendExtension_ParamsSpec.$.structSpec);
          const result = this.impl.cancelSuspendExtension(params.extension_id);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.Renderer_SetDeveloperMode_ParamsSpec.$.structSpec);
          const result = this.impl.setDeveloperMode(params.developer_mode_only);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.Renderer_SetUserScriptsAllowed_ParamsSpec.$.structSpec);
          const result = this.impl.setUserScriptsAllowed(params.extension_id, params.allowed);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.Renderer_SetSessionInfo_ParamsSpec.$.structSpec);
          const result = this.impl.setSessionInfo(params.channel, params.session);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.Renderer_SetSystemFont_ParamsSpec.$.structSpec);
          const result = this.impl.setSystemFont(params.font_family, params.font_size);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.Renderer_SetWebViewPartitionID_ParamsSpec.$.structSpec);
          const result = this.impl.setWebViewPartitionID(params.partition_id);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.Renderer_SetScriptingAllowlist_ParamsSpec.$.structSpec);
          const result = this.impl.setScriptingAllowlist(params.extension_ids);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.Renderer_UpdateUserScriptWorlds_ParamsSpec.$.structSpec);
          const result = this.impl.updateUserScriptWorlds(params.infos);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.Renderer_ClearUserScriptWorldConfig_ParamsSpec.$.structSpec);
          const result = this.impl.clearUserScriptWorldConfig(params.extension_id, params.world_id);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.Renderer_ShouldSuspend_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(extensions.mojom.Renderer_TransferBlobs_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(extensions.mojom.Renderer_UpdatePermissions_ParamsSpec.$.structSpec);
          const result = this.impl.updatePermissions(params.extension_id, params.active_permissions, params.withheld_permissions, params.policy_blocked_hosts, params.policy_allowed_hosts, params.uses_default_policy_host_restrictions);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.Renderer_UpdateDefaultPolicyHostRestrictions_ParamsSpec.$.structSpec);
          const result = this.impl.updateDefaultPolicyHostRestrictions(params.default_policy_blocked_hosts, params.default_policy_allowed_hosts);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.Renderer_UpdateUserHostRestrictions_ParamsSpec.$.structSpec);
          const result = this.impl.updateUserHostRestrictions(params.user_blocked_hosts, params.user_allowed_hosts);
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.Renderer_UpdateTabSpecificPermissions_ParamsSpec.$.structSpec);
          const result = this.impl.updateTabSpecificPermissions(params.extension_id, params.new_hosts, params.tab_id, params.update_origin_allowlist);
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.Renderer_UpdateUserScripts_ParamsSpec.$.structSpec);
          const result = this.impl.updateUserScripts(params.region, params.owner);
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.Renderer_ClearTabSpecificPermissions_ParamsSpec.$.structSpec);
          const result = this.impl.clearTabSpecificPermissions(params.extension_ids, params.tab_id, params.update_origin_allowlist);
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.Renderer_WatchPages_ParamsSpec.$.structSpec);
          const result = this.impl.watchPages(params.css_selectors);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

extensions.mojom.RendererReceiver = extensions.mojom.RendererReceiver;

extensions.mojom.RendererPtr = extensions.mojom.RendererRemote;
extensions.mojom.RendererRequest = extensions.mojom.RendererPendingReceiver;

