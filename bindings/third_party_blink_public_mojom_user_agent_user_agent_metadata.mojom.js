// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/user_agent/user_agent_metadata.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.UserAgentBrandVersionSpec = { $: {} };
blink.mojom.UserAgentMetadataSpec = { $: {} };
blink.mojom.UserAgentOverrideSpec = { $: {} };

// Struct: UserAgentBrandVersion
mojo.internal.Struct(
    blink.mojom.UserAgentBrandVersionSpec, 'blink.mojom.UserAgentBrandVersion', [
      mojo.internal.StructField('brand', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('version', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: UserAgentMetadata
mojo.internal.Struct(
    blink.mojom.UserAgentMetadataSpec, 'blink.mojom.UserAgentMetadata', [
      mojo.internal.StructField('brand_version_list', 0, 0, mojo.internal.Array(blink.mojom.UserAgentBrandVersionSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('brand_full_version_list', 8, 0, mojo.internal.Array(blink.mojom.UserAgentBrandVersionSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('full_version', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('platform', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('platform_version', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('architecture', 40, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('model', 48, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('mobile', 56, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('bitness', 64, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('wow64', 72, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('form_factors', 80, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 96]]);

// Struct: UserAgentOverride
mojo.internal.Struct(
    blink.mojom.UserAgentOverrideSpec, 'blink.mojom.UserAgentOverride', [
      mojo.internal.StructField('ua_string_override', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('ua_metadata_override', 8, 0, blink.mojom.UserAgentMetadataSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);
