// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/frame/frame_replication_state.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var url = url || {};


// Struct: FrameReplicationState
blink.mojom.FrameReplicationStateSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameReplicationState',
      packedSize: 64,
      fields: [
        { name: 'origin', packedOffset: 0, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'unique_name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'permissions_policy_header', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(network.mojom.ParsedPermissionsPolicyDeclarationSpec, false), nullable: false, minVersion: 0 },
        { name: 'frame_policy', packedOffset: 32, packedBitOffset: 0, type: blink.mojom.FramePolicySpec, nullable: false, minVersion: 0 },
        { name: 'insecure_navigations_set', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint32, false), nullable: false, minVersion: 0 },
        { name: 'has_potentially_trustworthy_unique_origin', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'has_active_user_gesture', packedOffset: 48, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'has_received_user_gesture_before_nav', packedOffset: 48, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_ad_frame', packedOffset: 48, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};
