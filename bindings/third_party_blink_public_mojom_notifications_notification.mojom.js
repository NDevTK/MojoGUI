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
      packedSize: 16,
      fields: [
        { name: 'placeholder', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
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
      packedSize: 16,
      fields: [
        { name: 'DEFAULT', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
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
      packedSize: 16,
      fields: [
        { name: 'action_icons', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
