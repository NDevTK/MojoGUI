// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/notifications/notification.mojom
// Module: blink.mojom

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};
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
      mojo.internal.StructField('type', 0, 0, blink.mojom.NotificationActionTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('action', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('title', 16, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('icon', 24, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('placeholder', 32, 0, mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
    ],
    [[0, 48]]);

// Struct: NotificationData
mojo.internal.Struct(
    blink.mojom.NotificationDataSpec, 'blink.mojom.NotificationData', [
      mojo.internal.StructField('kMaximumDeveloperDataSize', 0, 0, mojo.internal.Pointer, 1048576, false, 0, undefined),
      mojo.internal.StructField('kMaximumActions', 8, 0, mojo.internal.Pointer, 2, false, 0, undefined),
      mojo.internal.StructField('title', 16, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('direction', 24, 0, blink.mojom.NotificationDirectionSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('lang', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('body', 40, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('tag', 48, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('image', 56, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('icon', 64, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('badge', 72, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('vibration_pattern', 80, 0, mojo.internal.Array(mojo.internal.Int32, false), null, true, 0, undefined),
      mojo.internal.StructField('timestamp', 88, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('data', 96, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('actions', 104, 0, mojo.internal.Array(blink.mojom.NotificationActionSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('show_trigger_timestamp', 112, 0, mojo_base.mojom.TimeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('scenario', 120, 0, blink.mojom.NotificationScenarioSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('renotify', 128, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('silent', 128, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('require_interaction', 128, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 144]]);

// Struct: NotificationResources
mojo.internal.Struct(
    blink.mojom.NotificationResourcesSpec, 'blink.mojom.NotificationResources', [
      mojo.internal.StructField('image', 0, 0, skia.mojom.BitmapN32Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('icon', 8, 0, skia.mojom.BitmapN32Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('badge', 16, 0, skia.mojom.BitmapN32Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('action_icons', 24, 0, mojo.internal.Array(skia.mojom.BitmapN32Spec.$, false), null, true, 0, undefined),
    ],
    [[0, 40]]);
