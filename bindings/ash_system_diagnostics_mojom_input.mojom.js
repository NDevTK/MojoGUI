// Auto-generated MojoJS binding
// Source: chromium_src/ash/system/diagnostics/mojom/input.mojom
// Module: ash.diagnostics.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.diagnostics = ash.diagnostics || {};
ash.diagnostics.diagnostics.mojom = ash.diagnostics.diagnostics.mojom || {};


// Enum: ConnectionType
ash.diagnostics.diagnostics.mojom.mojom.ConnectionType = {
  kInternal: 0,
  kUsb: 1,
  kBluetooth: 2,
  kUnknown: 3,
};
ash.diagnostics.diagnostics.mojom.mojom.ConnectionTypeSpec = { $: mojo.internal.Enum() };

// Enum: PhysicalLayout
ash.diagnostics.diagnostics.mojom.mojom.PhysicalLayout = {
  kUnknown: 0,
  kChromeOS: 1,
  kChromeOSDellEnterpriseWilco: 2,
  kChromeOSDellEnterpriseDrallion: 3,
};
ash.diagnostics.diagnostics.mojom.mojom.PhysicalLayoutSpec = { $: mojo.internal.Enum() };

// Enum: MechanicalLayout
ash.diagnostics.diagnostics.mojom.mojom.MechanicalLayout = {
  kUnknown: 0,
  kAnsi: 1,
  kIso: 2,
  kJis: 3,
};
ash.diagnostics.diagnostics.mojom.mojom.MechanicalLayoutSpec = { $: mojo.internal.Enum() };

// Enum: NumberPadPresence
ash.diagnostics.diagnostics.mojom.mojom.NumberPadPresence = {
  kUnknown: 0,
  kPresent: 1,
  kNotPresent: 2,
};
ash.diagnostics.diagnostics.mojom.mojom.NumberPadPresenceSpec = { $: mojo.internal.Enum() };

// Enum: TopRowKey
ash.diagnostics.diagnostics.mojom.mojom.TopRowKey = {
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
  kPrivacyScreenToggle: 10,
  kMicrophoneMute: 11,
  kVolumeMute: 12,
  kVolumeDown: 13,
  kVolumeUp: 14,
  kKeyboardBacklightToggle: 15,
  kKeyboardBacklightDown: 16,
  kKeyboardBacklightUp: 17,
  kNextTrack: 18,
  kPreviousTrack: 19,
  kPlayPause: 20,
  kScreenMirror: 21,
  kDelete: 22,
};
ash.diagnostics.diagnostics.mojom.mojom.TopRowKeySpec = { $: mojo.internal.Enum() };

// Enum: TopRightKey
ash.diagnostics.diagnostics.mojom.mojom.TopRightKey = {
  kUnknown: 0,
  kPower: 1,
  kLock: 2,
  kControlPanel: 3,
};
ash.diagnostics.diagnostics.mojom.mojom.TopRightKeySpec = { $: mojo.internal.Enum() };

// Enum: BottomLeftLayout
ash.diagnostics.diagnostics.mojom.mojom.BottomLeftLayout = {
  kBottomLeft3Keys: 0,
  kBottomLeft4Keys: 1,
};
ash.diagnostics.diagnostics.mojom.mojom.BottomLeftLayoutSpec = { $: mojo.internal.Enum() };

// Enum: BottomRightLayout
ash.diagnostics.diagnostics.mojom.mojom.BottomRightLayout = {
  kBottomRight2Keys: 0,
  kBottomRight3Keys: 1,
  kBottomRight4Keys: 2,
};
ash.diagnostics.diagnostics.mojom.mojom.BottomRightLayoutSpec = { $: mojo.internal.Enum() };

// Enum: NumpadLayout
ash.diagnostics.diagnostics.mojom.mojom.NumpadLayout = {
  kNumpad3Column: 0,
  kNumpad4Column: 1,
};
ash.diagnostics.diagnostics.mojom.mojom.NumpadLayoutSpec = { $: mojo.internal.Enum() };

// Struct: KeyboardInfo
ash.diagnostics.diagnostics.mojom.mojom.KeyboardInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.KeyboardInfo',
      packedSize: 72,
      fields: [
        { name: 'id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'connection_type', packedOffset: 28, packedBitOffset: 0, type: ash.diagnostics.mojom.ConnectionTypeSpec, nullable: false, minVersion: 0 },
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'physical_layout', packedOffset: 32, packedBitOffset: 0, type: ash.diagnostics.mojom.PhysicalLayoutSpec, nullable: false, minVersion: 0 },
        { name: 'mechanical_layout', packedOffset: 36, packedBitOffset: 0, type: ash.diagnostics.mojom.MechanicalLayoutSpec, nullable: false, minVersion: 0 },
        { name: 'region_code', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'number_pad_present', packedOffset: 40, packedBitOffset: 0, type: ash.diagnostics.mojom.NumberPadPresenceSpec, nullable: false, minVersion: 0 },
        { name: 'top_row_keys', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(ash.diagnostics.mojom.TopRowKeySpec, false), nullable: false, minVersion: 0 },
        { name: 'top_right_key', packedOffset: 44, packedBitOffset: 0, type: ash.diagnostics.mojom.TopRightKeySpec, nullable: false, minVersion: 0 },
        { name: 'has_assistant_key', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'bottom_left_layout', packedOffset: 52, packedBitOffset: 0, type: ash.diagnostics.mojom.BottomLeftLayoutSpec, nullable: false, minVersion: 1 },
        { name: 'bottom_right_layout', packedOffset: 56, packedBitOffset: 0, type: ash.diagnostics.mojom.BottomRightLayoutSpec, nullable: false, minVersion: 1 },
        { name: 'numpad_layout', packedOffset: 60, packedBitOffset: 0, type: ash.diagnostics.mojom.NumpadLayoutSpec, nullable: false, minVersion: 1 },
      ],
      versions: [{version: 0, packedSize: 64}, {version: 1, packedSize: 72}]
    }
  }
};

// Struct: KeyboardDiagnosticEventInfo
ash.diagnostics.diagnostics.mojom.mojom.KeyboardDiagnosticEventInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.KeyboardDiagnosticEventInfo',
      packedSize: 32,
      fields: [
        { name: 'keyboard_info', packedOffset: 0, packedBitOffset: 0, type: ash.diagnostics.mojom.KeyboardInfoSpec, nullable: false, minVersion: 0 },
        { name: 'tested_keys', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint32, false), nullable: false, minVersion: 0 },
        { name: 'tested_top_row_keys', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint32, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};
