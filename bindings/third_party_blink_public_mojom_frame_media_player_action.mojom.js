// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/frame/media_player_action.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.MediaPlayerActionTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.MediaPlayerActionSpec = { $: {} };

// Enum: MediaPlayerActionType
blink.mojom.MediaPlayerActionType = {
  kLoop: 0,
  kControls: 1,
  kSaveVideoFrameAs: 2,
  kCopyVideoFrame: 3,
  kPictureInPicture: 4,
  kDefaultActionType: 4,
};

// Struct: MediaPlayerAction
mojo.internal.Struct(
    blink.mojom.MediaPlayerActionSpec, 'blink.mojom.MediaPlayerAction', [
      mojo.internal.StructField('type', 0, 0, blink.mojom.MediaPlayerActionTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('enable', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);
