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
      packedSize: 16,
      fields: [
        { name: 'buttonPlaceholder', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
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
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'messages', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
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
      packedSize: 16,
      fields: [
        { name: 'to_be_focused_after_unlock', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
        { name: 'show_private_notification', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'sender_icon', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
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

