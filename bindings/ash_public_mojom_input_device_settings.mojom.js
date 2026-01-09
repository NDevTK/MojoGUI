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
      packedSize: 56,
      fields: [
        { name: 'home', packedOffset: 0, packedBitOffset: 0, type: ui.mojom.SixPackShortcutModifierSpec, nullable: false },
        { name: 'page_up', packedOffset: 8, packedBitOffset: 0, type: ui.mojom.SixPackShortcutModifierSpec, nullable: false },
        { name: 'page_down', packedOffset: 16, packedBitOffset: 0, type: ui.mojom.SixPackShortcutModifierSpec, nullable: false },
        { name: 'del', packedOffset: 24, packedBitOffset: 0, type: ui.mojom.SixPackShortcutModifierSpec, nullable: false },
        { name: 'insert', packedOffset: 32, packedBitOffset: 0, type: ui.mojom.SixPackShortcutModifierSpec, nullable: false },
        { name: 'end', packedOffset: 40, packedBitOffset: 0, type: ui.mojom.SixPackShortcutModifierSpec, nullable: false },
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
      packedSize: 24,
      fields: [
        { name: 'policy_status', packedOffset: 0, packedBitOffset: 0, type: ash.mojom.PolicyStatusSpec, nullable: false },
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
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
      packedSize: 24,
      fields: [
        { name: 'policy_status', packedOffset: 0, packedBitOffset: 0, type: ash.mojom.PolicyStatusSpec, nullable: false },
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: ui.mojom.ExtendedFkeysModifierSpec, nullable: false },
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
      packedSize: 24,
      fields: [
        { name: 'policy_status', packedOffset: 0, packedBitOffset: 0, type: ash.mojom.PolicyStatusSpec, nullable: false },
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: ui.mojom.SixPackShortcutModifierSpec, nullable: false },
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
      packedSize: 72,
      fields: [
        { name: 'top_row_are_fkeys_policy', packedOffset: 0, packedBitOffset: 0, type: ash.mojom.InputDeviceSettingsPolicySpec, nullable: true },
        { name: 'enable_meta_fkey_rewrites_policy', packedOffset: 8, packedBitOffset: 0, type: ash.mojom.InputDeviceSettingsPolicySpec, nullable: true },
        { name: 'f11_key_policy', packedOffset: 16, packedBitOffset: 0, type: ash.mojom.InputDeviceSettingsFkeyPolicySpec, nullable: true },
        { name: 'f12_key_policy', packedOffset: 24, packedBitOffset: 0, type: ash.mojom.InputDeviceSettingsFkeyPolicySpec, nullable: true },
        { name: 'home_and_end_keys_policy', packedOffset: 32, packedBitOffset: 0, type: ash.mojom.InputDeviceSettingsSixPackKeyPolicySpec, nullable: true },
        { name: 'page_up_and_page_down_keys_policy', packedOffset: 40, packedBitOffset: 0, type: ash.mojom.InputDeviceSettingsSixPackKeyPolicySpec, nullable: true },
        { name: 'delete_key_policy', packedOffset: 48, packedBitOffset: 0, type: ash.mojom.InputDeviceSettingsSixPackKeyPolicySpec, nullable: true },
        { name: 'insert_key_policy', packedOffset: 56, packedBitOffset: 0, type: ash.mojom.InputDeviceSettingsSixPackKeyPolicySpec, nullable: true },
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
        { name: 'swap_right_policy', packedOffset: 0, packedBitOffset: 0, type: ash.mojom.InputDeviceSettingsPolicySpec, nullable: true },
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
      packedSize: 24,
      fields: [
        { name: 'battery_percentage', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false },
        { name: 'charge_state', packedOffset: 8, packedBitOffset: 0, type: ash.mojom.ChargeStateSpec, nullable: false },
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
      packedSize: 48,
      fields: [
        { name: 'package_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'app_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'action_link', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'icon_url', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'state', packedOffset: 32, packedBitOffset: 0, type: ash.mojom.CompanionAppStateSpec, nullable: false },
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
      packedSize: 88,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'is_external', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'device_key', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'meta_key', packedOffset: 32, packedBitOffset: 0, type: ui.mojom.MetaKeySpec, nullable: false },
        { name: 'modifier_keys', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'top_row_action_keys', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'settings', packedOffset: 56, packedBitOffset: 0, type: ash.mojom.KeyboardSettingsSpec, nullable: false },
        { name: 'battery_info', packedOffset: 64, packedBitOffset: 0, type: ash.mojom.BatteryInfoSpec, nullable: true },
        { name: 'app_info', packedOffset: 72, packedBitOffset: 0, type: ash.mojom.CompanionAppInfoSpec, nullable: true },
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
      packedSize: 48,
      fields: [
        { name: 'modifier_remappings', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'top_row_are_fkeys', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'suppress_meta_fkey_rewrites', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'six_pack_key_remappings', packedOffset: 16, packedBitOffset: 0, type: ash.mojom.SixPackKeyInfoSpec, nullable: true },
        { name: 'f11', packedOffset: 24, packedBitOffset: 0, type: ui.mojom.ExtendedFkeysModifierSpec, nullable: true },
        { name: 'f12', packedOffset: 32, packedBitOffset: 0, type: ui.mojom.ExtendedFkeysModifierSpec, nullable: true },
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
      packedSize: 80,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'is_external', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'device_key', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'customization_restriction', packedOffset: 32, packedBitOffset: 0, type: ash.mojom.CustomizationRestrictionSpec, nullable: false },
        { name: 'mouse_button_config', packedOffset: 40, packedBitOffset: 0, type: ash.mojom.MouseButtonConfigSpec, nullable: false },
        { name: 'settings', packedOffset: 48, packedBitOffset: 0, type: ash.mojom.MouseSettingsSpec, nullable: false },
        { name: 'battery_info', packedOffset: 56, packedBitOffset: 0, type: ash.mojom.BatteryInfoSpec, nullable: true },
        { name: 'app_info', packedOffset: 64, packedBitOffset: 0, type: ash.mojom.CompanionAppInfoSpec, nullable: true },
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
      packedSize: 48,
      fields: [
        { name: 'swap_right', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'sensitivity', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false },
        { name: 'reverse_scrolling', packedOffset: 9, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'acceleration_enabled', packedOffset: 9, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'scroll_sensitivity', packedOffset: 17, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false },
        { name: 'scroll_acceleration', packedOffset: 18, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'button_remappings', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
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
      packedSize: 72,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'is_external', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'device_key', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'is_haptic', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'settings', packedOffset: 40, packedBitOffset: 0, type: ash.mojom.TouchpadSettingsSpec, nullable: false },
        { name: 'battery_info', packedOffset: 48, packedBitOffset: 0, type: ash.mojom.BatteryInfoSpec, nullable: true },
        { name: 'app_info', packedOffset: 56, packedBitOffset: 0, type: ash.mojom.CompanionAppInfoSpec, nullable: true },
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
      packedSize: 48,
      fields: [
        { name: 'sensitivity', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false },
        { name: 'reverse_scrolling', packedOffset: 1, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'acceleration_enabled', packedOffset: 1, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'tap_to_click_enabled', packedOffset: 1, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'three_finger_click_enabled', packedOffset: 1, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
        { name: 'tap_dragging_enabled', packedOffset: 1, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false },
        { name: 'scroll_sensitivity', packedOffset: 9, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false },
        { name: 'scroll_acceleration', packedOffset: 10, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'haptic_sensitivity', packedOffset: 18, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false },
        { name: 'haptic_enabled', packedOffset: 19, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'simulate_right_click', packedOffset: 32, packedBitOffset: 0, type: ui.mojom.SimulateRightClickModifierSpec, nullable: false },
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
      packedSize: 48,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'is_external', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'device_key', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'settings', packedOffset: 32, packedBitOffset: 0, type: ash.mojom.PointingStickSettingsSpec, nullable: false },
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
      packedSize: 32,
      fields: [
        { name: 'swap_right', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'sensitivity', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false },
        { name: 'acceleration_enabled', packedOffset: 9, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
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
      packedSize: 72,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'device_key', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'customization_restriction', packedOffset: 24, packedBitOffset: 0, type: ash.mojom.CustomizationRestrictionSpec, nullable: false },
        { name: 'graphics_tablet_button_config', packedOffset: 32, packedBitOffset: 0, type: ash.mojom.GraphicsTabletButtonConfigSpec, nullable: false },
        { name: 'settings', packedOffset: 40, packedBitOffset: 0, type: ash.mojom.GraphicsTabletSettingsSpec, nullable: false },
        { name: 'battery_info', packedOffset: 48, packedBitOffset: 0, type: ash.mojom.BatteryInfoSpec, nullable: true },
        { name: 'app_info', packedOffset: 56, packedBitOffset: 0, type: ash.mojom.CompanionAppInfoSpec, nullable: true },
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
      packedSize: 24,
      fields: [
        { name: 'tablet_button_remappings', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'pen_button_remappings', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
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
      packedSize: 32,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'button', packedOffset: 8, packedBitOffset: 0, type: ash.mojom.ButtonSpec, nullable: false },
        { name: 'remapping_action', packedOffset: 16, packedBitOffset: 0, type: ash.mojom.RemappingActionSpec, nullable: true },
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
      packedSize: 40,
      fields: [
        { name: 'vkey', packedOffset: 0, packedBitOffset: 0, type: ash.mojom.VKeySpec, nullable: false },
        { name: 'dom_code', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'dom_key', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'modifiers', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'key_display', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
