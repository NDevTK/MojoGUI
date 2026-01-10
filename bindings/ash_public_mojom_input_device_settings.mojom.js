// Auto-generated MojoJS binding
// Source: chromium_src/ash/public/mojom/input_device_settings.mojom
// Module: ash.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.mojom = ash.mojom || {};
var ui = ui || {};
var ui = ui || {};
var ui = ui || {};
var ui = ui || {};
var ui = ui || {};


// Enum: PolicyStatus
ash.mojom.mojom.PolicyStatus = {
  kManaged: 0,
  kRecommended: 1,
};
ash.mojom.mojom.PolicyStatusSpec = { $: mojo.internal.Enum() };

// Enum: TopRowActionKey
ash.mojom.mojom.TopRowActionKey = {
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
ash.mojom.mojom.TopRowActionKeySpec = { $: mojo.internal.Enum() };

// Enum: ChargeState
ash.mojom.mojom.ChargeState = {
  kUnknown: 0,
  kCharging: 1,
  kDischarging: 2,
};
ash.mojom.mojom.ChargeStateSpec = { $: mojo.internal.Enum() };

// Enum: CompanionAppState
ash.mojom.mojom.CompanionAppState = {
  kAvailable: 0,
  kInstalled: 1,
};
ash.mojom.mojom.CompanionAppStateSpec = { $: mojo.internal.Enum() };

// Enum: CustomizableButton
ash.mojom.mojom.CustomizableButton = {
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
ash.mojom.mojom.CustomizableButtonSpec = { $: mojo.internal.Enum() };

// Enum: MouseButtonConfig
ash.mojom.mojom.MouseButtonConfig = {
  kNoConfig: 0,
  kFiveKey: 1,
  kLogitechSixKey: 2,
  kLogitechSixKeyWithTab: 3,
  kThreeKey: 4,
  kFourKeyWithTopButton: 5,
};
ash.mojom.mojom.MouseButtonConfigSpec = { $: mojo.internal.Enum() };

// Enum: GraphicsTabletButtonConfig
ash.mojom.mojom.GraphicsTabletButtonConfig = {
  kNoConfig: 0,
  kWacomStandardPenOnly: 1,
  kWacomStandardFourButtons: 2,
  kWacomStandardPenOnlyOneButton: 3,
};
ash.mojom.mojom.GraphicsTabletButtonConfigSpec = { $: mojo.internal.Enum() };

// Enum: StaticShortcutAction
ash.mojom.mojom.StaticShortcutAction = {
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
ash.mojom.mojom.StaticShortcutActionSpec = { $: mojo.internal.Enum() };

// Enum: CustomizationRestriction
ash.mojom.mojom.CustomizationRestriction = {
  kAllowCustomizations: 0,
  kDisallowCustomizations: 1,
  kDisableKeyEventRewrites: 2,
  kAllowAlphabetKeyEventRewrites: 3,
  kAllowAlphabetOrNumberKeyEventRewrites: 4,
  kAllowHorizontalScrollWheelRewrites: 5,
  kAllowTabEventRewrites: 6,
  kAllowFKeyRewrites: 7,
};
ash.mojom.mojom.CustomizationRestrictionSpec = { $: mojo.internal.Enum() };

// Union: RemappingAction
ash.mojom.mojom.RemappingActionSpec = { $: mojo.internal.Union(
    'ash.mojom.RemappingAction', {
      'accelerator_action': {
        'ordinal': 0,
        'type': ash.mojom.AcceleratorActionSpec,
      }},
      'key_event': {
        'ordinal': 1,
        'type': ash.mojom.KeyEventSpec,
      }},
      'static_shortcut_action': {
        'ordinal': 2,
        'type': ash.mojom.StaticShortcutActionSpec,
      }},
    })
};

// Union: Button
ash.mojom.mojom.ButtonSpec = { $: mojo.internal.Union(
    'ash.mojom.Button', {
      'vkey': {
        'ordinal': 0,
        'type': ash.mojom.VKeySpec,
      }},
      'customizable_button': {
        'ordinal': 1,
        'type': ash.mojom.CustomizableButtonSpec,
      }},
    })
};

// Struct: SixPackKeyInfo
ash.mojom.mojom.SixPackKeyInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.SixPackKeyInfo',
      packedSize: 32,
      fields: [
        { name: 'home', packedOffset: 0, packedBitOffset: 0, type: ui.mojom.SixPackShortcutModifierSpec, nullable: false, minVersion: 0 },
        { name: 'page_up', packedOffset: 4, packedBitOffset: 0, type: ui.mojom.SixPackShortcutModifierSpec, nullable: false, minVersion: 0 },
        { name: 'page_down', packedOffset: 8, packedBitOffset: 0, type: ui.mojom.SixPackShortcutModifierSpec, nullable: false, minVersion: 0 },
        { name: 'del', packedOffset: 12, packedBitOffset: 0, type: ui.mojom.SixPackShortcutModifierSpec, nullable: false, minVersion: 0 },
        { name: 'insert', packedOffset: 16, packedBitOffset: 0, type: ui.mojom.SixPackShortcutModifierSpec, nullable: false, minVersion: 0 },
        { name: 'end', packedOffset: 20, packedBitOffset: 0, type: ui.mojom.SixPackShortcutModifierSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: InputDeviceSettingsPolicy
ash.mojom.mojom.InputDeviceSettingsPolicySpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.InputDeviceSettingsPolicy',
      packedSize: 16,
      fields: [
        { name: 'policy_status', packedOffset: 0, packedBitOffset: 0, type: ash.mojom.PolicyStatusSpec, nullable: false, minVersion: 0 },
        { name: 'value', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: InputDeviceSettingsFkeyPolicy
ash.mojom.mojom.InputDeviceSettingsFkeyPolicySpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.InputDeviceSettingsFkeyPolicy',
      packedSize: 16,
      fields: [
        { name: 'policy_status', packedOffset: 0, packedBitOffset: 0, type: ash.mojom.PolicyStatusSpec, nullable: false, minVersion: 0 },
        { name: 'value', packedOffset: 4, packedBitOffset: 0, type: ui.mojom.ExtendedFkeysModifierSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: InputDeviceSettingsSixPackKeyPolicy
ash.mojom.mojom.InputDeviceSettingsSixPackKeyPolicySpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.InputDeviceSettingsSixPackKeyPolicy',
      packedSize: 16,
      fields: [
        { name: 'policy_status', packedOffset: 0, packedBitOffset: 0, type: ash.mojom.PolicyStatusSpec, nullable: false, minVersion: 0 },
        { name: 'value', packedOffset: 4, packedBitOffset: 0, type: ui.mojom.SixPackShortcutModifierSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: KeyboardPolicies
ash.mojom.mojom.KeyboardPoliciesSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.KeyboardPolicies',
      packedSize: 72,
      fields: [
        { name: 'top_row_are_fkeys_policy', packedOffset: 0, packedBitOffset: 0, type: ash.mojom.InputDeviceSettingsPolicySpec, nullable: true, minVersion: 0 },
        { name: 'enable_meta_fkey_rewrites_policy', packedOffset: 8, packedBitOffset: 0, type: ash.mojom.InputDeviceSettingsPolicySpec, nullable: true, minVersion: 0 },
        { name: 'f11_key_policy', packedOffset: 16, packedBitOffset: 0, type: ash.mojom.InputDeviceSettingsFkeyPolicySpec, nullable: true, minVersion: 0 },
        { name: 'f12_key_policy', packedOffset: 24, packedBitOffset: 0, type: ash.mojom.InputDeviceSettingsFkeyPolicySpec, nullable: true, minVersion: 0 },
        { name: 'home_and_end_keys_policy', packedOffset: 32, packedBitOffset: 0, type: ash.mojom.InputDeviceSettingsSixPackKeyPolicySpec, nullable: true, minVersion: 0 },
        { name: 'page_up_and_page_down_keys_policy', packedOffset: 40, packedBitOffset: 0, type: ash.mojom.InputDeviceSettingsSixPackKeyPolicySpec, nullable: true, minVersion: 0 },
        { name: 'delete_key_policy', packedOffset: 48, packedBitOffset: 0, type: ash.mojom.InputDeviceSettingsSixPackKeyPolicySpec, nullable: true, minVersion: 0 },
        { name: 'insert_key_policy', packedOffset: 56, packedBitOffset: 0, type: ash.mojom.InputDeviceSettingsSixPackKeyPolicySpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 72}]
    }
  }
};

// Struct: MousePolicies
ash.mojom.mojom.MousePoliciesSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.MousePolicies',
      packedSize: 16,
      fields: [
        { name: 'swap_right_policy', packedOffset: 0, packedBitOffset: 0, type: ash.mojom.InputDeviceSettingsPolicySpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: BatteryInfo
ash.mojom.mojom.BatteryInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.BatteryInfo',
      packedSize: 16,
      fields: [
        { name: 'battery_percentage', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'charge_state', packedOffset: 0, packedBitOffset: 0, type: ash.mojom.ChargeStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: CompanionAppInfo
ash.mojom.mojom.CompanionAppInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.CompanionAppInfo',
      packedSize: 48,
      fields: [
        { name: 'package_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'app_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'action_link', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'icon_url', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'state', packedOffset: 32, packedBitOffset: 0, type: ash.mojom.CompanionAppStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: Keyboard
ash.mojom.mojom.KeyboardSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.Keyboard',
      packedSize: 80,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'is_external', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'id', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'device_key', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'meta_key', packedOffset: 60, packedBitOffset: 0, type: ui.mojom.MetaKeySpec, nullable: false, minVersion: 0 },
        { name: 'modifier_keys', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(ui.mojom.ModifierKeySpec, false), nullable: false, minVersion: 0 },
        { name: 'top_row_action_keys', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(ash.mojom.TopRowActionKeySpec, false), nullable: false, minVersion: 0 },
        { name: 'settings', packedOffset: 32, packedBitOffset: 0, type: ash.mojom.KeyboardSettingsSpec, nullable: false, minVersion: 0 },
        { name: 'battery_info', packedOffset: 40, packedBitOffset: 0, type: ash.mojom.BatteryInfoSpec, nullable: true, minVersion: 0 },
        { name: 'app_info', packedOffset: 48, packedBitOffset: 0, type: ash.mojom.CompanionAppInfoSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 80}]
    }
  }
};

// Struct: KeyboardSettings
ash.mojom.mojom.KeyboardSettingsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.KeyboardSettings',
      packedSize: 40,
      fields: [
        { name: 'modifier_remappings', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map(ui.mojom.ModifierKeySpec, ui.mojom.ModifierKeySpec, false), nullable: false, minVersion: 0 },
        { name: 'top_row_are_fkeys', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'suppress_meta_fkey_rewrites', packedOffset: 24, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'six_pack_key_remappings', packedOffset: 8, packedBitOffset: 0, type: ash.mojom.SixPackKeyInfoSpec, nullable: true, minVersion: 0 },
        { name: 'f11', packedOffset: 16, packedBitOffset: 0, type: ui.mojom.ExtendedFkeysModifierSpec, nullable: true, minVersion: 0 },
        { name: 'f12', packedOffset: 20, packedBitOffset: 0, type: ui.mojom.ExtendedFkeysModifierSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: Mouse
ash.mojom.mojom.MouseSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.Mouse',
      packedSize: 64,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'is_external', packedOffset: 52, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'id', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'device_key', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'customization_restriction', packedOffset: 44, packedBitOffset: 0, type: ash.mojom.CustomizationRestrictionSpec, nullable: false, minVersion: 0 },
        { name: 'mouse_button_config', packedOffset: 48, packedBitOffset: 0, type: ash.mojom.MouseButtonConfigSpec, nullable: false, minVersion: 0 },
        { name: 'settings', packedOffset: 16, packedBitOffset: 0, type: ash.mojom.MouseSettingsSpec, nullable: false, minVersion: 0 },
        { name: 'battery_info', packedOffset: 24, packedBitOffset: 0, type: ash.mojom.BatteryInfoSpec, nullable: true, minVersion: 0 },
        { name: 'app_info', packedOffset: 32, packedBitOffset: 0, type: ash.mojom.CompanionAppInfoSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

// Struct: MouseSettings
ash.mojom.mojom.MouseSettingsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.MouseSettings',
      packedSize: 24,
      fields: [
        { name: 'swap_right', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'sensitivity', packedOffset: 9, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'reverse_scrolling', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'acceleration_enabled', packedOffset: 8, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'scroll_sensitivity', packedOffset: 10, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'scroll_acceleration', packedOffset: 8, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'button_remappings', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.mojom.ButtonRemappingSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: Touchpad
ash.mojom.mojom.TouchpadSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.Touchpad',
      packedSize: 56,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'is_external', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'id', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'device_key', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'is_haptic', packedOffset: 44, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'settings', packedOffset: 16, packedBitOffset: 0, type: ash.mojom.TouchpadSettingsSpec, nullable: false, minVersion: 0 },
        { name: 'battery_info', packedOffset: 24, packedBitOffset: 0, type: ash.mojom.BatteryInfoSpec, nullable: true, minVersion: 0 },
        { name: 'app_info', packedOffset: 32, packedBitOffset: 0, type: ash.mojom.CompanionAppInfoSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Struct: TouchpadSettings
ash.mojom.mojom.TouchpadSettingsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.TouchpadSettings',
      packedSize: 16,
      fields: [
        { name: 'sensitivity', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'reverse_scrolling', packedOffset: 5, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'acceleration_enabled', packedOffset: 5, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'tap_to_click_enabled', packedOffset: 5, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'three_finger_click_enabled', packedOffset: 5, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'tap_dragging_enabled', packedOffset: 5, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'scroll_sensitivity', packedOffset: 6, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'scroll_acceleration', packedOffset: 5, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'haptic_sensitivity', packedOffset: 7, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'haptic_enabled', packedOffset: 5, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'simulate_right_click', packedOffset: 0, packedBitOffset: 0, type: ui.mojom.SimulateRightClickModifierSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: PointingStick
ash.mojom.mojom.PointingStickSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.PointingStick',
      packedSize: 40,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'is_external', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'device_key', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'settings', packedOffset: 16, packedBitOffset: 0, type: ash.mojom.PointingStickSettingsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: PointingStickSettings
ash.mojom.mojom.PointingStickSettingsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.PointingStickSettings',
      packedSize: 16,
      fields: [
        { name: 'swap_right', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'sensitivity', packedOffset: 1, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'acceleration_enabled', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: Stylus
ash.mojom.mojom.StylusSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.Stylus',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Struct: GraphicsTablet
ash.mojom.mojom.GraphicsTabletSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.GraphicsTablet',
      packedSize: 64,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'id', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'device_key', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'customization_restriction', packedOffset: 44, packedBitOffset: 0, type: ash.mojom.CustomizationRestrictionSpec, nullable: false, minVersion: 0 },
        { name: 'graphics_tablet_button_config', packedOffset: 48, packedBitOffset: 0, type: ash.mojom.GraphicsTabletButtonConfigSpec, nullable: false, minVersion: 0 },
        { name: 'settings', packedOffset: 16, packedBitOffset: 0, type: ash.mojom.GraphicsTabletSettingsSpec, nullable: false, minVersion: 0 },
        { name: 'battery_info', packedOffset: 24, packedBitOffset: 0, type: ash.mojom.BatteryInfoSpec, nullable: true, minVersion: 0 },
        { name: 'app_info', packedOffset: 32, packedBitOffset: 0, type: ash.mojom.CompanionAppInfoSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

// Struct: GraphicsTabletSettings
ash.mojom.mojom.GraphicsTabletSettingsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.GraphicsTabletSettings',
      packedSize: 24,
      fields: [
        { name: 'tablet_button_remappings', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.mojom.ButtonRemappingSpec, false), nullable: false, minVersion: 0 },
        { name: 'pen_button_remappings', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(ash.mojom.ButtonRemappingSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: ButtonRemapping
ash.mojom.mojom.ButtonRemappingSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.ButtonRemapping',
      packedSize: 48,
      fields: [
        { name: 'name', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'button', packedOffset: 0, packedBitOffset: 0, type: ash.mojom.ButtonSpec, nullable: false, minVersion: 0 },
        { name: 'remapping_action', packedOffset: 16, packedBitOffset: 0, type: ash.mojom.RemappingActionSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: KeyEvent
ash.mojom.mojom.KeyEventSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.KeyEvent',
      packedSize: 32,
      fields: [
        { name: 'vkey', packedOffset: 8, packedBitOffset: 0, type: ash.mojom.VKeySpec, nullable: false, minVersion: 0 },
        { name: 'dom_code', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'dom_key', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'modifiers', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'key_display', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};
