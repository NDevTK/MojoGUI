// Auto-generated MojoJS binding
 // Source: chromium_src/third_party/blink/public/mojom/fenced_frame/fenced_frame_config.mojom
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

         const versionStr = window.mojoVersion || '120.0.0.0';
         const p = versionStr.split('.');
         const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
         
         const shortName = ifaceName.split('.').pop();
         while (true) {
           i++;
           const h0 = SHA256(salt + shortName + i);
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
 

 mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.blink.mojom.ReportingDestinationSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.DeprecatedFencedFrameModeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.OpaqueSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.AutomaticBeaconTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.PotentiallyOpaqueURLSpec = { $: {} };
mojo.internal.bindings.blink.mojom.PotentiallyOpaqueSizeSpec = { $: {} };
mojo.internal.bindings.blink.mojom.PotentiallyOpaqueBoolSpec = { $: {} };
mojo.internal.bindings.blink.mojom.PotentiallyOpaqueAdAuctionDataSpec = { $: {} };
mojo.internal.bindings.blink.mojom.PotentiallyOpaqueConfigVectorSpec = { $: {} };
mojo.internal.bindings.blink.mojom.PotentiallyOpaqueURNConfigVectorSpec = { $: {} };
mojo.internal.bindings.blink.mojom.PotentiallyOpaqueSharedStorageBudgetMetadataSpec = { $: {} };
mojo.internal.bindings.blink.mojom.AdAuctionDataSpec = { $: {} };
mojo.internal.bindings.blink.mojom.URNConfigPairSpec = { $: {} };
mojo.internal.bindings.blink.mojom.SharedStorageBudgetMetadataSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ParentPermissionsInfoSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FencedFrameConfigSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FencedFramePropertiesSpec = { $: {} };

// Enum: ReportingDestination
mojo.internal.bindings.blink.mojom.ReportingDestination = {
  kBuyer: 0,
  kSeller: 1,
  kComponentSeller: 2,
  kSharedStorageSelectUrl: 3,
  kDirectSeller: 4,
};

// Enum: DeprecatedFencedFrameMode
mojo.internal.bindings.blink.mojom.DeprecatedFencedFrameMode = {
  kDefault: 0,
  kOpaqueAds: 1,
};

// Enum: Opaque
mojo.internal.bindings.blink.mojom.Opaque = {
  kOpaque: 0,
};

// Enum: AutomaticBeaconType
mojo.internal.bindings.blink.mojom.AutomaticBeaconType = {
  kDeprecatedTopNavigation: 0,
  kTopNavigationStart: 1,
  kTopNavigationCommit: 2,
};

// Union: PotentiallyOpaqueURL
mojo.internal.Union(
    mojo.internal.bindings.blink.mojom.PotentiallyOpaqueURLSpec, 'blink.mojom.PotentiallyOpaqueURL', {
      'arg_transparent': {
        'ordinal': 0,
        'type': mojo.internal.bindings.url.mojom.UrlSpec.$,
        'nullable': false,
      },
      'arg_opaque': {
        'ordinal': 1,
        'type': mojo.internal.bindings.blink.mojom.OpaqueSpec.$,
        'nullable': false,
      },
    });

// Union: PotentiallyOpaqueSize
mojo.internal.Union(
    mojo.internal.bindings.blink.mojom.PotentiallyOpaqueSizeSpec, 'blink.mojom.PotentiallyOpaqueSize', {
      'arg_transparent': {
        'ordinal': 0,
        'type': mojo.internal.bindings.gfx.mojom.SizeSpec.$,
        'nullable': false,
      },
      'arg_opaque': {
        'ordinal': 1,
        'type': mojo.internal.bindings.blink.mojom.OpaqueSpec.$,
        'nullable': false,
      },
    });

// Union: PotentiallyOpaqueBool
mojo.internal.Union(
    mojo.internal.bindings.blink.mojom.PotentiallyOpaqueBoolSpec, 'blink.mojom.PotentiallyOpaqueBool', {
      'arg_transparent': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'arg_opaque': {
        'ordinal': 1,
        'type': mojo.internal.bindings.blink.mojom.OpaqueSpec.$,
        'nullable': false,
      },
    });

// Union: PotentiallyOpaqueAdAuctionData
mojo.internal.Union(
    mojo.internal.bindings.blink.mojom.PotentiallyOpaqueAdAuctionDataSpec, 'blink.mojom.PotentiallyOpaqueAdAuctionData', {
      'arg_transparent': {
        'ordinal': 0,
        'type': mojo.internal.bindings.blink.mojom.AdAuctionDataSpec.$,
        'nullable': false,
      },
      'arg_opaque': {
        'ordinal': 1,
        'type': mojo.internal.bindings.blink.mojom.OpaqueSpec.$,
        'nullable': false,
      },
    });

// Union: PotentiallyOpaqueConfigVector
mojo.internal.Union(
    mojo.internal.bindings.blink.mojom.PotentiallyOpaqueConfigVectorSpec, 'blink.mojom.PotentiallyOpaqueConfigVector', {
      'arg_transparent': {
        'ordinal': 0,
        'type': mojo.internal.Array(mojo.internal.bindings.blink.mojom.FencedFrameConfigSpec.$, false),
        'nullable': false,
      },
      'arg_opaque': {
        'ordinal': 1,
        'type': mojo.internal.bindings.blink.mojom.OpaqueSpec.$,
        'nullable': false,
      },
    });

// Union: PotentiallyOpaqueURNConfigVector
mojo.internal.Union(
    mojo.internal.bindings.blink.mojom.PotentiallyOpaqueURNConfigVectorSpec, 'blink.mojom.PotentiallyOpaqueURNConfigVector', {
      'arg_transparent': {
        'ordinal': 0,
        'type': mojo.internal.Array(mojo.internal.bindings.blink.mojom.URNConfigPairSpec.$, false),
        'nullable': false,
      },
      'arg_opaque': {
        'ordinal': 1,
        'type': mojo.internal.bindings.blink.mojom.OpaqueSpec.$,
        'nullable': false,
      },
    });

// Union: PotentiallyOpaqueSharedStorageBudgetMetadata
mojo.internal.Union(
    mojo.internal.bindings.blink.mojom.PotentiallyOpaqueSharedStorageBudgetMetadataSpec, 'blink.mojom.PotentiallyOpaqueSharedStorageBudgetMetadata', {
      'arg_transparent': {
        'ordinal': 0,
        'type': mojo.internal.bindings.blink.mojom.SharedStorageBudgetMetadataSpec.$,
        'nullable': false,
      },
      'arg_opaque': {
        'ordinal': 1,
        'type': mojo.internal.bindings.blink.mojom.OpaqueSpec.$,
        'nullable': false,
      },
    });

// Struct: AdAuctionData
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.AdAuctionDataSpec, 'blink.mojom.AdAuctionData', [
      mojo.internal.StructField('arg_interest_group_owner', 0, 0, mojo.internal.bindings.url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_interest_group_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: URNConfigPair
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.URNConfigPairSpec, 'blink.mojom.URNConfigPair', [
      mojo.internal.StructField('arg_urn', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_config', 8, 0, mojo.internal.bindings.blink.mojom.FencedFrameConfigSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SharedStorageBudgetMetadata
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SharedStorageBudgetMetadataSpec, 'blink.mojom.SharedStorageBudgetMetadata', [
      mojo.internal.StructField('arg_site', 0, 0, mojo.internal.bindings.network.mojom.SchemefulSiteSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_budget_to_charge', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_top_navigated', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ParentPermissionsInfo
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ParentPermissionsInfoSpec, 'blink.mojom.ParentPermissionsInfo', [
      mojo.internal.StructField('arg_parsed_permissions_policy', 0, 0, mojo.internal.Array(mojo.internal.bindings.network.mojom.ParsedPermissionsPolicyDeclarationSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_origin', 8, 0, mojo.internal.bindings.url.mojom.OriginSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: FencedFrameConfig
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FencedFrameConfigSpec, 'blink.mojom.FencedFrameConfig', [
      mojo.internal.StructField('arg_mapped_url', 0, 0, mojo.internal.bindings.blink.mojom.PotentiallyOpaqueURLSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_container_size', 8, 0, mojo.internal.bindings.blink.mojom.PotentiallyOpaqueSizeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_content_size', 16, 0, mojo.internal.bindings.blink.mojom.PotentiallyOpaqueSizeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_deprecated_should_freeze_initial_size', 24, 0, mojo.internal.bindings.blink.mojom.PotentiallyOpaqueBoolSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_ad_auction_data', 32, 0, mojo.internal.bindings.blink.mojom.PotentiallyOpaqueAdAuctionDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_nested_configs', 40, 0, mojo.internal.bindings.blink.mojom.PotentiallyOpaqueConfigVectorSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_shared_storage_budget_metadata', 48, 0, mojo.internal.bindings.blink.mojom.PotentiallyOpaqueSharedStorageBudgetMetadataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_urn_uuid', 56, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_mode', 64, 0, mojo.internal.bindings.blink.mojom.DeprecatedFencedFrameModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_effective_enabled_permissions', 72, 0, mojo.internal.Array(mojo.internal.bindings.network.mojom.PermissionsPolicyFeatureSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_parent_permissions_info', 80, 0, mojo.internal.bindings.blink.mojom.ParentPermissionsInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 96]]);

// Struct: FencedFrameProperties
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FencedFramePropertiesSpec, 'blink.mojom.FencedFrameProperties', [
      mojo.internal.StructField('arg_mapped_url', 0, 0, mojo.internal.bindings.blink.mojom.PotentiallyOpaqueURLSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_container_size', 8, 0, mojo.internal.bindings.blink.mojom.PotentiallyOpaqueSizeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_content_size', 16, 0, mojo.internal.bindings.blink.mojom.PotentiallyOpaqueSizeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_deprecated_should_freeze_initial_size', 24, 0, mojo.internal.bindings.blink.mojom.PotentiallyOpaqueBoolSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_ad_auction_data', 32, 0, mojo.internal.bindings.blink.mojom.PotentiallyOpaqueAdAuctionDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_nested_urn_config_pairs', 40, 0, mojo.internal.bindings.blink.mojom.PotentiallyOpaqueURNConfigVectorSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_shared_storage_budget_metadata', 48, 0, mojo.internal.bindings.blink.mojom.PotentiallyOpaqueSharedStorageBudgetMetadataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_mode', 56, 0, mojo.internal.bindings.blink.mojom.DeprecatedFencedFrameModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_effective_enabled_permissions', 64, 0, mojo.internal.Array(mojo.internal.bindings.network.mojom.PermissionsPolicyFeatureSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_parent_permissions_info', 72, 0, mojo.internal.bindings.blink.mojom.ParentPermissionsInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_can_disable_untrusted_network', 80, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_cross_origin_content', 80, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_allow_cross_origin_event_reporting', 80, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 96]]);
