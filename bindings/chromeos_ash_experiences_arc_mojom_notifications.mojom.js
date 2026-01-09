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
  DEPRECATED_BUTTON_2_CLICKED: 2,
  DEPRECATED_BUTTON_3_CLICKED: 3,
  DEPRECATED_BUTTON_4_CLICKED: 4,
  DEPRECATED_BUTTON_5_CLICKED: 5,
  or: 6,
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
};

// Struct: ArcNotificationButton
arc.mojom.ArcNotificationButton = class {
  constructor(values = {}) {
    this.label = values.label !== undefined ? values.label : "";
    this.buttonPlaceholder = values.buttonPlaceholder !== undefined ? values.buttonPlaceholder : "";
  }
};

// Struct: ArcNotificationFlags
arc.mojom.ArcNotificationFlags = class {
  constructor(values = {}) {
    this.value = values.value !== undefined ? values.value : 0;
  }
};

// Struct: ArcNotificationData
arc.mojom.ArcNotificationData = class {
  constructor(values = {}) {
    this.time = values.time !== undefined ? values.time : 0;
    this.progress_max = values.progress_max !== undefined ? values.progress_max : 0;
    this.remote_input_state = values.remote_input_state !== undefined ? values.remote_input_state : 0;
    this.group_key = values.group_key !== undefined ? values.group_key : false;
    this.messages = values.messages !== undefined ? values.messages : 0;
  }
};

// Struct: ArcDoNotDisturbStatus
arc.mojom.ArcDoNotDisturbStatus = class {
  constructor(values = {}) {
    this.enabled = values.enabled !== undefined ? values.enabled : false;
  }
};

// Struct: ArcNotificationUserActionData
arc.mojom.ArcNotificationUserActionData = class {
  constructor(values = {}) {
    this.to_be_focused_after_unlock = values.to_be_focused_after_unlock !== undefined ? values.to_be_focused_after_unlock : 0;
  }
};

// Struct: ArcLockScreenNotificationSetting
arc.mojom.ArcLockScreenNotificationSetting = class {
  constructor(values = {}) {
    this.show_private_notification = values.show_private_notification !== undefined ? values.show_private_notification : false;
  }
};

// Struct: NotificationConfiguration
arc.mojom.NotificationConfiguration = class {
  constructor(values = {}) {
    this.expansion_animation = values.expansion_animation !== undefined ? values.expansion_animation : false;
  }
};

// Struct: ArcNotificationMessage
arc.mojom.ArcNotificationMessage = class {
  constructor(values = {}) {
    this.sender_icon = values.sender_icon !== undefined ? values.sender_icon : "";
  }
};

// Interface: NotificationsHost
arc.mojom.NotificationsHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.NotificationsHost';
  }

};

arc.mojom.NotificationsHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: NotificationsInstance
arc.mojom.NotificationsInstancePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.NotificationsInstance';
  }

};

arc.mojom.NotificationsInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
