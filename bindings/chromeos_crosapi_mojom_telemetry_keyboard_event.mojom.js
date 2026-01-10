// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/telemetry_keyboard_event.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};
var chromeos = chromeos || {};

crosapi.mojom.TelemetryKeyboardConnectionTypeSpec = { $: mojo.internal.Enum() };
crosapi.mojom.TelemetryKeyboardPhysicalLayoutSpec = { $: mojo.internal.Enum() };
crosapi.mojom.TelemetryKeyboardMechanicalLayoutSpec = { $: mojo.internal.Enum() };
crosapi.mojom.TelemetryKeyboardNumberPadPresenceSpec = { $: mojo.internal.Enum() };
crosapi.mojom.TelemetryKeyboardTopRowKeySpec = { $: mojo.internal.Enum() };
crosapi.mojom.TelemetryKeyboardTopRightKeySpec = { $: mojo.internal.Enum() };
crosapi.mojom.TelemetryKeyboardInfoSpec = { $: {} };
crosapi.mojom.TelemetryKeyboardDiagnosticEventInfoSpec = { $: {} };

// Enum: TelemetryKeyboardConnectionType
crosapi.mojom.TelemetryKeyboardConnectionType = {
  kUnmappedEnumField: 0,
  kInternal: 1,
  kUsb: 2,
  kBluetooth: 3,
  kUnknown: 4,
};

// Enum: TelemetryKeyboardPhysicalLayout
crosapi.mojom.TelemetryKeyboardPhysicalLayout = {
  kUnmappedEnumField: 0,
  kUnknown: 1,
  kChromeOS: 2,
};

// Enum: TelemetryKeyboardMechanicalLayout
crosapi.mojom.TelemetryKeyboardMechanicalLayout = {
  kUnmappedEnumField: 0,
  kUnknown: 1,
  kAnsi: 2,
  kIso: 3,
  kJis: 4,
};

// Enum: TelemetryKeyboardNumberPadPresence
crosapi.mojom.TelemetryKeyboardNumberPadPresence = {
  kUnmappedEnumField: 0,
  kUnknown: 1,
  kPresent: 2,
  kNotPresent: 3,
};

// Enum: TelemetryKeyboardTopRowKey
crosapi.mojom.TelemetryKeyboardTopRowKey = {
  kUnmappedEnumField: 0,
  kNone: 1,
  kUnknown: 2,
  kBack: 3,
  kForward: 4,
  kRefresh: 5,
  kFullscreen: 6,
  kOverview: 7,
  kScreenshot: 8,
  kScreenBrightnessDown: 9,
  kScreenBrightnessUp: 10,
  kPrivacyScreenToggle: 11,
  kMicrophoneMute: 12,
  kVolumeMute: 13,
  kVolumeDown: 14,
  kVolumeUp: 15,
  kKeyboardBacklightToggle: 16,
  kKeyboardBacklightDown: 17,
  kKeyboardBacklightUp: 18,
  kNextTrack: 19,
  kPreviousTrack: 20,
  kPlayPause: 21,
  kScreenMirror: 22,
  kDelete: 23,
};

// Enum: TelemetryKeyboardTopRightKey
crosapi.mojom.TelemetryKeyboardTopRightKey = {
  kUnmappedEnumField: 0,
  kUnknown: 1,
  kPower: 2,
  kLock: 3,
  kControlPanel: 4,
};

// Struct: TelemetryKeyboardInfo
mojo.internal.Struct(
    crosapi.mojom.TelemetryKeyboardInfoSpec, 'crosapi.mojom.TelemetryKeyboardInfo', [
      mojo.internal.StructField('id', 0, 0, crosapi.mojom.UInt32ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('connection_type', 8, 0, crosapi.mojom.TelemetryKeyboardConnectionTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('name', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('physical_layout', 24, 0, crosapi.mojom.TelemetryKeyboardPhysicalLayoutSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('mechanical_layout', 32, 0, crosapi.mojom.TelemetryKeyboardMechanicalLayoutSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('region_code', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('number_pad_present', 48, 0, crosapi.mojom.TelemetryKeyboardNumberPadPresenceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('top_row_keys', 56, 0, mojo.internal.Array(crosapi.mojom.TelemetryKeyboardTopRowKeySpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('top_right_key', 64, 0, crosapi.mojom.TelemetryKeyboardTopRightKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('has_assistant_key', 72, 0, crosapi.mojom.BoolValueSpec.$, null, true, 0, undefined),
    ],
    [[0, 88]]);

// Struct: TelemetryKeyboardDiagnosticEventInfo
mojo.internal.Struct(
    crosapi.mojom.TelemetryKeyboardDiagnosticEventInfoSpec, 'crosapi.mojom.TelemetryKeyboardDiagnosticEventInfo', [
      mojo.internal.StructField('keyboard_info', 0, 0, crosapi.mojom.TelemetryKeyboardInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('tested_keys', 8, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, true, 0, undefined),
      mojo.internal.StructField('tested_top_row_keys', 16, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, true, 0, undefined),
    ],
    [[0, 32]]);
