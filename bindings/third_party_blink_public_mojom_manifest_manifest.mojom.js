// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/manifest/manifest.mojom
// Module: blink.mojom

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

        // Allow forcing version from external script
        if (window.mojoVersion) { v = window.mojoVersion; }
        
        const p = v.split('.');
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
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};
var device = device || {};
var network = network || {};
var gfx = gfx || {};
var url = url || {};

blink.mojom.TextDirectionSpec = { $: mojo.internal.Enum() };
blink.mojom.PurposeSpec = { $: mojo.internal.Enum() };
blink.mojom.FormFactorSpec = { $: mojo.internal.Enum() };
blink.mojom.MethodSpec = { $: mojo.internal.Enum() };
blink.mojom.EnctypeSpec = { $: mojo.internal.Enum() };
blink.mojom.LaunchTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.ManifestMigrationBehaviorSpec = { $: mojo.internal.Enum() };
blink.mojom.TabStripMemberVisibilitySpec = { $: mojo.internal.Enum() };
blink.mojom.ManifestRequestResultSpec = { $: mojo.internal.Enum() };
blink.mojom.HomeTabUnionSpec = { $: {} };
blink.mojom.ManifestSpec = { $: {} };
blink.mojom.ManifestLocalizedTextObjectSpec = { $: {} };
blink.mojom.LocaleSpec = { $: {} };
blink.mojom.ManifestShortcutItemSpec = { $: {} };
blink.mojom.ManifestImageResourceSpec = { $: {} };
blink.mojom.ManifestScreenshotSpec = { $: {} };
blink.mojom.ManifestFileFilterSpec = { $: {} };
blink.mojom.ManifestProtocolHandlerSpec = { $: {} };
blink.mojom.ManifestScopeExtensionSpec = { $: {} };
blink.mojom.ManifestLockScreenSpec = { $: {} };
blink.mojom.ManifestNoteTakingSpec = { $: {} };
blink.mojom.ManifestRelatedApplicationSpec = { $: {} };
blink.mojom.ManifestShareTargetParamsSpec = { $: {} };
blink.mojom.ManifestShareTargetSpec = { $: {} };
blink.mojom.ManifestFileHandlerSpec = { $: {} };
blink.mojom.ManifestTranslationItemSpec = { $: {} };
blink.mojom.ManifestMigrateFromSpec = { $: {} };
blink.mojom.ManifestMigrateToSpec = { $: {} };
blink.mojom.ManifestTabStripSpec = { $: {} };
blink.mojom.HomeTabParamsSpec = { $: {} };
blink.mojom.NewTabButtonParamsSpec = { $: {} };
blink.mojom.ManifestDebugInfoSpec = { $: {} };
blink.mojom.ManifestErrorSpec = { $: {} };
blink.mojom.DisplayOverrideItemSpec = { $: {} };

// Enum: TextDirection
blink.mojom.TextDirection = {
  kAuto: 0,
  kLTR: 1,
  kRTL: 2,
};

// Enum: Purpose
blink.mojom.Purpose = {
  ANY: 0,
  MONOCHROME: 1,
  MASKABLE: 2,
};

// Enum: FormFactor
blink.mojom.FormFactor = {
  kUnknown: 0,
  kWide: 1,
  kNarrow: 2,
};

// Enum: Method
blink.mojom.Method = {
  kGet: 0,
  kPost: 1,
};

// Enum: Enctype
blink.mojom.Enctype = {
  kFormUrlEncoded: 0,
  kMultipartFormData: 1,
};

// Enum: LaunchType
blink.mojom.LaunchType = {
  kSingleClient: 0,
  kMultipleClients: 1,
};

// Enum: ManifestMigrationBehavior
blink.mojom.ManifestMigrationBehavior = {
  kSuggest: 0,
  kForce: 1,
};

// Enum: TabStripMemberVisibility
blink.mojom.TabStripMemberVisibility = {
  kAuto: 0,
  kAbsent: 1,
};

// Enum: ManifestRequestResult
blink.mojom.ManifestRequestResult = {
  kUnexpectedFailure: 0,
  kNoManifestAllowed: 1,
  kNoManifestSpecified: 2,
  kManifestFailedToFetch: 3,
  kManifestFailedToParse: 4,
  kSuccess: 5,
};

// Union: HomeTabUnion
mojo.internal.Union(
    blink.mojom.HomeTabUnionSpec, 'blink.mojom.HomeTabUnion', {
      'visibility': {
        'ordinal': 0,
        'type': blink.mojom.TabStripMemberVisibilitySpec.$,
        'nullable': false,
      },
      'params': {
        'ordinal': 1,
        'type': blink.mojom.HomeTabParamsSpec.$,
        'nullable': false,
      },
    });

// Struct: Manifest
mojo.internal.Struct(
    blink.mojom.ManifestSpec, 'blink.mojom.Manifest', [
      mojo.internal.StructField('kAuto', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ManifestLocalizedTextObject
mojo.internal.Struct(
    blink.mojom.ManifestLocalizedTextObjectSpec, 'blink.mojom.ManifestLocalizedTextObject', [
      mojo.internal.StructField('value', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('dir', 8, 0, Manifest.TextDirectionSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('lang', 16, 0, mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: Locale
mojo.internal.Struct(
    blink.mojom.LocaleSpec, 'blink.mojom.Locale', [
      mojo.internal.StructField('tag', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ManifestShortcutItem
mojo.internal.Struct(
    blink.mojom.ManifestShortcutItemSpec, 'blink.mojom.ManifestShortcutItem', [
      mojo.internal.StructField('name', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('short_name', 8, 0, mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('description', 16, 0, mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('url', 24, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('icons', 32, 0, mojo.internal.Array(blink.mojom.ManifestImageResourceSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('name_localized', 40, 0, mojo.internal.Map(blink.mojom.LocaleSpec.$, blink.mojom.ManifestLocalizedTextObjectSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('short_name_localized', 48, 0, mojo.internal.Map(blink.mojom.LocaleSpec.$, blink.mojom.ManifestLocalizedTextObjectSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('description_localized', 56, 0, mojo.internal.Map(blink.mojom.LocaleSpec.$, blink.mojom.ManifestLocalizedTextObjectSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('icons_localized', 64, 0, mojo.internal.Map(blink.mojom.LocaleSpec.$, mojo.internal.Array(blink.mojom.ManifestImageResourceSpec.$, false), false), null, true, 0, undefined),
    ],
    [[0, 80]]);

// Struct: ManifestImageResource
mojo.internal.Struct(
    blink.mojom.ManifestImageResourceSpec, 'blink.mojom.ManifestImageResource', [
      mojo.internal.StructField('ANY', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ManifestScreenshot
mojo.internal.Struct(
    blink.mojom.ManifestScreenshotSpec, 'blink.mojom.ManifestScreenshot', [
      mojo.internal.StructField('kUnknown', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ManifestFileFilter
mojo.internal.Struct(
    blink.mojom.ManifestFileFilterSpec, 'blink.mojom.ManifestFileFilter', [
      mojo.internal.StructField('name', 0, 0, mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('accept', 8, 0, mojo.internal.Array(mojo_base.mojom.String16Spec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ManifestProtocolHandler
mojo.internal.Struct(
    blink.mojom.ManifestProtocolHandlerSpec, 'blink.mojom.ManifestProtocolHandler', [
      mojo.internal.StructField('protocol', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ManifestScopeExtension
mojo.internal.Struct(
    blink.mojom.ManifestScopeExtensionSpec, 'blink.mojom.ManifestScopeExtension', [
      mojo.internal.StructField('origin', 0, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('has_origin_wildcard', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ManifestLockScreen
mojo.internal.Struct(
    blink.mojom.ManifestLockScreenSpec, 'blink.mojom.ManifestLockScreen', [
      mojo.internal.StructField('start_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ManifestNoteTaking
mojo.internal.Struct(
    blink.mojom.ManifestNoteTakingSpec, 'blink.mojom.ManifestNoteTaking', [
      mojo.internal.StructField('new_note_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ManifestRelatedApplication
mojo.internal.Struct(
    blink.mojom.ManifestRelatedApplicationSpec, 'blink.mojom.ManifestRelatedApplication', [
      mojo.internal.StructField('platform', 0, 0, mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('id', 16, 0, mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ManifestShareTargetParams
mojo.internal.Struct(
    blink.mojom.ManifestShareTargetParamsSpec, 'blink.mojom.ManifestShareTargetParams', [
      mojo.internal.StructField('title', 0, 0, mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('text', 8, 0, mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('url', 16, 0, mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('files', 24, 0, mojo.internal.Array(blink.mojom.ManifestFileFilterSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ManifestShareTarget
mojo.internal.Struct(
    blink.mojom.ManifestShareTargetSpec, 'blink.mojom.ManifestShareTarget', [
      mojo.internal.StructField('kGet', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ManifestFileHandler
mojo.internal.Struct(
    blink.mojom.ManifestFileHandlerSpec, 'blink.mojom.ManifestFileHandler', [
      mojo.internal.StructField('action', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('icons', 16, 0, mojo.internal.Array(blink.mojom.ManifestImageResourceSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('accept', 24, 0, mojo.internal.Map(mojo_base.mojom.String16Spec.$, mojo.internal.Array(mojo_base.mojom.String16Spec.$, false), false), null, false, 0, undefined),
      mojo.internal.StructField('kSingleClient', 32, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: ManifestTranslationItem
mojo.internal.Struct(
    blink.mojom.ManifestTranslationItemSpec, 'blink.mojom.ManifestTranslationItem', [
      mojo.internal.StructField('name', 0, 0, mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('short_name', 8, 0, mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('description', 16, 0, mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ManifestMigrateFrom
mojo.internal.Struct(
    blink.mojom.ManifestMigrateFromSpec, 'blink.mojom.ManifestMigrateFrom', [
      mojo.internal.StructField('id', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('install_url', 8, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('behavior', 16, 0, blink.mojom.ManifestMigrationBehaviorSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ManifestMigrateTo
mojo.internal.Struct(
    blink.mojom.ManifestMigrateToSpec, 'blink.mojom.ManifestMigrateTo', [
      mojo.internal.StructField('id', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('install_url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ManifestTabStrip
mojo.internal.Struct(
    blink.mojom.ManifestTabStripSpec, 'blink.mojom.ManifestTabStrip', [
      mojo.internal.StructField('home_tab', 0, 0, blink.mojom.HomeTabUnionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('new_tab_button', 8, 0, blink.mojom.NewTabButtonParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: HomeTabParams
mojo.internal.Struct(
    blink.mojom.HomeTabParamsSpec, 'blink.mojom.HomeTabParams', [
      mojo.internal.StructField('icons', 0, 0, mojo.internal.Array(blink.mojom.ManifestImageResourceSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('scope_patterns', 8, 0, mojo.internal.Array(blink.mojom.SafeUrlPatternSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: NewTabButtonParams
mojo.internal.Struct(
    blink.mojom.NewTabButtonParamsSpec, 'blink.mojom.NewTabButtonParams', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ManifestDebugInfo
mojo.internal.Struct(
    blink.mojom.ManifestDebugInfoSpec, 'blink.mojom.ManifestDebugInfo', [
      mojo.internal.StructField('errors', 0, 0, mojo.internal.Array(blink.mojom.ManifestErrorSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('raw_manifest', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ManifestError
mojo.internal.Struct(
    blink.mojom.ManifestErrorSpec, 'blink.mojom.ManifestError', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('line', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('column', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('critical', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: DisplayOverrideItem
mojo.internal.Struct(
    blink.mojom.DisplayOverrideItemSpec, 'blink.mojom.DisplayOverrideItem', [
      mojo.internal.StructField('display', 0, 0, blink.mojom.DisplayModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('url_patterns', 8, 0, mojo.internal.Array(blink.mojom.SafeUrlPatternSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);
