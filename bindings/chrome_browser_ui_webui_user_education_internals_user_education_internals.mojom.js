// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/user_education_internals/user_education_internals.mojom
// Module: mojom.user_education_internals

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

        const ua = navigator.userAgent;
        const m = ua.match(/Chrome\/([\d.]+)/);
        const v = m ? m[1] : "145.0.7625.0";
        const p = v.split('.');
        const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
        
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
var mojom = mojom || {};
mojom.user_education_internals = mojom.user_education_internals || {};

mojom.user_education_internals.FeaturePromoDemoPageDataSpec = { $: {} };
mojom.user_education_internals.FeaturePromoDemoPageInfoSpec = { $: {} };
mojom.user_education_internals.WhatsNewModuleDemoPageInfoSpec = { $: {} };
mojom.user_education_internals.WhatsNewEditionDemoPageInfoSpec = { $: {} };
mojom.user_education_internals.UserEducationInternalsPageHandler = {};
mojom.user_education_internals.UserEducationInternalsPageHandler.$interfaceName = 'mojom.user_education_internals.UserEducationInternalsPageHandler';
mojom.user_education_internals.UserEducationInternalsPageHandler_GetTutorials_ParamsSpec = { $: {} };
mojom.user_education_internals.UserEducationInternalsPageHandler_GetTutorials_ResponseParamsSpec = { $: {} };
mojom.user_education_internals.UserEducationInternalsPageHandler_StartTutorial_ParamsSpec = { $: {} };
mojom.user_education_internals.UserEducationInternalsPageHandler_StartTutorial_ResponseParamsSpec = { $: {} };
mojom.user_education_internals.UserEducationInternalsPageHandler_GetSessionData_ParamsSpec = { $: {} };
mojom.user_education_internals.UserEducationInternalsPageHandler_GetSessionData_ResponseParamsSpec = { $: {} };
mojom.user_education_internals.UserEducationInternalsPageHandler_GetFeaturePromos_ParamsSpec = { $: {} };
mojom.user_education_internals.UserEducationInternalsPageHandler_GetFeaturePromos_ResponseParamsSpec = { $: {} };
mojom.user_education_internals.UserEducationInternalsPageHandler_ShowFeaturePromo_ParamsSpec = { $: {} };
mojom.user_education_internals.UserEducationInternalsPageHandler_ShowFeaturePromo_ResponseParamsSpec = { $: {} };
mojom.user_education_internals.UserEducationInternalsPageHandler_ClearFeaturePromoData_ParamsSpec = { $: {} };
mojom.user_education_internals.UserEducationInternalsPageHandler_ClearFeaturePromoData_ResponseParamsSpec = { $: {} };
mojom.user_education_internals.UserEducationInternalsPageHandler_ClearSessionData_ParamsSpec = { $: {} };
mojom.user_education_internals.UserEducationInternalsPageHandler_ClearSessionData_ResponseParamsSpec = { $: {} };
mojom.user_education_internals.UserEducationInternalsPageHandler_ForceNewSession_ParamsSpec = { $: {} };
mojom.user_education_internals.UserEducationInternalsPageHandler_ForceNewSession_ResponseParamsSpec = { $: {} };
mojom.user_education_internals.UserEducationInternalsPageHandler_RemoveGracePeriods_ParamsSpec = { $: {} };
mojom.user_education_internals.UserEducationInternalsPageHandler_RemoveGracePeriods_ResponseParamsSpec = { $: {} };
mojom.user_education_internals.UserEducationInternalsPageHandler_GetNewBadges_ParamsSpec = { $: {} };
mojom.user_education_internals.UserEducationInternalsPageHandler_GetNewBadges_ResponseParamsSpec = { $: {} };
mojom.user_education_internals.UserEducationInternalsPageHandler_GetWhatsNewModules_ParamsSpec = { $: {} };
mojom.user_education_internals.UserEducationInternalsPageHandler_GetWhatsNewModules_ResponseParamsSpec = { $: {} };
mojom.user_education_internals.UserEducationInternalsPageHandler_GetWhatsNewEditions_ParamsSpec = { $: {} };
mojom.user_education_internals.UserEducationInternalsPageHandler_GetWhatsNewEditions_ResponseParamsSpec = { $: {} };
mojom.user_education_internals.UserEducationInternalsPageHandler_GetNtpPromos_ParamsSpec = { $: {} };
mojom.user_education_internals.UserEducationInternalsPageHandler_GetNtpPromos_ResponseParamsSpec = { $: {} };
mojom.user_education_internals.UserEducationInternalsPageHandler_GetNtpPromoPreferences_ParamsSpec = { $: {} };
mojom.user_education_internals.UserEducationInternalsPageHandler_GetNtpPromoPreferences_ResponseParamsSpec = { $: {} };
mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNewBadgeData_ParamsSpec = { $: {} };
mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNewBadgeData_ResponseParamsSpec = { $: {} };
mojom.user_education_internals.UserEducationInternalsPageHandler_ClearWhatsNewData_ParamsSpec = { $: {} };
mojom.user_education_internals.UserEducationInternalsPageHandler_ClearWhatsNewData_ResponseParamsSpec = { $: {} };
mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNtpPromoData_ParamsSpec = { $: {} };
mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNtpPromoData_ResponseParamsSpec = { $: {} };
mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNtpPromoPreferences_ParamsSpec = { $: {} };
mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNtpPromoPreferences_ResponseParamsSpec = { $: {} };
mojom.user_education_internals.UserEducationInternalsPageHandler_LaunchWhatsNewStaging_ParamsSpec = { $: {} };

// Struct: FeaturePromoDemoPageData
mojo.internal.Struct(
    mojom.user_education_internals.FeaturePromoDemoPageDataSpec, 'mojom.user_education_internals.FeaturePromoDemoPageData', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: FeaturePromoDemoPageInfo
mojo.internal.Struct(
    mojom.user_education_internals.FeaturePromoDemoPageInfoSpec, 'mojom.user_education_internals.FeaturePromoDemoPageInfo', [
      mojo.internal.StructField('display_title', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('display_description', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('internal_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('type', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('supported_platforms', 32, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('required_features', 40, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('instructions', 48, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('followed_by_internal_name', 56, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('data', 64, 0, mojo.internal.Array(mojom.user_education_internals.FeaturePromoDemoPageDataSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('added_milestone', 72, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 88]]);

// Struct: WhatsNewModuleDemoPageInfo
mojo.internal.Struct(
    mojom.user_education_internals.WhatsNewModuleDemoPageInfoSpec, 'mojom.user_education_internals.WhatsNewModuleDemoPageInfo', [
      mojo.internal.StructField('display_title', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('module_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('queue_position', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('has_browser_command', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_feature_enabled', 20, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: WhatsNewEditionDemoPageInfo
mojo.internal.Struct(
    mojom.user_education_internals.WhatsNewEditionDemoPageInfoSpec, 'mojom.user_education_internals.WhatsNewEditionDemoPageInfo', [
      mojo.internal.StructField('display_title', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('edition_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('version_used', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('is_feature_enabled', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_been_used', 20, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: UserEducationInternalsPageHandler
mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_GetTutorials_ParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_GetTutorials_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_GetTutorials_ResponseParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_GetTutorials_ResponseParams', [
      mojo.internal.StructField('tutorial_infos', 0, 0, mojo.internal.Array(mojom.user_education_internals.FeaturePromoDemoPageInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_StartTutorial_ParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_StartTutorial_Params', [
      mojo.internal.StructField('tutorial_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_StartTutorial_ResponseParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_StartTutorial_ResponseParams', [
      mojo.internal.StructField('error_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_GetSessionData_ParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_GetSessionData_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_GetSessionData_ResponseParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_GetSessionData_ResponseParams', [
      mojo.internal.StructField('session_data', 0, 0, mojo.internal.Array(mojom.user_education_internals.FeaturePromoDemoPageDataSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_GetFeaturePromos_ParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_GetFeaturePromos_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_GetFeaturePromos_ResponseParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_GetFeaturePromos_ResponseParams', [
      mojo.internal.StructField('feature_promos', 0, 0, mojo.internal.Array(mojom.user_education_internals.FeaturePromoDemoPageInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_ShowFeaturePromo_ParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_ShowFeaturePromo_Params', [
      mojo.internal.StructField('feature_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_ShowFeaturePromo_ResponseParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_ShowFeaturePromo_ResponseParams', [
      mojo.internal.StructField('error_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_ClearFeaturePromoData_ParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_ClearFeaturePromoData_Params', [
      mojo.internal.StructField('feature_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_ClearFeaturePromoData_ResponseParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_ClearFeaturePromoData_ResponseParams', [
      mojo.internal.StructField('error_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_ClearSessionData_ParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_ClearSessionData_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_ClearSessionData_ResponseParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_ClearSessionData_ResponseParams', [
      mojo.internal.StructField('error_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_ForceNewSession_ParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_ForceNewSession_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_ForceNewSession_ResponseParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_ForceNewSession_ResponseParams', [
      mojo.internal.StructField('error_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_RemoveGracePeriods_ParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_RemoveGracePeriods_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_RemoveGracePeriods_ResponseParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_RemoveGracePeriods_ResponseParams', [
      mojo.internal.StructField('error_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_GetNewBadges_ParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_GetNewBadges_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_GetNewBadges_ResponseParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_GetNewBadges_ResponseParams', [
      mojo.internal.StructField('new_badges', 0, 0, mojo.internal.Array(mojom.user_education_internals.FeaturePromoDemoPageInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_GetWhatsNewModules_ParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_GetWhatsNewModules_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_GetWhatsNewModules_ResponseParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_GetWhatsNewModules_ResponseParams', [
      mojo.internal.StructField('whats_new_modules', 0, 0, mojo.internal.Array(mojom.user_education_internals.WhatsNewModuleDemoPageInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_GetWhatsNewEditions_ParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_GetWhatsNewEditions_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_GetWhatsNewEditions_ResponseParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_GetWhatsNewEditions_ResponseParams', [
      mojo.internal.StructField('whats_new_editions', 0, 0, mojo.internal.Array(mojom.user_education_internals.WhatsNewEditionDemoPageInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_GetNtpPromos_ParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_GetNtpPromos_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_GetNtpPromos_ResponseParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_GetNtpPromos_ResponseParams', [
      mojo.internal.StructField('ntp_promos', 0, 0, mojo.internal.Array(mojom.user_education_internals.FeaturePromoDemoPageInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_GetNtpPromoPreferences_ParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_GetNtpPromoPreferences_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_GetNtpPromoPreferences_ResponseParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_GetNtpPromoPreferences_ResponseParams', [
      mojo.internal.StructField('ntp_promo_preferences', 0, 0, mojo.internal.Array(mojom.user_education_internals.FeaturePromoDemoPageDataSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNewBadgeData_ParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNewBadgeData_Params', [
      mojo.internal.StructField('feature_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNewBadgeData_ResponseParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNewBadgeData_ResponseParams', [
      mojo.internal.StructField('error_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_ClearWhatsNewData_ParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_ClearWhatsNewData_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_ClearWhatsNewData_ResponseParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_ClearWhatsNewData_ResponseParams', [
      mojo.internal.StructField('error_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNtpPromoData_ParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNtpPromoData_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNtpPromoData_ResponseParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNtpPromoData_ResponseParams', [
      mojo.internal.StructField('error_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNtpPromoPreferences_ParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNtpPromoPreferences_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNtpPromoPreferences_ResponseParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNtpPromoPreferences_ResponseParams', [
      mojo.internal.StructField('error_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.user_education_internals.UserEducationInternalsPageHandler_LaunchWhatsNewStaging_ParamsSpec, 'mojom.user_education_internals.UserEducationInternalsPageHandler_LaunchWhatsNewStaging_Params', [
    ],
    [[0, 8]]);

mojom.user_education_internals.UserEducationInternalsPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojom.user_education_internals.UserEducationInternalsPageHandlerRemote = class {
  static get $interfaceName() {
    return 'mojom.user_education_internals.UserEducationInternalsPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojom.user_education_internals.UserEducationInternalsPageHandlerPendingReceiver,
      handle);
    this.$ = new mojom.user_education_internals.UserEducationInternalsPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

mojom.user_education_internals.UserEducationInternalsPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('UserEducationInternalsPageHandler', [
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

  getTutorials() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojom.user_education_internals.UserEducationInternalsPageHandler_GetTutorials_ParamsSpec,
      mojom.user_education_internals.UserEducationInternalsPageHandler_GetTutorials_ResponseParamsSpec,
      [],
      false);
  }

  startTutorial(tutorial_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojom.user_education_internals.UserEducationInternalsPageHandler_StartTutorial_ParamsSpec,
      mojom.user_education_internals.UserEducationInternalsPageHandler_StartTutorial_ResponseParamsSpec,
      [tutorial_id],
      false);
  }

  getSessionData() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojom.user_education_internals.UserEducationInternalsPageHandler_GetSessionData_ParamsSpec,
      mojom.user_education_internals.UserEducationInternalsPageHandler_GetSessionData_ResponseParamsSpec,
      [],
      false);
  }

  getFeaturePromos() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojom.user_education_internals.UserEducationInternalsPageHandler_GetFeaturePromos_ParamsSpec,
      mojom.user_education_internals.UserEducationInternalsPageHandler_GetFeaturePromos_ResponseParamsSpec,
      [],
      false);
  }

  showFeaturePromo(feature_name) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojom.user_education_internals.UserEducationInternalsPageHandler_ShowFeaturePromo_ParamsSpec,
      mojom.user_education_internals.UserEducationInternalsPageHandler_ShowFeaturePromo_ResponseParamsSpec,
      [feature_name],
      false);
  }

  clearFeaturePromoData(feature_name) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojom.user_education_internals.UserEducationInternalsPageHandler_ClearFeaturePromoData_ParamsSpec,
      mojom.user_education_internals.UserEducationInternalsPageHandler_ClearFeaturePromoData_ResponseParamsSpec,
      [feature_name],
      false);
  }

  clearSessionData() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojom.user_education_internals.UserEducationInternalsPageHandler_ClearSessionData_ParamsSpec,
      mojom.user_education_internals.UserEducationInternalsPageHandler_ClearSessionData_ResponseParamsSpec,
      [],
      false);
  }

  forceNewSession() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojom.user_education_internals.UserEducationInternalsPageHandler_ForceNewSession_ParamsSpec,
      mojom.user_education_internals.UserEducationInternalsPageHandler_ForceNewSession_ResponseParamsSpec,
      [],
      false);
  }

  removeGracePeriods() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojom.user_education_internals.UserEducationInternalsPageHandler_RemoveGracePeriods_ParamsSpec,
      mojom.user_education_internals.UserEducationInternalsPageHandler_RemoveGracePeriods_ResponseParamsSpec,
      [],
      false);
  }

  getNewBadges() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojom.user_education_internals.UserEducationInternalsPageHandler_GetNewBadges_ParamsSpec,
      mojom.user_education_internals.UserEducationInternalsPageHandler_GetNewBadges_ResponseParamsSpec,
      [],
      false);
  }

  getWhatsNewModules() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojom.user_education_internals.UserEducationInternalsPageHandler_GetWhatsNewModules_ParamsSpec,
      mojom.user_education_internals.UserEducationInternalsPageHandler_GetWhatsNewModules_ResponseParamsSpec,
      [],
      false);
  }

  getWhatsNewEditions() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojom.user_education_internals.UserEducationInternalsPageHandler_GetWhatsNewEditions_ParamsSpec,
      mojom.user_education_internals.UserEducationInternalsPageHandler_GetWhatsNewEditions_ResponseParamsSpec,
      [],
      false);
  }

  getNtpPromos() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojom.user_education_internals.UserEducationInternalsPageHandler_GetNtpPromos_ParamsSpec,
      mojom.user_education_internals.UserEducationInternalsPageHandler_GetNtpPromos_ResponseParamsSpec,
      [],
      false);
  }

  getNtpPromoPreferences() {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojom.user_education_internals.UserEducationInternalsPageHandler_GetNtpPromoPreferences_ParamsSpec,
      mojom.user_education_internals.UserEducationInternalsPageHandler_GetNtpPromoPreferences_ResponseParamsSpec,
      [],
      false);
  }

  clearNewBadgeData(feature_name) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNewBadgeData_ParamsSpec,
      mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNewBadgeData_ResponseParamsSpec,
      [feature_name],
      false);
  }

  clearWhatsNewData() {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojom.user_education_internals.UserEducationInternalsPageHandler_ClearWhatsNewData_ParamsSpec,
      mojom.user_education_internals.UserEducationInternalsPageHandler_ClearWhatsNewData_ResponseParamsSpec,
      [],
      false);
  }

  clearNtpPromoData(id) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNtpPromoData_ParamsSpec,
      mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNtpPromoData_ResponseParamsSpec,
      [id],
      false);
  }

  clearNtpPromoPreferences() {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNtpPromoPreferences_ParamsSpec,
      mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNtpPromoPreferences_ResponseParamsSpec,
      [],
      false);
  }

  launchWhatsNewStaging() {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      mojom.user_education_internals.UserEducationInternalsPageHandler_LaunchWhatsNewStaging_ParamsSpec,
      null,
      [],
      false);
  }

};

mojom.user_education_internals.UserEducationInternalsPageHandler.getRemote = function() {
  let remote = new mojom.user_education_internals.UserEducationInternalsPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'mojom.user_education_internals.UserEducationInternalsPageHandler',
    'context');
  return remote.$;
};

mojom.user_education_internals.UserEducationInternalsPageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('UserEducationInternalsPageHandler', [
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
        
        // Try Method 0: GetTutorials
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_GetTutorials_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetTutorials (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: StartTutorial
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_StartTutorial_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartTutorial (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GetSessionData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_GetSessionData_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetSessionData (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GetFeaturePromos
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_GetFeaturePromos_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetFeaturePromos (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: ShowFeaturePromo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_ShowFeaturePromo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowFeaturePromo (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: ClearFeaturePromoData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_ClearFeaturePromoData_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearFeaturePromoData (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: ClearSessionData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_ClearSessionData_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearSessionData (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: ForceNewSession
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_ForceNewSession_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ForceNewSession (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: RemoveGracePeriods
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_RemoveGracePeriods_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemoveGracePeriods (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: GetNewBadges
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_GetNewBadges_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetNewBadges (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: GetWhatsNewModules
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_GetWhatsNewModules_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetWhatsNewModules (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: GetWhatsNewEditions
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_GetWhatsNewEditions_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetWhatsNewEditions (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: GetNtpPromos
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_GetNtpPromos_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetNtpPromos (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: GetNtpPromoPreferences
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_GetNtpPromoPreferences_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetNtpPromoPreferences (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: ClearNewBadgeData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNewBadgeData_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearNewBadgeData (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: ClearWhatsNewData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_ClearWhatsNewData_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearWhatsNewData (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: ClearNtpPromoData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNtpPromoData_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearNtpPromoData (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: ClearNtpPromoPreferences
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNtpPromoPreferences_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearNtpPromoPreferences (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: LaunchWhatsNewStaging
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_LaunchWhatsNewStaging_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LaunchWhatsNewStaging (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
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
          const params = decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_GetTutorials_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.getTutorials');
          const result = this.impl.getTutorials();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.user_education_internals.UserEducationInternalsPageHandler_GetTutorials_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_StartTutorial_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.startTutorial');
          const result = this.impl.startTutorial(params.tutorial_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.user_education_internals.UserEducationInternalsPageHandler_StartTutorial_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_GetSessionData_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.getSessionData');
          const result = this.impl.getSessionData();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.user_education_internals.UserEducationInternalsPageHandler_GetSessionData_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_GetFeaturePromos_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.getFeaturePromos');
          const result = this.impl.getFeaturePromos();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.user_education_internals.UserEducationInternalsPageHandler_GetFeaturePromos_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_ShowFeaturePromo_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.showFeaturePromo');
          const result = this.impl.showFeaturePromo(params.feature_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.user_education_internals.UserEducationInternalsPageHandler_ShowFeaturePromo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_ClearFeaturePromoData_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.clearFeaturePromoData');
          const result = this.impl.clearFeaturePromoData(params.feature_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.user_education_internals.UserEducationInternalsPageHandler_ClearFeaturePromoData_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_ClearSessionData_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.clearSessionData');
          const result = this.impl.clearSessionData();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.user_education_internals.UserEducationInternalsPageHandler_ClearSessionData_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_ForceNewSession_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.forceNewSession');
          const result = this.impl.forceNewSession();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.user_education_internals.UserEducationInternalsPageHandler_ForceNewSession_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_RemoveGracePeriods_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.removeGracePeriods');
          const result = this.impl.removeGracePeriods();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.user_education_internals.UserEducationInternalsPageHandler_RemoveGracePeriods_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_GetNewBadges_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.getNewBadges');
          const result = this.impl.getNewBadges();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.user_education_internals.UserEducationInternalsPageHandler_GetNewBadges_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_GetWhatsNewModules_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.getWhatsNewModules');
          const result = this.impl.getWhatsNewModules();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.user_education_internals.UserEducationInternalsPageHandler_GetWhatsNewModules_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_GetWhatsNewEditions_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.getWhatsNewEditions');
          const result = this.impl.getWhatsNewEditions();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.user_education_internals.UserEducationInternalsPageHandler_GetWhatsNewEditions_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_GetNtpPromos_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.getNtpPromos');
          const result = this.impl.getNtpPromos();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.user_education_internals.UserEducationInternalsPageHandler_GetNtpPromos_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_GetNtpPromoPreferences_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.getNtpPromoPreferences');
          const result = this.impl.getNtpPromoPreferences();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.user_education_internals.UserEducationInternalsPageHandler_GetNtpPromoPreferences_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNewBadgeData_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.clearNewBadgeData');
          const result = this.impl.clearNewBadgeData(params.feature_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNewBadgeData_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_ClearWhatsNewData_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.clearWhatsNewData');
          const result = this.impl.clearWhatsNewData();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.user_education_internals.UserEducationInternalsPageHandler_ClearWhatsNewData_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNtpPromoData_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.clearNtpPromoData');
          const result = this.impl.clearNtpPromoData(params.id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNtpPromoData_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNtpPromoPreferences_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.clearNtpPromoPreferences');
          const result = this.impl.clearNtpPromoPreferences();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.user_education_internals.UserEducationInternalsPageHandler_ClearNtpPromoPreferences_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.user_education_internals.UserEducationInternalsPageHandler_LaunchWhatsNewStaging_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.launchWhatsNewStaging');
          const result = this.impl.launchWhatsNewStaging();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojom.user_education_internals.UserEducationInternalsPageHandlerReceiver = mojom.user_education_internals.UserEducationInternalsPageHandlerReceiver;

mojom.user_education_internals.UserEducationInternalsPageHandlerPtr = mojom.user_education_internals.UserEducationInternalsPageHandlerRemote;
mojom.user_education_internals.UserEducationInternalsPageHandlerRequest = mojom.user_education_internals.UserEducationInternalsPageHandlerPendingReceiver;

