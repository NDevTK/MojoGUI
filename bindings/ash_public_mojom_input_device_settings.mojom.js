// Auto-generated MojoJS binding
 // Source: chromium_src/ash/public/mojom/input_device_settings.mojom
 // Module: ash.mojom

 'use strict';
 (function() {
   const SHA256 = (s) => {
     const K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xD5A79147, 0x06CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585,0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2];
     const h = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
     const m = new TextEncoder().encode(s);
     const l = m.length;
     const b = new Uint32Array(((l + 8) >> 6) + 1 << 4);
     for (let i = 0; i < l; i++) b[i >> 2] |= m[i] << (24 - (i & 3) * 8);
     b[l >> 2] |= 0x80 << (24 - (l & 3) * 8);
     b[b.length - 1] = l * 8;
     for (let i = 0; i < b.length; i += 16) {
       let [a1, b1, c1, d1, e1, f1, g1, h1] = h;
       const w = new Uint32Array(64);
       for (let j = 0; j < 64; j++) {
         if (j < 16) w[j] = b[i + j];
         else {
           const s0 = ((w[j-15]>>>7)|(w[j-15]<<25))^((w[j-15]>>>18)|(w[j-15]<<14))^(w[j-15]>>>3);
           const s1 = ((w[j-2]>>>17)|(w[j-2]<<15))^((w[j-2]>>>19)|(w[j-2]<<13))^(w[j-2]>>>10);
           w[j] = (w[j-16]+s0+w[j-7]+s1)|0;
         }
         const t1 = (h1 + (((e1>>>6)|(e1<<26))^((e1>>>11)|(e1<<21))^((e1>>>25)|(e1<<7))) + ((e1&f1)^((~e1)&g1)) + K[j] + w[j])|0;
         const t2 = ((((a1>>>2)|(a1<<30))^((a1>>>13)|(a1<<19))^((a1>>>22)|(a1<<10))) + ((a1&b1)^(a1&c1)^(b1&c1)))|0;
         h1 = g1; g1 = f1; f1 = e1; e1 = (d1 + t1) | 0; d1 = c1; c1 = b1; b1 = a1; a1 = (t1 + t2) | 0;
       }
       h[0] = (h[0] + a1) | 0; h[1] = (h[1] + b1) | 0; h[2] = (h[2] + c1) | 0; h[3] = (h[3] + d1) | 0;
       h[4] = (h[4] + e1) | 0; h[5] = (h[5] + f1) | 0; h[6] = (h[6] + g1) | 0; h[7] = (h[7] + h1) | 0;
     }
     return h[0];
   };
   window.mojoScrambler = window.mojoScrambler || {
     getOrdinals: (ifaceName, methodSpecs) => {
       const params = new URLSearchParams(window.location.search);
       const forceNoScramble = params.get('scramble') === '0' || window.mojoNoScramble;
       
       const seen = new Set();
       methodSpecs.forEach(ms => { if (ms.explicit !== null) seen.add(ms.explicit); });
       let i = 0;
       return methodSpecs.map((ms, idx) => {
         if (ms.explicit !== null) return ms.explicit;
         if (forceNoScramble) return idx;

         const p = window.mojoVersion.split('.');
         const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
         console.log('[MojoScrambler] Derived Salt:', JSON.stringify(salt));
         
         while (true) {
           i++;
           const h0 = SHA256(salt + ifaceName.split('.').pop() + i);
           const ord = (((h0 & 0xFF) << 24) | ((h0 & 0xFF00) << 8) | ((h0 & 0xFF0000) >> 8) | (h0 >>> 24)) & 0x7fffffff;
           if (!seen.has(ord)) {
             seen.add(ord);
             return ord;
           }
         }
       });
     }
   };
 })();

 // Module namespace
 var mojo = mojo || {};
 mojo.internal = mojo.internal || {};
 mojo.internal.bindings = mojo.internal.bindings || {};
 

 mojo.internal.bindings.ash = mojo.internal.bindings.ash || {};
mojo.internal.bindings.ash.mojom = mojo.internal.bindings.ash.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.ui = mojo.internal.bindings.ui || {};

mojo.internal.bindings.ash.mojom.PolicyStatusSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.mojom.TopRowActionKeySpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.mojom.ChargeStateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.mojom.CompanionAppStateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.mojom.CustomizableButtonSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.mojom.MouseButtonConfigSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.mojom.GraphicsTabletButtonConfigSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.mojom.StaticShortcutActionSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.mojom.CustomizationRestrictionSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.mojom.RemappingActionSpec = { $: {} };
mojo.internal.bindings.ash.mojom.ButtonSpec = { $: {} };
mojo.internal.bindings.ash.mojom.SixPackKeyInfoSpec = { $: {} };
mojo.internal.bindings.ash.mojom.InputDeviceSettingsPolicySpec = { $: {} };
mojo.internal.bindings.ash.mojom.InputDeviceSettingsFkeyPolicySpec = { $: {} };
mojo.internal.bindings.ash.mojom.InputDeviceSettingsSixPackKeyPolicySpec = { $: {} };
mojo.internal.bindings.ash.mojom.KeyboardPoliciesSpec = { $: {} };
mojo.internal.bindings.ash.mojom.MousePoliciesSpec = { $: {} };
mojo.internal.bindings.ash.mojom.BatteryInfoSpec = { $: {} };
mojo.internal.bindings.ash.mojom.CompanionAppInfoSpec = { $: {} };
mojo.internal.bindings.ash.mojom.KeyboardSpec = { $: {} };
mojo.internal.bindings.ash.mojom.KeyboardSettingsSpec = { $: {} };
mojo.internal.bindings.ash.mojom.MouseSpec = { $: {} };
mojo.internal.bindings.ash.mojom.MouseSettingsSpec = { $: {} };
mojo.internal.bindings.ash.mojom.TouchpadSpec = { $: {} };
mojo.internal.bindings.ash.mojom.TouchpadSettingsSpec = { $: {} };
mojo.internal.bindings.ash.mojom.PointingStickSpec = { $: {} };
mojo.internal.bindings.ash.mojom.PointingStickSettingsSpec = { $: {} };
mojo.internal.bindings.ash.mojom.StylusSpec = { $: {} };
mojo.internal.bindings.ash.mojom.GraphicsTabletSpec = { $: {} };
mojo.internal.bindings.ash.mojom.GraphicsTabletSettingsSpec = { $: {} };
mojo.internal.bindings.ash.mojom.ButtonRemappingSpec = { $: {} };
mojo.internal.bindings.ash.mojom.KeyEventSpec = { $: {} };

// Enum: PolicyStatus
mojo.internal.bindings.ash.mojom.PolicyStatus = {
  kManaged: 0,
  kRecommended: 1,
};

// Enum: TopRowActionKey
mojo.internal.bindings.ash.mojom.TopRowActionKey = {
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
mojo.internal.bindings.ash.mojom.ChargeState = {
  kUnknown: 0,
  kCharging: 1,
  kDischarging: 2,
};

// Enum: CompanionAppState
mojo.internal.bindings.ash.mojom.CompanionAppState = {
  kAvailable: 0,
  kInstalled: 1,
};

// Enum: CustomizableButton
mojo.internal.bindings.ash.mojom.CustomizableButton = {
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
mojo.internal.bindings.ash.mojom.MouseButtonConfig = {
  kNoConfig: 0,
  kFiveKey: 1,
  kLogitechSixKey: 2,
  kLogitechSixKeyWithTab: 3,
  kThreeKey: 4,
  kFourKeyWithTopButton: 5,
};

// Enum: GraphicsTabletButtonConfig
mojo.internal.bindings.ash.mojom.GraphicsTabletButtonConfig = {
  kNoConfig: 0,
  kWacomStandardPenOnly: 1,
  kWacomStandardFourButtons: 2,
  kWacomStandardPenOnlyOneButton: 3,
};

// Enum: StaticShortcutAction
mojo.internal.bindings.ash.mojom.StaticShortcutAction = {
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
mojo.internal.bindings.ash.mojom.CustomizationRestriction = {
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
    mojo.internal.bindings.ash.mojom.RemappingActionSpec, 'ash.mojom.RemappingAction', {
      'arg_accelerator_action': {
        'ordinal': 0,
        'type': mojo.internal.bindings.ash.mojom.AcceleratorActionSpec.$,
        'nullable': false,
      },
      'arg_key_event': {
        'ordinal': 1,
        'type': mojo.internal.bindings.mojo.internal.bindings.ash.mojom.KeyEventSpec.$,
        'nullable': false,
      },
      'arg_static_shortcut_action': {
        'ordinal': 2,
        'type': mojo.internal.bindings.mojo.internal.bindings.ash.mojom.StaticShortcutActionSpec.$,
        'nullable': false,
      },
    });

// Union: Button
mojo.internal.Union(
    mojo.internal.bindings.ash.mojom.ButtonSpec, 'ash.mojom.Button', {
      'arg_vkey': {
        'ordinal': 0,
        'type': mojo.internal.bindings.ash.mojom.VKeySpec.$,
        'nullable': false,
      },
      'arg_customizable_button': {
        'ordinal': 1,
        'type': mojo.internal.bindings.mojo.internal.bindings.ash.mojom.CustomizableButtonSpec.$,
        'nullable': false,
      },
    });

// Struct: SixPackKeyInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.mojom.SixPackKeyInfoSpec, 'ash.mojom.SixPackKeyInfo', [
      mojo.internal.StructField('arg_home', 0, 0, mojo.internal.bindings.ui.mojom.SixPackShortcutModifierSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('arg_page_up', 8, 0, mojo.internal.bindings.ui.mojom.SixPackShortcutModifierSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('arg_page_down', 16, 0, mojo.internal.bindings.ui.mojom.SixPackShortcutModifierSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('arg_del', 24, 0, mojo.internal.bindings.ui.mojom.SixPackShortcutModifierSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('arg_insert', 32, 0, mojo.internal.bindings.ui.mojom.SixPackShortcutModifierSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('arg_end', 40, 0, mojo.internal.bindings.ui.mojom.SixPackShortcutModifierSpec.$, 0, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: InputDeviceSettingsPolicy
mojo.internal.Struct(
    mojo.internal.bindings.ash.mojom.InputDeviceSettingsPolicySpec, 'ash.mojom.InputDeviceSettingsPolicy', [
      mojo.internal.StructField('arg_policy_status', 0, 0, mojo.internal.bindings.mojo.internal.bindings.ash.mojom.PolicyStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_value', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: InputDeviceSettingsFkeyPolicy
mojo.internal.Struct(
    mojo.internal.bindings.ash.mojom.InputDeviceSettingsFkeyPolicySpec, 'ash.mojom.InputDeviceSettingsFkeyPolicy', [
      mojo.internal.StructField('arg_policy_status', 0, 0, mojo.internal.bindings.mojo.internal.bindings.ash.mojom.PolicyStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_value', 8, 0, mojo.internal.bindings.ui.mojom.ExtendedFkeysModifierSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: InputDeviceSettingsSixPackKeyPolicy
mojo.internal.Struct(
    mojo.internal.bindings.ash.mojom.InputDeviceSettingsSixPackKeyPolicySpec, 'ash.mojom.InputDeviceSettingsSixPackKeyPolicy', [
      mojo.internal.StructField('arg_policy_status', 0, 0, mojo.internal.bindings.mojo.internal.bindings.ash.mojom.PolicyStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_value', 8, 0, mojo.internal.bindings.ui.mojom.SixPackShortcutModifierSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: KeyboardPolicies
mojo.internal.Struct(
    mojo.internal.bindings.ash.mojom.KeyboardPoliciesSpec, 'ash.mojom.KeyboardPolicies', [
      mojo.internal.StructField('arg_top_row_are_fkeys_policy', 0, 0, mojo.internal.bindings.mojo.internal.bindings.ash.mojom.InputDeviceSettingsPolicySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_enable_meta_fkey_rewrites_policy', 8, 0, mojo.internal.bindings.mojo.internal.bindings.ash.mojom.InputDeviceSettingsPolicySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_f11_key_policy', 16, 0, mojo.internal.bindings.mojo.internal.bindings.ash.mojom.InputDeviceSettingsFkeyPolicySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_f12_key_policy', 24, 0, mojo.internal.bindings.mojo.internal.bindings.ash.mojom.InputDeviceSettingsFkeyPolicySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_home_and_end_keys_policy', 32, 0, mojo.internal.bindings.mojo.internal.bindings.ash.mojom.InputDeviceSettingsSixPackKeyPolicySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_page_up_and_page_down_keys_policy', 40, 0, mojo.internal.bindings.mojo.internal.bindings.ash.mojom.InputDeviceSettingsSixPackKeyPolicySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_delete_key_policy', 48, 0, mojo.internal.bindings.mojo.internal.bindings.ash.mojom.InputDeviceSettingsSixPackKeyPolicySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_insert_key_policy', 56, 0, mojo.internal.bindings.mojo.internal.bindings.ash.mojom.InputDeviceSettingsSixPackKeyPolicySpec.$, null, true, 0, undefined),
    ],
    [[0, 72]]);

// Struct: MousePolicies
mojo.internal.Struct(
    mojo.internal.bindings.ash.mojom.MousePoliciesSpec, 'ash.mojom.MousePolicies', [
      mojo.internal.StructField('arg_swap_right_policy', 0, 0, mojo.internal.bindings.mojo.internal.bindings.ash.mojom.InputDeviceSettingsPolicySpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

// Struct: BatteryInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.mojom.BatteryInfoSpec, 'ash.mojom.BatteryInfo', [
      mojo.internal.StructField('arg_charge_state', 0, 0, mojo.internal.bindings.mojo.internal.bindings.ash.mojom.ChargeStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_battery_percentage', 8, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: CompanionAppInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.mojom.CompanionAppInfoSpec, 'ash.mojom.CompanionAppInfo', [
      mojo.internal.StructField('arg_package_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_app_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_action_link', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_icon_url', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_state', 32, 0, mojo.internal.bindings.mojo.internal.bindings.ash.mojom.CompanionAppStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: Keyboard
mojo.internal.Struct(
    mojo.internal.bindings.ash.mojom.KeyboardSpec, 'ash.mojom.Keyboard', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_device_key', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_meta_key', 16, 0, mojo.internal.bindings.ui.mojom.MetaKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_modifier_keys', 24, 0, mojo.internal.Array(mojo.internal.bindings.ui.mojom.ModifierKeySpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_top_row_action_keys', 32, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.ash.mojom.TopRowActionKeySpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_settings', 40, 0, mojo.internal.bindings.mojo.internal.bindings.ash.mojom.KeyboardSettingsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_battery_info', 48, 0, mojo.internal.bindings.mojo.internal.bindings.ash.mojom.BatteryInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_app_info', 56, 0, mojo.internal.bindings.mojo.internal.bindings.ash.mojom.CompanionAppInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_id', 64, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_is_external', 68, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 80]]);

// Struct: KeyboardSettings
mojo.internal.Struct(
    mojo.internal.bindings.ash.mojom.KeyboardSettingsSpec, 'ash.mojom.KeyboardSettings', [
      mojo.internal.StructField('arg_modifier_remappings', 0, 0, mojo.internal.Map(mojo.internal.bindings.ui.mojom.ModifierKeySpec.$, mojo.internal.bindings.ui.mojom.ModifierKeySpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_six_pack_key_remappings', 8, 0, mojo.internal.bindings.mojo.internal.bindings.ash.mojom.SixPackKeyInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_f11', 16, 0, mojo.internal.bindings.ui.mojom.ExtendedFkeysModifierSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_f12', 24, 0, mojo.internal.bindings.ui.mojom.ExtendedFkeysModifierSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_top_row_are_fkeys', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_suppress_meta_fkey_rewrites', 32, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: Mouse
mojo.internal.Struct(
    mojo.internal.bindings.ash.mojom.MouseSpec, 'ash.mojom.Mouse', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_device_key', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_customization_restriction', 16, 0, mojo.internal.bindings.mojo.internal.bindings.ash.mojom.CustomizationRestrictionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_mouse_button_config', 24, 0, mojo.internal.bindings.mojo.internal.bindings.ash.mojom.MouseButtonConfigSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_settings', 32, 0, mojo.internal.bindings.mojo.internal.bindings.ash.mojom.MouseSettingsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_battery_info', 40, 0, mojo.internal.bindings.mojo.internal.bindings.ash.mojom.BatteryInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_app_info', 48, 0, mojo.internal.bindings.mojo.internal.bindings.ash.mojom.CompanionAppInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_id', 56, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_is_external', 60, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 72]]);

// Struct: MouseSettings
mojo.internal.Struct(
    mojo.internal.bindings.ash.mojom.MouseSettingsSpec, 'ash.mojom.MouseSettings', [
      mojo.internal.StructField('arg_button_remappings', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.ash.mojom.ButtonRemappingSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_swap_right', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_sensitivity', 9, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_reverse_scrolling', 10, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_acceleration_enabled', 10, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_scroll_sensitivity', 11, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_scroll_acceleration', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Touchpad
mojo.internal.Struct(
    mojo.internal.bindings.ash.mojom.TouchpadSpec, 'ash.mojom.Touchpad', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_device_key', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_settings', 16, 0, mojo.internal.bindings.mojo.internal.bindings.ash.mojom.TouchpadSettingsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_battery_info', 24, 0, mojo.internal.bindings.mojo.internal.bindings.ash.mojom.BatteryInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_app_info', 32, 0, mojo.internal.bindings.mojo.internal.bindings.ash.mojom.CompanionAppInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_id', 40, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_is_external', 44, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_haptic', 44, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: TouchpadSettings
mojo.internal.Struct(
    mojo.internal.bindings.ash.mojom.TouchpadSettingsSpec, 'ash.mojom.TouchpadSettings', [
      mojo.internal.StructField('arg_simulate_right_click', 0, 0, mojo.internal.bindings.ui.mojom.SimulateRightClickModifierSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_sensitivity', 8, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_reverse_scrolling', 9, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_acceleration_enabled', 9, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_tap_to_click_enabled', 9, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_three_finger_click_enabled', 9, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_tap_dragging_enabled', 9, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_scroll_sensitivity', 10, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_scroll_acceleration', 11, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_haptic_sensitivity', 12, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_haptic_enabled', 13, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PointingStick
mojo.internal.Struct(
    mojo.internal.bindings.ash.mojom.PointingStickSpec, 'ash.mojom.PointingStick', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_device_key', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_settings', 16, 0, mojo.internal.bindings.mojo.internal.bindings.ash.mojom.PointingStickSettingsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_id', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_is_external', 28, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: PointingStickSettings
mojo.internal.Struct(
    mojo.internal.bindings.ash.mojom.PointingStickSettingsSpec, 'ash.mojom.PointingStickSettings', [
      mojo.internal.StructField('arg_swap_right', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_sensitivity', 1, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_acceleration_enabled', 2, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: Stylus
mojo.internal.Struct(
    mojo.internal.bindings.ash.mojom.StylusSpec, 'ash.mojom.Stylus', [
    ],
    [[0, 8]]);

// Struct: GraphicsTablet
mojo.internal.Struct(
    mojo.internal.bindings.ash.mojom.GraphicsTabletSpec, 'ash.mojom.GraphicsTablet', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_device_key', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_customization_restriction', 16, 0, mojo.internal.bindings.mojo.internal.bindings.ash.mojom.CustomizationRestrictionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_graphics_tablet_button_config', 24, 0, mojo.internal.bindings.mojo.internal.bindings.ash.mojom.GraphicsTabletButtonConfigSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_settings', 32, 0, mojo.internal.bindings.mojo.internal.bindings.ash.mojom.GraphicsTabletSettingsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_battery_info', 40, 0, mojo.internal.bindings.mojo.internal.bindings.ash.mojom.BatteryInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_app_info', 48, 0, mojo.internal.bindings.mojo.internal.bindings.ash.mojom.CompanionAppInfoSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_id', 56, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 72]]);

// Struct: GraphicsTabletSettings
mojo.internal.Struct(
    mojo.internal.bindings.ash.mojom.GraphicsTabletSettingsSpec, 'ash.mojom.GraphicsTabletSettings', [
      mojo.internal.StructField('arg_tablet_button_remappings', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.ash.mojom.ButtonRemappingSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_pen_button_remappings', 8, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.ash.mojom.ButtonRemappingSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ButtonRemapping
mojo.internal.Struct(
    mojo.internal.bindings.ash.mojom.ButtonRemappingSpec, 'ash.mojom.ButtonRemapping', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_button', 8, 0, mojo.internal.bindings.ash.mojom.ButtonSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_remapping_action', 16, 0, mojo.internal.bindings.ash.mojom.RemappingActionSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: KeyEvent
mojo.internal.Struct(
    mojo.internal.bindings.ash.mojom.KeyEventSpec, 'ash.mojom.KeyEvent', [
      mojo.internal.StructField('arg_vkey', 0, 0, mojo.internal.bindings.ash.mojom.VKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_key_display', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_dom_code', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_dom_key', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_modifiers', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);
