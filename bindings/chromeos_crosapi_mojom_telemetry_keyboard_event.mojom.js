// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/telemetry_keyboard_event.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};


// Enum: TelemetryKeyboardConnectionType
crosapi.mojom.TelemetryKeyboardConnectionType = {
  kInternal: 0,
  kUsb: 1,
  kBluetooth: 2,
  kUnknown: 3,
};

// Enum: TelemetryKeyboardPhysicalLayout
crosapi.mojom.TelemetryKeyboardPhysicalLayout = {
  kUnknown: 0,
  kChromeOS: 1,
};

// Enum: TelemetryKeyboardMechanicalLayout
crosapi.mojom.TelemetryKeyboardMechanicalLayout = {
  kUnknown: 0,
  kAnsi: 1,
  kIso: 2,
  kJis: 3,
};

// Enum: TelemetryKeyboardNumberPadPresence
crosapi.mojom.TelemetryKeyboardNumberPadPresence = {
  kUnknown: 0,
  kPresent: 1,
  kNotPresent: 2,
};

// Enum: TelemetryKeyboardTopRowKey
crosapi.mojom.TelemetryKeyboardTopRowKey = {
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

// Enum: TelemetryKeyboardTopRightKey
crosapi.mojom.TelemetryKeyboardTopRightKey = {
  kUnknown: 0,
  kPower: 1,
  kLock: 2,
  kControlPanel: 3,
};
