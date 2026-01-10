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
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = extensions.mojom.Renderer_ActivateExtension_ParamsSpec.$.decode(message.payload);
          const result = this.impl.activateExtension(params.extension_id);
          break;
        }
        case 1: {
          const params = extensions.mojom.Renderer_SetActivityLoggingEnabled_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setActivityLoggingEnabled(params.enabled);
          break;
        }
        case 2: {
          const params = extensions.mojom.Renderer_LoadExtensions_ParamsSpec.$.decode(message.payload);
          const result = this.impl.loadExtensions(params.params);
          break;
        }
        case 3: {
          const params = extensions.mojom.Renderer_UnloadExtension_ParamsSpec.$.decode(message.payload);
          const result = this.impl.unloadExtension(params.extension_id);
          break;
        }
        case 4: {
          const params = extensions.mojom.Renderer_SuspendExtension_ParamsSpec.$.decode(message.payload);
          const result = this.impl.suspendExtension(params.extension_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, extensions.mojom.Renderer_SuspendExtension_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 5: {
          const params = extensions.mojom.Renderer_CancelSuspendExtension_ParamsSpec.$.decode(message.payload);
          const result = this.impl.cancelSuspendExtension(params.extension_id);
          break;
        }
        case 6: {
          const params = extensions.mojom.Renderer_SetDeveloperMode_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setDeveloperMode(params.developer_mode_only);
          break;
        }
        case 7: {
          const params = extensions.mojom.Renderer_SetUserScriptsAllowed_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setUserScriptsAllowed(params.extension_id, params.allowed);
          break;
        }
        case 8: {
          const params = extensions.mojom.Renderer_SetSessionInfo_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setSessionInfo(params.channel, params.session);
          break;
        }
        case 9: {
          const params = extensions.mojom.Renderer_SetSystemFont_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setSystemFont(params.font_family, params.font_size);
          break;
        }
        case 10: {
          const params = extensions.mojom.Renderer_SetWebViewPartitionID_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setWebViewPartitionID(params.partition_id);
          break;
        }
        case 11: {
          const params = extensions.mojom.Renderer_SetScriptingAllowlist_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setScriptingAllowlist(params.extension_ids);
          break;
        }
        case 12: {
          const params = extensions.mojom.Renderer_UpdateUserScriptWorlds_ParamsSpec.$.decode(message.payload);
          const result = this.impl.updateUserScriptWorlds(params.infos);
          break;
        }
        case 13: {
          const params = extensions.mojom.Renderer_ClearUserScriptWorldConfig_ParamsSpec.$.decode(message.payload);
          const result = this.impl.clearUserScriptWorldConfig(params.extension_id, params.world_id);
          break;
        }
        case 14: {
          const params = extensions.mojom.Renderer_ShouldSuspend_ParamsSpec.$.decode(message.payload);
          const result = this.impl.shouldSuspend();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, extensions.mojom.Renderer_ShouldSuspend_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 15: {
          const params = extensions.mojom.Renderer_TransferBlobs_ParamsSpec.$.decode(message.payload);
          const result = this.impl.transferBlobs();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, extensions.mojom.Renderer_TransferBlobs_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 16: {
          const params = extensions.mojom.Renderer_UpdatePermissions_ParamsSpec.$.decode(message.payload);
          const result = this.impl.updatePermissions(params.extension_id, params.active_permissions, params.withheld_permissions, params.policy_blocked_hosts, params.policy_allowed_hosts, params.uses_default_policy_host_restrictions);
          break;
        }
        case 17: {
          const params = extensions.mojom.Renderer_UpdateDefaultPolicyHostRestrictions_ParamsSpec.$.decode(message.payload);
          const result = this.impl.updateDefaultPolicyHostRestrictions(params.default_policy_blocked_hosts, params.default_policy_allowed_hosts);
          break;
        }
        case 18: {
          const params = extensions.mojom.Renderer_UpdateUserHostRestrictions_ParamsSpec.$.decode(message.payload);
          const result = this.impl.updateUserHostRestrictions(params.user_blocked_hosts, params.user_allowed_hosts);
          break;
        }
        case 19: {
          const params = extensions.mojom.Renderer_UpdateTabSpecificPermissions_ParamsSpec.$.decode(message.payload);
          const result = this.impl.updateTabSpecificPermissions(params.extension_id, params.new_hosts, params.tab_id, params.update_origin_allowlist);
          break;
        }
        case 20: {
          const params = extensions.mojom.Renderer_UpdateUserScripts_ParamsSpec.$.decode(message.payload);
          const result = this.impl.updateUserScripts(params.region, params.owner);
          break;
        }
        case 21: {
          const params = extensions.mojom.Renderer_ClearTabSpecificPermissions_ParamsSpec.$.decode(message.payload);
          const result = this.impl.clearTabSpecificPermissions(params.extension_ids, params.tab_id, params.update_origin_allowlist);
          break;
        }
        case 22: {
          const params = extensions.mojom.Renderer_WatchPages_ParamsSpec.$.decode(message.payload);
          const result = this.impl.watchPages(params.css_selectors);
          break;
        }
      }
    });
  }
};

extensions.mojom.RendererReceiver = extensions.mojom.RendererReceiver;

extensions.mojom.RendererPtr = extensions.mojom.RendererRemote;
extensions.mojom.RendererRequest = extensions.mojom.RendererPendingReceiver;

