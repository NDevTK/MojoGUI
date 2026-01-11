// Auto-generated MojoJS binding
 // Source: chromium_src/extensions/common/mojom/renderer.mojom
 // Module: extensions.mojom

 'use strict';
 (function() {
   const SHA256 = (s) => {
     const K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xD5A79147, 0x06CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585,0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2];
     const h = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
     const m = new TextEncoder().encode(s);
     const l = m.length;
     const b = new Uint32Array(((l + 8) >> 6) + 1 << 4);
     for (let i = 0; i < l; i++) b[i >> 2] |= m[i] << (24 - (i & 3) * 8);
     b[l >> 2] |= 0x80 << (24 - (l & 3) * 8);
     b[b.length - 1] = l * 8;
     for (let i = 0; i < b.length; i += 16) {
       let [a1, b1, c1, d1, e1, f1, g1, h1] = h;
       const w = new Uint32Array(64);
       for (let j = 0; j < 64; j++) {
         if (j < 16) w[j] = b[i + j];
         else {
           const s0 = ((w[j-15]>>>7)|(w[j-15]<<25))^((w[j-15]>>>18)|(w[j-15]<<14))^(w[j-15]>>>3);
           const s1 = ((w[j-2]>>>17)|(w[j-2]<<15))^((w[j-2]>>>19)|(w[j-2]<<13))^(w[j-2]>>>10);
           w[j] = (w[j-16]+s0+w[j-7]+s1)|0;
         }
         const t1 = (h1 + (((e1>>>6)|(e1<<26))^((e1>>>11)|(e1<<21))^((e1>>>25)|(e1<<7))) + ((e1&f1)^((~e1)&g1)) + K[j] + w[j])|0;
         const t2 = ((((a1>>>2)|(a1<<30))^((a1>>>13)|(a1<<19))^((a1>>>22)|(a1<<10))) + ((a1&b1)^(a1&c1)^(b1&c1)))|0;
         h1 = g1; g1 = f1; f1 = e1; e1 = (d1 + t1) | 0; d1 = c1; c1 = b1; b1 = a1; a1 = (t1 + t2) | 0;
       }
       h[0] = (h[0] + a1) | 0; h[1] = (h[1] + b1) | 0; h[2] = (h[2] + c1) | 0; h[3] = (h[3] + d1) | 0;
       h[4] = (h[4] + e1) | 0; h[5] = (h[5] + f1) | 0; h[6] = (h[6] + g1) | 0; h[7] = (h[7] + h1) | 0;
     }
     return h[0];
   };
   window.mojoScrambler = window.mojoScrambler || {
     getOrdinals: (ifaceName, methodSpecs) => {
       const params = new URLSearchParams(window.location.search);
       const forceNoScramble = params.get('scramble') === '0' || window.mojoNoScramble;
       
       const seen = new Set();
       methodSpecs.forEach(ms => { if (ms.explicit !== null) seen.add(ms.explicit); });
       let i = 0;
       return methodSpecs.map((ms, idx) => {
         if (ms.explicit !== null) return ms.explicit;
         if (forceNoScramble) return idx;

         const p = window.mojoVersion.split('.');
         const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
         console.log('[MojoScrambler] Derived Salt:', JSON.stringify(salt));
         
         while (true) {
           i++;
           const h0 = SHA256(salt + ifaceName.split('.').pop() + i);
           const ord = (((h0 & 0xFF) << 24) | ((h0 & 0xFF00) << 8) | ((h0 & 0xFF0000) >> 8) | (h0 >>> 24)) & 0x7fffffff;
           if (!seen.has(ord)) {
             seen.add(ord);
             return ord;
           }
         }
       });
     }
   };
 })();

 // Module namespace
 var mojo = mojo || {};
 mojo.internal = mojo.internal || {};
 mojo.internal.bindings = mojo.internal.bindings || {};
 

 mojo.internal.bindings.extensions = mojo.internal.bindings.extensions || {};
mojo.internal.bindings.extensions.mojom = mojo.internal.bindings.extensions.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};

mojo.internal.bindings.extensions.mojom.ExtensionLoadedParamsSpec = { $: {} };
mojo.internal.bindings.extensions.mojom.UserScriptWorldInfoSpec = { $: {} };
mojo.internal.bindings.extensions.mojom.Renderer = {};
mojo.internal.bindings.extensions.mojom.Renderer.$interfaceName = 'extensions.mojom.Renderer';
mojo.internal.bindings.extensions.mojom.Renderer_ActivateExtension_ParamsSpec = { $: {} };
mojo.internal.bindings.extensions.mojom.Renderer_SetActivityLoggingEnabled_ParamsSpec = { $: {} };
mojo.internal.bindings.extensions.mojom.Renderer_LoadExtensions_ParamsSpec = { $: {} };
mojo.internal.bindings.extensions.mojom.Renderer_UnloadExtension_ParamsSpec = { $: {} };
mojo.internal.bindings.extensions.mojom.Renderer_SuspendExtension_ParamsSpec = { $: {} };
mojo.internal.bindings.extensions.mojom.Renderer_SuspendExtension_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.extensions.mojom.Renderer_CancelSuspendExtension_ParamsSpec = { $: {} };
mojo.internal.bindings.extensions.mojom.Renderer_SetDeveloperMode_ParamsSpec = { $: {} };
mojo.internal.bindings.extensions.mojom.Renderer_SetUserScriptsAllowed_ParamsSpec = { $: {} };
mojo.internal.bindings.extensions.mojom.Renderer_SetSessionInfo_ParamsSpec = { $: {} };
mojo.internal.bindings.extensions.mojom.Renderer_SetSystemFont_ParamsSpec = { $: {} };
mojo.internal.bindings.extensions.mojom.Renderer_SetWebViewPartitionID_ParamsSpec = { $: {} };
mojo.internal.bindings.extensions.mojom.Renderer_SetScriptingAllowlist_ParamsSpec = { $: {} };
mojo.internal.bindings.extensions.mojom.Renderer_UpdateUserScriptWorlds_ParamsSpec = { $: {} };
mojo.internal.bindings.extensions.mojom.Renderer_ClearUserScriptWorldConfig_ParamsSpec = { $: {} };
mojo.internal.bindings.extensions.mojom.Renderer_ShouldSuspend_ParamsSpec = { $: {} };
mojo.internal.bindings.extensions.mojom.Renderer_ShouldSuspend_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.extensions.mojom.Renderer_TransferBlobs_ParamsSpec = { $: {} };
mojo.internal.bindings.extensions.mojom.Renderer_TransferBlobs_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.extensions.mojom.Renderer_UpdatePermissions_ParamsSpec = { $: {} };
mojo.internal.bindings.extensions.mojom.Renderer_UpdateDefaultPolicyHostRestrictions_ParamsSpec = { $: {} };
mojo.internal.bindings.extensions.mojom.Renderer_UpdateUserHostRestrictions_ParamsSpec = { $: {} };
mojo.internal.bindings.extensions.mojom.Renderer_UpdateTabSpecificPermissions_ParamsSpec = { $: {} };
mojo.internal.bindings.extensions.mojom.Renderer_UpdateUserScripts_ParamsSpec = { $: {} };
mojo.internal.bindings.extensions.mojom.Renderer_ClearTabSpecificPermissions_ParamsSpec = { $: {} };
mojo.internal.bindings.extensions.mojom.Renderer_WatchPages_ParamsSpec = { $: {} };

// Struct: ExtensionLoadedParams
mojo.internal.Struct(
    mojo.internal.bindings.extensions.mojom.ExtensionLoadedParamsSpec, 'extensions.mojom.ExtensionLoadedParams', [
      mojo.internal.StructField('arg_manifest', 0, 0, mojo.internal.bindings.mojo_base.mojom.DictionaryValueSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_location', 8, 0, mojo.internal.bindings.extensions.mojom.ManifestLocationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_path', 16, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_active_permissions', 24, 0, mojo.internal.bindings.extensions.mojom.PermissionSetSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_withheld_permissions', 32, 0, mojo.internal.bindings.extensions.mojom.PermissionSetSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_tab_specific_permissions', 40, 0, mojo.internal.Map(mojo.internal.Int32, mojo.internal.bindings.extensions.mojom.PermissionSetSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_policy_blocked_hosts', 48, 0, mojo.internal.bindings.extensions.mojom.URLPatternSetSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_policy_allowed_hosts', 56, 0, mojo.internal.bindings.extensions.mojom.URLPatternSetSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_id', 64, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_worker_activation_token', 72, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_guid', 80, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_creation_flags', 88, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_uses_default_policy_blocked_allowed_hosts', 92, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_user_scripts_allowed', 92, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 104]]);

// Struct: UserScriptWorldInfo
mojo.internal.Struct(
    mojo.internal.bindings.extensions.mojom.UserScriptWorldInfoSpec, 'extensions.mojom.UserScriptWorldInfo', [
      mojo.internal.StructField('arg_extension_id', 0, 0, mojo.internal.bindings.extensions.mojom.ExtensionIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_world_id', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_csp', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_enable_messaging', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: Renderer
mojo.internal.Struct(
    mojo.internal.bindings.extensions.mojom.Renderer_ActivateExtension_ParamsSpec, 'extensions.mojom.Renderer_ActivateExtension_Params', [
      mojo.internal.StructField('arg_extension_id', 0, 0, mojo.internal.bindings.extensions.mojom.ExtensionIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.extensions.mojom.Renderer_SetActivityLoggingEnabled_ParamsSpec, 'extensions.mojom.Renderer_SetActivityLoggingEnabled_Params', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.extensions.mojom.Renderer_LoadExtensions_ParamsSpec, 'extensions.mojom.Renderer_LoadExtensions_Params', [
      mojo.internal.StructField('arg_params', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.extensions.mojom.ExtensionLoadedParamsSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.extensions.mojom.Renderer_UnloadExtension_ParamsSpec, 'extensions.mojom.Renderer_UnloadExtension_Params', [
      mojo.internal.StructField('arg_extension_id', 0, 0, mojo.internal.bindings.extensions.mojom.ExtensionIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.extensions.mojom.Renderer_SuspendExtension_ParamsSpec, 'extensions.mojom.Renderer_SuspendExtension_Params', [
      mojo.internal.StructField('arg_extension_id', 0, 0, mojo.internal.bindings.extensions.mojom.ExtensionIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.extensions.mojom.Renderer_SuspendExtension_ResponseParamsSpec, 'extensions.mojom.Renderer_SuspendExtension_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.extensions.mojom.Renderer_CancelSuspendExtension_ParamsSpec, 'extensions.mojom.Renderer_CancelSuspendExtension_Params', [
      mojo.internal.StructField('arg_extension_id', 0, 0, mojo.internal.bindings.extensions.mojom.ExtensionIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.extensions.mojom.Renderer_SetDeveloperMode_ParamsSpec, 'extensions.mojom.Renderer_SetDeveloperMode_Params', [
      mojo.internal.StructField('arg_developer_mode_only', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.extensions.mojom.Renderer_SetUserScriptsAllowed_ParamsSpec, 'extensions.mojom.Renderer_SetUserScriptsAllowed_Params', [
      mojo.internal.StructField('arg_extension_id', 0, 0, mojo.internal.bindings.extensions.mojom.ExtensionIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_allowed', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.extensions.mojom.Renderer_SetSessionInfo_ParamsSpec, 'extensions.mojom.Renderer_SetSessionInfo_Params', [
      mojo.internal.StructField('arg_channel', 0, 0, mojo.internal.bindings.extensions.mojom.ChannelSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_session', 8, 0, mojo.internal.bindings.extensions.mojom.FeatureSessionTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.extensions.mojom.Renderer_SetSystemFont_ParamsSpec, 'extensions.mojom.Renderer_SetSystemFont_Params', [
      mojo.internal.StructField('arg_font_family', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_font_size', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.extensions.mojom.Renderer_SetWebViewPartitionID_ParamsSpec, 'extensions.mojom.Renderer_SetWebViewPartitionID_Params', [
      mojo.internal.StructField('arg_partition_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.extensions.mojom.Renderer_SetScriptingAllowlist_ParamsSpec, 'extensions.mojom.Renderer_SetScriptingAllowlist_Params', [
      mojo.internal.StructField('arg_extension_ids', 0, 0, mojo.internal.Array(mojo.internal.bindings.extensions.mojom.ExtensionIdSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.extensions.mojom.Renderer_UpdateUserScriptWorlds_ParamsSpec, 'extensions.mojom.Renderer_UpdateUserScriptWorlds_Params', [
      mojo.internal.StructField('arg_infos', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.extensions.mojom.UserScriptWorldInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.extensions.mojom.Renderer_ClearUserScriptWorldConfig_ParamsSpec, 'extensions.mojom.Renderer_ClearUserScriptWorldConfig_Params', [
      mojo.internal.StructField('arg_extension_id', 0, 0, mojo.internal.bindings.extensions.mojom.ExtensionIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_world_id', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.extensions.mojom.Renderer_ShouldSuspend_ParamsSpec, 'extensions.mojom.Renderer_ShouldSuspend_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.extensions.mojom.Renderer_ShouldSuspend_ResponseParamsSpec, 'extensions.mojom.Renderer_ShouldSuspend_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.extensions.mojom.Renderer_TransferBlobs_ParamsSpec, 'extensions.mojom.Renderer_TransferBlobs_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.extensions.mojom.Renderer_TransferBlobs_ResponseParamsSpec, 'extensions.mojom.Renderer_TransferBlobs_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.extensions.mojom.Renderer_UpdatePermissions_ParamsSpec, 'extensions.mojom.Renderer_UpdatePermissions_Params', [
      mojo.internal.StructField('arg_extension_id', 0, 0, mojo.internal.bindings.extensions.mojom.ExtensionIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_active_permissions', 8, 0, mojo.internal.bindings.extensions.mojom.PermissionSetSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_withheld_permissions', 16, 0, mojo.internal.bindings.extensions.mojom.PermissionSetSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_policy_blocked_hosts', 24, 0, mojo.internal.bindings.extensions.mojom.URLPatternSetSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_policy_allowed_hosts', 32, 0, mojo.internal.bindings.extensions.mojom.URLPatternSetSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_uses_default_policy_host_restrictions', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    mojo.internal.bindings.extensions.mojom.Renderer_UpdateDefaultPolicyHostRestrictions_ParamsSpec, 'extensions.mojom.Renderer_UpdateDefaultPolicyHostRestrictions_Params', [
      mojo.internal.StructField('arg_default_policy_blocked_hosts', 0, 0, mojo.internal.bindings.extensions.mojom.URLPatternSetSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_default_policy_allowed_hosts', 8, 0, mojo.internal.bindings.extensions.mojom.URLPatternSetSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.extensions.mojom.Renderer_UpdateUserHostRestrictions_ParamsSpec, 'extensions.mojom.Renderer_UpdateUserHostRestrictions_Params', [
      mojo.internal.StructField('arg_user_blocked_hosts', 0, 0, mojo.internal.bindings.extensions.mojom.URLPatternSetSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_user_allowed_hosts', 8, 0, mojo.internal.bindings.extensions.mojom.URLPatternSetSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.extensions.mojom.Renderer_UpdateTabSpecificPermissions_ParamsSpec, 'extensions.mojom.Renderer_UpdateTabSpecificPermissions_Params', [
      mojo.internal.StructField('arg_extension_id', 0, 0, mojo.internal.bindings.extensions.mojom.ExtensionIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_new_hosts', 8, 0, mojo.internal.bindings.extensions.mojom.URLPatternSetSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_tab_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_update_origin_allowlist', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.extensions.mojom.Renderer_UpdateUserScripts_ParamsSpec, 'extensions.mojom.Renderer_UpdateUserScripts_Params', [
      mojo.internal.StructField('arg_region', 0, 0, mojo.internal.bindings.mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_owner', 8, 0, mojo.internal.bindings.extensions.mojom.HostIDSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.extensions.mojom.Renderer_ClearTabSpecificPermissions_ParamsSpec, 'extensions.mojom.Renderer_ClearTabSpecificPermissions_Params', [
      mojo.internal.StructField('arg_extension_ids', 0, 0, mojo.internal.Array(mojo.internal.bindings.extensions.mojom.ExtensionIdSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_tab_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_update_origin_allowlist', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.extensions.mojom.Renderer_WatchPages_ParamsSpec, 'extensions.mojom.Renderer_WatchPages_Params', [
      mojo.internal.StructField('arg_css_selectors', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.extensions.mojom.RendererPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.extensions.mojom.RendererRemote = class {
  static get $interfaceName() {
    return 'extensions.mojom.Renderer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.extensions.mojom.RendererPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.extensions.mojom.RendererRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  activateExtension(arg_extension_id) {
    return this.$.activateExtension(arg_extension_id);
  }
  setActivityLoggingEnabled(arg_enabled) {
    return this.$.setActivityLoggingEnabled(arg_enabled);
  }
  loadExtensions(arg_params) {
    return this.$.loadExtensions(arg_params);
  }
  unloadExtension(arg_extension_id) {
    return this.$.unloadExtension(arg_extension_id);
  }
  suspendExtension(arg_extension_id) {
    return this.$.suspendExtension(arg_extension_id);
  }
  cancelSuspendExtension(arg_extension_id) {
    return this.$.cancelSuspendExtension(arg_extension_id);
  }
  setDeveloperMode(arg_developer_mode_only) {
    return this.$.setDeveloperMode(arg_developer_mode_only);
  }
  setUserScriptsAllowed(arg_extension_id, arg_allowed) {
    return this.$.setUserScriptsAllowed(arg_extension_id, arg_allowed);
  }
  setSessionInfo(arg_channel, arg_session) {
    return this.$.setSessionInfo(arg_channel, arg_session);
  }
  setSystemFont(arg_font_family, arg_font_size) {
    return this.$.setSystemFont(arg_font_family, arg_font_size);
  }
  setWebViewPartitionID(arg_partition_id) {
    return this.$.setWebViewPartitionID(arg_partition_id);
  }
  setScriptingAllowlist(arg_extension_ids) {
    return this.$.setScriptingAllowlist(arg_extension_ids);
  }
  updateUserScriptWorlds(arg_infos) {
    return this.$.updateUserScriptWorlds(arg_infos);
  }
  clearUserScriptWorldConfig(arg_extension_id, arg_world_id) {
    return this.$.clearUserScriptWorldConfig(arg_extension_id, arg_world_id);
  }
  shouldSuspend() {
    return this.$.shouldSuspend();
  }
  transferBlobs() {
    return this.$.transferBlobs();
  }
  updatePermissions(arg_extension_id, arg_active_permissions, arg_withheld_permissions, arg_policy_blocked_hosts, arg_policy_allowed_hosts, arg_uses_default_policy_host_restrictions) {
    return this.$.updatePermissions(arg_extension_id, arg_active_permissions, arg_withheld_permissions, arg_policy_blocked_hosts, arg_policy_allowed_hosts, arg_uses_default_policy_host_restrictions);
  }
  updateDefaultPolicyHostRestrictions(arg_default_policy_blocked_hosts, arg_default_policy_allowed_hosts) {
    return this.$.updateDefaultPolicyHostRestrictions(arg_default_policy_blocked_hosts, arg_default_policy_allowed_hosts);
  }
  updateUserHostRestrictions(arg_user_blocked_hosts, arg_user_allowed_hosts) {
    return this.$.updateUserHostRestrictions(arg_user_blocked_hosts, arg_user_allowed_hosts);
  }
  updateTabSpecificPermissions(arg_extension_id, arg_new_hosts, arg_tab_id, arg_update_origin_allowlist) {
    return this.$.updateTabSpecificPermissions(arg_extension_id, arg_new_hosts, arg_tab_id, arg_update_origin_allowlist);
  }
  updateUserScripts(arg_region, arg_owner) {
    return this.$.updateUserScripts(arg_region, arg_owner);
  }
  clearTabSpecificPermissions(arg_extension_ids, arg_tab_id, arg_update_origin_allowlist) {
    return this.$.clearTabSpecificPermissions(arg_extension_ids, arg_tab_id, arg_update_origin_allowlist);
  }
  watchPages(arg_css_selectors) {
    return this.$.watchPages(arg_css_selectors);
  }
};

mojo.internal.bindings.extensions.mojom.RendererRemoteCallHandler = class {
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

  activateExtension(arg_extension_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.extensions.mojom.Renderer_ActivateExtension_ParamsSpec,
      null,
      [arg_extension_id],
      false);
  }

  setActivityLoggingEnabled(arg_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.extensions.mojom.Renderer_SetActivityLoggingEnabled_ParamsSpec,
      null,
      [arg_enabled],
      false);
  }

  loadExtensions(arg_params) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.extensions.mojom.Renderer_LoadExtensions_ParamsSpec,
      null,
      [arg_params],
      false);
  }

  unloadExtension(arg_extension_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.extensions.mojom.Renderer_UnloadExtension_ParamsSpec,
      null,
      [arg_extension_id],
      false);
  }

  suspendExtension(arg_extension_id) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.extensions.mojom.Renderer_SuspendExtension_ParamsSpec,
      mojo.internal.bindings.extensions.mojom.Renderer_SuspendExtension_ResponseParamsSpec,
      [arg_extension_id],
      false);
  }

  cancelSuspendExtension(arg_extension_id) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.extensions.mojom.Renderer_CancelSuspendExtension_ParamsSpec,
      null,
      [arg_extension_id],
      false);
  }

  setDeveloperMode(arg_developer_mode_only) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.extensions.mojom.Renderer_SetDeveloperMode_ParamsSpec,
      null,
      [arg_developer_mode_only],
      false);
  }

  setUserScriptsAllowed(arg_extension_id, arg_allowed) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.extensions.mojom.Renderer_SetUserScriptsAllowed_ParamsSpec,
      null,
      [arg_extension_id, arg_allowed],
      false);
  }

  setSessionInfo(arg_channel, arg_session) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.extensions.mojom.Renderer_SetSessionInfo_ParamsSpec,
      null,
      [arg_channel, arg_session],
      false);
  }

  setSystemFont(arg_font_family, arg_font_size) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.extensions.mojom.Renderer_SetSystemFont_ParamsSpec,
      null,
      [arg_font_family, arg_font_size],
      false);
  }

  setWebViewPartitionID(arg_partition_id) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.extensions.mojom.Renderer_SetWebViewPartitionID_ParamsSpec,
      null,
      [arg_partition_id],
      false);
  }

  setScriptingAllowlist(arg_extension_ids) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.extensions.mojom.Renderer_SetScriptingAllowlist_ParamsSpec,
      null,
      [arg_extension_ids],
      false);
  }

  updateUserScriptWorlds(arg_infos) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.extensions.mojom.Renderer_UpdateUserScriptWorlds_ParamsSpec,
      null,
      [arg_infos],
      false);
  }

  clearUserScriptWorldConfig(arg_extension_id, arg_world_id) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.extensions.mojom.Renderer_ClearUserScriptWorldConfig_ParamsSpec,
      null,
      [arg_extension_id, arg_world_id],
      false);
  }

  shouldSuspend() {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.extensions.mojom.Renderer_ShouldSuspend_ParamsSpec,
      mojo.internal.bindings.extensions.mojom.Renderer_ShouldSuspend_ResponseParamsSpec,
      [],
      false);
  }

  transferBlobs() {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.extensions.mojom.Renderer_TransferBlobs_ParamsSpec,
      mojo.internal.bindings.extensions.mojom.Renderer_TransferBlobs_ResponseParamsSpec,
      [],
      false);
  }

  updatePermissions(arg_extension_id, arg_active_permissions, arg_withheld_permissions, arg_policy_blocked_hosts, arg_policy_allowed_hosts, arg_uses_default_policy_host_restrictions) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.extensions.mojom.Renderer_UpdatePermissions_ParamsSpec,
      null,
      [arg_extension_id, arg_active_permissions, arg_withheld_permissions, arg_policy_blocked_hosts, arg_policy_allowed_hosts, arg_uses_default_policy_host_restrictions],
      false);
  }

  updateDefaultPolicyHostRestrictions(arg_default_policy_blocked_hosts, arg_default_policy_allowed_hosts) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      mojo.internal.bindings.extensions.mojom.Renderer_UpdateDefaultPolicyHostRestrictions_ParamsSpec,
      null,
      [arg_default_policy_blocked_hosts, arg_default_policy_allowed_hosts],
      false);
  }

  updateUserHostRestrictions(arg_user_blocked_hosts, arg_user_allowed_hosts) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      mojo.internal.bindings.extensions.mojom.Renderer_UpdateUserHostRestrictions_ParamsSpec,
      null,
      [arg_user_blocked_hosts, arg_user_allowed_hosts],
      false);
  }

  updateTabSpecificPermissions(arg_extension_id, arg_new_hosts, arg_tab_id, arg_update_origin_allowlist) {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      mojo.internal.bindings.extensions.mojom.Renderer_UpdateTabSpecificPermissions_ParamsSpec,
      null,
      [arg_extension_id, arg_new_hosts, arg_tab_id, arg_update_origin_allowlist],
      false);
  }

  updateUserScripts(arg_region, arg_owner) {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      mojo.internal.bindings.extensions.mojom.Renderer_UpdateUserScripts_ParamsSpec,
      null,
      [arg_region, arg_owner],
      false);
  }

  clearTabSpecificPermissions(arg_extension_ids, arg_tab_id, arg_update_origin_allowlist) {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      mojo.internal.bindings.extensions.mojom.Renderer_ClearTabSpecificPermissions_ParamsSpec,
      null,
      [arg_extension_ids, arg_tab_id, arg_update_origin_allowlist],
      false);
  }

  watchPages(arg_css_selectors) {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      mojo.internal.bindings.extensions.mojom.Renderer_WatchPages_ParamsSpec,
      null,
      [arg_css_selectors],
      false);
  }

};

mojo.internal.bindings.extensions.mojom.Renderer.getRemote = function() {
  let remote = new mojo.internal.bindings.extensions.mojom.RendererRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'extensions.mojom.Renderer',
    'context');
  return remote.$;
};

mojo.internal.bindings.extensions.mojom.RendererReceiver = class {
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
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
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
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: ActivateExtension
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.Renderer_ActivateExtension_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.Renderer_SetActivityLoggingEnabled_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.Renderer_LoadExtensions_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.Renderer_UnloadExtension_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.Renderer_SuspendExtension_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.Renderer_CancelSuspendExtension_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.Renderer_SetDeveloperMode_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.Renderer_SetUserScriptsAllowed_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.Renderer_SetSessionInfo_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.Renderer_SetSystemFont_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.Renderer_SetWebViewPartitionID_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.Renderer_SetScriptingAllowlist_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.Renderer_UpdateUserScriptWorlds_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.Renderer_ClearUserScriptWorldConfig_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.Renderer_ShouldSuspend_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.Renderer_TransferBlobs_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.Renderer_UpdatePermissions_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.Renderer_UpdateDefaultPolicyHostRestrictions_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.Renderer_UpdateUserHostRestrictions_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.Renderer_UpdateTabSpecificPermissions_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.Renderer_UpdateUserScripts_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.Renderer_ClearTabSpecificPermissions_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.Renderer_WatchPages_ParamsSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.Renderer_ActivateExtension_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.activateExtension');
          const result = this.impl.activateExtension(params.arg_extension_id);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.Renderer_SetActivityLoggingEnabled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setActivityLoggingEnabled');
          const result = this.impl.setActivityLoggingEnabled(params.arg_enabled);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.Renderer_LoadExtensions_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.loadExtensions');
          const result = this.impl.loadExtensions(params.arg_params);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.Renderer_UnloadExtension_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.unloadExtension');
          const result = this.impl.unloadExtension(params.arg_extension_id);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.Renderer_SuspendExtension_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.suspendExtension');
          const result = this.impl.suspendExtension(params.arg_extension_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.extensions.mojom.Renderer_SuspendExtension_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SuspendExtension FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.Renderer_CancelSuspendExtension_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.cancelSuspendExtension');
          const result = this.impl.cancelSuspendExtension(params.arg_extension_id);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.Renderer_SetDeveloperMode_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setDeveloperMode');
          const result = this.impl.setDeveloperMode(params.arg_developer_mode_only);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.Renderer_SetUserScriptsAllowed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setUserScriptsAllowed');
          const result = this.impl.setUserScriptsAllowed(params.arg_extension_id, params.arg_allowed);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.Renderer_SetSessionInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setSessionInfo');
          const result = this.impl.setSessionInfo(params.arg_channel, params.arg_session);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.Renderer_SetSystemFont_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setSystemFont');
          const result = this.impl.setSystemFont(params.arg_font_family, params.arg_font_size);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.Renderer_SetWebViewPartitionID_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setWebViewPartitionID');
          const result = this.impl.setWebViewPartitionID(params.arg_partition_id);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.Renderer_SetScriptingAllowlist_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setScriptingAllowlist');
          const result = this.impl.setScriptingAllowlist(params.arg_extension_ids);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.Renderer_UpdateUserScriptWorlds_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateUserScriptWorlds');
          const result = this.impl.updateUserScriptWorlds(params.arg_infos);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.Renderer_ClearUserScriptWorldConfig_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clearUserScriptWorldConfig');
          const result = this.impl.clearUserScriptWorldConfig(params.arg_extension_id, params.arg_world_id);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.Renderer_ShouldSuspend_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.shouldSuspend');
          const result = this.impl.shouldSuspend();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.extensions.mojom.Renderer_ShouldSuspend_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ShouldSuspend FAILED:', e));
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.Renderer_TransferBlobs_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.transferBlobs');
          const result = this.impl.transferBlobs();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.extensions.mojom.Renderer_TransferBlobs_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] TransferBlobs FAILED:', e));
          }
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.Renderer_UpdatePermissions_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updatePermissions');
          const result = this.impl.updatePermissions(params.arg_extension_id, params.arg_active_permissions, params.arg_withheld_permissions, params.arg_policy_blocked_hosts, params.arg_policy_allowed_hosts, params.arg_uses_default_policy_host_restrictions);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.Renderer_UpdateDefaultPolicyHostRestrictions_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateDefaultPolicyHostRestrictions');
          const result = this.impl.updateDefaultPolicyHostRestrictions(params.arg_default_policy_blocked_hosts, params.arg_default_policy_allowed_hosts);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.Renderer_UpdateUserHostRestrictions_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateUserHostRestrictions');
          const result = this.impl.updateUserHostRestrictions(params.arg_user_blocked_hosts, params.arg_user_allowed_hosts);
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.Renderer_UpdateTabSpecificPermissions_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateTabSpecificPermissions');
          const result = this.impl.updateTabSpecificPermissions(params.arg_extension_id, params.arg_new_hosts, params.arg_tab_id, params.arg_update_origin_allowlist);
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.Renderer_UpdateUserScripts_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateUserScripts');
          const result = this.impl.updateUserScripts(params.arg_region, params.arg_owner);
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.Renderer_ClearTabSpecificPermissions_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clearTabSpecificPermissions');
          const result = this.impl.clearTabSpecificPermissions(params.arg_extension_ids, params.arg_tab_id, params.arg_update_origin_allowlist);
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.extensions.mojom.Renderer_WatchPages_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.watchPages');
          const result = this.impl.watchPages(params.arg_css_selectors);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.extensions.mojom.RendererReceiver = mojo.internal.bindings.extensions.mojom.RendererReceiver;

mojo.internal.bindings.extensions.mojom.RendererPtr = mojo.internal.bindings.extensions.mojom.RendererRemote;
mojo.internal.bindings.extensions.mojom.RendererRequest = mojo.internal.bindings.extensions.mojom.RendererPendingReceiver;

