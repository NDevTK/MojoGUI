// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/notifications.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};

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
      mojo.internal.StructField('SUPPORT_SNOOZE', 0, 0, mojo.internal.Pointer, 1, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ArcNotificationData
mojo.internal.Struct(
    arc.mojom.ArcNotificationDataSpec, 'arc.mojom.ArcNotificationData', [
      mojo.internal.StructField('key', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('type', 8, 0, arc.mojom.ArcNotificationTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('message', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('title', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('app_display_name', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('deprecated_icon_data', 40, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('priority', 48, 0, arc.mojom.ArcNotificationPrioritySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('time', 56, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('buttons', 64, 0, mojo.internal.Array(arc.mojom.ArcNotificationButtonSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('progress_current', 72, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('progress_max', 76, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('no_clear', 80, 0, mojo.internal.Bool, false, false, 1, undefined),
      mojo.internal.StructField('ongoing_event', 80, 1, mojo.internal.Bool, false, false, 1, undefined),
      mojo.internal.StructField('texts', 88, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 3, undefined),
      mojo.internal.StructField('big_picture', 96, 0, arc.mojom.ArcBitmapSpec.$, null, true, 3, undefined),
      mojo.internal.StructField('is_custom_notification', 104, 0, mojo.internal.Bool, false, false, 5, undefined),
      mojo.internal.StructField('small_icon', 112, 0, arc.mojom.ArcBitmapSpec.$, null, true, 6, undefined),
      mojo.internal.StructField('snapshot_image', 120, 0, arc.mojom.ArcBitmapSpec.$, null, true, 7, undefined),
      mojo.internal.StructField('snapshot_image_scale', 128, 0, mojo.internal.Float, 0, false, 7, undefined),
      mojo.internal.StructField('accessible_name', 136, 0, mojo.internal.String, null, true, 8, undefined),
      mojo.internal.StructField('expand_state', 144, 0, arc.mojom.ArcNotificationExpandStateSpec.$, null, false, 10, undefined),
      mojo.internal.StructField('shown_contents', 152, 0, arc.mojom.ArcNotificationShownContentsSpec.$, null, false, 11, undefined),
      mojo.internal.StructField('remote_input_state', 160, 0, arc.mojom.ArcNotificationRemoteInputStateSpec.$, null, false, 12, undefined),
      mojo.internal.StructField('swipe_input_rect', 168, 0, arc.mojom.RectSpec.$, null, true, 14, undefined),
      mojo.internal.StructField('package_name', 176, 0, mojo.internal.String, null, true, 15, undefined),
      mojo.internal.StructField('flags', 184, 0, arc.mojom.ArcNotificationFlagsSpec.$, null, true, 17, undefined),
      mojo.internal.StructField('snapshot_image_public', 192, 0, arc.mojom.ArcBitmapSpec.$, null, true, 21, undefined),
      mojo.internal.StructField('indeterminate_progress', 200, 0, mojo.internal.Bool, false, false, 21, undefined),
      mojo.internal.StructField('is_media_notification', 200, 1, mojo.internal.Bool, false, false, 23, undefined),
      mojo.internal.StructField('style', 208, 0, arc.mojom.ArcNotificationStyleSpec.$, null, false, 26, undefined),
      mojo.internal.StructField('is_action_enabled', 216, 0, mojo.internal.Bool, false, false, 26, undefined),
      mojo.internal.StructField('is_inline_reply_enabled', 216, 1, mojo.internal.Bool, false, false, 27, undefined),
      mojo.internal.StructField('render_on_chrome', 216, 2, mojo.internal.Bool, false, false, 28, undefined),
      mojo.internal.StructField('group_key', 224, 0, mojo.internal.String, null, true, 29, undefined),
      mojo.internal.StructField('reply_button_index', 232, 0, mojo.internal.Int32, 0, false, 30, undefined),
      mojo.internal.StructField('children_data', 240, 0, mojo.internal.Array(arc.mojom.ArcNotificationDataSpec.$, false), null, true, 34, undefined),
      mojo.internal.StructField('messages', 248, 0, mojo.internal.Array(arc.mojom.ArcNotificationMessageSpec.$, false), null, true, 35, undefined),
    ],
    [[0, 88], [1, 96], [3, 112], [5, 120], [6, 128], [7, 144], [8, 152], [10, 160], [11, 168], [12, 176], [14, 184], [15, 192], [17, 200], [21, 216], [23, 216], [26, 232], [27, 232], [28, 232], [29, 240], [30, 248], [34, 256], [35, 264]]);

// Struct: ArcDoNotDisturbStatus
mojo.internal.Struct(
    arc.mojom.ArcDoNotDisturbStatusSpec, 'arc.mojom.ArcDoNotDisturbStatus', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ArcNotificationUserActionData
mojo.internal.Struct(
    arc.mojom.ArcNotificationUserActionDataSpec, 'arc.mojom.ArcNotificationUserActionData', [
      mojo.internal.StructField('top_level_notification_key_deprecated', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('action_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
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
      mojo.internal.StructField('sender_icon', 16, 0, arc.mojom.ArcBitmapSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Interface: NotificationsHost
mojo.internal.Struct(
    arc.mojom.NotificationsHost_OnDoNotDisturbStatusUpdated_ParamsSpec, 'arc.mojom.NotificationsHost_OnDoNotDisturbStatusUpdated_Params', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.ArcDoNotDisturbStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NotificationsHost_OnNotificationPosted_ParamsSpec, 'arc.mojom.NotificationsHost_OnNotificationPosted_Params', [
      mojo.internal.StructField('notification_data', 0, 0, arc.mojom.ArcNotificationDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NotificationsHost_OnNotificationRemoved_ParamsSpec, 'arc.mojom.NotificationsHost_OnNotificationRemoved_Params', [
      mojo.internal.StructField('key', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NotificationsHost_OnNotificationUpdated_ParamsSpec, 'arc.mojom.NotificationsHost_OnNotificationUpdated_Params', [
      mojo.internal.StructField('notification_data', 0, 0, arc.mojom.ArcNotificationDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NotificationsHost_OpenMessageCenter_ParamsSpec, 'arc.mojom.NotificationsHost_OpenMessageCenter_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.NotificationsHost_CloseMessageCenter_ParamsSpec, 'arc.mojom.NotificationsHost_CloseMessageCenter_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.NotificationsHost_ProcessUserAction_ParamsSpec, 'arc.mojom.NotificationsHost_ProcessUserAction_Params', [
      mojo.internal.StructField('data', 0, 0, arc.mojom.ArcNotificationUserActionDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NotificationsHost_OnLockScreenSettingUpdated_ParamsSpec, 'arc.mojom.NotificationsHost_OnLockScreenSettingUpdated_Params', [
      mojo.internal.StructField('setting', 0, 0, arc.mojom.ArcLockScreenNotificationSettingSpec.$, null, false, 0, undefined),
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
      [status],
      false);
  }

  onNotificationPosted(notification_data) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.NotificationsHost_OnNotificationPosted_ParamsSpec,
      null,
      [notification_data],
      false);
  }

  onNotificationRemoved(key) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.NotificationsHost_OnNotificationRemoved_ParamsSpec,
      null,
      [key],
      false);
  }

  onNotificationUpdated(notification_data) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      arc.mojom.NotificationsHost_OnNotificationUpdated_ParamsSpec,
      null,
      [notification_data],
      false);
  }

  openMessageCenter() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      arc.mojom.NotificationsHost_OpenMessageCenter_ParamsSpec,
      null,
      [],
      false);
  }

  closeMessageCenter() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      arc.mojom.NotificationsHost_CloseMessageCenter_ParamsSpec,
      null,
      [],
      false);
  }

  processUserAction(data) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      arc.mojom.NotificationsHost_ProcessUserAction_ParamsSpec,
      null,
      [data],
      false);
  }

  onLockScreenSettingUpdated(setting) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      arc.mojom.NotificationsHost_OnLockScreenSettingUpdated_ParamsSpec,
      null,
      [setting],
      false);
  }

  logInlineReplySent(key) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      arc.mojom.NotificationsHost_LogInlineReplySent_ParamsSpec,
      null,
      [key],
      false);
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

arc.mojom.NotificationsHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(7, 0); // Default ordinal 7 -> Index 0
    this.ordinalMap.set(0, 1); // Default ordinal 0 -> Index 1
    this.ordinalMap.set(1, 2); // Default ordinal 1 -> Index 2
    this.ordinalMap.set(5, 3); // Default ordinal 5 -> Index 3
    this.ordinalMap.set(6, 4); // Default ordinal 6 -> Index 4
    this.ordinalMap.set(8, 5); // Default ordinal 8 -> Index 5
    this.ordinalMap.set(9, 6); // Default ordinal 9 -> Index 6
    this.ordinalMap.set(10, 7); // Default ordinal 10 -> Index 7
    this.ordinalMap.set(11, 8); // Default ordinal 11 -> Index 8
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnDoNotDisturbStatusUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.NotificationsHost_OnDoNotDisturbStatusUpdated_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDoNotDisturbStatusUpdated (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnNotificationPosted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.NotificationsHost_OnNotificationPosted_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnNotificationPosted (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnNotificationRemoved
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.NotificationsHost_OnNotificationRemoved_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnNotificationRemoved (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnNotificationUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.NotificationsHost_OnNotificationUpdated_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnNotificationUpdated (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OpenMessageCenter
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.NotificationsHost_OpenMessageCenter_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenMessageCenter (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: CloseMessageCenter
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.NotificationsHost_CloseMessageCenter_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CloseMessageCenter (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: ProcessUserAction
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.NotificationsHost_ProcessUserAction_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ProcessUserAction (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: OnLockScreenSettingUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.NotificationsHost_OnLockScreenSettingUpdated_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnLockScreenSettingUpdated (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: LogInlineReplySent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.NotificationsHost_LogInlineReplySent_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LogInlineReplySent (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.NotificationsHost_OnDoNotDisturbStatusUpdated_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onDoNotDisturbStatusUpdated');
          const result = this.impl.onDoNotDisturbStatusUpdated(params.status);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.NotificationsHost_OnNotificationPosted_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onNotificationPosted');
          const result = this.impl.onNotificationPosted(params.notification_data);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.NotificationsHost_OnNotificationRemoved_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onNotificationRemoved');
          const result = this.impl.onNotificationRemoved(params.key);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.NotificationsHost_OnNotificationUpdated_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onNotificationUpdated');
          const result = this.impl.onNotificationUpdated(params.notification_data);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.NotificationsHost_OpenMessageCenter_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.openMessageCenter');
          const result = this.impl.openMessageCenter();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.NotificationsHost_CloseMessageCenter_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.closeMessageCenter');
          const result = this.impl.closeMessageCenter();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.NotificationsHost_ProcessUserAction_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.processUserAction');
          const result = this.impl.processUserAction(params.data);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.NotificationsHost_OnLockScreenSettingUpdated_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onLockScreenSettingUpdated');
          const result = this.impl.onLockScreenSettingUpdated(params.setting);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.NotificationsHost_LogInlineReplySent_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.logInlineReplySent');
          const result = this.impl.logInlineReplySent(params.key);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

arc.mojom.NotificationsHostReceiver = arc.mojom.NotificationsHostReceiver;

arc.mojom.NotificationsHostPtr = arc.mojom.NotificationsHostRemote;
arc.mojom.NotificationsHostRequest = arc.mojom.NotificationsHostPendingReceiver;


// Interface: NotificationsInstance
mojo.internal.Struct(
    arc.mojom.NotificationsInstance_Init_ParamsSpec, 'arc.mojom.NotificationsInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.NotificationsHostSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NotificationsInstance_Init_ResponseParamsSpec, 'arc.mojom.NotificationsInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.NotificationsInstance_SendNotificationEventToAndroid_ParamsSpec, 'arc.mojom.NotificationsInstance_SendNotificationEventToAndroid_Params', [
      mojo.internal.StructField('key', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('event', 8, 0, arc.mojom.ArcNotificationEventSpec.$, null, false, 0, undefined),
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
      mojo.internal.StructField('status', 0, 0, arc.mojom.ArcDoNotDisturbStatusSpec.$, null, false, 0, undefined),
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
      mojo.internal.StructField('setting', 0, 0, arc.mojom.ArcLockScreenNotificationSettingSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NotificationsInstance_SetNotificationConfiguration_ParamsSpec, 'arc.mojom.NotificationsInstance_SetNotificationConfiguration_Params', [
      mojo.internal.StructField('configuration', 0, 0, arc.mojom.NotificationConfigurationSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NotificationsInstance_OnMessageCenterVisibilityChanged_ParamsSpec, 'arc.mojom.NotificationsInstance_OnMessageCenterVisibilityChanged_Params', [
      mojo.internal.StructField('visibility', 0, 0, arc.mojom.MessageCenterVisibilitySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.NotificationsInstance_SendNotificationButtonClickToAndroid_ParamsSpec, 'arc.mojom.NotificationsInstance_SendNotificationButtonClickToAndroid_Params', [
      mojo.internal.StructField('key', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('input', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('action_button_index', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
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
      [host_remote],
      false);
  }

  sendNotificationEventToAndroid(key, event) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.NotificationsInstance_SendNotificationEventToAndroid_ParamsSpec,
      null,
      [key, event],
      false);
  }

  createNotificationWindow(key) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.NotificationsInstance_CreateNotificationWindow_ParamsSpec,
      null,
      [key],
      false);
  }

  closeNotificationWindow(key) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.NotificationsInstance_CloseNotificationWindow_ParamsSpec,
      null,
      [key],
      false);
  }

  openNotificationSettings(key) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      arc.mojom.NotificationsInstance_OpenNotificationSettings_ParamsSpec,
      null,
      [key],
      false);
  }

  openNotificationSnoozeSettings(key) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      arc.mojom.NotificationsInstance_OpenNotificationSnoozeSettings_ParamsSpec,
      null,
      [key],
      false);
  }

  setDoNotDisturbStatusOnAndroid(status) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      arc.mojom.NotificationsInstance_SetDoNotDisturbStatusOnAndroid_ParamsSpec,
      null,
      [status],
      false);
  }

  cancelPress(key) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      arc.mojom.NotificationsInstance_CancelPress_ParamsSpec,
      null,
      [key],
      false);
  }

  performDeferredUserAction(action_id) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      arc.mojom.NotificationsInstance_PerformDeferredUserAction_ParamsSpec,
      null,
      [action_id],
      false);
  }

  cancelDeferredUserAction(action_id) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      arc.mojom.NotificationsInstance_CancelDeferredUserAction_ParamsSpec,
      null,
      [action_id],
      false);
  }

  setLockScreenSettingOnAndroid(setting) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      arc.mojom.NotificationsInstance_SetLockScreenSettingOnAndroid_ParamsSpec,
      null,
      [setting],
      false);
  }

  setNotificationConfiguration(configuration) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      arc.mojom.NotificationsInstance_SetNotificationConfiguration_ParamsSpec,
      null,
      [configuration],
      false);
  }

  onMessageCenterVisibilityChanged(visibility) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      arc.mojom.NotificationsInstance_OnMessageCenterVisibilityChanged_ParamsSpec,
      null,
      [visibility],
      false);
  }

  sendNotificationButtonClickToAndroid(key, action_button_index, input) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      arc.mojom.NotificationsInstance_SendNotificationButtonClickToAndroid_ParamsSpec,
      null,
      [key, action_button_index, input],
      false);
  }

  popUpAppNotificationSettings(key) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      arc.mojom.NotificationsInstance_PopUpAppNotificationSettings_ParamsSpec,
      null,
      [key],
      false);
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

arc.mojom.NotificationsInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(5, 0); // Default ordinal 5 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(6, 5); // Default ordinal 6 -> Index 5
    this.ordinalMap.set(7, 6); // Default ordinal 7 -> Index 6
    this.ordinalMap.set(8, 7); // Default ordinal 8 -> Index 7
    this.ordinalMap.set(9, 8); // Default ordinal 9 -> Index 8
    this.ordinalMap.set(10, 9); // Default ordinal 10 -> Index 9
    this.ordinalMap.set(11, 10); // Default ordinal 11 -> Index 10
    this.ordinalMap.set(12, 11); // Default ordinal 12 -> Index 11
    this.ordinalMap.set(13, 12); // Default ordinal 13 -> Index 12
    this.ordinalMap.set(14, 13); // Default ordinal 14 -> Index 13
    this.ordinalMap.set(15, 14); // Default ordinal 15 -> Index 14
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: Init
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.NotificationsInstance_Init_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Init (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SendNotificationEventToAndroid
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.NotificationsInstance_SendNotificationEventToAndroid_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendNotificationEventToAndroid (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: CreateNotificationWindow
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.NotificationsInstance_CreateNotificationWindow_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateNotificationWindow (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: CloseNotificationWindow
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.NotificationsInstance_CloseNotificationWindow_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CloseNotificationWindow (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OpenNotificationSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.NotificationsInstance_OpenNotificationSettings_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenNotificationSettings (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: OpenNotificationSnoozeSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.NotificationsInstance_OpenNotificationSnoozeSettings_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenNotificationSnoozeSettings (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: SetDoNotDisturbStatusOnAndroid
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.NotificationsInstance_SetDoNotDisturbStatusOnAndroid_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetDoNotDisturbStatusOnAndroid (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: CancelPress
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.NotificationsInstance_CancelPress_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CancelPress (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: PerformDeferredUserAction
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.NotificationsInstance_PerformDeferredUserAction_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PerformDeferredUserAction (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: CancelDeferredUserAction
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.NotificationsInstance_CancelDeferredUserAction_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CancelDeferredUserAction (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: SetLockScreenSettingOnAndroid
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.NotificationsInstance_SetLockScreenSettingOnAndroid_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetLockScreenSettingOnAndroid (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: SetNotificationConfiguration
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.NotificationsInstance_SetNotificationConfiguration_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetNotificationConfiguration (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: OnMessageCenterVisibilityChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.NotificationsInstance_OnMessageCenterVisibilityChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnMessageCenterVisibilityChanged (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: SendNotificationButtonClickToAndroid
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.NotificationsInstance_SendNotificationButtonClickToAndroid_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendNotificationButtonClickToAndroid (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: PopUpAppNotificationSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.NotificationsInstance_PopUpAppNotificationSettings_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PopUpAppNotificationSettings (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.NotificationsInstance_Init_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.init');
          const result = this.impl.init(params.host_remote);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.NotificationsInstance_Init_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.NotificationsInstance_SendNotificationEventToAndroid_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.sendNotificationEventToAndroid');
          const result = this.impl.sendNotificationEventToAndroid(params.key, params.event);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.NotificationsInstance_CreateNotificationWindow_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createNotificationWindow');
          const result = this.impl.createNotificationWindow(params.key);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.NotificationsInstance_CloseNotificationWindow_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.closeNotificationWindow');
          const result = this.impl.closeNotificationWindow(params.key);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.NotificationsInstance_OpenNotificationSettings_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.openNotificationSettings');
          const result = this.impl.openNotificationSettings(params.key);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.NotificationsInstance_OpenNotificationSnoozeSettings_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.openNotificationSnoozeSettings');
          const result = this.impl.openNotificationSnoozeSettings(params.key);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.NotificationsInstance_SetDoNotDisturbStatusOnAndroid_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setDoNotDisturbStatusOnAndroid');
          const result = this.impl.setDoNotDisturbStatusOnAndroid(params.status);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.NotificationsInstance_CancelPress_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.cancelPress');
          const result = this.impl.cancelPress(params.key);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.NotificationsInstance_PerformDeferredUserAction_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.performDeferredUserAction');
          const result = this.impl.performDeferredUserAction(params.action_id);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.NotificationsInstance_CancelDeferredUserAction_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.cancelDeferredUserAction');
          const result = this.impl.cancelDeferredUserAction(params.action_id);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.NotificationsInstance_SetLockScreenSettingOnAndroid_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setLockScreenSettingOnAndroid');
          const result = this.impl.setLockScreenSettingOnAndroid(params.setting);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.NotificationsInstance_SetNotificationConfiguration_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setNotificationConfiguration');
          const result = this.impl.setNotificationConfiguration(params.configuration);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.NotificationsInstance_OnMessageCenterVisibilityChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onMessageCenterVisibilityChanged');
          const result = this.impl.onMessageCenterVisibilityChanged(params.visibility);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.NotificationsInstance_SendNotificationButtonClickToAndroid_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.sendNotificationButtonClickToAndroid');
          const result = this.impl.sendNotificationButtonClickToAndroid(params.key, params.action_button_index, params.input);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.NotificationsInstance_PopUpAppNotificationSettings_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.popUpAppNotificationSettings');
          const result = this.impl.popUpAppNotificationSettings(params.key);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

arc.mojom.NotificationsInstanceReceiver = arc.mojom.NotificationsInstanceReceiver;

arc.mojom.NotificationsInstancePtr = arc.mojom.NotificationsInstanceRemote;
arc.mojom.NotificationsInstanceRequest = arc.mojom.NotificationsInstancePendingReceiver;

