// Auto-generated MojoJS binding
// Source: chromium_src/ash/public/mojom/input_device_settings.mojom
// Module: ash.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.mojom = ash.mojom || {};


// Enum: PolicyStatus
ash.mojom.PolicyStatus = {
  kManaged: 0,
  kRecommended: 1,
};

// Enum: TopRowActionKey
ash.mojom.TopRowActionKey = {
  kNone: 0,
  kUnknown: 1,
  kBack: 2,
  kForward: 3,
  kRefresh: 4,
  kFullscreen: 5,
  kOverview: 6,
  kScreenshot: 7,
  kScreenBrightnessDown: 8,
  kScreenBrightnessUp: 9,
  kMicrophoneMute: 10,
  kVolumeMute: 11,
  kVolumeDown: 12,
  kVolumeUp: 13,
  kKeyboardBacklightToggle: 14,
  kKeyboardBacklightDown: 15,
  kKeyboardBacklightUp: 16,
  kNextTrack: 17,
  kPreviousTrack: 18,
  kPlayPause: 19,
  kAllApplications: 20,
  kEmojiPicker: 21,
  kDictation: 22,
  kPrivacyScreenToggle: 23,
  kAccessibility: 24,
  kDoNotDisturb: 25,
};

// Enum: ChargeState
ash.mojom.ChargeState = {
  kUnknown: 0,
  kCharging: 1,
  kDischarging: 2,
};

// Enum: CompanionAppState
ash.mojom.CompanionAppState = {
  kAvailable: 0,
  kInstalled: 1,
};

// Enum: CustomizableButton
ash.mojom.CustomizableButton = {
  kLeft: 0,
  kRight: 1,
  kMiddle: 2,
  kForward: 3,
  kBack: 4,
  kExtra: 5,
  kSide: 6,
  kScrollLeft: 7,
  kScrollRight: 8,
};

// Enum: MouseButtonConfig
ash.mojom.MouseButtonConfig = {
  kNoConfig: 0,
  kFiveKey: 1,
  kLogitechSixKey: 2,
  kLogitechSixKeyWithTab: 3,
  kThreeKey: 4,
  kFourKeyWithTopButton: 5,
};

// Enum: GraphicsTabletButtonConfig
ash.mojom.GraphicsTabletButtonConfig = {
  kNoConfig: 0,
  kWacomStandardPenOnly: 1,
  kWacomStandardFourButtons: 2,
  kWacomStandardPenOnlyOneButton: 3,
};

// Enum: StaticShortcutAction
ash.mojom.StaticShortcutAction = {
  kDisable: 0,
  kCopy: 1,
  kPaste: 2,
  kUndo: 3,
  kRedo: 4,
  kZoomIn: 5,
  kZoomOut: 6,
  kPreviousPage: 7,
  kNextPage: 8,
  kLeftClick: 9,
  kRightClick: 10,
  kMiddleClick: 11,
};

// Enum: CustomizationRestriction
ash.mojom.CustomizationRestriction = {
  kAllowCustomizations: 0,
  kDisallowCustomizations: 1,
  kDisableKeyEventRewrites: 2,
  kAllowAlphabetKeyEventRewrites: 3,
  kAllowAlphabetOrNumberKeyEventRewrites: 4,
  kAllowHorizontalScrollWheelRewrites: 5,
  kAllowTabEventRewrites: 6,
  kAllowFKeyRewrites: 7,
};

// Struct: SixPackKeyInfo
ash.mojom.SixPackKeyInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.SixPackKeyInfo',
      packedSize: 16,
      fields: [
        { name: 'kSearch', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: InputDeviceSettingsPolicy
ash.mojom.InputDeviceSettingsPolicySpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.InputDeviceSettingsPolicy',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: InputDeviceSettingsFkeyPolicy
ash.mojom.InputDeviceSettingsFkeyPolicySpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.InputDeviceSettingsFkeyPolicy',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: InputDeviceSettingsSixPackKeyPolicy
ash.mojom.InputDeviceSettingsSixPackKeyPolicySpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.InputDeviceSettingsSixPackKeyPolicy',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: KeyboardPolicies
ash.mojom.KeyboardPoliciesSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.KeyboardPolicies',
      packedSize: 16,
      fields: [
        { name: 'insert_key_policy', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: MousePolicies
ash.mojom.MousePoliciesSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.MousePolicies',
      packedSize: 16,
      fields: [
        { name: 'swap_right_policy', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: BatteryInfo
ash.mojom.BatteryInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.BatteryInfo',
      packedSize: 16,
      fields: [
        { name: 'charge_state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CompanionAppInfo
ash.mojom.CompanionAppInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.CompanionAppInfo',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Keyboard
ash.mojom.KeyboardSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.Keyboard',
      packedSize: 16,
      fields: [
        { name: 'app_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: KeyboardSettings
ash.mojom.KeyboardSettingsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.KeyboardSettings',
      packedSize: 16,
      fields: [
        { name: 'f12', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Mouse
ash.mojom.MouseSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.Mouse',
      packedSize: 16,
      fields: [
        { name: 'app_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: MouseSettings
ash.mojom.MouseSettingsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.MouseSettings',
      packedSize: 16,
      fields: [
        { name: 'button_remappings', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Touchpad
ash.mojom.TouchpadSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.Touchpad',
      packedSize: 16,
      fields: [
        { name: 'app_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TouchpadSettings
ash.mojom.TouchpadSettingsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.TouchpadSettings',
      packedSize: 16,
      fields: [
        { name: 'simulate_right_click', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PointingStick
ash.mojom.PointingStickSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.PointingStick',
      packedSize: 16,
      fields: [
        { name: 'settings', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PointingStickSettings
ash.mojom.PointingStickSettingsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.PointingStickSettings',
      packedSize: 16,
      fields: [
        { name: 'acceleration_enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Stylus
ash.mojom.StylusSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.Stylus',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: GraphicsTablet
ash.mojom.GraphicsTabletSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.GraphicsTablet',
      packedSize: 16,
      fields: [
        { name: 'app_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: GraphicsTabletSettings
ash.mojom.GraphicsTabletSettingsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.GraphicsTabletSettings',
      packedSize: 16,
      fields: [
        { name: 'pen_button_remappings', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ButtonRemapping
ash.mojom.ButtonRemappingSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.ButtonRemapping',
      packedSize: 16,
      fields: [
        { name: 'remapping_action', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: KeyEvent
ash.mojom.KeyEventSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.KeyEvent',
      packedSize: 16,
      fields: [
        { name: 'key_display', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
