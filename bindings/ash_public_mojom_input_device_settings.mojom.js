// Auto-generated MojoJS binding
// Source: chromium_src/ash/public/mojom/input_device_settings.mojom
// Module: ash.mojom

// Module namespace
var ash = ash || {};
ash.mojom = ash.mojom || {};
var mojo_base = mojo_base || {};
var ui = ui || {};

ash.mojom.PolicyStatusSpec = { $: mojo.internal.Enum() };
ash.mojom.TopRowActionKeySpec = { $: mojo.internal.Enum() };
ash.mojom.ChargeStateSpec = { $: mojo.internal.Enum() };
ash.mojom.CompanionAppStateSpec = { $: mojo.internal.Enum() };
ash.mojom.CustomizableButtonSpec = { $: mojo.internal.Enum() };
ash.mojom.MouseButtonConfigSpec = { $: mojo.internal.Enum() };
ash.mojom.GraphicsTabletButtonConfigSpec = { $: mojo.internal.Enum() };
ash.mojom.StaticShortcutActionSpec = { $: mojo.internal.Enum() };
ash.mojom.CustomizationRestrictionSpec = { $: mojo.internal.Enum() };
ash.mojom.RemappingActionSpec = { $: {} };
ash.mojom.ButtonSpec = { $: {} };
ash.mojom.SixPackKeyInfoSpec = { $: {} };
ash.mojom.InputDeviceSettingsPolicySpec = { $: {} };
ash.mojom.InputDeviceSettingsFkeyPolicySpec = { $: {} };
ash.mojom.InputDeviceSettingsSixPackKeyPolicySpec = { $: {} };
ash.mojom.KeyboardPoliciesSpec = { $: {} };
ash.mojom.MousePoliciesSpec = { $: {} };
ash.mojom.BatteryInfoSpec = { $: {} };
ash.mojom.CompanionAppInfoSpec = { $: {} };
ash.mojom.KeyboardSpec = { $: {} };
ash.mojom.KeyboardSettingsSpec = { $: {} };
ash.mojom.MouseSpec = { $: {} };
ash.mojom.MouseSettingsSpec = { $: {} };
ash.mojom.TouchpadSpec = { $: {} };
ash.mojom.TouchpadSettingsSpec = { $: {} };
ash.mojom.PointingStickSpec = { $: {} };
ash.mojom.PointingStickSettingsSpec = { $: {} };
ash.mojom.StylusSpec = { $: {} };
ash.mojom.GraphicsTabletSpec = { $: {} };
ash.mojom.GraphicsTabletSettingsSpec = { $: {} };
ash.mojom.ButtonRemappingSpec = { $: {} };
ash.mojom.KeyEventSpec = { $: {} };

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

// Union: RemappingAction
mojo.internal.Union(
    ash.mojom.RemappingActionSpec, 'ash.mojom.RemappingAction', {
      'accelerator_action': {
        'ordinal': 0,
        'type': ash.mojom.AcceleratorActionSpec.$,
        'nullable': false,
      },
      'key_event': {
        'ordinal': 1,
        'type': ash.mojom.KeyEventSpec.$,
        'nullable': false,
      },
      'static_shortcut_action': {
        'ordinal': 2,
        'type': ash.mojom.StaticShortcutActionSpec.$,
        'nullable': false,
      },
    });

// Union: Button
mojo.internal.Union(
    ash.mojom.ButtonSpec, 'ash.mojom.Button', {
      'vkey': {
        'ordinal': 0,
        'type': ash.mojom.VKeySpec.$,
        'nullable': false,
      },
      'customizable_button': {
        'ordinal': 1,
        'type': ash.mojom.CustomizableButtonSpec.$,
        'nullable': false,
      },
    });

// Struct: SixPackKeyInfo
mojo.internal.Struct(
    ash.mojom.SixPackKeyInfoSpec, 'ash.mojom.SixPackKeyInfo', [
      mojo.internal.StructField('home', 0, 0, ui.mojom.SixPackShortcutModifierSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('page_up', 8, 0, ui.mojom.SixPackShortcutModifierSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('page_down', 16, 0, ui.mojom.SixPackShortcutModifierSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('del', 24, 0, ui.mojom.SixPackShortcutModifierSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('insert', 32, 0, ui.mojom.SixPackShortcutModifierSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('end', 40, 0, ui.mojom.SixPackShortcutModifierSpec.$, 0, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: InputDeviceSettingsPolicy
mojo.internal.Struct(
    ash.mojom.InputDeviceSettingsPolicySpec, 'ash.mojom.InputDeviceSettingsPolicy', [
      mojo.internal.StructField('policy_status', 0, 0, ash.mojom.PolicyStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: InputDeviceSettingsFkeyPolicy
mojo.internal.Struct(
    ash.mojom.InputDeviceSettingsFkeyPolicySpec, 'ash.mojom.InputDeviceSettingsFkeyPolicy', [
      mojo.internal.StructField('policy_status', 0, 0, ash.mojom.PolicyStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, ui.mojom.ExtendedFkeysModifierSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: InputDeviceSettingsSixPackKeyPolicy
mojo.internal.Struct(
    ash.mojom.InputDeviceSettingsSixPackKeyPolicySpec, 'ash.mojom.InputDeviceSettingsSixPackKeyPolicy', [
      mojo.internal.StructField('policy_status', 0, 0, ash.mojom.PolicyStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, ui.mojom.SixPackShortcutModifierSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: KeyboardPolicies
mojo.internal.Struct(
    ash.mojom.KeyboardPoliciesSpec, 'ash.mojom.KeyboardPolicies', [
      mojo.internal.StructField('top_row_are_fkeys_policy', 0, 0, ash.mojom.InputDeviceSettingsPolicySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('enable_meta_fkey_rewrites_policy', 8, 0, ash.mojom.InputDeviceSettingsPolicySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('f11_key_policy', 16, 0, ash.mojom.InputDeviceSettingsFkeyPolicySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('f12_key_policy', 24, 0, ash.mojom.InputDeviceSettingsFkeyPolicySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('home_and_end_keys_policy', 32, 0, ash.mojom.InputDeviceSettingsSixPackKeyPolicySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('page_up_and_page_down_keys_policy', 40, 0, ash.mojom.InputDeviceSettingsSixPackKeyPolicySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('delete_key_policy', 48, 0, ash.mojom.InputDeviceSettingsSixPackKeyPolicySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('insert_key_policy', 56, 0, ash.mojom.InputDeviceSettingsSixPackKeyPolicySpec.$, null, true, 0, undefined),
    ],
    [[0, 72]]);

// Struct: MousePolicies
mojo.internal.Struct(
    ash.mojom.MousePoliciesSpec, 'ash.mojom.MousePolicies', [
      mojo.internal.StructField('swap_right_policy', 0, 0, ash.mojom.InputDeviceSettingsPolicySpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

// Struct: BatteryInfo
mojo.internal.Struct(
    ash.mojom.BatteryInfoSpec, 'ash.mojom.BatteryInfo', [
      mojo.internal.StructField('charge_state', 0, 0, ash.mojom.ChargeStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('battery_percentage', 8, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: CompanionAppInfo
mojo.internal.Struct(
    ash.mojom.CompanionAppInfoSpec, 'ash.mojom.CompanionAppInfo', [
      mojo.internal.StructField('package_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('app_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('action_link', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('icon_url', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('state', 32, 0, ash.mojom.CompanionAppStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: Keyboard
mojo.internal.Struct(
    ash.mojom.KeyboardSpec, 'ash.mojom.Keyboard', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('device_key', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('meta_key', 16, 0, ui.mojom.MetaKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('modifier_keys', 24, 0, mojo.internal.Array(ui.mojom.ModifierKeySpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('top_row_action_keys', 32, 0, mojo.internal.Array(ash.mojom.TopRowActionKeySpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('settings', 40, 0, ash.mojom.KeyboardSettingsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('battery_info', 48, 0, ash.mojom.BatteryInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('app_info', 56, 0, ash.mojom.CompanionAppInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('id', 64, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('is_external', 68, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 80]]);

// Struct: KeyboardSettings
mojo.internal.Struct(
    ash.mojom.KeyboardSettingsSpec, 'ash.mojom.KeyboardSettings', [
      mojo.internal.StructField('modifier_remappings', 0, 0, mojo.internal.Map(ui.mojom.ModifierKeySpec.$, ui.mojom.ModifierKeySpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('six_pack_key_remappings', 8, 0, ash.mojom.SixPackKeyInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('f11', 16, 0, ui.mojom.ExtendedFkeysModifierSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('f12', 24, 0, ui.mojom.ExtendedFkeysModifierSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('top_row_are_fkeys', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('suppress_meta_fkey_rewrites', 32, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: Mouse
mojo.internal.Struct(
    ash.mojom.MouseSpec, 'ash.mojom.Mouse', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('device_key', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('customization_restriction', 16, 0, ash.mojom.CustomizationRestrictionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('mouse_button_config', 24, 0, ash.mojom.MouseButtonConfigSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('settings', 32, 0, ash.mojom.MouseSettingsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('battery_info', 40, 0, ash.mojom.BatteryInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('app_info', 48, 0, ash.mojom.CompanionAppInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('id', 56, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('is_external', 60, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 72]]);

// Struct: MouseSettings
mojo.internal.Struct(
    ash.mojom.MouseSettingsSpec, 'ash.mojom.MouseSettings', [
      mojo.internal.StructField('button_remappings', 0, 0, mojo.internal.Array(ash.mojom.ButtonRemappingSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('swap_right', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('sensitivity', 9, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('reverse_scrolling', 10, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('acceleration_enabled', 10, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('scroll_sensitivity', 11, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('scroll_acceleration', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Touchpad
mojo.internal.Struct(
    ash.mojom.TouchpadSpec, 'ash.mojom.Touchpad', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('device_key', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('settings', 16, 0, ash.mojom.TouchpadSettingsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('battery_info', 24, 0, ash.mojom.BatteryInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('app_info', 32, 0, ash.mojom.CompanionAppInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('id', 40, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('is_external', 44, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_haptic', 44, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: TouchpadSettings
mojo.internal.Struct(
    ash.mojom.TouchpadSettingsSpec, 'ash.mojom.TouchpadSettings', [
      mojo.internal.StructField('simulate_right_click', 0, 0, ui.mojom.SimulateRightClickModifierSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('sensitivity', 8, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('reverse_scrolling', 9, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('acceleration_enabled', 9, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('tap_to_click_enabled', 9, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('three_finger_click_enabled', 9, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('tap_dragging_enabled', 9, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('scroll_sensitivity', 10, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('scroll_acceleration', 11, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('haptic_sensitivity', 12, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('haptic_enabled', 13, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PointingStick
mojo.internal.Struct(
    ash.mojom.PointingStickSpec, 'ash.mojom.PointingStick', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('device_key', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('settings', 16, 0, ash.mojom.PointingStickSettingsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('id', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('is_external', 28, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: PointingStickSettings
mojo.internal.Struct(
    ash.mojom.PointingStickSettingsSpec, 'ash.mojom.PointingStickSettings', [
      mojo.internal.StructField('swap_right', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('sensitivity', 1, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('acceleration_enabled', 2, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: Stylus
mojo.internal.Struct(
    ash.mojom.StylusSpec, 'ash.mojom.Stylus', [
    ],
    [[0, 8]]);

// Struct: GraphicsTablet
mojo.internal.Struct(
    ash.mojom.GraphicsTabletSpec, 'ash.mojom.GraphicsTablet', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('device_key', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('customization_restriction', 16, 0, ash.mojom.CustomizationRestrictionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('graphics_tablet_button_config', 24, 0, ash.mojom.GraphicsTabletButtonConfigSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('settings', 32, 0, ash.mojom.GraphicsTabletSettingsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('battery_info', 40, 0, ash.mojom.BatteryInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('app_info', 48, 0, ash.mojom.CompanionAppInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('id', 56, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 72]]);

// Struct: GraphicsTabletSettings
mojo.internal.Struct(
    ash.mojom.GraphicsTabletSettingsSpec, 'ash.mojom.GraphicsTabletSettings', [
      mojo.internal.StructField('tablet_button_remappings', 0, 0, mojo.internal.Array(ash.mojom.ButtonRemappingSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('pen_button_remappings', 8, 0, mojo.internal.Array(ash.mojom.ButtonRemappingSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ButtonRemapping
mojo.internal.Struct(
    ash.mojom.ButtonRemappingSpec, 'ash.mojom.ButtonRemapping', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('button', 8, 0, ash.mojom.ButtonSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('remapping_action', 16, 0, ash.mojom.RemappingActionSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: KeyEvent
mojo.internal.Struct(
    ash.mojom.KeyEventSpec, 'ash.mojom.KeyEvent', [
      mojo.internal.StructField('vkey', 0, 0, ash.mojom.VKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('key_display', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('dom_code', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('dom_key', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('modifiers', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);
