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
crosapi.mojom.TelemetryKeyboardConnectionTypeSpec = { $: mojo.internal.Enum() };

// Enum: TelemetryKeyboardPhysicalLayout
crosapi.mojom.TelemetryKeyboardPhysicalLayout = {
  kUnknown: 0,
  kChromeOS: 1,
};
crosapi.mojom.TelemetryKeyboardPhysicalLayoutSpec = { $: mojo.internal.Enum() };

// Enum: TelemetryKeyboardMechanicalLayout
crosapi.mojom.TelemetryKeyboardMechanicalLayout = {
  kUnknown: 0,
  kAnsi: 1,
  kIso: 2,
  kJis: 3,
};
crosapi.mojom.TelemetryKeyboardMechanicalLayoutSpec = { $: mojo.internal.Enum() };

// Enum: TelemetryKeyboardNumberPadPresence
crosapi.mojom.TelemetryKeyboardNumberPadPresence = {
  kUnknown: 0,
  kPresent: 1,
  kNotPresent: 2,
};
crosapi.mojom.TelemetryKeyboardNumberPadPresenceSpec = { $: mojo.internal.Enum() };

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
crosapi.mojom.TelemetryKeyboardTopRowKeySpec = { $: mojo.internal.Enum() };

// Enum: TelemetryKeyboardTopRightKey
crosapi.mojom.TelemetryKeyboardTopRightKey = {
  kUnknown: 0,
  kPower: 1,
  kLock: 2,
  kControlPanel: 3,
};
crosapi.mojom.TelemetryKeyboardTopRightKeySpec = { $: mojo.internal.Enum() };

// Struct: TelemetryKeyboardInfo
crosapi.mojom.TelemetryKeyboardInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryKeyboardInfo',
      packedSize: 72,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.UInt32ValueSpec, nullable: true, minVersion: 0 },
        { name: 'connection_type', packedOffset: 40, packedBitOffset: 0, type: crosapi.mojom.TelemetryKeyboardConnectionTypeSpec, nullable: false, minVersion: 0 },
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'physical_layout', packedOffset: 44, packedBitOffset: 0, type: crosapi.mojom.TelemetryKeyboardPhysicalLayoutSpec, nullable: false, minVersion: 0 },
        { name: 'mechanical_layout', packedOffset: 48, packedBitOffset: 0, type: crosapi.mojom.TelemetryKeyboardMechanicalLayoutSpec, nullable: false, minVersion: 0 },
        { name: 'region_code', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'number_pad_present', packedOffset: 52, packedBitOffset: 0, type: crosapi.mojom.TelemetryKeyboardNumberPadPresenceSpec, nullable: false, minVersion: 0 },
        { name: 'top_row_keys', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(crosapi.mojom.TelemetryKeyboardTopRowKeySpec, false), nullable: true, minVersion: 0 },
        { name: 'top_right_key', packedOffset: 56, packedBitOffset: 0, type: crosapi.mojom.TelemetryKeyboardTopRightKeySpec, nullable: false, minVersion: 0 },
        { name: 'has_assistant_key', packedOffset: 32, packedBitOffset: 0, type: crosapi.mojom.BoolValueSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 72}]
    }
  }
};

// Struct: TelemetryKeyboardDiagnosticEventInfo
crosapi.mojom.TelemetryKeyboardDiagnosticEventInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryKeyboardDiagnosticEventInfo',
      packedSize: 32,
      fields: [
        { name: 'keyboard_info', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.TelemetryKeyboardInfoSpec, nullable: false, minVersion: 0 },
        { name: 'tested_keys', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint32, false), nullable: true, minVersion: 0 },
        { name: 'tested_top_row_keys', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint32, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};
