// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/frame/frame_replication_state.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var services = services || {};
var services = services || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var url = url || {};

blink.mojom.FrameReplicationStateSpec = { $: {} };

// Struct: FrameReplicationState
mojo.internal.Struct(
    blink.mojom.FrameReplicationStateSpec, 'blink.mojom.FrameReplicationState', [
      mojo.internal.StructField('origin', 0, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('unique_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('permissions_policy_header', 24, 0, mojo.internal.Array(network.mojom.ParsedPermissionsPolicyDeclarationSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('frame_policy', 32, 0, blink.mojom.FramePolicySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('insecure_navigations_set', 40, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
      mojo.internal.StructField('has_potentially_trustworthy_unique_origin', 48, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_active_user_gesture', 48, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_received_user_gesture_before_nav', 48, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_ad_frame', 48, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 64]]);
