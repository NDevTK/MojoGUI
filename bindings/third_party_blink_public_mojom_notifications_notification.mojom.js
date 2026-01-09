// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/notifications/notification.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: NotificationDirection
blink.mojom.NotificationDirection = {
  LEFT_TO_RIGHT: 0,
  RIGHT_TO_LEFT: 1,
  AUTO: 2,
};

// Enum: NotificationActionType
blink.mojom.NotificationActionType = {
  BUTTON: 0,
  TEXT: 1,
};

// Enum: NotificationScenario
blink.mojom.NotificationScenario = {
  DEFAULT: 0,
  INCOMING_CALL: 1,
};

// Struct: NotificationAction
blink.mojom.NotificationActionSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.NotificationAction',
      packedSize: 48,
      fields: [
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.NotificationActionTypeSpec, nullable: false },
        { name: 'action', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'title', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false },
        { name: 'icon', packedOffset: 32, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'placeholder', packedOffset: 40, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: NotificationData
blink.mojom.NotificationDataSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.NotificationData',
      packedSize: 144,
      fields: [
        { name: 'kMaximumDeveloperDataSize', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'kMaximumActions', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'title', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false },
        { name: 'direction', packedOffset: 32, packedBitOffset: 0, type: blink.mojom.NotificationDirectionSpec, nullable: false },
        { name: 'lang', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'body', packedOffset: 48, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false },
        { name: 'tag', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'image', packedOffset: 64, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'icon', packedOffset: 72, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'badge', packedOffset: 80, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'vibration_pattern', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'timestamp', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'renotify', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'silent', packedOffset: 104, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'require_interaction', packedOffset: 104, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'data', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'actions', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'show_trigger_timestamp', packedOffset: 128, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: true },
        { name: 'scenario', packedOffset: 136, packedBitOffset: 0, type: blink.mojom.NotificationScenarioSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: NotificationResources
blink.mojom.NotificationResourcesSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.NotificationResources',
      packedSize: 40,
      fields: [
        { name: 'image', packedOffset: 8, packedBitOffset: 0, type: skia.mojom.BitmapN32Spec, nullable: true },
        { name: 'icon', packedOffset: 16, packedBitOffset: 0, type: skia.mojom.BitmapN32Spec, nullable: true },
        { name: 'badge', packedOffset: 24, packedBitOffset: 0, type: skia.mojom.BitmapN32Spec, nullable: true },
        { name: 'action_icons', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
