// Auto-generated MojoJS binding
 // Source: chromium_src/chrome/browser/ui/webui/web_app_internals/web_app_internals.mojom
 // Module: mojom

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
 

 mojo.internal.bindings.mojom = mojo.internal.bindings.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.mojom.InstallIsolatedWebAppResultSpec = { $: {} };
mojo.internal.bindings.mojom.IwaDevModeLocationSpec = { $: {} };
mojo.internal.bindings.mojom.ParseUpdateManifestFromUrlResultSpec = { $: {} };
mojo.internal.bindings.mojom.InstallIsolatedWebAppSuccessSpec = { $: {} };
mojo.internal.bindings.mojom.UpdateInfoSpec = { $: {} };
mojo.internal.bindings.mojom.IwaDevModeAppInfoSpec = { $: {} };
mojo.internal.bindings.mojom.VersionEntrySpec = { $: {} };
mojo.internal.bindings.mojom.UpdateManifestSpec = { $: {} };
mojo.internal.bindings.mojom.InstallFromBundleUrlParamsSpec = { $: {} };
mojo.internal.bindings.mojom.WebAppInternalsHandler = {};
mojo.internal.bindings.mojom.WebAppInternalsHandler.$interfaceName = 'mojom.WebAppInternalsHandler';
mojo.internal.bindings.mojom.WebAppInternalsHandler_GetDebugInfoAsJsonString_ParamsSpec = { $: {} };
mojo.internal.bindings.mojom.WebAppInternalsHandler_GetDebugInfoAsJsonString_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.mojom.WebAppInternalsHandler_InstallIsolatedWebAppFromDevProxy_ParamsSpec = { $: {} };
mojo.internal.bindings.mojom.WebAppInternalsHandler_InstallIsolatedWebAppFromDevProxy_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.mojom.WebAppInternalsHandler_SelectFileAndInstallIsolatedWebAppFromDevBundle_ParamsSpec = { $: {} };
mojo.internal.bindings.mojom.WebAppInternalsHandler_SelectFileAndInstallIsolatedWebAppFromDevBundle_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.mojom.WebAppInternalsHandler_ParseUpdateManifestFromUrl_ParamsSpec = { $: {} };
mojo.internal.bindings.mojom.WebAppInternalsHandler_ParseUpdateManifestFromUrl_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.mojom.WebAppInternalsHandler_InstallIsolatedWebAppFromBundleUrl_ParamsSpec = { $: {} };
mojo.internal.bindings.mojom.WebAppInternalsHandler_InstallIsolatedWebAppFromBundleUrl_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.mojom.WebAppInternalsHandler_UpdateDevProxyIsolatedWebApp_ParamsSpec = { $: {} };
mojo.internal.bindings.mojom.WebAppInternalsHandler_UpdateDevProxyIsolatedWebApp_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.mojom.WebAppInternalsHandler_SelectFileAndUpdateIsolatedWebAppFromDevBundle_ParamsSpec = { $: {} };
mojo.internal.bindings.mojom.WebAppInternalsHandler_SelectFileAndUpdateIsolatedWebAppFromDevBundle_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.mojom.WebAppInternalsHandler_UpdateManifestInstalledIsolatedWebApp_ParamsSpec = { $: {} };
mojo.internal.bindings.mojom.WebAppInternalsHandler_UpdateManifestInstalledIsolatedWebApp_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.mojom.WebAppInternalsHandler_DeleteIsolatedWebApp_ParamsSpec = { $: {} };
mojo.internal.bindings.mojom.WebAppInternalsHandler_DeleteIsolatedWebApp_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.mojom.WebAppInternalsHandler_SetUpdateChannelForIsolatedWebApp_ParamsSpec = { $: {} };
mojo.internal.bindings.mojom.WebAppInternalsHandler_SetUpdateChannelForIsolatedWebApp_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.mojom.WebAppInternalsHandler_SetPinnedVersionForIsolatedWebApp_ParamsSpec = { $: {} };
mojo.internal.bindings.mojom.WebAppInternalsHandler_SetPinnedVersionForIsolatedWebApp_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.mojom.WebAppInternalsHandler_ResetPinnedVersionForIsolatedWebApp_ParamsSpec = { $: {} };
mojo.internal.bindings.mojom.WebAppInternalsHandler_SetAllowDowngradesForIsolatedWebApp_ParamsSpec = { $: {} };
mojo.internal.bindings.mojom.WebAppInternalsHandler_SearchForIsolatedWebAppUpdates_ParamsSpec = { $: {} };
mojo.internal.bindings.mojom.WebAppInternalsHandler_SearchForIsolatedWebAppUpdates_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.mojom.WebAppInternalsHandler_GetIsolatedWebAppDevModeAppInfo_ParamsSpec = { $: {} };
mojo.internal.bindings.mojom.WebAppInternalsHandler_GetIsolatedWebAppDevModeAppInfo_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.mojom.WebAppInternalsHandler_RotateKey_ParamsSpec = { $: {} };

// Union: InstallIsolatedWebAppResult
mojo.internal.Union(
    mojo.internal.bindings.mojom.InstallIsolatedWebAppResultSpec, 'mojom.InstallIsolatedWebAppResult', {
      'arg_success': {
        'ordinal': 0,
        'type': mojo.internal.bindings.mojo.internal.bindings.mojom.InstallIsolatedWebAppSuccessSpec.$,
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.String,
        'nullable': false,
      },
    });

// Union: IwaDevModeLocation
mojo.internal.Union(
    mojo.internal.bindings.mojom.IwaDevModeLocationSpec, 'mojom.IwaDevModeLocation', {
      'arg_proxy_origin': {
        'ordinal': 0,
        'type': mojo.internal.bindings.url.mojom.OriginSpec.$,
        'nullable': false,
      },
      'arg_bundle_path': {
        'ordinal': 1,
        'type': mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$,
        'nullable': false,
      },
    });

// Union: ParseUpdateManifestFromUrlResult
mojo.internal.Union(
    mojo.internal.bindings.mojom.ParseUpdateManifestFromUrlResultSpec, 'mojom.ParseUpdateManifestFromUrlResult', {
      'arg_update_manifest': {
        'ordinal': 0,
        'type': mojo.internal.bindings.mojo.internal.bindings.mojom.UpdateManifestSpec.$,
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.String,
        'nullable': false,
      },
    });

// Struct: InstallIsolatedWebAppSuccess
mojo.internal.Struct(
    mojo.internal.bindings.mojom.InstallIsolatedWebAppSuccessSpec, 'mojom.InstallIsolatedWebAppSuccess', [
      mojo.internal.StructField('arg_web_bundle_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: UpdateInfo
mojo.internal.Struct(
    mojo.internal.bindings.mojom.UpdateInfoSpec, 'mojom.UpdateInfo', [
      mojo.internal.StructField('arg_update_manifest_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_update_channel', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_pinned_version', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_allow_downgrades', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: IwaDevModeAppInfo
mojo.internal.Struct(
    mojo.internal.bindings.mojom.IwaDevModeAppInfoSpec, 'mojom.IwaDevModeAppInfo', [
      mojo.internal.StructField('arg_app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_web_bundle_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_location', 24, 0, mojo.internal.bindings.mojom.IwaDevModeLocationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_installed_version', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_update_info', 40, 0, mojo.internal.bindings.mojo.internal.bindings.mojom.UpdateInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 56]]);

// Struct: VersionEntry
mojo.internal.Struct(
    mojo.internal.bindings.mojom.VersionEntrySpec, 'mojom.VersionEntry', [
      mojo.internal.StructField('arg_version', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_web_bundle_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: UpdateManifest
mojo.internal.Struct(
    mojo.internal.bindings.mojom.UpdateManifestSpec, 'mojom.UpdateManifest', [
      mojo.internal.StructField('arg_versions', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.mojom.VersionEntrySpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: InstallFromBundleUrlParams
mojo.internal.Struct(
    mojo.internal.bindings.mojom.InstallFromBundleUrlParamsSpec, 'mojom.InstallFromBundleUrlParams', [
      mojo.internal.StructField('arg_web_bundle_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_update_info', 8, 0, mojo.internal.bindings.mojo.internal.bindings.mojom.UpdateInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: WebAppInternalsHandler
mojo.internal.Struct(
    mojo.internal.bindings.mojom.WebAppInternalsHandler_GetDebugInfoAsJsonString_ParamsSpec, 'mojom.WebAppInternalsHandler_GetDebugInfoAsJsonString_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.mojom.WebAppInternalsHandler_GetDebugInfoAsJsonString_ResponseParamsSpec, 'mojom.WebAppInternalsHandler_GetDebugInfoAsJsonString_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.mojom.WebAppInternalsHandler_InstallIsolatedWebAppFromDevProxy_ParamsSpec, 'mojom.WebAppInternalsHandler_InstallIsolatedWebAppFromDevProxy_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.mojom.WebAppInternalsHandler_InstallIsolatedWebAppFromDevProxy_ResponseParamsSpec, 'mojom.WebAppInternalsHandler_InstallIsolatedWebAppFromDevProxy_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojom.InstallIsolatedWebAppResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.mojom.WebAppInternalsHandler_SelectFileAndInstallIsolatedWebAppFromDevBundle_ParamsSpec, 'mojom.WebAppInternalsHandler_SelectFileAndInstallIsolatedWebAppFromDevBundle_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.mojom.WebAppInternalsHandler_SelectFileAndInstallIsolatedWebAppFromDevBundle_ResponseParamsSpec, 'mojom.WebAppInternalsHandler_SelectFileAndInstallIsolatedWebAppFromDevBundle_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojom.InstallIsolatedWebAppResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.mojom.WebAppInternalsHandler_ParseUpdateManifestFromUrl_ParamsSpec, 'mojom.WebAppInternalsHandler_ParseUpdateManifestFromUrl_Params', [
      mojo.internal.StructField('arg_update_manifest_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.mojom.WebAppInternalsHandler_ParseUpdateManifestFromUrl_ResponseParamsSpec, 'mojom.WebAppInternalsHandler_ParseUpdateManifestFromUrl_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojom.ParseUpdateManifestFromUrlResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.mojom.WebAppInternalsHandler_InstallIsolatedWebAppFromBundleUrl_ParamsSpec, 'mojom.WebAppInternalsHandler_InstallIsolatedWebAppFromBundleUrl_Params', [
      mojo.internal.StructField('arg_params', 0, 0, mojo.internal.bindings.mojo.internal.bindings.mojom.InstallFromBundleUrlParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.mojom.WebAppInternalsHandler_InstallIsolatedWebAppFromBundleUrl_ResponseParamsSpec, 'mojom.WebAppInternalsHandler_InstallIsolatedWebAppFromBundleUrl_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojom.InstallIsolatedWebAppResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.mojom.WebAppInternalsHandler_UpdateDevProxyIsolatedWebApp_ParamsSpec, 'mojom.WebAppInternalsHandler_UpdateDevProxyIsolatedWebApp_Params', [
      mojo.internal.StructField('arg_app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.mojom.WebAppInternalsHandler_UpdateDevProxyIsolatedWebApp_ResponseParamsSpec, 'mojom.WebAppInternalsHandler_UpdateDevProxyIsolatedWebApp_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.mojom.WebAppInternalsHandler_SelectFileAndUpdateIsolatedWebAppFromDevBundle_ParamsSpec, 'mojom.WebAppInternalsHandler_SelectFileAndUpdateIsolatedWebAppFromDevBundle_Params', [
      mojo.internal.StructField('arg_app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.mojom.WebAppInternalsHandler_SelectFileAndUpdateIsolatedWebAppFromDevBundle_ResponseParamsSpec, 'mojom.WebAppInternalsHandler_SelectFileAndUpdateIsolatedWebAppFromDevBundle_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.mojom.WebAppInternalsHandler_UpdateManifestInstalledIsolatedWebApp_ParamsSpec, 'mojom.WebAppInternalsHandler_UpdateManifestInstalledIsolatedWebApp_Params', [
      mojo.internal.StructField('arg_app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.mojom.WebAppInternalsHandler_UpdateManifestInstalledIsolatedWebApp_ResponseParamsSpec, 'mojom.WebAppInternalsHandler_UpdateManifestInstalledIsolatedWebApp_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.mojom.WebAppInternalsHandler_DeleteIsolatedWebApp_ParamsSpec, 'mojom.WebAppInternalsHandler_DeleteIsolatedWebApp_Params', [
      mojo.internal.StructField('arg_app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.mojom.WebAppInternalsHandler_DeleteIsolatedWebApp_ResponseParamsSpec, 'mojom.WebAppInternalsHandler_DeleteIsolatedWebApp_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.mojom.WebAppInternalsHandler_SetUpdateChannelForIsolatedWebApp_ParamsSpec, 'mojom.WebAppInternalsHandler_SetUpdateChannelForIsolatedWebApp_Params', [
      mojo.internal.StructField('arg_app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_update_channel', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.mojom.WebAppInternalsHandler_SetUpdateChannelForIsolatedWebApp_ResponseParamsSpec, 'mojom.WebAppInternalsHandler_SetUpdateChannelForIsolatedWebApp_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.mojom.WebAppInternalsHandler_SetPinnedVersionForIsolatedWebApp_ParamsSpec, 'mojom.WebAppInternalsHandler_SetPinnedVersionForIsolatedWebApp_Params', [
      mojo.internal.StructField('arg_app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_pinned_version', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.mojom.WebAppInternalsHandler_SetPinnedVersionForIsolatedWebApp_ResponseParamsSpec, 'mojom.WebAppInternalsHandler_SetPinnedVersionForIsolatedWebApp_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.mojom.WebAppInternalsHandler_ResetPinnedVersionForIsolatedWebApp_ParamsSpec, 'mojom.WebAppInternalsHandler_ResetPinnedVersionForIsolatedWebApp_Params', [
      mojo.internal.StructField('arg_app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.mojom.WebAppInternalsHandler_SetAllowDowngradesForIsolatedWebApp_ParamsSpec, 'mojom.WebAppInternalsHandler_SetAllowDowngradesForIsolatedWebApp_Params', [
      mojo.internal.StructField('arg_app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_allow_downgrades', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.mojom.WebAppInternalsHandler_SearchForIsolatedWebAppUpdates_ParamsSpec, 'mojom.WebAppInternalsHandler_SearchForIsolatedWebAppUpdates_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.mojom.WebAppInternalsHandler_SearchForIsolatedWebAppUpdates_ResponseParamsSpec, 'mojom.WebAppInternalsHandler_SearchForIsolatedWebAppUpdates_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.mojom.WebAppInternalsHandler_GetIsolatedWebAppDevModeAppInfo_ParamsSpec, 'mojom.WebAppInternalsHandler_GetIsolatedWebAppDevModeAppInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.mojom.WebAppInternalsHandler_GetIsolatedWebAppDevModeAppInfo_ResponseParamsSpec, 'mojom.WebAppInternalsHandler_GetIsolatedWebAppDevModeAppInfo_ResponseParams', [
      mojo.internal.StructField('arg_apps', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.mojom.IwaDevModeAppInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.mojom.WebAppInternalsHandler_RotateKey_ParamsSpec, 'mojom.WebAppInternalsHandler_RotateKey_Params', [
      mojo.internal.StructField('arg_web_bundle_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_rotated_key', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.mojom.WebAppInternalsHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.mojom.WebAppInternalsHandlerRemote = class {
  static get $interfaceName() {
    return 'mojom.WebAppInternalsHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.mojom.WebAppInternalsHandlerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.mojom.WebAppInternalsHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getDebugInfoAsJsonString() {
    return this.$.getDebugInfoAsJsonString();
  }
  installIsolatedWebAppFromDevProxy(arg_url) {
    return this.$.installIsolatedWebAppFromDevProxy(arg_url);
  }
  selectFileAndInstallIsolatedWebAppFromDevBundle() {
    return this.$.selectFileAndInstallIsolatedWebAppFromDevBundle();
  }
  parseUpdateManifestFromUrl(arg_update_manifest_url) {
    return this.$.parseUpdateManifestFromUrl(arg_update_manifest_url);
  }
  installIsolatedWebAppFromBundleUrl(arg_params) {
    return this.$.installIsolatedWebAppFromBundleUrl(arg_params);
  }
  updateDevProxyIsolatedWebApp(arg_app_id) {
    return this.$.updateDevProxyIsolatedWebApp(arg_app_id);
  }
  selectFileAndUpdateIsolatedWebAppFromDevBundle(arg_app_id) {
    return this.$.selectFileAndUpdateIsolatedWebAppFromDevBundle(arg_app_id);
  }
  updateManifestInstalledIsolatedWebApp(arg_app_id) {
    return this.$.updateManifestInstalledIsolatedWebApp(arg_app_id);
  }
  deleteIsolatedWebApp(arg_app_id) {
    return this.$.deleteIsolatedWebApp(arg_app_id);
  }
  setUpdateChannelForIsolatedWebApp(arg_app_id, arg_update_channel) {
    return this.$.setUpdateChannelForIsolatedWebApp(arg_app_id, arg_update_channel);
  }
  setPinnedVersionForIsolatedWebApp(arg_app_id, arg_pinned_version) {
    return this.$.setPinnedVersionForIsolatedWebApp(arg_app_id, arg_pinned_version);
  }
  resetPinnedVersionForIsolatedWebApp(arg_app_id) {
    return this.$.resetPinnedVersionForIsolatedWebApp(arg_app_id);
  }
  setAllowDowngradesForIsolatedWebApp(arg_allow_downgrades, arg_app_id) {
    return this.$.setAllowDowngradesForIsolatedWebApp(arg_allow_downgrades, arg_app_id);
  }
  searchForIsolatedWebAppUpdates() {
    return this.$.searchForIsolatedWebAppUpdates();
  }
  getIsolatedWebAppDevModeAppInfo() {
    return this.$.getIsolatedWebAppDevModeAppInfo();
  }
  rotateKey(arg_web_bundle_id, arg_rotated_key) {
    return this.$.rotateKey(arg_web_bundle_id, arg_rotated_key);
  }
};

mojo.internal.bindings.mojom.WebAppInternalsHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WebAppInternalsHandler', [
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

  getDebugInfoAsJsonString() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.mojom.WebAppInternalsHandler_GetDebugInfoAsJsonString_ParamsSpec,
      mojo.internal.bindings.mojom.WebAppInternalsHandler_GetDebugInfoAsJsonString_ResponseParamsSpec,
      [],
      false);
  }

  installIsolatedWebAppFromDevProxy(arg_url) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.mojom.WebAppInternalsHandler_InstallIsolatedWebAppFromDevProxy_ParamsSpec,
      mojo.internal.bindings.mojom.WebAppInternalsHandler_InstallIsolatedWebAppFromDevProxy_ResponseParamsSpec,
      [arg_url],
      false);
  }

  selectFileAndInstallIsolatedWebAppFromDevBundle() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.mojom.WebAppInternalsHandler_SelectFileAndInstallIsolatedWebAppFromDevBundle_ParamsSpec,
      mojo.internal.bindings.mojom.WebAppInternalsHandler_SelectFileAndInstallIsolatedWebAppFromDevBundle_ResponseParamsSpec,
      [],
      false);
  }

  parseUpdateManifestFromUrl(arg_update_manifest_url) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.mojom.WebAppInternalsHandler_ParseUpdateManifestFromUrl_ParamsSpec,
      mojo.internal.bindings.mojom.WebAppInternalsHandler_ParseUpdateManifestFromUrl_ResponseParamsSpec,
      [arg_update_manifest_url],
      false);
  }

  installIsolatedWebAppFromBundleUrl(arg_params) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.mojom.WebAppInternalsHandler_InstallIsolatedWebAppFromBundleUrl_ParamsSpec,
      mojo.internal.bindings.mojom.WebAppInternalsHandler_InstallIsolatedWebAppFromBundleUrl_ResponseParamsSpec,
      [arg_params],
      false);
  }

  updateDevProxyIsolatedWebApp(arg_app_id) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.mojom.WebAppInternalsHandler_UpdateDevProxyIsolatedWebApp_ParamsSpec,
      mojo.internal.bindings.mojom.WebAppInternalsHandler_UpdateDevProxyIsolatedWebApp_ResponseParamsSpec,
      [arg_app_id],
      false);
  }

  selectFileAndUpdateIsolatedWebAppFromDevBundle(arg_app_id) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.mojom.WebAppInternalsHandler_SelectFileAndUpdateIsolatedWebAppFromDevBundle_ParamsSpec,
      mojo.internal.bindings.mojom.WebAppInternalsHandler_SelectFileAndUpdateIsolatedWebAppFromDevBundle_ResponseParamsSpec,
      [arg_app_id],
      false);
  }

  updateManifestInstalledIsolatedWebApp(arg_app_id) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.mojom.WebAppInternalsHandler_UpdateManifestInstalledIsolatedWebApp_ParamsSpec,
      mojo.internal.bindings.mojom.WebAppInternalsHandler_UpdateManifestInstalledIsolatedWebApp_ResponseParamsSpec,
      [arg_app_id],
      false);
  }

  deleteIsolatedWebApp(arg_app_id) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.mojom.WebAppInternalsHandler_DeleteIsolatedWebApp_ParamsSpec,
      mojo.internal.bindings.mojom.WebAppInternalsHandler_DeleteIsolatedWebApp_ResponseParamsSpec,
      [arg_app_id],
      false);
  }

  setUpdateChannelForIsolatedWebApp(arg_app_id, arg_update_channel) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.mojom.WebAppInternalsHandler_SetUpdateChannelForIsolatedWebApp_ParamsSpec,
      mojo.internal.bindings.mojom.WebAppInternalsHandler_SetUpdateChannelForIsolatedWebApp_ResponseParamsSpec,
      [arg_app_id, arg_update_channel],
      false);
  }

  setPinnedVersionForIsolatedWebApp(arg_app_id, arg_pinned_version) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.mojom.WebAppInternalsHandler_SetPinnedVersionForIsolatedWebApp_ParamsSpec,
      mojo.internal.bindings.mojom.WebAppInternalsHandler_SetPinnedVersionForIsolatedWebApp_ResponseParamsSpec,
      [arg_app_id, arg_pinned_version],
      false);
  }

  resetPinnedVersionForIsolatedWebApp(arg_app_id) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.mojom.WebAppInternalsHandler_ResetPinnedVersionForIsolatedWebApp_ParamsSpec,
      null,
      [arg_app_id],
      false);
  }

  setAllowDowngradesForIsolatedWebApp(arg_allow_downgrades, arg_app_id) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.mojom.WebAppInternalsHandler_SetAllowDowngradesForIsolatedWebApp_ParamsSpec,
      null,
      [arg_allow_downgrades, arg_app_id],
      false);
  }

  searchForIsolatedWebAppUpdates() {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.mojom.WebAppInternalsHandler_SearchForIsolatedWebAppUpdates_ParamsSpec,
      mojo.internal.bindings.mojom.WebAppInternalsHandler_SearchForIsolatedWebAppUpdates_ResponseParamsSpec,
      [],
      false);
  }

  getIsolatedWebAppDevModeAppInfo() {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.mojom.WebAppInternalsHandler_GetIsolatedWebAppDevModeAppInfo_ParamsSpec,
      mojo.internal.bindings.mojom.WebAppInternalsHandler_GetIsolatedWebAppDevModeAppInfo_ResponseParamsSpec,
      [],
      false);
  }

  rotateKey(arg_web_bundle_id, arg_rotated_key) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.mojom.WebAppInternalsHandler_RotateKey_ParamsSpec,
      null,
      [arg_web_bundle_id, arg_rotated_key],
      false);
  }

};

mojo.internal.bindings.mojom.WebAppInternalsHandler.getRemote = function() {
  let remote = new mojo.internal.bindings.mojom.WebAppInternalsHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'mojom.WebAppInternalsHandler',
    'context');
  return remote.$;
};

mojo.internal.bindings.mojom.WebAppInternalsHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WebAppInternalsHandler', [
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
        
        // Try Method 0: GetDebugInfoAsJsonString
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.mojom.WebAppInternalsHandler_GetDebugInfoAsJsonString_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDebugInfoAsJsonString (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: InstallIsolatedWebAppFromDevProxy
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.mojom.WebAppInternalsHandler_InstallIsolatedWebAppFromDevProxy_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InstallIsolatedWebAppFromDevProxy (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SelectFileAndInstallIsolatedWebAppFromDevBundle
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.mojom.WebAppInternalsHandler_SelectFileAndInstallIsolatedWebAppFromDevBundle_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SelectFileAndInstallIsolatedWebAppFromDevBundle (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: ParseUpdateManifestFromUrl
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.mojom.WebAppInternalsHandler_ParseUpdateManifestFromUrl_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ParseUpdateManifestFromUrl (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: InstallIsolatedWebAppFromBundleUrl
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.mojom.WebAppInternalsHandler_InstallIsolatedWebAppFromBundleUrl_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InstallIsolatedWebAppFromBundleUrl (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: UpdateDevProxyIsolatedWebApp
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.mojom.WebAppInternalsHandler_UpdateDevProxyIsolatedWebApp_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateDevProxyIsolatedWebApp (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: SelectFileAndUpdateIsolatedWebAppFromDevBundle
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.mojom.WebAppInternalsHandler_SelectFileAndUpdateIsolatedWebAppFromDevBundle_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SelectFileAndUpdateIsolatedWebAppFromDevBundle (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: UpdateManifestInstalledIsolatedWebApp
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.mojom.WebAppInternalsHandler_UpdateManifestInstalledIsolatedWebApp_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateManifestInstalledIsolatedWebApp (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: DeleteIsolatedWebApp
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.mojom.WebAppInternalsHandler_DeleteIsolatedWebApp_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeleteIsolatedWebApp (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: SetUpdateChannelForIsolatedWebApp
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.mojom.WebAppInternalsHandler_SetUpdateChannelForIsolatedWebApp_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetUpdateChannelForIsolatedWebApp (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: SetPinnedVersionForIsolatedWebApp
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.mojom.WebAppInternalsHandler_SetPinnedVersionForIsolatedWebApp_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPinnedVersionForIsolatedWebApp (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: ResetPinnedVersionForIsolatedWebApp
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.mojom.WebAppInternalsHandler_ResetPinnedVersionForIsolatedWebApp_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResetPinnedVersionForIsolatedWebApp (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: SetAllowDowngradesForIsolatedWebApp
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.mojom.WebAppInternalsHandler_SetAllowDowngradesForIsolatedWebApp_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetAllowDowngradesForIsolatedWebApp (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: SearchForIsolatedWebAppUpdates
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.mojom.WebAppInternalsHandler_SearchForIsolatedWebAppUpdates_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SearchForIsolatedWebAppUpdates (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: GetIsolatedWebAppDevModeAppInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.mojom.WebAppInternalsHandler_GetIsolatedWebAppDevModeAppInfo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetIsolatedWebAppDevModeAppInfo (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: RotateKey
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.mojom.WebAppInternalsHandler_RotateKey_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RotateKey (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.mojom.WebAppInternalsHandler_GetDebugInfoAsJsonString_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getDebugInfoAsJsonString');
          const result = this.impl.getDebugInfoAsJsonString();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.mojom.WebAppInternalsHandler_GetDebugInfoAsJsonString_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetDebugInfoAsJsonString FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.mojom.WebAppInternalsHandler_InstallIsolatedWebAppFromDevProxy_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.installIsolatedWebAppFromDevProxy');
          const result = this.impl.installIsolatedWebAppFromDevProxy(params.arg_url);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.mojom.WebAppInternalsHandler_InstallIsolatedWebAppFromDevProxy_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] InstallIsolatedWebAppFromDevProxy FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.mojom.WebAppInternalsHandler_SelectFileAndInstallIsolatedWebAppFromDevBundle_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.selectFileAndInstallIsolatedWebAppFromDevBundle');
          const result = this.impl.selectFileAndInstallIsolatedWebAppFromDevBundle();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.mojom.WebAppInternalsHandler_SelectFileAndInstallIsolatedWebAppFromDevBundle_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SelectFileAndInstallIsolatedWebAppFromDevBundle FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.mojom.WebAppInternalsHandler_ParseUpdateManifestFromUrl_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.parseUpdateManifestFromUrl');
          const result = this.impl.parseUpdateManifestFromUrl(params.arg_update_manifest_url);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.mojom.WebAppInternalsHandler_ParseUpdateManifestFromUrl_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ParseUpdateManifestFromUrl FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.mojom.WebAppInternalsHandler_InstallIsolatedWebAppFromBundleUrl_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.installIsolatedWebAppFromBundleUrl');
          const result = this.impl.installIsolatedWebAppFromBundleUrl(params.arg_params);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.mojom.WebAppInternalsHandler_InstallIsolatedWebAppFromBundleUrl_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] InstallIsolatedWebAppFromBundleUrl FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.mojom.WebAppInternalsHandler_UpdateDevProxyIsolatedWebApp_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateDevProxyIsolatedWebApp');
          const result = this.impl.updateDevProxyIsolatedWebApp(params.arg_app_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.mojom.WebAppInternalsHandler_UpdateDevProxyIsolatedWebApp_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] UpdateDevProxyIsolatedWebApp FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.mojom.WebAppInternalsHandler_SelectFileAndUpdateIsolatedWebAppFromDevBundle_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.selectFileAndUpdateIsolatedWebAppFromDevBundle');
          const result = this.impl.selectFileAndUpdateIsolatedWebAppFromDevBundle(params.arg_app_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.mojom.WebAppInternalsHandler_SelectFileAndUpdateIsolatedWebAppFromDevBundle_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SelectFileAndUpdateIsolatedWebAppFromDevBundle FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.mojom.WebAppInternalsHandler_UpdateManifestInstalledIsolatedWebApp_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateManifestInstalledIsolatedWebApp');
          const result = this.impl.updateManifestInstalledIsolatedWebApp(params.arg_app_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.mojom.WebAppInternalsHandler_UpdateManifestInstalledIsolatedWebApp_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] UpdateManifestInstalledIsolatedWebApp FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.mojom.WebAppInternalsHandler_DeleteIsolatedWebApp_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.deleteIsolatedWebApp');
          const result = this.impl.deleteIsolatedWebApp(params.arg_app_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.mojom.WebAppInternalsHandler_DeleteIsolatedWebApp_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] DeleteIsolatedWebApp FAILED:', e));
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.mojom.WebAppInternalsHandler_SetUpdateChannelForIsolatedWebApp_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setUpdateChannelForIsolatedWebApp');
          const result = this.impl.setUpdateChannelForIsolatedWebApp(params.arg_app_id, params.arg_update_channel);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.mojom.WebAppInternalsHandler_SetUpdateChannelForIsolatedWebApp_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetUpdateChannelForIsolatedWebApp FAILED:', e));
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.mojom.WebAppInternalsHandler_SetPinnedVersionForIsolatedWebApp_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setPinnedVersionForIsolatedWebApp');
          const result = this.impl.setPinnedVersionForIsolatedWebApp(params.arg_app_id, params.arg_pinned_version);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.mojom.WebAppInternalsHandler_SetPinnedVersionForIsolatedWebApp_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetPinnedVersionForIsolatedWebApp FAILED:', e));
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.mojom.WebAppInternalsHandler_ResetPinnedVersionForIsolatedWebApp_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.resetPinnedVersionForIsolatedWebApp');
          const result = this.impl.resetPinnedVersionForIsolatedWebApp(params.arg_app_id);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.mojom.WebAppInternalsHandler_SetAllowDowngradesForIsolatedWebApp_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setAllowDowngradesForIsolatedWebApp');
          const result = this.impl.setAllowDowngradesForIsolatedWebApp(params.arg_allow_downgrades, params.arg_app_id);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.mojom.WebAppInternalsHandler_SearchForIsolatedWebAppUpdates_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.searchForIsolatedWebAppUpdates');
          const result = this.impl.searchForIsolatedWebAppUpdates();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.mojom.WebAppInternalsHandler_SearchForIsolatedWebAppUpdates_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SearchForIsolatedWebAppUpdates FAILED:', e));
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.mojom.WebAppInternalsHandler_GetIsolatedWebAppDevModeAppInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getIsolatedWebAppDevModeAppInfo');
          const result = this.impl.getIsolatedWebAppDevModeAppInfo();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.mojom.WebAppInternalsHandler_GetIsolatedWebAppDevModeAppInfo_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetIsolatedWebAppDevModeAppInfo FAILED:', e));
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.mojom.WebAppInternalsHandler_RotateKey_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.rotateKey');
          const result = this.impl.rotateKey(params.arg_web_bundle_id, params.arg_rotated_key);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.mojom.WebAppInternalsHandlerReceiver = mojo.internal.bindings.mojom.WebAppInternalsHandlerReceiver;

mojo.internal.bindings.mojom.WebAppInternalsHandlerPtr = mojo.internal.bindings.mojom.WebAppInternalsHandlerRemote;
mojo.internal.bindings.mojom.WebAppInternalsHandlerRequest = mojo.internal.bindings.mojom.WebAppInternalsHandlerPendingReceiver;

