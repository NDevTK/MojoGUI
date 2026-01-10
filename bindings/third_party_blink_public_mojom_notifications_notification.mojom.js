// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/notifications/notification.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var skia = skia || {};
var url = url || {};


blink.mojom.mojom.kMaximumDeveloperDataSize = 1048576;

blink.mojom.mojom.kMaximumActions = 2;

// Enum: NotificationDirection
blink.mojom.mojom.NotificationDirection = {
  LEFT_TO_RIGHT: 0,
  RIGHT_TO_LEFT: 1,
  AUTO: 2,
};
blink.mojom.mojom.NotificationDirectionSpec = { $: mojo.internal.Enum() };

// Enum: NotificationActionType
blink.mojom.mojom.NotificationActionType = {
  BUTTON: 0,
  TEXT: 1,
};
blink.mojom.mojom.NotificationActionTypeSpec = { $: mojo.internal.Enum() };

// Enum: NotificationScenario
blink.mojom.mojom.NotificationScenario = {
  DEFAULT: 0,
  INCOMING_CALL: 1,
};
blink.mojom.mojom.NotificationScenarioSpec = { $: mojo.internal.Enum() };

// Struct: NotificationAction
blink.mojom.mojom.NotificationActionSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.NotificationAction',
      packedSize: 48,
      fields: [
        { name: 'type', packedOffset: 32, packedBitOffset: 0, type: blink.mojom.NotificationActionTypeSpec, nullable: false, minVersion: 0 },
        { name: 'action', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'title', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'icon', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'placeholder', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: NotificationData
blink.mojom.mojom.NotificationDataSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.NotificationData',
      packedSize: 136,
      fields: [
        { name: 'kMaximumDeveloperDataSize', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
        { name: 'kMaximumActions', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
        { name: 'title', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'direction', packedOffset: 112, packedBitOffset: 0, type: blink.mojom.NotificationDirectionSpec, nullable: false, minVersion: 0 },
        { name: 'lang', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'body', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'tag', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'image', packedOffset: 48, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'icon', packedOffset: 56, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'badge', packedOffset: 64, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'vibration_pattern', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Int32, false), nullable: true, minVersion: 0 },
        { name: 'timestamp', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'renotify', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'silent', packedOffset: 120, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'require_interaction', packedOffset: 120, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'data', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 0 },
        { name: 'actions', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.NotificationActionSpec, false), nullable: true, minVersion: 0 },
        { name: 'show_trigger_timestamp', packedOffset: 104, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: true, minVersion: 0 },
        { name: 'scenario', packedOffset: 116, packedBitOffset: 0, type: blink.mojom.NotificationScenarioSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 136}]
    }
  }
};

// Struct: NotificationResources
blink.mojom.mojom.NotificationResourcesSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.NotificationResources',
      packedSize: 40,
      fields: [
        { name: 'image', packedOffset: 0, packedBitOffset: 0, type: skia.mojom.BitmapN32Spec, nullable: true, minVersion: 0 },
        { name: 'icon', packedOffset: 8, packedBitOffset: 0, type: skia.mojom.BitmapN32Spec, nullable: true, minVersion: 0 },
        { name: 'badge', packedOffset: 16, packedBitOffset: 0, type: skia.mojom.BitmapN32Spec, nullable: true, minVersion: 0 },
        { name: 'action_icons', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(skia.mojom.BitmapN32Spec, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};
