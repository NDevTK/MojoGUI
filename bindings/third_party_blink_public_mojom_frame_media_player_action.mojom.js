// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/frame/media_player_action.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: MediaPlayerActionType
blink.mojom.mojom.MediaPlayerActionType = {
  kLoop: 0,
  kControls: 1,
  kSaveVideoFrameAs: 2,
  kCopyVideoFrame: 3,
  kPictureInPicture: 4,
  kDefaultActionType: 5,
};
blink.mojom.mojom.MediaPlayerActionTypeSpec = { $: mojo.internal.Enum() };

// Struct: MediaPlayerAction
blink.mojom.mojom.MediaPlayerActionSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaPlayerAction',
      packedSize: 16,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.MediaPlayerActionTypeSpec, nullable: false, minVersion: 0 },
        { name: 'enable', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};
