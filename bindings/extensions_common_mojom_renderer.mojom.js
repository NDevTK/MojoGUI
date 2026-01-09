// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/mojom/renderer.mojom
// Module: extensions.mojom

'use strict';

// Module namespace
var extensions = extensions || {};
extensions.mojom = extensions.mojom || {};


// Struct: ExtensionLoadedParams
extensions.mojom.ExtensionLoadedParams = class {
  constructor(values = {}) {
    this.id = values.id !== undefined ? values.id : 0;
    this.guid = values.guid !== undefined ? values.guid : 0;
  }
};

// Struct: UserScriptWorldInfo
extensions.mojom.UserScriptWorldInfo = class {
  constructor(values = {}) {
    this.extension_id = values.extension_id !== undefined ? values.extension_id : null;
    this.world_id = values.world_id !== undefined ? values.world_id : "";
    this.enable_messaging = values.enable_messaging !== undefined ? values.enable_messaging : false;
  }
};

// Interface: Renderer
extensions.mojom.RendererPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'extensions.mojom.Renderer';
  }

  process(scripts) {
    // Method: process
    // Call: process(scripts)
  }

  activateExtension(extension_id) {
    // Method: ActivateExtension
    // Call: ActivateExtension(extension_id)
  }

  setActivityLoggingEnabled(enabled) {
    // Method: SetActivityLoggingEnabled
    // Call: SetActivityLoggingEnabled(enabled)
  }

  loadExtensions(params) {
    // Method: LoadExtensions
    // Call: LoadExtensions(params)
  }

  unloadExtension(extension_id) {
    // Method: UnloadExtension
    // Call: UnloadExtension(extension_id)
  }

  suspendExtension(extension_id) {
    // Method: SuspendExtension
    // Call: SuspendExtension(extension_id)
  }

  cancelSuspendExtension(extension_id) {
    // Method: CancelSuspendExtension
    // Call: CancelSuspendExtension(extension_id)
  }

  setDeveloperMode(developer_mode_only) {
    // Method: SetDeveloperMode
    // Call: SetDeveloperMode(developer_mode_only)
  }

  setUserScriptsAllowed(extension_id, allowed) {
    // Method: SetUserScriptsAllowed
    // Call: SetUserScriptsAllowed(extension_id, allowed)
  }

  channel() {
    // Method: channel
    // Call: channel()
  }

  setSessionInfo(channel, session) {
    // Method: SetSessionInfo
    // Call: SetSessionInfo(channel, session)
  }

  setSystemFont(font_family, font_size) {
    // Method: SetSystemFont
    // Call: SetSystemFont(font_family, font_size)
  }

  setWebViewPartitionID(partition_id) {
    // Method: SetWebViewPartitionID
    // Call: SetWebViewPartitionID(partition_id)
  }

  setScriptingAllowlist(extension_ids) {
    // Method: SetScriptingAllowlist
    // Call: SetScriptingAllowlist(extension_ids)
  }

  updateUserScriptWorlds(infos) {
    // Method: UpdateUserScriptWorlds
    // Call: UpdateUserScriptWorlds(infos)
  }

  clearUserScriptWorldConfig(extension_id, world_id) {
    // Method: ClearUserScriptWorldConfig
    // Call: ClearUserScriptWorldConfig(extension_id, world_id)
  }

  shouldSuspend() {
    // Method: ShouldSuspend
    // Call: ShouldSuspend()
  }

  transferBlobs() {
    // Method: TransferBlobs
    // Call: TransferBlobs()
  }

  updatePermissions(extension_id, active_permissions, withheld_permissions, policy_blocked_hosts, policy_allowed_hosts, uses_default_policy_host_restrictions) {
    // Method: UpdatePermissions
    // Call: UpdatePermissions(extension_id, active_permissions, withheld_permissions, policy_blocked_hosts, policy_allowed_hosts, uses_default_policy_host_restrictions)
  }

  updateDefaultPolicyHostRestrictions(default_policy_blocked_hosts, default_policy_allowed_hosts) {
    // Method: UpdateDefaultPolicyHostRestrictions
    // Call: UpdateDefaultPolicyHostRestrictions(default_policy_blocked_hosts, default_policy_allowed_hosts)
  }

  updateUserHostRestrictions(user_blocked_hosts, user_allowed_hosts) {
    // Method: UpdateUserHostRestrictions
    // Call: UpdateUserHostRestrictions(user_blocked_hosts, user_allowed_hosts)
  }

  updateTabSpecificPermissions(extension_id, new_hosts, tab_id, update_origin_allowlist) {
    // Method: UpdateTabSpecificPermissions
    // Call: UpdateTabSpecificPermissions(extension_id, new_hosts, tab_id, update_origin_allowlist)
  }

  updateUserScripts(region, owner) {
    // Method: UpdateUserScripts
    // Call: UpdateUserScripts(region, owner)
  }

  clearTabSpecificPermissions(extension_ids, tab_id, update_origin_allowlist) {
    // Method: ClearTabSpecificPermissions
    // Call: ClearTabSpecificPermissions(extension_ids, tab_id, update_origin_allowlist)
  }

  watchPages(css_selectors) {
    // Method: WatchPages
    // Call: WatchPages(css_selectors)
  }

};

extensions.mojom.RendererRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
