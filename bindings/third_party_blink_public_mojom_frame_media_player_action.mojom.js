// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/frame/media_player_action.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: MediaPlayerActionType
blink.mojom.MediaPlayerActionType = {
  kLoop: 0,
  kControls: 1,
  kSaveVideoFrameAs: 2,
  kCopyVideoFrame: 3,
  kPictureInPicture: 4,
  kDefaultActionType: 5,
};

// Struct: MediaPlayerAction
blink.mojom.MediaPlayerActionSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MediaPlayerAction',
      packedSize: 24,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'enable', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
