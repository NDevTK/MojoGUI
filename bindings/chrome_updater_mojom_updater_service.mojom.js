// Auto-generated MojoJS binding
 // Source: chromium_src/chrome/updater/mojom/updater_service.mojom
 // Module: updater.mojom

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
 

 mojo.internal.bindings.updater = mojo.internal.bindings.updater || {};
mojo.internal.bindings.updater.mojom = mojo.internal.bindings.updater.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.enterprise_companion = mojo.internal.bindings.enterprise_companion || {};

mojo.internal.bindings.updater.mojom.StateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.updater.mojom.PolicySourceSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.updater.mojom.PolicySameVersionUpdateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.updater.mojom.ResultSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.updater.mojom.ErrorCategorySpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.updater.mojom.PrioritySpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.updater.mojom.RegistrationRequestSpec = { $: {} };
mojo.internal.bindings.updater.mojom.UpdateStateSpec = { $: {} };
mojo.internal.bindings.updater.mojom.AppStateSpec = { $: {} };
mojo.internal.bindings.updater.mojom.PolicyValueSpec = { $: {} };
mojo.internal.bindings.updater.mojom.UpdaterStateSpec = { $: {} };
mojo.internal.bindings.updater.mojom.UpdateService = {};
mojo.internal.bindings.updater.mojom.UpdateService.$interfaceName = 'updater.mojom.UpdateService';
mojo.internal.bindings.updater.mojom.UpdateService_GetVersion_ParamsSpec = { $: {} };
mojo.internal.bindings.updater.mojom.UpdateService_GetVersion_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.updater.mojom.UpdateService_FetchPolicies_ParamsSpec = { $: {} };
mojo.internal.bindings.updater.mojom.UpdateService_FetchPolicies_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.updater.mojom.UpdateService_RegisterApp_ParamsSpec = { $: {} };
mojo.internal.bindings.updater.mojom.UpdateService_RegisterApp_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.updater.mojom.UpdateService_GetAppStates_ParamsSpec = { $: {} };
mojo.internal.bindings.updater.mojom.UpdateService_GetAppStates_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.updater.mojom.UpdateService_RunPeriodicTasks_ParamsSpec = { $: {} };
mojo.internal.bindings.updater.mojom.UpdateService_RunPeriodicTasks_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.updater.mojom.UpdateService_UpdateAll_ParamsSpec = { $: {} };
mojo.internal.bindings.updater.mojom.UpdateService_UpdateAll_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.updater.mojom.UpdateService_Update_ParamsSpec = { $: {} };
mojo.internal.bindings.updater.mojom.UpdateService_Update_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.updater.mojom.UpdateService_Install_ParamsSpec = { $: {} };
mojo.internal.bindings.updater.mojom.UpdateService_Install_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.updater.mojom.UpdateService_CancelInstalls_ParamsSpec = { $: {} };
mojo.internal.bindings.updater.mojom.UpdateService_RunInstaller_ParamsSpec = { $: {} };
mojo.internal.bindings.updater.mojom.UpdateService_RunInstaller_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.updater.mojom.UpdateService_CheckForUpdate_ParamsSpec = { $: {} };
mojo.internal.bindings.updater.mojom.UpdateService_CheckForUpdate_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.updater.mojom.UpdateService_GetUpdaterState_ParamsSpec = { $: {} };
mojo.internal.bindings.updater.mojom.UpdateService_GetUpdaterState_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.updater.mojom.UpdateService_GetUpdaterPolicies_ParamsSpec = { $: {} };
mojo.internal.bindings.updater.mojom.UpdateService_GetUpdaterPolicies_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.updater.mojom.UpdateService_GetAppPolicies_ParamsSpec = { $: {} };
mojo.internal.bindings.updater.mojom.UpdateService_GetAppPolicies_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.updater.mojom.StateChangeObserver = {};
mojo.internal.bindings.updater.mojom.StateChangeObserver.$interfaceName = 'updater.mojom.StateChangeObserver';
mojo.internal.bindings.updater.mojom.StateChangeObserver_OnStateChange_ParamsSpec = { $: {} };
mojo.internal.bindings.updater.mojom.StateChangeObserver_OnComplete_ParamsSpec = { $: {} };

// Enum: State
mojo.internal.bindings.updater.mojom.State = {
  kUnknown: 0,
  kNotStarted: 1,
  kCheckingForUpdates: 2,
  kUpdateAvailable: 3,
  kDownloading: 4,
  kInstalling: 5,
  kUpdated: 6,
  kNoUpdate: 7,
  kUpdateError: 8,
  MinVersion: 8,
  MinVersion: 8,
};

// Enum: PolicySource
mojo.internal.bindings.updater.mojom.PolicySource = {
  kSourceUnknown: 0,
  kSourceDefault: 1,
  kSourceExternalConstants: 2,
  kSourcePlatform: 3,
  kSourceCloud: 4,
};

// Enum: PolicySameVersionUpdate
mojo.internal.bindings.updater.mojom.PolicySameVersionUpdate = {
  kNotAllowed: 0,
  kAllowed: 1,
};

// Enum: Result
mojo.internal.bindings.updater.mojom.Result = {
  kSuccess: 0,
  kUpdateInProgress: 1,
  kUpdateCanceled: 2,
  kRetryLater: 3,
  kServiceFailed: 4,
  kUpdateCheckFailed: 5,
  kAppNotFound: 6,
  kInvalidArgument: 7,
  kInactive: 8,
  kIPCConnectionFailed: 9,
  kInstallFailed: 10,
  kPermissionDenied: 11,
  kUnknown: 12,
  MinVersion: 12,
  MinVersion: 12,
  MinVersion: 12,
};

// Enum: ErrorCategory
mojo.internal.bindings.updater.mojom.ErrorCategory = {
  kNone: 0,
  kDownload: 1,
  kUnpack: 2,
  kInstall: 3,
  kService: 4,
  kUpdateCheck: 5,
  kUnknown: 6,
  MinVersion: 6,
};

// Enum: Priority
mojo.internal.bindings.updater.mojom.Priority = {
  kUnknown: 0,
  kBackground: 1,
  kForeground: 2,
};

// Struct: RegistrationRequest
mojo.internal.Struct(
    mojo.internal.bindings.updater.mojom.RegistrationRequestSpec, 'updater.mojom.RegistrationRequest', [
      mojo.internal.StructField('arg_app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_brand_code', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_brand_path', 16, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_ap', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_version', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_existence_checker_path', 40, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_ap_path', 48, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, null, true, 1, undefined),
      mojo.internal.StructField('arg_ap_key', 56, 0, mojo.internal.String, null, true, 1, undefined),
      mojo.internal.StructField('arg_version_path', 64, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, null, true, 1, undefined),
      mojo.internal.StructField('arg_version_key', 72, 0, mojo.internal.String, null, true, 1, undefined),
      mojo.internal.StructField('arg_install_id', 80, 0, mojo.internal.String, null, true, 2, undefined),
      mojo.internal.StructField('arg_lang', 88, 0, mojo.internal.String, null, true, 3, undefined),
      mojo.internal.StructField('arg_cohort', 96, 0, mojo.internal.String, null, true, 4, undefined),
      mojo.internal.StructField('arg_cohort_name', 104, 0, mojo.internal.String, null, true, 4, undefined),
      mojo.internal.StructField('arg_cohort_hint', 112, 0, mojo.internal.String, null, true, 4, undefined),
      mojo.internal.StructField('arg_dla_$value', 120, 0, mojo.internal.Int32, 0, false, 4, { isPrimary: false, linkedValueFieldName: 'arg_dla_$flag', originalFieldName: 'arg_dla' }),
      mojo.internal.StructField('arg_dlrc_$value', 124, 0, mojo.internal.Int32, 0, false, 4, { isPrimary: false, linkedValueFieldName: 'arg_dlrc_$flag', originalFieldName: 'arg_dlrc' }),
      mojo.internal.StructField('arg_install_date_$value', 128, 0, mojo.internal.Int32, 0, false, 4, { isPrimary: false, linkedValueFieldName: 'arg_install_date_$flag', originalFieldName: 'arg_install_date' }),
      mojo.internal.StructField('arg_dla_$flag', 132, 0, mojo.internal.Bool, false, false, 4, { isPrimary: true, linkedValueFieldName: 'arg_dla_$value', originalFieldName: 'arg_dla' }),
      mojo.internal.StructField('arg_dlrc_$flag', 132, 1, mojo.internal.Bool, false, false, 4, { isPrimary: true, linkedValueFieldName: 'arg_dlrc_$value', originalFieldName: 'arg_dlrc' }),
      mojo.internal.StructField('arg_install_date_$flag', 132, 2, mojo.internal.Bool, false, false, 4, { isPrimary: true, linkedValueFieldName: 'arg_install_date_$value', originalFieldName: 'arg_install_date' }),
    ],
    [[0, 56], [1, 88], [2, 96], [3, 104], [4, 144]]);

// Struct: UpdateState
mojo.internal.Struct(
    mojo.internal.bindings.updater.mojom.UpdateStateSpec, 'updater.mojom.UpdateState', [
      mojo.internal.StructField('arg_kUnknown', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
      mojo.internal.StructField('arg_val', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 24, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 32, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 40, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 48, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 56, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 64, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 72, 0, mojo.internal.Pointer, null, false, 1, undefined),
      mojo.internal.StructField('arg_val', 80, 0, mojo.internal.Pointer, null, false, 1, undefined),
    ],
    [[0, 80], [1, 96]]);

// Struct: AppState
mojo.internal.Struct(
    mojo.internal.bindings.updater.mojom.AppStateSpec, 'updater.mojom.AppState', [
      mojo.internal.StructField('arg_app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_version', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_ap', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_brand_code', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_brand_path', 32, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_ecp', 40, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_ap_path', 48, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, null, true, 1, undefined),
      mojo.internal.StructField('arg_ap_key', 56, 0, mojo.internal.String, null, true, 1, undefined),
      mojo.internal.StructField('arg_version_path', 64, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, null, true, 1, undefined),
      mojo.internal.StructField('arg_version_key', 72, 0, mojo.internal.String, null, true, 1, undefined),
      mojo.internal.StructField('arg_cohort', 80, 0, mojo.internal.String, null, true, 2, undefined),
    ],
    [[0, 56], [1, 88], [2, 96]]);

// Struct: PolicyValue
mojo.internal.Struct(
    mojo.internal.bindings.updater.mojom.PolicyValueSpec, 'updater.mojom.PolicyValue', [
      mojo.internal.StructField('arg_kSourceUnknown', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
      mojo.internal.StructField('arg_val', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 24, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 32, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: UpdaterState
mojo.internal.Struct(
    mojo.internal.bindings.updater.mojom.UpdaterStateSpec, 'updater.mojom.UpdaterState', [
      mojo.internal.StructField('arg_active_version', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_inactive_versions', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_last_checked', 16, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_last_started', 24, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: UpdateService
mojo.internal.Struct(
    mojo.internal.bindings.updater.mojom.UpdateService_GetVersion_ParamsSpec, 'updater.mojom.UpdateService_GetVersion_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.updater.mojom.UpdateService_GetVersion_ResponseParamsSpec, 'updater.mojom.UpdateService_GetVersion_ResponseParams', [
      mojo.internal.StructField('arg_version', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.updater.mojom.UpdateService_FetchPolicies_ParamsSpec, 'updater.mojom.UpdateService_FetchPolicies_Params', [
      mojo.internal.StructField('arg_reason', 0, 0, mojo.internal.bindings.enterprise_companion.mojom.PolicyFetchReasonSpec.$, null, false, 4, undefined),
    ],
    [[0, 8], [4, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.updater.mojom.UpdateService_FetchPolicies_ResponseParamsSpec, 'updater.mojom.UpdateService_FetchPolicies_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.updater.mojom.UpdateService_RegisterApp_ParamsSpec, 'updater.mojom.UpdateService_RegisterApp_Params', [
      mojo.internal.StructField('arg_request', 0, 0, mojo.internal.bindings.updater.mojom.RegistrationRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.updater.mojom.UpdateService_RegisterApp_ResponseParamsSpec, 'updater.mojom.UpdateService_RegisterApp_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.updater.mojom.UpdateService_GetAppStates_ParamsSpec, 'updater.mojom.UpdateService_GetAppStates_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.updater.mojom.UpdateService_GetAppStates_ResponseParamsSpec, 'updater.mojom.UpdateService_GetAppStates_ResponseParams', [
      mojo.internal.StructField('arg_app_states', 0, 0, mojo.internal.Array(mojo.internal.bindings.updater.mojom.AppStateSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.updater.mojom.UpdateService_RunPeriodicTasks_ParamsSpec, 'updater.mojom.UpdateService_RunPeriodicTasks_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.updater.mojom.UpdateService_RunPeriodicTasks_ResponseParamsSpec, 'updater.mojom.UpdateService_RunPeriodicTasks_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.updater.mojom.UpdateService_UpdateAll_ParamsSpec, 'updater.mojom.UpdateService_UpdateAll_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.updater.mojom.UpdateService_UpdateAll_ResponseParamsSpec, 'updater.mojom.UpdateService_UpdateAll_ResponseParams', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.updater.mojom.StateChangeObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.updater.mojom.UpdateService_Update_ParamsSpec, 'updater.mojom.UpdateService_Update_Params', [
      mojo.internal.StructField('arg_app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_install_data_index', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_priority', 16, 0, mojo.internal.bindings.updater.mojom.PrioritySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_policy_same_version_update', 24, 0, mojo.internal.bindings.updater.mojom.PolicySameVersionUpdateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_do_update_check_only', 32, 0, mojo.internal.Bool, false, false, 1, undefined),
      mojo.internal.StructField('arg_language', 40, 0, mojo.internal.String, null, true, 3, undefined),
    ],
    [[0, 40], [1, 48], [3, 56]]);

mojo.internal.Struct(
    mojo.internal.bindings.updater.mojom.UpdateService_Update_ResponseParamsSpec, 'updater.mojom.UpdateService_Update_ResponseParams', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.updater.mojom.StateChangeObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.updater.mojom.UpdateService_Install_ParamsSpec, 'updater.mojom.UpdateService_Install_Params', [
      mojo.internal.StructField('arg_registration', 0, 0, mojo.internal.bindings.updater.mojom.RegistrationRequestSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_client_install_data', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_install_data_index', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_priority', 24, 0, mojo.internal.bindings.updater.mojom.PrioritySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_language', 32, 0, mojo.internal.String, null, true, 3, undefined),
    ],
    [[0, 40], [3, 48]]);

mojo.internal.Struct(
    mojo.internal.bindings.updater.mojom.UpdateService_Install_ResponseParamsSpec, 'updater.mojom.UpdateService_Install_ResponseParams', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.updater.mojom.StateChangeObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.updater.mojom.UpdateService_CancelInstalls_ParamsSpec, 'updater.mojom.UpdateService_CancelInstalls_Params', [
      mojo.internal.StructField('arg_app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.updater.mojom.UpdateService_RunInstaller_ParamsSpec, 'updater.mojom.UpdateService_RunInstaller_Params', [
      mojo.internal.StructField('arg_app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_installer_path', 8, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_install_args', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_install_data', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_install_settings', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_language', 40, 0, mojo.internal.String, null, true, 3, undefined),
    ],
    [[0, 48], [3, 56]]);

mojo.internal.Struct(
    mojo.internal.bindings.updater.mojom.UpdateService_RunInstaller_ResponseParamsSpec, 'updater.mojom.UpdateService_RunInstaller_ResponseParams', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.updater.mojom.StateChangeObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.updater.mojom.UpdateService_CheckForUpdate_ParamsSpec, 'updater.mojom.UpdateService_CheckForUpdate_Params', [
      mojo.internal.StructField('arg_app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_priority', 8, 0, mojo.internal.bindings.updater.mojom.PrioritySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_policy_same_version_update', 16, 0, mojo.internal.bindings.updater.mojom.PolicySameVersionUpdateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_language', 24, 0, mojo.internal.String, null, true, 3, undefined),
    ],
    [[0, 32], [3, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.updater.mojom.UpdateService_CheckForUpdate_ResponseParamsSpec, 'updater.mojom.UpdateService_CheckForUpdate_ResponseParams', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.updater.mojom.StateChangeObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.updater.mojom.UpdateService_GetUpdaterState_ParamsSpec, 'updater.mojom.UpdateService_GetUpdaterState_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.updater.mojom.UpdateService_GetUpdaterState_ResponseParamsSpec, 'updater.mojom.UpdateService_GetUpdaterState_ResponseParams', [
      mojo.internal.StructField('arg_updater_state', 0, 0, mojo.internal.bindings.updater.mojom.UpdaterStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.updater.mojom.UpdateService_GetUpdaterPolicies_ParamsSpec, 'updater.mojom.UpdateService_GetUpdaterPolicies_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.updater.mojom.UpdateService_GetUpdaterPolicies_ResponseParamsSpec, 'updater.mojom.UpdateService_GetUpdaterPolicies_ResponseParams', [
      mojo.internal.StructField('arg_updater_policies', 0, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.bindings.updater.mojom.PolicyValueSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.updater.mojom.UpdateService_GetAppPolicies_ParamsSpec, 'updater.mojom.UpdateService_GetAppPolicies_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.updater.mojom.UpdateService_GetAppPolicies_ResponseParamsSpec, 'updater.mojom.UpdateService_GetAppPolicies_ResponseParams', [
      mojo.internal.StructField('arg_app_policies', 0, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.Map(mojo.internal.String, mojo.internal.bindings.updater.mojom.PolicyValueSpec.$, false), false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.updater.mojom.UpdateServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.updater.mojom.UpdateServiceRemote = class {
  static get $interfaceName() {
    return 'updater.mojom.UpdateService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.updater.mojom.UpdateServicePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.updater.mojom.UpdateServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getVersion() {
    return this.$.getVersion();
  }
  fetchPolicies(arg_reason) {
    return this.$.fetchPolicies(arg_reason);
  }
  registerApp(arg_request) {
    return this.$.registerApp(arg_request);
  }
  getAppStates() {
    return this.$.getAppStates();
  }
  runPeriodicTasks() {
    return this.$.runPeriodicTasks();
  }
  updateAll() {
    return this.$.updateAll();
  }
  update(arg_app_id, arg_install_data_index, arg_priority, arg_policy_same_version_update, arg_do_update_check_only, arg_language) {
    return this.$.update(arg_app_id, arg_install_data_index, arg_priority, arg_policy_same_version_update, arg_do_update_check_only, arg_language);
  }
  install(arg_registration, arg_client_install_data, arg_install_data_index, arg_priority, arg_language) {
    return this.$.install(arg_registration, arg_client_install_data, arg_install_data_index, arg_priority, arg_language);
  }
  cancelInstalls(arg_app_id) {
    return this.$.cancelInstalls(arg_app_id);
  }
  runInstaller(arg_app_id, arg_installer_path, arg_install_args, arg_install_data, arg_install_settings, arg_language) {
    return this.$.runInstaller(arg_app_id, arg_installer_path, arg_install_args, arg_install_data, arg_install_settings, arg_language);
  }
  checkForUpdate(arg_app_id, arg_priority, arg_policy_same_version_update, arg_language) {
    return this.$.checkForUpdate(arg_app_id, arg_priority, arg_policy_same_version_update, arg_language);
  }
  getUpdaterState() {
    return this.$.getUpdaterState();
  }
  getUpdaterPolicies() {
    return this.$.getUpdaterPolicies();
  }
  getAppPolicies() {
    return this.$.getAppPolicies();
  }
};

mojo.internal.bindings.updater.mojom.UpdateServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('UpdateService', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 8 },
      { explicit: 9 },
      { explicit: 10 },
      { explicit: 11 },
      { explicit: 12 },
      { explicit: 13 },
    ]);
  }

  getVersion() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.updater.mojom.UpdateService_GetVersion_ParamsSpec,
      mojo.internal.bindings.updater.mojom.UpdateService_GetVersion_ResponseParamsSpec,
      [],
      false);
  }

  fetchPolicies(arg_reason) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.updater.mojom.UpdateService_FetchPolicies_ParamsSpec,
      mojo.internal.bindings.updater.mojom.UpdateService_FetchPolicies_ResponseParamsSpec,
      [arg_reason],
      false);
  }

  registerApp(arg_request) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.updater.mojom.UpdateService_RegisterApp_ParamsSpec,
      mojo.internal.bindings.updater.mojom.UpdateService_RegisterApp_ResponseParamsSpec,
      [arg_request],
      false);
  }

  getAppStates() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.updater.mojom.UpdateService_GetAppStates_ParamsSpec,
      mojo.internal.bindings.updater.mojom.UpdateService_GetAppStates_ResponseParamsSpec,
      [],
      false);
  }

  runPeriodicTasks() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.updater.mojom.UpdateService_RunPeriodicTasks_ParamsSpec,
      mojo.internal.bindings.updater.mojom.UpdateService_RunPeriodicTasks_ResponseParamsSpec,
      [],
      false);
  }

  updateAll() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.updater.mojom.UpdateService_UpdateAll_ParamsSpec,
      mojo.internal.bindings.updater.mojom.UpdateService_UpdateAll_ResponseParamsSpec,
      [],
      false);
  }

  update(arg_app_id, arg_install_data_index, arg_priority, arg_policy_same_version_update, arg_do_update_check_only, arg_language) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.updater.mojom.UpdateService_Update_ParamsSpec,
      mojo.internal.bindings.updater.mojom.UpdateService_Update_ResponseParamsSpec,
      [arg_app_id, arg_install_data_index, arg_priority, arg_policy_same_version_update, arg_do_update_check_only, arg_language],
      false);
  }

  install(arg_registration, arg_client_install_data, arg_install_data_index, arg_priority, arg_language) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.updater.mojom.UpdateService_Install_ParamsSpec,
      mojo.internal.bindings.updater.mojom.UpdateService_Install_ResponseParamsSpec,
      [arg_registration, arg_client_install_data, arg_install_data_index, arg_priority, arg_language],
      false);
  }

  cancelInstalls(arg_app_id) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.updater.mojom.UpdateService_CancelInstalls_ParamsSpec,
      null,
      [arg_app_id],
      false);
  }

  runInstaller(arg_app_id, arg_installer_path, arg_install_args, arg_install_data, arg_install_settings, arg_language) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.updater.mojom.UpdateService_RunInstaller_ParamsSpec,
      mojo.internal.bindings.updater.mojom.UpdateService_RunInstaller_ResponseParamsSpec,
      [arg_app_id, arg_installer_path, arg_install_args, arg_install_data, arg_install_settings, arg_language],
      false);
  }

  checkForUpdate(arg_app_id, arg_priority, arg_policy_same_version_update, arg_language) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.updater.mojom.UpdateService_CheckForUpdate_ParamsSpec,
      mojo.internal.bindings.updater.mojom.UpdateService_CheckForUpdate_ResponseParamsSpec,
      [arg_app_id, arg_priority, arg_policy_same_version_update, arg_language],
      false);
  }

  getUpdaterState() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.updater.mojom.UpdateService_GetUpdaterState_ParamsSpec,
      mojo.internal.bindings.updater.mojom.UpdateService_GetUpdaterState_ResponseParamsSpec,
      [],
      false);
  }

  getUpdaterPolicies() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.updater.mojom.UpdateService_GetUpdaterPolicies_ParamsSpec,
      mojo.internal.bindings.updater.mojom.UpdateService_GetUpdaterPolicies_ResponseParamsSpec,
      [],
      false);
  }

  getAppPolicies() {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.updater.mojom.UpdateService_GetAppPolicies_ParamsSpec,
      mojo.internal.bindings.updater.mojom.UpdateService_GetAppPolicies_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.updater.mojom.UpdateService.getRemote = function() {
  let remote = new mojo.internal.bindings.updater.mojom.UpdateServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'updater.mojom.UpdateService',
    'context');
  return remote.$;
};

mojo.internal.bindings.updater.mojom.UpdateServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('UpdateService', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 8 },
      { explicit: 9 },
      { explicit: 10 },
      { explicit: 11 },
      { explicit: 12 },
      { explicit: 13 },
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
        
        // Try Method 0: GetVersion
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.updater.mojom.UpdateService_GetVersion_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetVersion (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: FetchPolicies
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.updater.mojom.UpdateService_FetchPolicies_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FetchPolicies (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: RegisterApp
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.updater.mojom.UpdateService_RegisterApp_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RegisterApp (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GetAppStates
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.updater.mojom.UpdateService_GetAppStates_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAppStates (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: RunPeriodicTasks
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.updater.mojom.UpdateService_RunPeriodicTasks_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunPeriodicTasks (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: UpdateAll
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.updater.mojom.UpdateService_UpdateAll_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateAll (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: Update
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.updater.mojom.UpdateService_Update_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Update (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: Install
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.updater.mojom.UpdateService_Install_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Install (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: CancelInstalls
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.updater.mojom.UpdateService_CancelInstalls_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CancelInstalls (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: RunInstaller
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.updater.mojom.UpdateService_RunInstaller_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RunInstaller (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: CheckForUpdate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.updater.mojom.UpdateService_CheckForUpdate_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CheckForUpdate (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: GetUpdaterState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.updater.mojom.UpdateService_GetUpdaterState_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetUpdaterState (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: GetUpdaterPolicies
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.updater.mojom.UpdateService_GetUpdaterPolicies_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetUpdaterPolicies (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: GetAppPolicies
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.updater.mojom.UpdateService_GetAppPolicies_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAppPolicies (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.updater.mojom.UpdateService_GetVersion_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getVersion');
          const result = this.impl.getVersion();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.updater.mojom.UpdateService_GetVersion_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetVersion FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.updater.mojom.UpdateService_FetchPolicies_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.fetchPolicies');
          const result = this.impl.fetchPolicies(params.arg_reason);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.updater.mojom.UpdateService_FetchPolicies_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] FetchPolicies FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.updater.mojom.UpdateService_RegisterApp_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.registerApp');
          const result = this.impl.registerApp(params.arg_request);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.updater.mojom.UpdateService_RegisterApp_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RegisterApp FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.updater.mojom.UpdateService_GetAppStates_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getAppStates');
          const result = this.impl.getAppStates();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.updater.mojom.UpdateService_GetAppStates_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetAppStates FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.updater.mojom.UpdateService_RunPeriodicTasks_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runPeriodicTasks');
          const result = this.impl.runPeriodicTasks();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.updater.mojom.UpdateService_RunPeriodicTasks_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunPeriodicTasks FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.updater.mojom.UpdateService_UpdateAll_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateAll');
          const result = this.impl.updateAll();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.updater.mojom.UpdateService_UpdateAll_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] UpdateAll FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.updater.mojom.UpdateService_Update_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.update');
          const result = this.impl.update(params.arg_app_id, params.arg_install_data_index, params.arg_priority, params.arg_policy_same_version_update, params.arg_do_update_check_only, params.arg_language);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.updater.mojom.UpdateService_Update_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Update FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.updater.mojom.UpdateService_Install_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.install');
          const result = this.impl.install(params.arg_registration, params.arg_client_install_data, params.arg_install_data_index, params.arg_priority, params.arg_language);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.updater.mojom.UpdateService_Install_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Install FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.updater.mojom.UpdateService_CancelInstalls_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.cancelInstalls');
          const result = this.impl.cancelInstalls(params.arg_app_id);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.updater.mojom.UpdateService_RunInstaller_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runInstaller');
          const result = this.impl.runInstaller(params.arg_app_id, params.arg_installer_path, params.arg_install_args, params.arg_install_data, params.arg_install_settings, params.arg_language);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.updater.mojom.UpdateService_RunInstaller_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RunInstaller FAILED:', e));
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.updater.mojom.UpdateService_CheckForUpdate_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.checkForUpdate');
          const result = this.impl.checkForUpdate(params.arg_app_id, params.arg_priority, params.arg_policy_same_version_update, params.arg_language);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.updater.mojom.UpdateService_CheckForUpdate_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CheckForUpdate FAILED:', e));
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.updater.mojom.UpdateService_GetUpdaterState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getUpdaterState');
          const result = this.impl.getUpdaterState();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.updater.mojom.UpdateService_GetUpdaterState_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetUpdaterState FAILED:', e));
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.updater.mojom.UpdateService_GetUpdaterPolicies_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getUpdaterPolicies');
          const result = this.impl.getUpdaterPolicies();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.updater.mojom.UpdateService_GetUpdaterPolicies_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetUpdaterPolicies FAILED:', e));
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.updater.mojom.UpdateService_GetAppPolicies_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getAppPolicies');
          const result = this.impl.getAppPolicies();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.updater.mojom.UpdateService_GetAppPolicies_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetAppPolicies FAILED:', e));
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.updater.mojom.UpdateServiceReceiver = mojo.internal.bindings.updater.mojom.UpdateServiceReceiver;

mojo.internal.bindings.updater.mojom.UpdateServicePtr = mojo.internal.bindings.updater.mojom.UpdateServiceRemote;
mojo.internal.bindings.updater.mojom.UpdateServiceRequest = mojo.internal.bindings.updater.mojom.UpdateServicePendingReceiver;


// Interface: StateChangeObserver
mojo.internal.Struct(
    mojo.internal.bindings.updater.mojom.StateChangeObserver_OnStateChange_ParamsSpec, 'updater.mojom.StateChangeObserver_OnStateChange_Params', [
      mojo.internal.StructField('arg_state', 0, 0, mojo.internal.bindings.updater.mojom.UpdateStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.updater.mojom.StateChangeObserver_OnComplete_ParamsSpec, 'updater.mojom.StateChangeObserver_OnComplete_Params', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.UpdateService.ResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.updater.mojom.StateChangeObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.updater.mojom.StateChangeObserverRemote = class {
  static get $interfaceName() {
    return 'updater.mojom.StateChangeObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.updater.mojom.StateChangeObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.updater.mojom.StateChangeObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onStateChange(arg_state) {
    return this.$.onStateChange(arg_state);
  }
  onComplete(arg_result) {
    return this.$.onComplete(arg_result);
  }
};

mojo.internal.bindings.updater.mojom.StateChangeObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('StateChangeObserver', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
  }

  onStateChange(arg_state) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.updater.mojom.StateChangeObserver_OnStateChange_ParamsSpec,
      null,
      [arg_state],
      false);
  }

  onComplete(arg_result) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.updater.mojom.StateChangeObserver_OnComplete_ParamsSpec,
      null,
      [arg_result],
      false);
  }

};

mojo.internal.bindings.updater.mojom.StateChangeObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.updater.mojom.StateChangeObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'updater.mojom.StateChangeObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.updater.mojom.StateChangeObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('StateChangeObserver', [
      { explicit: 0 },
      { explicit: 1 },
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
        
        // Try Method 0: OnStateChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.updater.mojom.StateChangeObserver_OnStateChange_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnStateChange (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnComplete
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.updater.mojom.StateChangeObserver_OnComplete_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnComplete (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.updater.mojom.StateChangeObserver_OnStateChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onStateChange');
          const result = this.impl.onStateChange(params.arg_state);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.updater.mojom.StateChangeObserver_OnComplete_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onComplete');
          const result = this.impl.onComplete(params.arg_result);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.updater.mojom.StateChangeObserverReceiver = mojo.internal.bindings.updater.mojom.StateChangeObserverReceiver;

mojo.internal.bindings.updater.mojom.StateChangeObserverPtr = mojo.internal.bindings.updater.mojom.StateChangeObserverRemote;
mojo.internal.bindings.updater.mojom.StateChangeObserverRequest = mojo.internal.bindings.updater.mojom.StateChangeObserverPendingReceiver;

