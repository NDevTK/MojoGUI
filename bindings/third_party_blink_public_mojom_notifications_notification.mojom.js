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
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'action', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'title', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'icon', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'placeholder', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
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
        { name: 'kMaximumDeveloperDataSize', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'kMaximumActions', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'title', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'direction', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'lang', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'body', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'tag', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'image', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'icon', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'badge', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'vibration_pattern', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'timestamp', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'data', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'actions', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'show_trigger_timestamp', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'scenario', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'renotify', packedOffset: 128, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'silent', packedOffset: 128, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'require_interaction', packedOffset: 128, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
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
        { name: 'image', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'icon', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'badge', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'action_icons', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
