// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/webpreferences/web_preferences.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: PointerType
blink.mojom.PointerType = {
  kPointerNone: 0,
  kPointerFirstType: 1,
  kPointerCoarseType: 2,
  kPointerFineType: 3,
};

// Enum: HoverType
blink.mojom.HoverType = {
  kHoverNone: 0,
  kHoverFirstType: 1,
  kHoverHoverType: 2,
};

// Enum: OutputDeviceUpdateAbilityType
blink.mojom.OutputDeviceUpdateAbilityType = {
  kSlowType: 0,
  kFastType: 1,
};

// Enum: EditingBehavior
blink.mojom.EditingBehavior = {
  kEditingMacBehavior: 0,
  kEditingWindowsBehavior: 1,
  kEditingUnixBehavior: 2,
  kEditingAndroidBehavior: 3,
  kEditingChromeOSBehavior: 4,
};

// Enum: ImageAnimationPolicy
blink.mojom.ImageAnimationPolicy = {
  kImageAnimationPolicyAllowed: 0,
  kImageAnimationPolicyAnimateOnce: 1,
  kImageAnimationPolicyNoAnimation: 2,
};

// Enum: ViewportStyle
blink.mojom.ViewportStyle = {
  kDefault: 0,
  kMobile: 1,
  kTelevision: 2,
  kLast: 3,
};

// Enum: AutoplayPolicy
blink.mojom.AutoplayPolicy = {
  kNoUserGestureRequired: 0,
  kUserGestureRequired: 1,
  kDocumentUserActivationRequired: 2,
};

// Enum: EffectiveConnectionType
blink.mojom.EffectiveConnectionType = {
  kEffectiveConnectionUnknownType: 0,
  kEffectiveConnectionOfflineType: 1,
  kEffectiveConnectionSlow2GType: 2,
  kEffectiveConnection2GType: 3,
  kEffectiveConnection3GType: 4,
  kEffectiveConnection4GType: 5,
  kEffectiveConnectionTypeLast: 6,
};

// Struct: WebPreferences
blink.mojom.WebPreferencesSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebPreferences',
      packedSize: 16,
      fields: [
        { name: 'false', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
