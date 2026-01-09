// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/mojom/renderer.mojom
// Module: extensions.mojom

'use strict';

// Module namespace
var extensions = extensions || {};
extensions.mojom = extensions.mojom || {};


// Interface: Renderer
extensions.mojom.Renderer = {};

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
      null,
      [extension_id],
      undefined,
      undefined
    );
  }

  setActivityLoggingEnabled(enabled) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      extensions.mojom.Renderer_SetActivityLoggingEnabled_ParamsSpec,
      null,
      null,
      [enabled],
      undefined,
      undefined
    );
  }

  loadExtensions(params) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      extensions.mojom.Renderer_LoadExtensions_ParamsSpec,
      null,
      null,
      [params],
      undefined,
      undefined
    );
  }

  unloadExtension(extension_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      extensions.mojom.Renderer_UnloadExtension_ParamsSpec,
      null,
      null,
      [extension_id],
      undefined,
      undefined
    );
  }

  suspendExtension(extension_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      extensions.mojom.Renderer_SuspendExtension_ParamsSpec,
      null,
      null,
      [extension_id],
      undefined,
      undefined
    );
  }

  cancelSuspendExtension(extension_id) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      extensions.mojom.Renderer_CancelSuspendExtension_ParamsSpec,
      null,
      null,
      [extension_id],
      undefined,
      undefined
    );
  }

  setDeveloperMode(developer_mode_only) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      extensions.mojom.Renderer_SetDeveloperMode_ParamsSpec,
      null,
      null,
      [developer_mode_only],
      undefined,
      undefined
    );
  }

  setUserScriptsAllowed(extension_id, allowed) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      extensions.mojom.Renderer_SetUserScriptsAllowed_ParamsSpec,
      null,
      null,
      [extension_id, allowed],
      undefined,
      undefined
    );
  }

  setSessionInfo(channel, session) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      extensions.mojom.Renderer_SetSessionInfo_ParamsSpec,
      null,
      null,
      [channel, session],
      undefined,
      undefined
    );
  }

  setSystemFont(font_family, font_size) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      extensions.mojom.Renderer_SetSystemFont_ParamsSpec,
      null,
      null,
      [font_family, font_size],
      undefined,
      undefined
    );
  }

  setWebViewPartitionID(partition_id) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      extensions.mojom.Renderer_SetWebViewPartitionID_ParamsSpec,
      null,
      null,
      [partition_id],
      undefined,
      undefined
    );
  }

  setScriptingAllowlist(extension_ids) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      extensions.mojom.Renderer_SetScriptingAllowlist_ParamsSpec,
      null,
      null,
      [extension_ids],
      undefined,
      undefined
    );
  }

  updateUserScriptWorlds(infos) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      extensions.mojom.Renderer_UpdateUserScriptWorlds_ParamsSpec,
      null,
      null,
      [infos],
      undefined,
      undefined
    );
  }

  clearUserScriptWorldConfig(extension_id, world_id) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      extensions.mojom.Renderer_ClearUserScriptWorldConfig_ParamsSpec,
      null,
      null,
      [extension_id, world_id],
      undefined,
      undefined
    );
  }

  shouldSuspend() {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      extensions.mojom.Renderer_ShouldSuspend_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  transferBlobs() {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      extensions.mojom.Renderer_TransferBlobs_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  updatePermissions(extension_id, active_permissions, withheld_permissions, policy_blocked_hosts, policy_allowed_hosts, uses_default_policy_host_restrictions) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      extensions.mojom.Renderer_UpdatePermissions_ParamsSpec,
      null,
      null,
      [extension_id, active_permissions, withheld_permissions, policy_blocked_hosts, policy_allowed_hosts, uses_default_policy_host_restrictions],
      undefined,
      undefined
    );
  }

  updateDefaultPolicyHostRestrictions(default_policy_blocked_hosts, default_policy_allowed_hosts) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      extensions.mojom.Renderer_UpdateDefaultPolicyHostRestrictions_ParamsSpec,
      null,
      null,
      [default_policy_blocked_hosts, default_policy_allowed_hosts],
      undefined,
      undefined
    );
  }

  updateUserHostRestrictions(user_blocked_hosts, user_allowed_hosts) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      extensions.mojom.Renderer_UpdateUserHostRestrictions_ParamsSpec,
      null,
      null,
      [user_blocked_hosts, user_allowed_hosts],
      undefined,
      undefined
    );
  }

  updateTabSpecificPermissions(extension_id, new_hosts, tab_id, update_origin_allowlist) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      extensions.mojom.Renderer_UpdateTabSpecificPermissions_ParamsSpec,
      null,
      null,
      [extension_id, new_hosts, tab_id, update_origin_allowlist],
      undefined,
      undefined
    );
  }

  updateUserScripts(region, owner) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      extensions.mojom.Renderer_UpdateUserScripts_ParamsSpec,
      null,
      null,
      [region, owner],
      undefined,
      undefined
    );
  }

  clearTabSpecificPermissions(extension_ids, tab_id, update_origin_allowlist) {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      extensions.mojom.Renderer_ClearTabSpecificPermissions_ParamsSpec,
      null,
      null,
      [extension_ids, tab_id, update_origin_allowlist],
      undefined,
      undefined
    );
  }

  watchPages(css_selectors) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      extensions.mojom.Renderer_WatchPages_ParamsSpec,
      null,
      null,
      [css_selectors],
      undefined,
      undefined
    );
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

// ParamsSpec for ActivateExtension
extensions.mojom.Renderer_ActivateExtension_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.Renderer.ActivateExtension_Params',
      packedSize: 16,
      fields: [
        { name: 'extension_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetActivityLoggingEnabled
extensions.mojom.Renderer_SetActivityLoggingEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.Renderer.SetActivityLoggingEnabled_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for LoadExtensions
extensions.mojom.Renderer_LoadExtensions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.Renderer.LoadExtensions_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UnloadExtension
extensions.mojom.Renderer_UnloadExtension_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.Renderer.UnloadExtension_Params',
      packedSize: 16,
      fields: [
        { name: 'extension_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SuspendExtension
extensions.mojom.Renderer_SuspendExtension_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.Renderer.SuspendExtension_Params',
      packedSize: 16,
      fields: [
        { name: 'extension_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CancelSuspendExtension
extensions.mojom.Renderer_CancelSuspendExtension_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.Renderer.CancelSuspendExtension_Params',
      packedSize: 16,
      fields: [
        { name: 'extension_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetDeveloperMode
extensions.mojom.Renderer_SetDeveloperMode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.Renderer.SetDeveloperMode_Params',
      packedSize: 16,
      fields: [
        { name: 'developer_mode_only', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetUserScriptsAllowed
extensions.mojom.Renderer_SetUserScriptsAllowed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.Renderer.SetUserScriptsAllowed_Params',
      packedSize: 24,
      fields: [
        { name: 'extension_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'allowed', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SetSessionInfo
extensions.mojom.Renderer_SetSessionInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.Renderer.SetSessionInfo_Params',
      packedSize: 24,
      fields: [
        { name: 'channel', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'session', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SetSystemFont
extensions.mojom.Renderer_SetSystemFont_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.Renderer.SetSystemFont_Params',
      packedSize: 24,
      fields: [
        { name: 'font_family', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'font_size', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SetWebViewPartitionID
extensions.mojom.Renderer_SetWebViewPartitionID_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.Renderer.SetWebViewPartitionID_Params',
      packedSize: 16,
      fields: [
        { name: 'partition_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetScriptingAllowlist
extensions.mojom.Renderer_SetScriptingAllowlist_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.Renderer.SetScriptingAllowlist_Params',
      packedSize: 16,
      fields: [
        { name: 'extension_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdateUserScriptWorlds
extensions.mojom.Renderer_UpdateUserScriptWorlds_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.Renderer.UpdateUserScriptWorlds_Params',
      packedSize: 16,
      fields: [
        { name: 'infos', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ClearUserScriptWorldConfig
extensions.mojom.Renderer_ClearUserScriptWorldConfig_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.Renderer.ClearUserScriptWorldConfig_Params',
      packedSize: 24,
      fields: [
        { name: 'extension_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'world_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ShouldSuspend
extensions.mojom.Renderer_ShouldSuspend_ParamsSpec = {
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
extensions.mojom.Renderer_TransferBlobs_ParamsSpec = {
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
extensions.mojom.Renderer_UpdatePermissions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.Renderer.UpdatePermissions_Params',
      packedSize: 56,
      fields: [
        { name: 'extension_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'active_permissions', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'withheld_permissions', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'policy_blocked_hosts', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'policy_allowed_hosts', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'uses_default_policy_host_restrictions', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// ParamsSpec for UpdateDefaultPolicyHostRestrictions
extensions.mojom.Renderer_UpdateDefaultPolicyHostRestrictions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.Renderer.UpdateDefaultPolicyHostRestrictions_Params',
      packedSize: 24,
      fields: [
        { name: 'default_policy_blocked_hosts', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'default_policy_allowed_hosts', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for UpdateUserHostRestrictions
extensions.mojom.Renderer_UpdateUserHostRestrictions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.Renderer.UpdateUserHostRestrictions_Params',
      packedSize: 24,
      fields: [
        { name: 'user_blocked_hosts', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'user_allowed_hosts', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for UpdateTabSpecificPermissions
extensions.mojom.Renderer_UpdateTabSpecificPermissions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.Renderer.UpdateTabSpecificPermissions_Params',
      packedSize: 40,
      fields: [
        { name: 'extension_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'new_hosts', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'tab_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'update_origin_allowlist', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for UpdateUserScripts
extensions.mojom.Renderer_UpdateUserScripts_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.Renderer.UpdateUserScripts_Params',
      packedSize: 24,
      fields: [
        { name: 'region', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'owner', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ClearTabSpecificPermissions
extensions.mojom.Renderer_ClearTabSpecificPermissions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.Renderer.ClearTabSpecificPermissions_Params',
      packedSize: 32,
      fields: [
        { name: 'extension_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'tab_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'update_origin_allowlist', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for WatchPages
extensions.mojom.Renderer_WatchPages_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.Renderer.WatchPages_Params',
      packedSize: 16,
      fields: [
        { name: 'css_selectors', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
extensions.mojom.RendererPtr = extensions.mojom.RendererRemote;
extensions.mojom.RendererRequest = extensions.mojom.RendererPendingReceiver;

