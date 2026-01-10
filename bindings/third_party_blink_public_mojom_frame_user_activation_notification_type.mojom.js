// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/frame/user_activation_notification_type.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: UserActivationNotificationType
blink.mojom.UserActivationNotificationType = {
  kNone: 0,
  kInteraction: 1,
  kDevTools: 2,
  kExtensionEvent: 3,
  kExtensionGuestView: 4,
  kExtensionMessaging: 5,
  kMedia: 6,
  kFileSystemAccess: 7,
  kPlugin: 8,
  kTest: 9,
  kWebScriptExec: 10,
  kVoiceSearch: 11,
  kExtensionMessagingBothPrivileged: 12,
  kExtensionMessagingSenderPrivileged: 13,
  kExtensionMessagingReceiverPrivileged: 14,
  kExtensionMessagingNeitherPrivileged: 15,
};
blink.mojom.UserActivationNotificationTypeSpec = { $: mojo.internal.Enum() };
