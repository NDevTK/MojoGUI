// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/notifications.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: ArcNotificationEvent
arc.mojom.ArcNotificationEvent = {
  BODY_CLICKED: 0,
  CLOSED: 1,
  DEPRECATED_BUTTON_1_CLICKED: 2,
  DEPRECATED_BUTTON_2_CLICKED: 3,
  DEPRECATED_BUTTON_3_CLICKED: 4,
  DEPRECATED_BUTTON_4_CLICKED: 5,
  DEPRECATED_BUTTON_5_CLICKED: 6,
};

// Enum: ArcNotificationType
arc.mojom.ArcNotificationType = {
  SIMPLE: 0,
  DEPRECATED_IMAGE: 1,
  DEPRECATED_PROGRESS: 2,
  DEPRECATED_LIST: 3,
  BUNDLED: 4,
};

// Enum: ArcNotificationPriority
arc.mojom.ArcNotificationPriority = {
  NONE: 0,
  MIN: 1,
  LOW: 2,
  DEFAULT: 3,
  HIGH: 4,
  MAX: 5,
};

// Enum: ArcNotificationExpandState
arc.mojom.ArcNotificationExpandState = {
  FIXED_SIZE: 0,
  COLLAPSED: 1,
  EXPANDED: 2,
};

// Enum: ArcNotificationRemoteInputState
arc.mojom.ArcNotificationRemoteInputState = {
  CLOSED: 0,
  OPENED: 1,
};

// Enum: ArcNotificationShownContents
arc.mojom.ArcNotificationShownContents = {
  CONTENTS_SHOWN: 0,
  SETTINGS_SHOWN: 1,
};

// Enum: ArcNotificationStyle
arc.mojom.ArcNotificationStyle = {
  NO_STYLE: 0,
  BIG_PICTURE_STYLE: 1,
  BIG_TEXT_STYLE: 2,
  MESSAGING_STYLE: 3,
  INBOX_STYLE: 4,
  MEDIA_STYLE: 5,
  DECORATED_CUSTOM_VIEW_STYLE: 6,
  DECORATED_MEDIA_CUSTOM_VIEW_STYLE: 7,
};

// Enum: MessageCenterVisibility
arc.mojom.MessageCenterVisibility = {
  VISIBILITY_TRANSIENT: 0,
  VISIBILITY_MESSAGE_CENTER: 1,
};

// Struct: ArcNotificationButton
arc.mojom.ArcNotificationButtonSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcNotificationButton',
      packedSize: 24,
      fields: [
        { name: 'label', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'buttonPlaceholder', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ArcNotificationFlags
arc.mojom.ArcNotificationFlagsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcNotificationFlags',
      packedSize: 24,
      fields: [
        { name: 'SUPPORT_SNOOZE', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ArcNotificationData
arc.mojom.ArcNotificationDataSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcNotificationData',
      packedSize: 296,
      fields: [
        { name: 'key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.ArcNotificationTypeSpec, nullable: false },
        { name: 'message', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'title', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'app_display_name', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'deprecated_icon_data', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'priority', packedOffset: 48, packedBitOffset: 0, type: arc.mojom.ArcNotificationPrioritySpec, nullable: false },
        { name: 'time', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'buttons', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'no_clear', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'ongoing_event', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'texts', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'big_picture', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'is_custom_notification', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'small_icon', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'snapshot_image', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'snapshot_image_scale', packedOffset: 128, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'accessible_name', packedOffset: 136, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'expand_state', packedOffset: 144, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'shown_contents', packedOffset: 152, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'remote_input_state', packedOffset: 160, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'swipe_input_rect', packedOffset: 168, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'package_name', packedOffset: 176, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'flags', packedOffset: 184, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'indeterminate_progress', packedOffset: 192, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'snapshot_image_public', packedOffset: 200, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'is_media_notification', packedOffset: 208, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'style', packedOffset: 216, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'is_action_enabled', packedOffset: 224, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'is_inline_reply_enabled', packedOffset: 232, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'render_on_chrome', packedOffset: 240, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'group_key', packedOffset: 248, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'reply_button_index', packedOffset: 256, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'children_data', packedOffset: 264, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'messages', packedOffset: 272, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'progress_current', packedOffset: 280, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'progress_max', packedOffset: 284, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ArcDoNotDisturbStatus
arc.mojom.ArcDoNotDisturbStatusSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcDoNotDisturbStatus',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ArcNotificationUserActionData
arc.mojom.ArcNotificationUserActionDataSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcNotificationUserActionData',
      packedSize: 32,
      fields: [
        { name: 'top_level_notification_key_deprecated', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'action_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'defer_until_unlock', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'to_be_focused_after_unlock', packedOffset: 12, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ArcLockScreenNotificationSetting
arc.mojom.ArcLockScreenNotificationSettingSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcLockScreenNotificationSetting',
      packedSize: 16,
      fields: [
        { name: 'show_notification', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'show_private_notification', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: NotificationConfiguration
arc.mojom.NotificationConfigurationSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NotificationConfiguration',
      packedSize: 16,
      fields: [
        { name: 'expansion_animation', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ArcNotificationMessage
arc.mojom.ArcNotificationMessageSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcNotificationMessage',
      packedSize: 32,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'sender_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'sender_icon', packedOffset: 16, packedBitOffset: 0, type: arc.mojom.ArcBitmapSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: NotificationsHost
arc.mojom.NotificationsHost = {};

arc.mojom.NotificationsHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.NotificationsHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.NotificationsHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.NotificationsHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.NotificationsHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.NotificationsHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.NotificationsHost.getRemote = function() {
  let remote = new arc.mojom.NotificationsHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.NotificationsHost',
    'context');
  return remote.$;
};

// Legacy compatibility
arc.mojom.NotificationsHostPtr = arc.mojom.NotificationsHostRemote;
arc.mojom.NotificationsHostRequest = arc.mojom.NotificationsHostPendingReceiver;


// Interface: NotificationsInstance
arc.mojom.NotificationsInstance = {};

arc.mojom.NotificationsInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.NotificationsInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.NotificationsInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.NotificationsInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.NotificationsInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.NotificationsInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.NotificationsInstance.getRemote = function() {
  let remote = new arc.mojom.NotificationsInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.NotificationsInstance',
    'context');
  return remote.$;
};

// Legacy compatibility
arc.mojom.NotificationsInstancePtr = arc.mojom.NotificationsInstanceRemote;
arc.mojom.NotificationsInstanceRequest = arc.mojom.NotificationsInstancePendingReceiver;

