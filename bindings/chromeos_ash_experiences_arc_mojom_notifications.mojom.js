// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/notifications.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


arc.mojom.SUPPORT_SNOOZE = 1;

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
arc.mojom.ArcNotificationEventSpec = { $: mojo.internal.Enum() };

// Enum: ArcNotificationType
arc.mojom.ArcNotificationType = {
  SIMPLE: 0,
  DEPRECATED_IMAGE: 1,
  DEPRECATED_PROGRESS: 2,
  DEPRECATED_LIST: 3,
  BUNDLED: 4,
};
arc.mojom.ArcNotificationTypeSpec = { $: mojo.internal.Enum() };

// Enum: ArcNotificationPriority
arc.mojom.ArcNotificationPriority = {
  NONE: 0,
  MIN: 1,
  LOW: 2,
  DEFAULT: 3,
  HIGH: 4,
  MAX: 5,
};
arc.mojom.ArcNotificationPrioritySpec = { $: mojo.internal.Enum() };

// Enum: ArcNotificationExpandState
arc.mojom.ArcNotificationExpandState = {
  FIXED_SIZE: 0,
  COLLAPSED: 1,
  EXPANDED: 2,
};
arc.mojom.ArcNotificationExpandStateSpec = { $: mojo.internal.Enum() };

// Enum: ArcNotificationRemoteInputState
arc.mojom.ArcNotificationRemoteInputState = {
  CLOSED: 0,
  OPENED: 1,
};
arc.mojom.ArcNotificationRemoteInputStateSpec = { $: mojo.internal.Enum() };

// Enum: ArcNotificationShownContents
arc.mojom.ArcNotificationShownContents = {
  CONTENTS_SHOWN: 0,
  SETTINGS_SHOWN: 1,
};
arc.mojom.ArcNotificationShownContentsSpec = { $: mojo.internal.Enum() };

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
arc.mojom.ArcNotificationStyleSpec = { $: mojo.internal.Enum() };

// Enum: MessageCenterVisibility
arc.mojom.MessageCenterVisibility = {
  VISIBILITY_TRANSIENT: 0,
  VISIBILITY_MESSAGE_CENTER: 1,
};
arc.mojom.MessageCenterVisibilitySpec = { $: mojo.internal.Enum() };

// Struct: ArcNotificationButton
arc.mojom.ArcNotificationButtonSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcNotificationButton',
      packedSize: 24,
      fields: [
        { name: 'label', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'buttonPlaceholder', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 31 },
      ],
      versions: [{version: 0, packedSize: 16}, {version: 31, packedSize: 24}]
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
        { name: 'SUPPORT_SNOOZE', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: ArcNotificationData
arc.mojom.ArcNotificationDataSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcNotificationData',
      packedSize: 208,
      fields: [
        { name: 'key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 56, packedBitOffset: 0, type: arc.mojom.ArcNotificationTypeSpec, nullable: false, minVersion: 0 },
        { name: 'message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'title', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'app_display_name', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'deprecated_icon_data', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: true, minVersion: 0 },
        { name: 'priority', packedOffset: 60, packedBitOffset: 0, type: arc.mojom.ArcNotificationPrioritySpec, nullable: false, minVersion: 0 },
        { name: 'time', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'progress_current', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'progress_max', packedOffset: 68, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'buttons', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.ArcNotificationButtonSpec, false), nullable: true, minVersion: 0 },
        { name: 'no_clear', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 1 },
        { name: 'ongoing_event', packedOffset: 72, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 1 },
        { name: 'texts', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: true, minVersion: 3 },
        { name: 'big_picture', packedOffset: 88, packedBitOffset: 0, type: arc.mojom.ArcBitmapSpec, nullable: true, minVersion: 3 },
        { name: 'is_custom_notification', packedOffset: 72, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 5 },
        { name: 'small_icon', packedOffset: 96, packedBitOffset: 0, type: arc.mojom.ArcBitmapSpec, nullable: true, minVersion: 6 },
        { name: 'snapshot_image', packedOffset: 104, packedBitOffset: 0, type: arc.mojom.ArcBitmapSpec, nullable: true, minVersion: 7 },
        { name: 'snapshot_image_scale', packedOffset: 76, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 7 },
        { name: 'accessible_name', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 8 },
        { name: 'expand_state', packedOffset: 120, packedBitOffset: 0, type: arc.mojom.ArcNotificationExpandStateSpec, nullable: false, minVersion: 10 },
        { name: 'shown_contents', packedOffset: 124, packedBitOffset: 0, type: arc.mojom.ArcNotificationShownContentsSpec, nullable: false, minVersion: 11 },
        { name: 'remote_input_state', packedOffset: 128, packedBitOffset: 0, type: arc.mojom.ArcNotificationRemoteInputStateSpec, nullable: false, minVersion: 12 },
        { name: 'swipe_input_rect', packedOffset: 136, packedBitOffset: 0, type: arc.mojom.RectSpec, nullable: true, minVersion: 14 },
        { name: 'package_name', packedOffset: 144, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 15 },
        { name: 'flags', packedOffset: 152, packedBitOffset: 0, type: arc.mojom.ArcNotificationFlagsSpec, nullable: true, minVersion: 17 },
        { name: 'indeterminate_progress', packedOffset: 72, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 21 },
        { name: 'snapshot_image_public', packedOffset: 160, packedBitOffset: 0, type: arc.mojom.ArcBitmapSpec, nullable: true, minVersion: 21 },
        { name: 'is_media_notification', packedOffset: 72, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 23 },
        { name: 'style', packedOffset: 132, packedBitOffset: 0, type: arc.mojom.ArcNotificationStyleSpec, nullable: false, minVersion: 26 },
        { name: 'is_action_enabled', packedOffset: 72, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 26 },
        { name: 'is_inline_reply_enabled', packedOffset: 72, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 27 },
        { name: 'render_on_chrome', packedOffset: 72, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 28 },
        { name: 'group_key', packedOffset: 168, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 29 },
        { name: 'reply_button_index', packedOffset: 176, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 30 },
        { name: 'children_data', packedOffset: 184, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.ArcNotificationDataSpec, false), nullable: true, minVersion: 34 },
        { name: 'messages', packedOffset: 192, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.ArcNotificationMessageSpec, false), nullable: true, minVersion: 35 },
      ],
      versions: [{version: 0, packedSize: 80}, {version: 1, packedSize: 88}, {version: 3, packedSize: 104}, {version: 5, packedSize: 104}, {version: 6, packedSize: 112}, {version: 7, packedSize: 120}, {version: 8, packedSize: 128}, {version: 10, packedSize: 136}, {version: 11, packedSize: 136}, {version: 12, packedSize: 144}, {version: 14, packedSize: 152}, {version: 15, packedSize: 160}, {version: 17, packedSize: 168}, {version: 21, packedSize: 176}, {version: 23, packedSize: 176}, {version: 26, packedSize: 176}, {version: 27, packedSize: 176}, {version: 28, packedSize: 176}, {version: 29, packedSize: 184}, {version: 30, packedSize: 192}, {version: 34, packedSize: 200}, {version: 35, packedSize: 208}]
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
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: ArcNotificationUserActionData
arc.mojom.ArcNotificationUserActionDataSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ArcNotificationUserActionData',
      packedSize: 24,
      fields: [
        { name: 'action_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'top_level_notification_key_deprecated', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'defer_until_unlock', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'to_be_focused_after_unlock', packedOffset: 12, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'show_notification', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'show_private_notification', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'expansion_animation', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'sender_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'sender_icon', packedOffset: 16, packedBitOffset: 0, type: arc.mojom.ArcBitmapSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: NotificationsHost
arc.mojom.NotificationsHost = {};

arc.mojom.NotificationsHost_OnDoNotDisturbStatusUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NotificationsHost_OnDoNotDisturbStatusUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.ArcDoNotDisturbStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.NotificationsHost_OnNotificationPosted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NotificationsHost_OnNotificationPosted_Params',
      packedSize: 16,
      fields: [
        { name: 'notification_data', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.ArcNotificationDataSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.NotificationsHost_OnNotificationRemoved_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NotificationsHost_OnNotificationRemoved_Params',
      packedSize: 16,
      fields: [
        { name: 'key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.NotificationsHost_OnNotificationUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NotificationsHost_OnNotificationUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'notification_data', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.ArcNotificationDataSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.NotificationsHost_OpenMessageCenter_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NotificationsHost_OpenMessageCenter_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.NotificationsHost_CloseMessageCenter_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NotificationsHost_CloseMessageCenter_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.NotificationsHost_ProcessUserAction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NotificationsHost_ProcessUserAction_Params',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.ArcNotificationUserActionDataSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.NotificationsHost_OnLockScreenSettingUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NotificationsHost_OnLockScreenSettingUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'setting', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.ArcLockScreenNotificationSettingSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.NotificationsHost_LogInlineReplySent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NotificationsHost_LogInlineReplySent_Params',
      packedSize: 16,
      fields: [
        { name: 'key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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

  onDoNotDisturbStatusUpdated(status) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      arc.mojom.NotificationsHost_OnDoNotDisturbStatusUpdated_ParamsSpec,
      null,
      [status]);
  }

  onNotificationPosted(notification_data) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.NotificationsHost_OnNotificationPosted_ParamsSpec,
      null,
      [notification_data]);
  }

  onNotificationRemoved(key) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.NotificationsHost_OnNotificationRemoved_ParamsSpec,
      null,
      [key]);
  }

  onNotificationUpdated(notification_data) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      arc.mojom.NotificationsHost_OnNotificationUpdated_ParamsSpec,
      null,
      [notification_data]);
  }

  openMessageCenter() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      arc.mojom.NotificationsHost_OpenMessageCenter_ParamsSpec,
      null,
      []);
  }

  closeMessageCenter() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      arc.mojom.NotificationsHost_CloseMessageCenter_ParamsSpec,
      null,
      []);
  }

  processUserAction(data) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      arc.mojom.NotificationsHost_ProcessUserAction_ParamsSpec,
      null,
      [data]);
  }

  onLockScreenSettingUpdated(setting) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      arc.mojom.NotificationsHost_OnLockScreenSettingUpdated_ParamsSpec,
      null,
      [setting]);
  }

  logInlineReplySent(key) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      arc.mojom.NotificationsHost_LogInlineReplySent_ParamsSpec,
      null,
      [key]);
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

// ParamsSpec for OnDoNotDisturbStatusUpdated
arc.mojom.NotificationsHost_OnDoNotDisturbStatusUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NotificationsHost.OnDoNotDisturbStatusUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.ArcDoNotDisturbStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnNotificationPosted
arc.mojom.NotificationsHost_OnNotificationPosted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NotificationsHost.OnNotificationPosted_Params',
      packedSize: 16,
      fields: [
        { name: 'notification_data', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.ArcNotificationDataSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnNotificationRemoved
arc.mojom.NotificationsHost_OnNotificationRemoved_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NotificationsHost.OnNotificationRemoved_Params',
      packedSize: 16,
      fields: [
        { name: 'key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnNotificationUpdated
arc.mojom.NotificationsHost_OnNotificationUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NotificationsHost.OnNotificationUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'notification_data', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.ArcNotificationDataSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OpenMessageCenter
arc.mojom.NotificationsHost_OpenMessageCenter_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NotificationsHost.OpenMessageCenter_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for CloseMessageCenter
arc.mojom.NotificationsHost_CloseMessageCenter_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NotificationsHost.CloseMessageCenter_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for ProcessUserAction
arc.mojom.NotificationsHost_ProcessUserAction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NotificationsHost.ProcessUserAction_Params',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.ArcNotificationUserActionDataSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnLockScreenSettingUpdated
arc.mojom.NotificationsHost_OnLockScreenSettingUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NotificationsHost.OnLockScreenSettingUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'setting', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.ArcLockScreenNotificationSettingSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for LogInlineReplySent
arc.mojom.NotificationsHost_LogInlineReplySent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NotificationsHost.LogInlineReplySent_Params',
      packedSize: 16,
      fields: [
        { name: 'key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.NotificationsHostPtr = arc.mojom.NotificationsHostRemote;
arc.mojom.NotificationsHostRequest = arc.mojom.NotificationsHostPendingReceiver;


// Interface: NotificationsInstance
arc.mojom.NotificationsInstance = {};

arc.mojom.NotificationsInstance_Init_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NotificationsInstance_Init_Params',
      packedSize: 16,
      fields: [
        { name: 'host_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.NotificationsHostRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.NotificationsInstance_SendNotificationEventToAndroid_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NotificationsInstance_SendNotificationEventToAndroid_Params',
      packedSize: 24,
      fields: [
        { name: 'key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'event', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.ArcNotificationEventSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

arc.mojom.NotificationsInstance_CreateNotificationWindow_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NotificationsInstance_CreateNotificationWindow_Params',
      packedSize: 16,
      fields: [
        { name: 'key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.NotificationsInstance_CloseNotificationWindow_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NotificationsInstance_CloseNotificationWindow_Params',
      packedSize: 16,
      fields: [
        { name: 'key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.NotificationsInstance_OpenNotificationSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NotificationsInstance_OpenNotificationSettings_Params',
      packedSize: 16,
      fields: [
        { name: 'key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.NotificationsInstance_OpenNotificationSnoozeSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NotificationsInstance_OpenNotificationSnoozeSettings_Params',
      packedSize: 16,
      fields: [
        { name: 'key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.NotificationsInstance_SetDoNotDisturbStatusOnAndroid_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NotificationsInstance_SetDoNotDisturbStatusOnAndroid_Params',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.ArcDoNotDisturbStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.NotificationsInstance_CancelPress_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NotificationsInstance_CancelPress_Params',
      packedSize: 16,
      fields: [
        { name: 'key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.NotificationsInstance_PerformDeferredUserAction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NotificationsInstance_PerformDeferredUserAction_Params',
      packedSize: 16,
      fields: [
        { name: 'action_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.NotificationsInstance_CancelDeferredUserAction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NotificationsInstance_CancelDeferredUserAction_Params',
      packedSize: 16,
      fields: [
        { name: 'action_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.NotificationsInstance_SetLockScreenSettingOnAndroid_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NotificationsInstance_SetLockScreenSettingOnAndroid_Params',
      packedSize: 16,
      fields: [
        { name: 'setting', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.ArcLockScreenNotificationSettingSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.NotificationsInstance_SetNotificationConfiguration_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NotificationsInstance_SetNotificationConfiguration_Params',
      packedSize: 16,
      fields: [
        { name: 'configuration', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.NotificationConfigurationSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.NotificationsInstance_OnMessageCenterVisibilityChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NotificationsInstance_OnMessageCenterVisibilityChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'visibility', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.MessageCenterVisibilitySpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.NotificationsInstance_SendNotificationButtonClickToAndroid_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NotificationsInstance_SendNotificationButtonClickToAndroid_Params',
      packedSize: 32,
      fields: [
        { name: 'key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'action_button_index', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'input', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

arc.mojom.NotificationsInstance_PopUpAppNotificationSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NotificationsInstance_PopUpAppNotificationSettings_Params',
      packedSize: 16,
      fields: [
        { name: 'key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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

  init(host_remote) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      arc.mojom.NotificationsInstance_Init_ParamsSpec,
      null,
      [host_remote]);
  }

  sendNotificationEventToAndroid(key, event) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.NotificationsInstance_SendNotificationEventToAndroid_ParamsSpec,
      null,
      [key, event]);
  }

  createNotificationWindow(key) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.NotificationsInstance_CreateNotificationWindow_ParamsSpec,
      null,
      [key]);
  }

  closeNotificationWindow(key) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.NotificationsInstance_CloseNotificationWindow_ParamsSpec,
      null,
      [key]);
  }

  openNotificationSettings(key) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      arc.mojom.NotificationsInstance_OpenNotificationSettings_ParamsSpec,
      null,
      [key]);
  }

  openNotificationSnoozeSettings(key) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      arc.mojom.NotificationsInstance_OpenNotificationSnoozeSettings_ParamsSpec,
      null,
      [key]);
  }

  setDoNotDisturbStatusOnAndroid(status) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      arc.mojom.NotificationsInstance_SetDoNotDisturbStatusOnAndroid_ParamsSpec,
      null,
      [status]);
  }

  cancelPress(key) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      arc.mojom.NotificationsInstance_CancelPress_ParamsSpec,
      null,
      [key]);
  }

  performDeferredUserAction(action_id) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      arc.mojom.NotificationsInstance_PerformDeferredUserAction_ParamsSpec,
      null,
      [action_id]);
  }

  cancelDeferredUserAction(action_id) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      arc.mojom.NotificationsInstance_CancelDeferredUserAction_ParamsSpec,
      null,
      [action_id]);
  }

  setLockScreenSettingOnAndroid(setting) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      arc.mojom.NotificationsInstance_SetLockScreenSettingOnAndroid_ParamsSpec,
      null,
      [setting]);
  }

  setNotificationConfiguration(configuration) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      arc.mojom.NotificationsInstance_SetNotificationConfiguration_ParamsSpec,
      null,
      [configuration]);
  }

  onMessageCenterVisibilityChanged(visibility) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      arc.mojom.NotificationsInstance_OnMessageCenterVisibilityChanged_ParamsSpec,
      null,
      [visibility]);
  }

  sendNotificationButtonClickToAndroid(key, action_button_index, input) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      arc.mojom.NotificationsInstance_SendNotificationButtonClickToAndroid_ParamsSpec,
      null,
      [key, action_button_index, input]);
  }

  popUpAppNotificationSettings(key) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      arc.mojom.NotificationsInstance_PopUpAppNotificationSettings_ParamsSpec,
      null,
      [key]);
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

// ParamsSpec for Init
arc.mojom.NotificationsInstance_Init_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NotificationsInstance.Init_Params',
      packedSize: 16,
      fields: [
        { name: 'host_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.NotificationsHostRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SendNotificationEventToAndroid
arc.mojom.NotificationsInstance_SendNotificationEventToAndroid_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NotificationsInstance.SendNotificationEventToAndroid_Params',
      packedSize: 24,
      fields: [
        { name: 'key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'event', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.ArcNotificationEventSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for CreateNotificationWindow
arc.mojom.NotificationsInstance_CreateNotificationWindow_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NotificationsInstance.CreateNotificationWindow_Params',
      packedSize: 16,
      fields: [
        { name: 'key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CloseNotificationWindow
arc.mojom.NotificationsInstance_CloseNotificationWindow_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NotificationsInstance.CloseNotificationWindow_Params',
      packedSize: 16,
      fields: [
        { name: 'key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OpenNotificationSettings
arc.mojom.NotificationsInstance_OpenNotificationSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NotificationsInstance.OpenNotificationSettings_Params',
      packedSize: 16,
      fields: [
        { name: 'key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OpenNotificationSnoozeSettings
arc.mojom.NotificationsInstance_OpenNotificationSnoozeSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NotificationsInstance.OpenNotificationSnoozeSettings_Params',
      packedSize: 16,
      fields: [
        { name: 'key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetDoNotDisturbStatusOnAndroid
arc.mojom.NotificationsInstance_SetDoNotDisturbStatusOnAndroid_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NotificationsInstance.SetDoNotDisturbStatusOnAndroid_Params',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.ArcDoNotDisturbStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CancelPress
arc.mojom.NotificationsInstance_CancelPress_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NotificationsInstance.CancelPress_Params',
      packedSize: 16,
      fields: [
        { name: 'key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for PerformDeferredUserAction
arc.mojom.NotificationsInstance_PerformDeferredUserAction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NotificationsInstance.PerformDeferredUserAction_Params',
      packedSize: 16,
      fields: [
        { name: 'action_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CancelDeferredUserAction
arc.mojom.NotificationsInstance_CancelDeferredUserAction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NotificationsInstance.CancelDeferredUserAction_Params',
      packedSize: 16,
      fields: [
        { name: 'action_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetLockScreenSettingOnAndroid
arc.mojom.NotificationsInstance_SetLockScreenSettingOnAndroid_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NotificationsInstance.SetLockScreenSettingOnAndroid_Params',
      packedSize: 16,
      fields: [
        { name: 'setting', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.ArcLockScreenNotificationSettingSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetNotificationConfiguration
arc.mojom.NotificationsInstance_SetNotificationConfiguration_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NotificationsInstance.SetNotificationConfiguration_Params',
      packedSize: 16,
      fields: [
        { name: 'configuration', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.NotificationConfigurationSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnMessageCenterVisibilityChanged
arc.mojom.NotificationsInstance_OnMessageCenterVisibilityChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NotificationsInstance.OnMessageCenterVisibilityChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'visibility', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.MessageCenterVisibilitySpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SendNotificationButtonClickToAndroid
arc.mojom.NotificationsInstance_SendNotificationButtonClickToAndroid_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NotificationsInstance.SendNotificationButtonClickToAndroid_Params',
      packedSize: 32,
      fields: [
        { name: 'key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'action_button_index', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'input', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for PopUpAppNotificationSettings
arc.mojom.NotificationsInstance_PopUpAppNotificationSettings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.NotificationsInstance.PopUpAppNotificationSettings_Params',
      packedSize: 16,
      fields: [
        { name: 'key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.NotificationsInstancePtr = arc.mojom.NotificationsInstanceRemote;
arc.mojom.NotificationsInstanceRequest = arc.mojom.NotificationsInstancePendingReceiver;

