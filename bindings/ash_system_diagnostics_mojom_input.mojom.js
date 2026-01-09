// Auto-generated MojoJS binding
// Source: chromium_src/ash/system/diagnostics/mojom/input.mojom
// Module: ash.diagnostics.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.diagnostics = ash.diagnostics || {};
ash.diagnostics.mojom = ash.diagnostics.mojom || {};


// Enum: ConnectionType
ash.diagnostics.mojom.ConnectionType = {
  kInternal: 0,
  kUsb: 1,
  kBluetooth: 2,
  kUnknown: 3,
};

// Enum: PhysicalLayout
ash.diagnostics.mojom.PhysicalLayout = {
  kUnknown: 0,
  kChromeOS: 1,
  kChromeOSDellEnterpriseWilco: 2,
  kChromeOSDellEnterpriseDrallion: 3,
};

// Enum: MechanicalLayout
ash.diagnostics.mojom.MechanicalLayout = {
  kUnknown: 0,
  kAnsi: 1,
  kIso: 2,
  kJis: 3,
};

// Enum: NumberPadPresence
ash.diagnostics.mojom.NumberPadPresence = {
  kUnknown: 0,
  kPresent: 1,
  kNotPresent: 2,
};

// Enum: TopRowKey
ash.diagnostics.mojom.TopRowKey = {
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

// Enum: TopRightKey
ash.diagnostics.mojom.TopRightKey = {
  kUnknown: 0,
  kPower: 1,
  kLock: 2,
  kControlPanel: 3,
};

// Enum: BottomLeftLayout
ash.diagnostics.mojom.BottomLeftLayout = {
  kBottomLeft3Keys: 0,
  kBottomLeft4Keys: 1,
};

// Enum: BottomRightLayout
ash.diagnostics.mojom.BottomRightLayout = {
  kBottomRight2Keys: 0,
  kBottomRight3Keys: 1,
  kBottomRight4Keys: 2,
};

// Enum: NumpadLayout
ash.diagnostics.mojom.NumpadLayout = {
  kNumpad3Column: 0,
  kNumpad4Column: 1,
};

// Struct: KeyboardInfo
ash.diagnostics.mojom.KeyboardInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.KeyboardInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: KeyboardDiagnosticEventInfo
ash.diagnostics.mojom.KeyboardDiagnosticEventInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.diagnostics.mojom.KeyboardDiagnosticEventInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};
