// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/notifications.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};
var ash = ash || {};
var chromeos = chromeos || {};
var ash = ash || {};
var chromeos = chromeos || {};

arc.mojom.ArcNotificationEventSpec = { $: mojo.internal.Enum() };
arc.mojom.ArcNotificationTypeSpec = { $: mojo.internal.Enum() };
arc.mojom.ArcNotificationPrioritySpec = { $: mojo.internal.Enum() };
arc.mojom.ArcNotificationExpandStateSpec = { $: mojo.internal.Enum() };
arc.mojom.ArcNotificationRemoteInputStateSpec = { $: mojo.internal.Enum() };
arc.mojom.ArcNotificationShownContentsSpec = { $: mojo.internal.Enum() };
arc.mojom.ArcNotificationStyleSpec = { $: mojo.internal.Enum() };
arc.mojom.MessageCenterVisibilitySpec = { $: mojo.internal.Enum() };
arc.mojom.ArcNotificationButtonSpec = { $: {} };
arc.mojom.ArcNotificationFlagsSpec = { $: {} };
arc.mojom.ArcNotificationDataSpec = { $: {} };
arc.mojom.ArcDoNotDisturbStatusSpec = { $: {} };
arc.mojom.ArcNotificationUserActionDataSpec = { $: {} };
arc.mojom.ArcLockScreenNotificationSettingSpec = { $: {} };
arc.mojom.NotificationConfigurationSpec = { $: {} };
arc.mojom.ArcNotificationMessageSpec = { $: {} };
arc.mojom.NotificationsHost = {};
arc.mojom.NotificationsHost.$interfaceName = 'arc.mojom.NotificationsHost';
arc.mojom.NotificationsHost_OnDoNotDisturbStatusUpdated_ParamsSpec = { $: {} };
arc.mojom.NotificationsHost_OnNotificationPosted_ParamsSpec = { $: {} };
arc.mojom.NotificationsHost_OnNotificationRemoved_ParamsSpec = { $: {} };
arc.mojom.NotificationsHost_OnNotificationUpdated_ParamsSpec = { $: {} };
arc.mojom.NotificationsHost_OpenMessageCenter_ParamsSpec = { $: {} };
arc.mojom.NotificationsHost_CloseMessageCenter_ParamsSpec = { $: {} };
arc.mojom.NotificationsHost_ProcessUserAction_ParamsSpec = { $: {} };
arc.mojom.NotificationsHost_OnLockScreenSettingUpdated_ParamsSpec = { $: {} };
arc.mojom.NotificationsHost_LogInlineReplySent_ParamsSpec = { $: {} };
arc.mojom.NotificationsInstance = {};
arc.mojom.NotificationsInstance.$interfaceName = 'arc.mojom.NotificationsInstance';
arc.mojom.NotificationsInstance_Init_ParamsSpec = { $: {} };
arc.mojom.NotificationsInstance_Init_ResponseParamsSpec = { $: {} };
arc.mojom.NotificationsInstance_SendNotificationEventToAndroid_ParamsSpec = { $: {} };
arc.mojom.NotificationsInstance_CreateNotificationWindow_ParamsSpec = { $: {} };
arc.mojom.NotificationsInstance_CloseNotificationWindow_ParamsSpec = { $: {} };
arc.mojom.NotificationsInstance_OpenNotificationSettings_ParamsSpec = { $: {} };
arc.mojom.NotificationsInstance_OpenNotificationSnoozeSettings_ParamsSpec = { $: {} };
arc.mojom.NotificationsInstance_SetDoNotDisturbStatusOnAndroid_ParamsSpec = { $: {} };
arc.mojom.NotificationsInstance_CancelPress_ParamsSpec = { $: {} };
arc.mojom.NotificationsInstance_PerformDeferredUserAction_ParamsSpec = { $: {} };
arc.mojom.NotificationsInstance_CancelDeferredUserAction_ParamsSpec = { $: {} };
arc.mojom.NotificationsInstance_SetLockScreenSettingOnAndroid_ParamsSpec = { $: {} };
arc.mojom.NotificationsInstance_SetNotificationConfiguration_ParamsSpec = { $: {} };
arc.mojom.NotificationsInstance_OnMessageCenterVisibilityChanged_ParamsSpec = { $: {} };
arc.mojom.NotificationsInstance_SendNotificationButtonClickToAndroid_ParamsSpec = { $: {} };
arc.mojom.NotificationsInstance_PopUpAppNotificationSettings_ParamsSpec = { $: {} };

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
  MinVersion: 6,
  MinVersion: 6,
  MinVersion: 6,
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
  NONE: -3,
  MIN: -2,
  LOW: -1,
  DEFAULT: 0,
  HIGH: 1,
  MAX: 2,
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
  SNOOZE_SHOWN: 2,
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
  MinVersion: 7,
};

// Enum: MessageCenterVisibility
arc.mojom.MessageCenterVisibility = {
  VISIBILITY_TRANSIENT: 0,
  VISIBILITY_MESSAGE_CENTER: 1,
};

// Struct: ArcNotificationButton
mojo.internal.Struct(
    arc.mojom.ArcNotificationButtonSpec, 'arc.mojom.ArcNotificationButton', [
      mojo.internal.StructField('label', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('buttonPlaceholder', 8, 0, mojo.internal.String, null, true, 31, undefined),
    ],
    [[0, 16], [31, 24]]);

// Struct: ArcNotificationFlags
mojo.internal.Struct(
    arc.mojom.ArcNotificationFlagsSpec, 'arc.mojom.ArcNotificationFlags', [
      mojo.internal.StructField('SUPPORT_SNOOZE', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ArcNotificationData
mojo.internal.Struct(
    arc.mojom.ArcNotificationDataSpec, 'arc.mojom.ArcNotificationData', [
      mojo.internal.StructField('key', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('type', 56, 0, arc.mojom.ArcNotificationTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('message', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('title', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('app_display_name', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('deprecated_icon_data', 32, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('priority', 60, 0, arc.mojom.ArcNotificationPrioritySpec, null, false, 0, undefined),
      mojo.internal.StructField('time', 40, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('progress_current', 64, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('progress_max', 68, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('buttons', 48, 0, mojo.internal.Array(arc.mojom.ArcNotificationButtonSpec, false), null, true, 0, undefined),
      mojo.internal.StructField('no_clear', 72, 0, mojo.internal.Bool, false, false, 1, undefined),
      mojo.internal.StructField('ongoing_event', 72, 1, mojo.internal.Bool, false, false, 1, undefined),
      mojo.internal.StructField('texts', 80, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 3, undefined),
      mojo.internal.StructField('big_picture', 88, 0, arc.mojom.ArcBitmapSpec, null, true, 3, undefined),
      mojo.internal.StructField('is_custom_notification', 72, 2, mojo.internal.Bool, false, false, 5, undefined),
      mojo.internal.StructField('small_icon', 96, 0, arc.mojom.ArcBitmapSpec, null, true, 6, undefined),
      mojo.internal.StructField('snapshot_image', 104, 0, arc.mojom.ArcBitmapSpec, null, true, 7, undefined),
      mojo.internal.StructField('snapshot_image_scale', 76, 0, mojo.internal.Float, 0, false, 7, undefined),
      mojo.internal.StructField('accessible_name', 112, 0, mojo.internal.String, null, true, 8, undefined),
      mojo.internal.StructField('expand_state', 120, 0, arc.mojom.ArcNotificationExpandStateSpec, null, false, 10, undefined),
      mojo.internal.StructField('shown_contents', 124, 0, arc.mojom.ArcNotificationShownContentsSpec, null, false, 11, undefined),
      mojo.internal.StructField('remote_input_state', 128, 0, arc.mojom.ArcNotificationRemoteInputStateSpec, null, false, 12, undefined),
      mojo.internal.StructField('swipe_input_rect', 136, 0, arc.mojom.RectSpec, null, true, 14, undefined),
      mojo.internal.StructField('package_name', 144, 0, mojo.internal.String, null, true, 15, undefined),
      mojo.internal.StructField('flags', 152, 0, arc.mojom.ArcNotificationFlagsSpec, null, true, 17, undefined),
      mojo.internal.StructField('indeterminate_progress', 72, 3, mojo.internal.Bool, false, false, 21, undefined),
      mojo.internal.StructField('snapshot_image_public', 160, 0, arc.mojom.ArcBitmapSpec, null, true, 21, undefined),
      mojo.internal.StructField('is_media_notification', 72, 4, mojo.internal.Bool, false, false, 23, undefined),
      mojo.internal.StructField('style', 132, 0, arc.mojom.ArcNotificationStyleSpec, null, false, 26, undefined),
      mojo.internal.StructField('is_action_enabled', 72, 5, mojo.internal.Bool, false, false, 26, undefined),
      mojo.internal.StructField('is_inline_reply_enabled', 72, 6, mojo.internal.Bool, false, false, 27, undefined),
      mojo.internal.StructField('render_on_chrome', 72, 7, mojo.internal.Bool, false, false, 28, undefined),
      mojo.internal.StructField('group_key', 168, 0, mojo.internal.String, null, true, 29, undefined),
      mojo.internal.StructField('reply_button_index', 176, 0, mojo.internal.Int32, 0, false, 30, undefined),
      mojo.internal.StructField('children_data', 184, 0, mojo.internal.Array(arc.mojom.ArcNotificationDataSpec, false), null, true, 34, undefined),
      mojo.internal.StructField('messages', 192, 0, mojo.internal.Array(arc.mojom.ArcNotificationMessageSpec, false), null, true, 35, undefined),
    ],
    [[0, 80], [1, 88], [3, 104], [5, 88], [6, 112], [7, 120], [8, 128], [10, 136], [11, 136], [12, 144], [14, 152], [15, 160], [17, 168], [21, 176], [23, 88], [26, 144], [27, 88], [28, 88], [29, 184], [30, 192], [34, 200], [35, 208]]);

// Struct: ArcDoNotDisturbStatus
mojo.internal.Struct(
    arc.mojom.ArcDoNotDisturbStatusSpec, 'arc.mojom.ArcDoNotDisturbStatus', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ArcNotificationUserActionData
mojo.internal.Struct(
    arc.mojom.ArcNotificationUserActionDataSpec, 'arc.mojom.ArcNotificationUserActionData', [
      mojo.internal.StructField('action_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('top_level_notification_key_deprecated', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('defer_until_unlock', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('to_be_focused_after_unlock', 12, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ArcLockScreenNotificationSetting
mojo.internal.Struct(
    arc.mojom.ArcLockScreenNotificationSettingSpec, 'arc.mojom.ArcLockScreenNotificationSetting', [
      mojo.internal.StructField('show_notification', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('show_private_notification', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: NotificationConfiguration
mojo.internal.Struct(
    arc.mojom.NotificationConfigurationSpec, 'arc.mojom.NotificationConfiguration', [
      mojo.internal.StructField('expansion_animation', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ArcNotificationMessage
mojo.internal.Struct(
    arc.mojom.ArcNotificationMessageSpec, 'arc.mojom.ArcNotificationMessage', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('sender_name', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('sender_icon', 16, 0, arc.mojom.ArcBitmapSpec, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Interface: NotificationsHost
mojo.internal.Struct(
    arc.mojom.NotificationsHost_OnDoNotDisturbStatusUpdated_ParamsSpec, 'arc.mojom.NotificationsHost_OnDoNotDisturbStatusUpdated_Params', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.ArcDoNotDisturbStatusSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NotificationsHost_OnNotificationPosted_ParamsSpec, 'arc.mojom.NotificationsHost_OnNotificationPosted_Params', [
      mojo.internal.StructField('notification_data', 0, 0, arc.mojom.ArcNotificationDataSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NotificationsHost_OnNotificationRemoved_ParamsSpec, 'arc.mojom.NotificationsHost_OnNotificationRemoved_Params', [
      mojo.internal.StructField('key', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NotificationsHost_OnNotificationUpdated_ParamsSpec, 'arc.mojom.NotificationsHost_OnNotificationUpdated_Params', [
      mojo.internal.StructField('notification_data', 0, 0, arc.mojom.ArcNotificationDataSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NotificationsHost_OpenMessageCenter_ParamsSpec, 'arc.mojom.NotificationsHost_OpenMessageCenter_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    arc.mojom.NotificationsHost_CloseMessageCenter_ParamsSpec, 'arc.mojom.NotificationsHost_CloseMessageCenter_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    arc.mojom.NotificationsHost_ProcessUserAction_ParamsSpec, 'arc.mojom.NotificationsHost_ProcessUserAction_Params', [
      mojo.internal.StructField('data', 0, 0, arc.mojom.ArcNotificationUserActionDataSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NotificationsHost_OnLockScreenSettingUpdated_ParamsSpec, 'arc.mojom.NotificationsHost_OnLockScreenSettingUpdated_Params', [
      mojo.internal.StructField('setting', 0, 0, arc.mojom.ArcLockScreenNotificationSettingSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NotificationsHost_LogInlineReplySent_ParamsSpec, 'arc.mojom.NotificationsHost_LogInlineReplySent_Params', [
      mojo.internal.StructField('key', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

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

arc.mojom.NotificationsHostPtr = arc.mojom.NotificationsHostRemote;
arc.mojom.NotificationsHostRequest = arc.mojom.NotificationsHostPendingReceiver;


// Interface: NotificationsInstance
mojo.internal.Struct(
    arc.mojom.NotificationsInstance_Init_ParamsSpec, 'arc.mojom.NotificationsInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.NotificationsHostRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NotificationsInstance_Init_ResponseParamsSpec, 'arc.mojom.NotificationsInstance_Init_ResponseParams', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    arc.mojom.NotificationsInstance_SendNotificationEventToAndroid_ParamsSpec, 'arc.mojom.NotificationsInstance_SendNotificationEventToAndroid_Params', [
      mojo.internal.StructField('key', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('event', 8, 0, arc.mojom.ArcNotificationEventSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.NotificationsInstance_CreateNotificationWindow_ParamsSpec, 'arc.mojom.NotificationsInstance_CreateNotificationWindow_Params', [
      mojo.internal.StructField('key', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NotificationsInstance_CloseNotificationWindow_ParamsSpec, 'arc.mojom.NotificationsInstance_CloseNotificationWindow_Params', [
      mojo.internal.StructField('key', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NotificationsInstance_OpenNotificationSettings_ParamsSpec, 'arc.mojom.NotificationsInstance_OpenNotificationSettings_Params', [
      mojo.internal.StructField('key', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NotificationsInstance_OpenNotificationSnoozeSettings_ParamsSpec, 'arc.mojom.NotificationsInstance_OpenNotificationSnoozeSettings_Params', [
      mojo.internal.StructField('key', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NotificationsInstance_SetDoNotDisturbStatusOnAndroid_ParamsSpec, 'arc.mojom.NotificationsInstance_SetDoNotDisturbStatusOnAndroid_Params', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.ArcDoNotDisturbStatusSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NotificationsInstance_CancelPress_ParamsSpec, 'arc.mojom.NotificationsInstance_CancelPress_Params', [
      mojo.internal.StructField('key', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NotificationsInstance_PerformDeferredUserAction_ParamsSpec, 'arc.mojom.NotificationsInstance_PerformDeferredUserAction_Params', [
      mojo.internal.StructField('action_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NotificationsInstance_CancelDeferredUserAction_ParamsSpec, 'arc.mojom.NotificationsInstance_CancelDeferredUserAction_Params', [
      mojo.internal.StructField('action_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NotificationsInstance_SetLockScreenSettingOnAndroid_ParamsSpec, 'arc.mojom.NotificationsInstance_SetLockScreenSettingOnAndroid_Params', [
      mojo.internal.StructField('setting', 0, 0, arc.mojom.ArcLockScreenNotificationSettingSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NotificationsInstance_SetNotificationConfiguration_ParamsSpec, 'arc.mojom.NotificationsInstance_SetNotificationConfiguration_Params', [
      mojo.internal.StructField('configuration', 0, 0, arc.mojom.NotificationConfigurationSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NotificationsInstance_OnMessageCenterVisibilityChanged_ParamsSpec, 'arc.mojom.NotificationsInstance_OnMessageCenterVisibilityChanged_Params', [
      mojo.internal.StructField('visibility', 0, 0, arc.mojom.MessageCenterVisibilitySpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NotificationsInstance_SendNotificationButtonClickToAndroid_ParamsSpec, 'arc.mojom.NotificationsInstance_SendNotificationButtonClickToAndroid_Params', [
      mojo.internal.StructField('key', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('action_button_index', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('input', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    arc.mojom.NotificationsInstance_PopUpAppNotificationSettings_ParamsSpec, 'arc.mojom.NotificationsInstance_PopUpAppNotificationSettings_Params', [
      mojo.internal.StructField('key', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      arc.mojom.NotificationsInstance_Init_ResponseParamsSpec,
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

arc.mojom.NotificationsInstancePtr = arc.mojom.NotificationsInstanceRemote;
arc.mojom.NotificationsInstanceRequest = arc.mojom.NotificationsInstancePendingReceiver;

