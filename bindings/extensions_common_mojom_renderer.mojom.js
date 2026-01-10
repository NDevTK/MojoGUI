// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/mojom/renderer.mojom
// Module: extensions.mojom

'use strict';

// Module namespace
var extensions = extensions || {};
extensions.mojom = extensions.mojom || {};


// Struct: ExtensionLoadedParams
extensions.mojom.mojom.ExtensionLoadedParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.ExtensionLoadedParams',
      packedSize: 104,
      fields: [
        { name: 'manifest', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.DictionaryValueSpec, nullable: false, minVersion: 0 },
        { name: 'location', packedOffset: 80, packedBitOffset: 0, type: extensions.mojom.ManifestLocationSpec, nullable: false, minVersion: 0 },
        { name: 'path', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
        { name: 'active_permissions', packedOffset: 16, packedBitOffset: 0, type: extensions.mojom.PermissionSetSpec, nullable: false, minVersion: 0 },
        { name: 'withheld_permissions', packedOffset: 24, packedBitOffset: 0, type: extensions.mojom.PermissionSetSpec, nullable: false, minVersion: 0 },
        { name: 'tab_specific_permissions', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.Int32, extensions.mojom.PermissionSetSpec, false), nullable: false, minVersion: 0 },
        { name: 'policy_blocked_hosts', packedOffset: 40, packedBitOffset: 0, type: extensions.mojom.URLPatternSetSpec, nullable: false, minVersion: 0 },
        { name: 'policy_allowed_hosts', packedOffset: 48, packedBitOffset: 0, type: extensions.mojom.URLPatternSetSpec, nullable: false, minVersion: 0 },
        { name: 'uses_default_policy_blocked_allowed_hosts', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'user_scripts_allowed', packedOffset: 88, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'id', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'worker_activation_token', packedOffset: 64, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true, minVersion: 0 },
        { name: 'creation_flags', packedOffset: 84, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'guid', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 104}]
    }
  }
};

// Struct: UserScriptWorldInfo
extensions.mojom.mojom.UserScriptWorldInfoSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.UserScriptWorldInfo',
      packedSize: 40,
      fields: [
        { name: 'extension_id', packedOffset: 0, packedBitOffset: 0, type: extensions.mojom.ExtensionIdSpec, nullable: false, minVersion: 0 },
        { name: 'world_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'csp', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'enable_messaging', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Interface: Renderer
extensions.mojom.mojom.Renderer = {};

extensions.mojom.mojom.RendererPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

extensions.mojom.mojom.RendererRemote = class {
  static get $interfaceName() {
    return 'extensions.mojom.Renderer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      extensions.mojom.mojom.RendererPendingReceiver,
      handle);
    this.$ = new extensions.mojom.mojom.RendererRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

extensions.mojom.mojom.RendererRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  activateExtension(extension_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      extensions.mojom.mojom.Renderer_ActivateExtension_ParamsSpec,
      null,
      [extension_id]);
  }

  setActivityLoggingEnabled(enabled) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      extensions.mojom.mojom.Renderer_SetActivityLoggingEnabled_ParamsSpec,
      null,
      [enabled]);
  }

  loadExtensions(params) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      extensions.mojom.mojom.Renderer_LoadExtensions_ParamsSpec,
      null,
      [params]);
  }

  unloadExtension(extension_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      extensions.mojom.mojom.Renderer_UnloadExtension_ParamsSpec,
      null,
      [extension_id]);
  }

  suspendExtension(extension_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      extensions.mojom.mojom.Renderer_SuspendExtension_ParamsSpec,
      null,
      [extension_id]);
  }

  cancelSuspendExtension(extension_id) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      extensions.mojom.mojom.Renderer_CancelSuspendExtension_ParamsSpec,
      null,
      [extension_id]);
  }

  setDeveloperMode(developer_mode_only) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      extensions.mojom.mojom.Renderer_SetDeveloperMode_ParamsSpec,
      null,
      [developer_mode_only]);
  }

  setUserScriptsAllowed(extension_id, allowed) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      extensions.mojom.mojom.Renderer_SetUserScriptsAllowed_ParamsSpec,
      null,
      [extension_id, allowed]);
  }

  setSessionInfo(channel, session) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      extensions.mojom.mojom.Renderer_SetSessionInfo_ParamsSpec,
      null,
      [channel, session]);
  }

  setSystemFont(font_family, font_size) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      extensions.mojom.mojom.Renderer_SetSystemFont_ParamsSpec,
      null,
      [font_family, font_size]);
  }

  setWebViewPartitionID(partition_id) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      extensions.mojom.mojom.Renderer_SetWebViewPartitionID_ParamsSpec,
      null,
      [partition_id]);
  }

  setScriptingAllowlist(extension_ids) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      extensions.mojom.mojom.Renderer_SetScriptingAllowlist_ParamsSpec,
      null,
      [extension_ids]);
  }

  updateUserScriptWorlds(infos) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      extensions.mojom.mojom.Renderer_UpdateUserScriptWorlds_ParamsSpec,
      null,
      [infos]);
  }

  clearUserScriptWorldConfig(extension_id, world_id) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      extensions.mojom.mojom.Renderer_ClearUserScriptWorldConfig_ParamsSpec,
      null,
      [extension_id, world_id]);
  }

  shouldSuspend() {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      extensions.mojom.mojom.Renderer_ShouldSuspend_ParamsSpec,
      null,
      []);
  }

  transferBlobs() {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      extensions.mojom.mojom.Renderer_TransferBlobs_ParamsSpec,
      null,
      []);
  }

  updatePermissions(extension_id, active_permissions, withheld_permissions, policy_blocked_hosts, policy_allowed_hosts, uses_default_policy_host_restrictions) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      extensions.mojom.mojom.Renderer_UpdatePermissions_ParamsSpec,
      null,
      [extension_id, active_permissions, withheld_permissions, policy_blocked_hosts, policy_allowed_hosts, uses_default_policy_host_restrictions]);
  }

  updateDefaultPolicyHostRestrictions(default_policy_blocked_hosts, default_policy_allowed_hosts) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      extensions.mojom.mojom.Renderer_UpdateDefaultPolicyHostRestrictions_ParamsSpec,
      null,
      [default_policy_blocked_hosts, default_policy_allowed_hosts]);
  }

  updateUserHostRestrictions(user_blocked_hosts, user_allowed_hosts) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      extensions.mojom.mojom.Renderer_UpdateUserHostRestrictions_ParamsSpec,
      null,
      [user_blocked_hosts, user_allowed_hosts]);
  }

  updateTabSpecificPermissions(extension_id, new_hosts, tab_id, update_origin_allowlist) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      extensions.mojom.mojom.Renderer_UpdateTabSpecificPermissions_ParamsSpec,
      null,
      [extension_id, new_hosts, tab_id, update_origin_allowlist]);
  }

  updateUserScripts(region, owner) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      extensions.mojom.mojom.Renderer_UpdateUserScripts_ParamsSpec,
      null,
      [region, owner]);
  }

  clearTabSpecificPermissions(extension_ids, tab_id, update_origin_allowlist) {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      extensions.mojom.mojom.Renderer_ClearTabSpecificPermissions_ParamsSpec,
      null,
      [extension_ids, tab_id, update_origin_allowlist]);
  }

  watchPages(css_selectors) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      extensions.mojom.mojom.Renderer_WatchPages_ParamsSpec,
      null,
      [css_selectors]);
  }

};

extensions.mojom.mojom.Renderer.getRemote = function() {
  let remote = new extensions.mojom.mojom.RendererRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'extensions.mojom.Renderer',
    'context');
  return remote.$;
};

// ParamsSpec for ActivateExtension
extensions.mojom.mojom.Renderer_ActivateExtension_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.Renderer.ActivateExtension_Params',
      packedSize: 16,
      fields: [
        { name: 'extension_id', packedOffset: 0, packedBitOffset: 0, type: extensions.mojom.ExtensionIdSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetActivityLoggingEnabled
extensions.mojom.mojom.Renderer_SetActivityLoggingEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.Renderer.SetActivityLoggingEnabled_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for LoadExtensions
extensions.mojom.mojom.Renderer_LoadExtensions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.Renderer.LoadExtensions_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(extensions.mojom.ExtensionLoadedParamsSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UnloadExtension
extensions.mojom.mojom.Renderer_UnloadExtension_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.Renderer.UnloadExtension_Params',
      packedSize: 16,
      fields: [
        { name: 'extension_id', packedOffset: 0, packedBitOffset: 0, type: extensions.mojom.ExtensionIdSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SuspendExtension
extensions.mojom.mojom.Renderer_SuspendExtension_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.Renderer.SuspendExtension_Params',
      packedSize: 16,
      fields: [
        { name: 'extension_id', packedOffset: 0, packedBitOffset: 0, type: extensions.mojom.ExtensionIdSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CancelSuspendExtension
extensions.mojom.mojom.Renderer_CancelSuspendExtension_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.Renderer.CancelSuspendExtension_Params',
      packedSize: 16,
      fields: [
        { name: 'extension_id', packedOffset: 0, packedBitOffset: 0, type: extensions.mojom.ExtensionIdSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetDeveloperMode
extensions.mojom.mojom.Renderer_SetDeveloperMode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.Renderer.SetDeveloperMode_Params',
      packedSize: 16,
      fields: [
        { name: 'developer_mode_only', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetUserScriptsAllowed
extensions.mojom.mojom.Renderer_SetUserScriptsAllowed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.Renderer.SetUserScriptsAllowed_Params',
      packedSize: 24,
      fields: [
        { name: 'extension_id', packedOffset: 0, packedBitOffset: 0, type: extensions.mojom.ExtensionIdSpec, nullable: false, minVersion: 0 },
        { name: 'allowed', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SetSessionInfo
extensions.mojom.mojom.Renderer_SetSessionInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.Renderer.SetSessionInfo_Params',
      packedSize: 16,
      fields: [
        { name: 'channel', packedOffset: 0, packedBitOffset: 0, type: extensions.mojom.ChannelSpec, nullable: false, minVersion: 0 },
        { name: 'session', packedOffset: 4, packedBitOffset: 0, type: extensions.mojom.FeatureSessionTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetSystemFont
extensions.mojom.mojom.Renderer_SetSystemFont_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.Renderer.SetSystemFont_Params',
      packedSize: 24,
      fields: [
        { name: 'font_family', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'font_size', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SetWebViewPartitionID
extensions.mojom.mojom.Renderer_SetWebViewPartitionID_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.Renderer.SetWebViewPartitionID_Params',
      packedSize: 16,
      fields: [
        { name: 'partition_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetScriptingAllowlist
extensions.mojom.mojom.Renderer_SetScriptingAllowlist_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.Renderer.SetScriptingAllowlist_Params',
      packedSize: 16,
      fields: [
        { name: 'extension_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(extensions.mojom.ExtensionIdSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdateUserScriptWorlds
extensions.mojom.mojom.Renderer_UpdateUserScriptWorlds_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.Renderer.UpdateUserScriptWorlds_Params',
      packedSize: 16,
      fields: [
        { name: 'infos', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(extensions.mojom.UserScriptWorldInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ClearUserScriptWorldConfig
extensions.mojom.mojom.Renderer_ClearUserScriptWorldConfig_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.Renderer.ClearUserScriptWorldConfig_Params',
      packedSize: 24,
      fields: [
        { name: 'extension_id', packedOffset: 0, packedBitOffset: 0, type: extensions.mojom.ExtensionIdSpec, nullable: false, minVersion: 0 },
        { name: 'world_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ShouldSuspend
extensions.mojom.mojom.Renderer_ShouldSuspend_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.Renderer.ShouldSuspend_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for TransferBlobs
extensions.mojom.mojom.Renderer_TransferBlobs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.Renderer.TransferBlobs_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for UpdatePermissions
extensions.mojom.mojom.Renderer_UpdatePermissions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.Renderer.UpdatePermissions_Params',
      packedSize: 56,
      fields: [
        { name: 'extension_id', packedOffset: 0, packedBitOffset: 0, type: extensions.mojom.ExtensionIdSpec, nullable: false, minVersion: 0 },
        { name: 'active_permissions', packedOffset: 8, packedBitOffset: 0, type: extensions.mojom.PermissionSetSpec, nullable: false, minVersion: 0 },
        { name: 'withheld_permissions', packedOffset: 16, packedBitOffset: 0, type: extensions.mojom.PermissionSetSpec, nullable: false, minVersion: 0 },
        { name: 'policy_blocked_hosts', packedOffset: 24, packedBitOffset: 0, type: extensions.mojom.URLPatternSetSpec, nullable: false, minVersion: 0 },
        { name: 'policy_allowed_hosts', packedOffset: 32, packedBitOffset: 0, type: extensions.mojom.URLPatternSetSpec, nullable: false, minVersion: 0 },
        { name: 'uses_default_policy_host_restrictions', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// ParamsSpec for UpdateDefaultPolicyHostRestrictions
extensions.mojom.mojom.Renderer_UpdateDefaultPolicyHostRestrictions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.Renderer.UpdateDefaultPolicyHostRestrictions_Params',
      packedSize: 24,
      fields: [
        { name: 'default_policy_blocked_hosts', packedOffset: 0, packedBitOffset: 0, type: extensions.mojom.URLPatternSetSpec, nullable: false, minVersion: 0 },
        { name: 'default_policy_allowed_hosts', packedOffset: 8, packedBitOffset: 0, type: extensions.mojom.URLPatternSetSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for UpdateUserHostRestrictions
extensions.mojom.mojom.Renderer_UpdateUserHostRestrictions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.Renderer.UpdateUserHostRestrictions_Params',
      packedSize: 24,
      fields: [
        { name: 'user_blocked_hosts', packedOffset: 0, packedBitOffset: 0, type: extensions.mojom.URLPatternSetSpec, nullable: false, minVersion: 0 },
        { name: 'user_allowed_hosts', packedOffset: 8, packedBitOffset: 0, type: extensions.mojom.URLPatternSetSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for UpdateTabSpecificPermissions
extensions.mojom.mojom.Renderer_UpdateTabSpecificPermissions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.Renderer.UpdateTabSpecificPermissions_Params',
      packedSize: 32,
      fields: [
        { name: 'extension_id', packedOffset: 0, packedBitOffset: 0, type: extensions.mojom.ExtensionIdSpec, nullable: false, minVersion: 0 },
        { name: 'new_hosts', packedOffset: 8, packedBitOffset: 0, type: extensions.mojom.URLPatternSetSpec, nullable: false, minVersion: 0 },
        { name: 'tab_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'update_origin_allowlist', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for UpdateUserScripts
extensions.mojom.mojom.Renderer_UpdateUserScripts_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.Renderer.UpdateUserScripts_Params',
      packedSize: 24,
      fields: [
        { name: 'region', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlySharedMemoryRegionSpec, nullable: false, minVersion: 0 },
        { name: 'owner', packedOffset: 8, packedBitOffset: 0, type: extensions.mojom.HostIDSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ClearTabSpecificPermissions
extensions.mojom.mojom.Renderer_ClearTabSpecificPermissions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.Renderer.ClearTabSpecificPermissions_Params',
      packedSize: 24,
      fields: [
        { name: 'extension_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(extensions.mojom.ExtensionIdSpec, false), nullable: false, minVersion: 0 },
        { name: 'tab_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'update_origin_allowlist', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for WatchPages
extensions.mojom.mojom.Renderer_WatchPages_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.Renderer.WatchPages_Params',
      packedSize: 16,
      fields: [
        { name: 'css_selectors', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
extensions.mojom.mojom.RendererPtr = extensions.mojom.mojom.RendererRemote;
extensions.mojom.mojom.RendererRequest = extensions.mojom.mojom.RendererPendingReceiver;

