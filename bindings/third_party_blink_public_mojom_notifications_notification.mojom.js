// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/notifications/notification.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var skia = skia || {};
var url = url || {};

blink.mojom.NotificationDirectionSpec = { $: mojo.internal.Enum() };
blink.mojom.NotificationActionTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.NotificationScenarioSpec = { $: mojo.internal.Enum() };
blink.mojom.NotificationActionSpec = { $: {} };
blink.mojom.NotificationDataSpec = { $: {} };
blink.mojom.NotificationResourcesSpec = { $: {} };

blink.mojom.kMaximumDeveloperDataSize = 1048576;

blink.mojom.kMaximumActions = 2;

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
mojo.internal.Struct(
    blink.mojom.NotificationActionSpec, 'blink.mojom.NotificationAction', [
      mojo.internal.StructField('type', 32, 0, blink.mojom.NotificationActionTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('action', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('title', 8, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('icon', 16, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('placeholder', 24, 0, mojo_base.mojom.String16Spec, null, true, 0, undefined),
    ],
    [[0, 48]]);

// Struct: NotificationData
mojo.internal.Struct(
    blink.mojom.NotificationDataSpec, 'blink.mojom.NotificationData', [
      mojo.internal.StructField('kMaximumDeveloperDataSize', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('kMaximumActions', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('title', 16, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('direction', 112, 0, blink.mojom.NotificationDirectionSpec, null, false, 0, undefined),
      mojo.internal.StructField('lang', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('body', 32, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('tag', 40, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('image', 48, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('icon', 56, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('badge', 64, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('vibration_pattern', 72, 0, mojo.internal.Array(mojo.internal.Int32, false), null, true, 0, undefined),
      mojo.internal.StructField('timestamp', 80, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('renotify', 120, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('silent', 120, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('require_interaction', 120, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('data', 88, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('actions', 96, 0, mojo.internal.Array(blink.mojom.NotificationActionSpec, false), null, true, 0, undefined),
      mojo.internal.StructField('show_trigger_timestamp', 104, 0, mojo_base.mojom.TimeSpec, null, true, 0, undefined),
      mojo.internal.StructField('scenario', 116, 0, blink.mojom.NotificationScenarioSpec, null, false, 0, undefined),
    ],
    [[0, 136]]);

// Struct: NotificationResources
mojo.internal.Struct(
    blink.mojom.NotificationResourcesSpec, 'blink.mojom.NotificationResources', [
      mojo.internal.StructField('image', 0, 0, skia.mojom.BitmapN32Spec, null, true, 0, undefined),
      mojo.internal.StructField('icon', 8, 0, skia.mojom.BitmapN32Spec, null, true, 0, undefined),
      mojo.internal.StructField('badge', 16, 0, skia.mojom.BitmapN32Spec, null, true, 0, undefined),
      mojo.internal.StructField('action_icons', 24, 0, mojo.internal.Array(skia.mojom.BitmapN32Spec, false), null, true, 0, undefined),
    ],
    [[0, 40]]);
