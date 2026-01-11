// Auto-generated MojoJS binding
// Source: chromium_src/ash/system/diagnostics/mojom/input.mojom
// Module: ash.diagnostics.mojom

// Module namespace
var ash = ash || {};
ash.diagnostics = ash.diagnostics || {};
ash.diagnostics.mojom = ash.diagnostics.mojom || {};

ash.diagnostics.mojom.ConnectionTypeSpec = { $: mojo.internal.Enum() };
ash.diagnostics.mojom.PhysicalLayoutSpec = { $: mojo.internal.Enum() };
ash.diagnostics.mojom.MechanicalLayoutSpec = { $: mojo.internal.Enum() };
ash.diagnostics.mojom.NumberPadPresenceSpec = { $: mojo.internal.Enum() };
ash.diagnostics.mojom.TopRowKeySpec = { $: mojo.internal.Enum() };
ash.diagnostics.mojom.TopRightKeySpec = { $: mojo.internal.Enum() };
ash.diagnostics.mojom.BottomLeftLayoutSpec = { $: mojo.internal.Enum() };
ash.diagnostics.mojom.BottomRightLayoutSpec = { $: mojo.internal.Enum() };
ash.diagnostics.mojom.NumpadLayoutSpec = { $: mojo.internal.Enum() };
ash.diagnostics.mojom.KeyboardInfoSpec = { $: {} };
ash.diagnostics.mojom.KeyboardDiagnosticEventInfoSpec = { $: {} };

// Enum: ConnectionType
ash.diagnostics.mojom.ConnectionType = {
  kUnmappedEnumField: 0,
  kInternal: 1,
  kUsb: 2,
  kBluetooth: 3,
  kUnknown: 4,
};

// Enum: PhysicalLayout
ash.diagnostics.mojom.PhysicalLayout = {
  kUnmappedEnumField: 0,
  kUnknown: 1,
  kChromeOS: 2,
  kChromeOSDellEnterpriseWilco: 3,
  kChromeOSDellEnterpriseDrallion: 4,
};

// Enum: MechanicalLayout
ash.diagnostics.mojom.MechanicalLayout = {
  kUnmappedEnumField: 0,
  kUnknown: 1,
  kAnsi: 2,
  kIso: 3,
  kJis: 4,
};

// Enum: NumberPadPresence
ash.diagnostics.mojom.NumberPadPresence = {
  kUnmappedEnumField: 0,
  kUnknown: 1,
  kPresent: 2,
  kNotPresent: 3,
};

// Enum: TopRowKey
ash.diagnostics.mojom.TopRowKey = {
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
  MinVersion: 23,
  MinVersion: 23,
};

// Enum: TopRightKey
ash.diagnostics.mojom.TopRightKey = {
  kUnmappedEnumField: 0,
  kUnknown: 1,
  kPower: 2,
  kLock: 3,
  kControlPanel: 4,
};

// Enum: BottomLeftLayout
ash.diagnostics.mojom.BottomLeftLayout = {
  kUnknown: 0,
  kBottomLeft3Keys: 1,
  kBottomLeft4Keys: 2,
};

// Enum: BottomRightLayout
ash.diagnostics.mojom.BottomRightLayout = {
  kUnknown: 0,
  kBottomRight2Keys: 1,
  kBottomRight3Keys: 2,
  kBottomRight4Keys: 3,
};

// Enum: NumpadLayout
ash.diagnostics.mojom.NumpadLayout = {
  kUnknown: 0,
  kNumpad3Column: 1,
  kNumpad4Column: 2,
};

// Struct: KeyboardInfo
mojo.internal.Struct(
    ash.diagnostics.mojom.KeyboardInfoSpec, 'ash.diagnostics.mojom.KeyboardInfo', [
      mojo.internal.StructField('connection_type', 0, 0, ash.diagnostics.mojom.ConnectionTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('physical_layout', 16, 0, ash.diagnostics.mojom.PhysicalLayoutSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('mechanical_layout', 24, 0, ash.diagnostics.mojom.MechanicalLayoutSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('region_code', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('number_pad_present', 40, 0, ash.diagnostics.mojom.NumberPadPresenceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('top_row_keys', 48, 0, mojo.internal.Array(ash.diagnostics.mojom.TopRowKeySpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('top_right_key', 56, 0, ash.diagnostics.mojom.TopRightKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('id', 64, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('has_assistant_key', 68, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('bottom_left_layout', 72, 0, ash.diagnostics.mojom.BottomLeftLayoutSpec.$, null, false, 1, undefined),
      mojo.internal.StructField('bottom_right_layout', 80, 0, ash.diagnostics.mojom.BottomRightLayoutSpec.$, null, false, 1, undefined),
      mojo.internal.StructField('numpad_layout', 88, 0, ash.diagnostics.mojom.NumpadLayoutSpec.$, null, false, 1, undefined),
    ],
    [[0, 80], [1, 104]]);

// Struct: KeyboardDiagnosticEventInfo
mojo.internal.Struct(
    ash.diagnostics.mojom.KeyboardDiagnosticEventInfoSpec, 'ash.diagnostics.mojom.KeyboardDiagnosticEventInfo', [
      mojo.internal.StructField('keyboard_info', 0, 0, ash.diagnostics.mojom.KeyboardInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('tested_keys', 8, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
      mojo.internal.StructField('tested_top_row_keys', 16, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
    ],
    [[0, 32]]);
