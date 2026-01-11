// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/cros_healthd/public/mojom/cros_healthd_events.mojom
// Module: ash.cros_healthd.mojom

// Module namespace
var ash = ash || {};
ash.cros_healthd = ash.cros_healthd || {};
ash.cros_healthd.mojom = ash.cros_healthd.mojom || {};
var mojo_base = mojo_base || {};

ash.cros_healthd.mojom.StateSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.mojom.StateSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.mojom.StateSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.mojom.StateSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.mojom.StateSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.mojom.StateSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.mojom.StateSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.mojom.DeviceTypeSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.mojom.StateSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.mojom.InputTouchButtonSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.mojom.StateSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.mojom.StateSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.mojom.CrashTypeSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.mojom.EventCategoryEnumSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.mojom.TouchpadEventInfoSpec = { $: {} };
ash.cros_healthd.mojom.TouchscreenEventInfoSpec = { $: {} };
ash.cros_healthd.mojom.StylusEventInfoSpec = { $: {} };
ash.cros_healthd.mojom.EventInfoSpec = { $: {} };
ash.cros_healthd.mojom.UsbEventInfoSpec = { $: {} };
ash.cros_healthd.mojom.ThunderboltEventInfoSpec = { $: {} };
ash.cros_healthd.mojom.LidEventInfoSpec = { $: {} };
ash.cros_healthd.mojom.BluetoothEventInfoSpec = { $: {} };
ash.cros_healthd.mojom.PowerEventInfoSpec = { $: {} };
ash.cros_healthd.mojom.AudioEventInfoSpec = { $: {} };
ash.cros_healthd.mojom.AudioJackEventInfoSpec = { $: {} };
ash.cros_healthd.mojom.SdCardEventInfoSpec = { $: {} };
ash.cros_healthd.mojom.TouchpadButtonEventSpec = { $: {} };
ash.cros_healthd.mojom.TouchPointInfoSpec = { $: {} };
ash.cros_healthd.mojom.TouchpadTouchEventSpec = { $: {} };
ash.cros_healthd.mojom.TouchpadConnectedEventSpec = { $: {} };
ash.cros_healthd.mojom.ExternalDisplayEventInfoSpec = { $: {} };
ash.cros_healthd.mojom.TouchscreenTouchEventSpec = { $: {} };
ash.cros_healthd.mojom.TouchscreenConnectedEventSpec = { $: {} };
ash.cros_healthd.mojom.StylusGarageEventInfoSpec = { $: {} };
ash.cros_healthd.mojom.StylusTouchPointInfoSpec = { $: {} };
ash.cros_healthd.mojom.StylusTouchEventSpec = { $: {} };
ash.cros_healthd.mojom.StylusConnectedEventSpec = { $: {} };
ash.cros_healthd.mojom.CrashUploadInfoSpec = { $: {} };
ash.cros_healthd.mojom.CrashEventInfoSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdBluetoothObserver = {};
ash.cros_healthd.mojom.CrosHealthdBluetoothObserver.$interfaceName = 'ash.cros_healthd.mojom.CrosHealthdBluetoothObserver';
ash.cros_healthd.mojom.CrosHealthdBluetoothObserver_OnAdapterAdded_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdBluetoothObserver_OnAdapterRemoved_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdBluetoothObserver_OnAdapterPropertyChanged_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdBluetoothObserver_OnDeviceAdded_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdBluetoothObserver_OnDeviceRemoved_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdBluetoothObserver_OnDevicePropertyChanged_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdLidObserver = {};
ash.cros_healthd.mojom.CrosHealthdLidObserver.$interfaceName = 'ash.cros_healthd.mojom.CrosHealthdLidObserver';
ash.cros_healthd.mojom.CrosHealthdLidObserver_OnLidClosed_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdLidObserver_OnLidOpened_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdPowerObserver = {};
ash.cros_healthd.mojom.CrosHealthdPowerObserver.$interfaceName = 'ash.cros_healthd.mojom.CrosHealthdPowerObserver';
ash.cros_healthd.mojom.CrosHealthdPowerObserver_OnAcInserted_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdPowerObserver_OnAcRemoved_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdPowerObserver_OnOsSuspend_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdPowerObserver_OnOsResume_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdAudioObserver = {};
ash.cros_healthd.mojom.CrosHealthdAudioObserver.$interfaceName = 'ash.cros_healthd.mojom.CrosHealthdAudioObserver';
ash.cros_healthd.mojom.CrosHealthdAudioObserver_OnUnderrun_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdAudioObserver_OnSevereUnderrun_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdThunderboltObserver = {};
ash.cros_healthd.mojom.CrosHealthdThunderboltObserver.$interfaceName = 'ash.cros_healthd.mojom.CrosHealthdThunderboltObserver';
ash.cros_healthd.mojom.CrosHealthdThunderboltObserver_OnAdd_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdThunderboltObserver_OnRemove_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdThunderboltObserver_OnAuthorized_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdThunderboltObserver_OnUnAuthorized_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdUsbObserver = {};
ash.cros_healthd.mojom.CrosHealthdUsbObserver.$interfaceName = 'ash.cros_healthd.mojom.CrosHealthdUsbObserver';
ash.cros_healthd.mojom.CrosHealthdUsbObserver_OnAdd_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdUsbObserver_OnRemove_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdSdCardObserver = {};
ash.cros_healthd.mojom.CrosHealthdSdCardObserver.$interfaceName = 'ash.cros_healthd.mojom.CrosHealthdSdCardObserver';
ash.cros_healthd.mojom.CrosHealthdSdCardObserver_OnAdd_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.CrosHealthdSdCardObserver_OnRemove_ParamsSpec = { $: {} };
ash.cros_healthd.mojom.EventObserver = {};
ash.cros_healthd.mojom.EventObserver.$interfaceName = 'ash.cros_healthd.mojom.EventObserver';
ash.cros_healthd.mojom.EventObserver_OnEvent_ParamsSpec = { $: {} };

// Enum: State
ash.cros_healthd.mojom.State = {
  kUnmappedEnumField: 0,
  kAdd: 1,
  kRemove: 2,
};

// Enum: State
ash.cros_healthd.mojom.State = {
  kUnmappedEnumField: 0,
  kAdd: 1,
  kRemove: 2,
  kAuthorized: 3,
  kUnAuthorized: 4,
};

// Enum: State
ash.cros_healthd.mojom.State = {
  kUnmappedEnumField: 0,
  kClosed: 1,
  kOpened: 2,
};

// Enum: State
ash.cros_healthd.mojom.State = {
  kUnmappedEnumField: 0,
  kAdapterAdded: 1,
  kAdapterRemoved: 2,
  kAdapterPropertyChanged: 3,
  kDeviceAdded: 4,
  kDeviceRemoved: 5,
  kDevicePropertyChanged: 6,
};

// Enum: State
ash.cros_healthd.mojom.State = {
  kUnmappedEnumField: 0,
  kAcInserted: 1,
  kAcRemoved: 2,
  kOsSuspend: 3,
  kOsResume: 4,
};

// Enum: State
ash.cros_healthd.mojom.State = {
  kUnmappedEnumField: 0,
  kUnderrun: 1,
  kSevereUnderrun: 2,
};

// Enum: State
ash.cros_healthd.mojom.State = {
  kUnmappedEnumField: 0,
  kAdd: 1,
  kRemove: 2,
};

// Enum: DeviceType
ash.cros_healthd.mojom.DeviceType = {
  kUnmappedEnumField: 0,
  kHeadphone: 1,
  kMicrophone: 2,
};

// Enum: State
ash.cros_healthd.mojom.State = {
  kUnmappedEnumField: 0,
  kAdd: 1,
  kRemove: 2,
};

// Enum: InputTouchButton
ash.cros_healthd.mojom.InputTouchButton = {
  kUnmappedEnumField: 0,
  kLeft: 1,
  kMiddle: 2,
  kRight: 3,
};

// Enum: State
ash.cros_healthd.mojom.State = {
  kUnmappedEnumField: 0,
  kAdd: 1,
  kRemove: 2,
};

// Enum: State
ash.cros_healthd.mojom.State = {
  kUnmappedEnumField: 0,
  kInserted: 1,
  kRemoved: 2,
};

// Enum: CrashType
ash.cros_healthd.mojom.CrashType = {
  kUnknown: 0,
  kKernel: 1,
  kEmbeddedController: 2,
  MinVersion: 2,
};

// Enum: EventCategoryEnum
ash.cros_healthd.mojom.EventCategoryEnum = {
  kUnmappedEnumField: 0,
  kUsb: 1,
  kThunderbolt: 2,
  kLid: 3,
  kBluetooth: 4,
  kPower: 5,
  kAudio: 6,
  MinVersion: 6,
  MinVersion: 6,
  MinVersion: 6,
  MinVersion: 6,
  MinVersion: 6,
  MinVersion: 6,
  MinVersion: 6,
  MinVersion: 6,
  MinVersion: 6,
  MinVersion: 6,
};

// Union: TouchpadEventInfo
mojo.internal.Union(
    ash.cros_healthd.mojom.TouchpadEventInfoSpec, 'ash.cros_healthd.mojom.TouchpadEventInfo', {
      'default_type': {
        'ordinal': 0,
        'type': mojo.internal.Uint8,
        'nullable': false,
      },
      'button_event': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.TouchpadButtonEventSpec.$,
        'nullable': false,
      },
      'touch_event': {
        'ordinal': 2,
        'type': ash.cros_healthd.mojom.TouchpadTouchEventSpec.$,
        'nullable': false,
      },
      'connected_event': {
        'ordinal': 3,
        'type': ash.cros_healthd.mojom.TouchpadConnectedEventSpec.$,
        'nullable': false,
      },
    });

// Union: TouchscreenEventInfo
mojo.internal.Union(
    ash.cros_healthd.mojom.TouchscreenEventInfoSpec, 'ash.cros_healthd.mojom.TouchscreenEventInfo', {
      'default_type': {
        'ordinal': 0,
        'type': mojo.internal.Uint8,
        'nullable': false,
      },
      'touch_event': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.TouchscreenTouchEventSpec.$,
        'nullable': false,
      },
      'connected_event': {
        'ordinal': 2,
        'type': ash.cros_healthd.mojom.TouchscreenConnectedEventSpec.$,
        'nullable': false,
      },
    });

// Union: StylusEventInfo
mojo.internal.Union(
    ash.cros_healthd.mojom.StylusEventInfoSpec, 'ash.cros_healthd.mojom.StylusEventInfo', {
      'default_type': {
        'ordinal': 0,
        'type': mojo.internal.Uint8,
        'nullable': false,
      },
      'touch_event': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.StylusTouchEventSpec.$,
        'nullable': false,
      },
      'connected_event': {
        'ordinal': 2,
        'type': ash.cros_healthd.mojom.StylusConnectedEventSpec.$,
        'nullable': false,
      },
    });

// Union: EventInfo
mojo.internal.Union(
    ash.cros_healthd.mojom.EventInfoSpec, 'ash.cros_healthd.mojom.EventInfo', {
      'default_type': {
        'ordinal': 0,
        'type': mojo.internal.Uint8,
        'nullable': false,
      },
      'usb_event_info': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.UsbEventInfoSpec.$,
        'nullable': false,
      },
      'thunderbolt_event_info': {
        'ordinal': 2,
        'type': ash.cros_healthd.mojom.ThunderboltEventInfoSpec.$,
        'nullable': false,
      },
      'lid_event_info': {
        'ordinal': 3,
        'type': ash.cros_healthd.mojom.LidEventInfoSpec.$,
        'nullable': false,
      },
      'bluetooth_event_info': {
        'ordinal': 4,
        'type': ash.cros_healthd.mojom.BluetoothEventInfoSpec.$,
        'nullable': false,
      },
      'power_event_info': {
        'ordinal': 5,
        'type': ash.cros_healthd.mojom.PowerEventInfoSpec.$,
        'nullable': false,
      },
      'audio_event_info': {
        'ordinal': 6,
        'type': ash.cros_healthd.mojom.AudioEventInfoSpec.$,
        'nullable': false,
      },
      'audio_jack_event_info': {
        'ordinal': 7,
        'type': ash.cros_healthd.mojom.AudioJackEventInfoSpec.$,
        'nullable': false,
      },
      'sd_card_event_info': {
        'ordinal': 8,
        'type': ash.cros_healthd.mojom.SdCardEventInfoSpec.$,
        'nullable': false,
      },
      'keyboard_diagnostic_event_info': {
        'ordinal': 9,
        'type': ash.diagnostics.mojom.KeyboardDiagnosticEventInfoSpec.$,
        'nullable': false,
      },
      'touchpad_event_info': {
        'ordinal': 10,
        'type': ash.cros_healthd.mojom.TouchpadEventInfoSpec.$,
        'nullable': false,
      },
      'external_display_event_info': {
        'ordinal': 11,
        'type': ash.cros_healthd.mojom.ExternalDisplayEventInfoSpec.$,
        'nullable': false,
      },
      'touchscreen_event_info': {
        'ordinal': 12,
        'type': ash.cros_healthd.mojom.TouchscreenEventInfoSpec.$,
        'nullable': false,
      },
      'stylus_garage_event_info': {
        'ordinal': 13,
        'type': ash.cros_healthd.mojom.StylusGarageEventInfoSpec.$,
        'nullable': false,
      },
      'stylus_event_info': {
        'ordinal': 14,
        'type': ash.cros_healthd.mojom.StylusEventInfoSpec.$,
        'nullable': false,
      },
      'crash_event_info': {
        'ordinal': 15,
        'type': ash.cros_healthd.mojom.CrashEventInfoSpec.$,
        'nullable': false,
      },
    });

// Struct: UsbEventInfo
mojo.internal.Struct(
    ash.cros_healthd.mojom.UsbEventInfoSpec, 'ash.cros_healthd.mojom.UsbEventInfo', [
      mojo.internal.StructField('vendor', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('categories', 16, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('kUnmappedEnumField', 24, 0, mojo.internal.Pointer, 0, false, 0, undefined),
      mojo.internal.StructField('vid', 32, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('pid', 34, 0, mojo.internal.Uint16, 0, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: ThunderboltEventInfo
mojo.internal.Struct(
    ash.cros_healthd.mojom.ThunderboltEventInfoSpec, 'ash.cros_healthd.mojom.ThunderboltEventInfo', [
      mojo.internal.StructField('kUnmappedEnumField', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: LidEventInfo
mojo.internal.Struct(
    ash.cros_healthd.mojom.LidEventInfoSpec, 'ash.cros_healthd.mojom.LidEventInfo', [
      mojo.internal.StructField('kUnmappedEnumField', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: BluetoothEventInfo
mojo.internal.Struct(
    ash.cros_healthd.mojom.BluetoothEventInfoSpec, 'ash.cros_healthd.mojom.BluetoothEventInfo', [
      mojo.internal.StructField('kUnmappedEnumField', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: PowerEventInfo
mojo.internal.Struct(
    ash.cros_healthd.mojom.PowerEventInfoSpec, 'ash.cros_healthd.mojom.PowerEventInfo', [
      mojo.internal.StructField('kUnmappedEnumField', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: AudioEventInfo
mojo.internal.Struct(
    ash.cros_healthd.mojom.AudioEventInfoSpec, 'ash.cros_healthd.mojom.AudioEventInfo', [
      mojo.internal.StructField('kUnmappedEnumField', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: AudioJackEventInfo
mojo.internal.Struct(
    ash.cros_healthd.mojom.AudioJackEventInfoSpec, 'ash.cros_healthd.mojom.AudioJackEventInfo', [
      mojo.internal.StructField('kUnmappedEnumField', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SdCardEventInfo
mojo.internal.Struct(
    ash.cros_healthd.mojom.SdCardEventInfoSpec, 'ash.cros_healthd.mojom.SdCardEventInfo', [
      mojo.internal.StructField('kUnmappedEnumField', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TouchpadButtonEvent
mojo.internal.Struct(
    ash.cros_healthd.mojom.TouchpadButtonEventSpec, 'ash.cros_healthd.mojom.TouchpadButtonEvent', [
      mojo.internal.StructField('button', 0, 0, ash.cros_healthd.mojom.InputTouchButtonSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('pressed', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TouchPointInfo
mojo.internal.Struct(
    ash.cros_healthd.mojom.TouchPointInfoSpec, 'ash.cros_healthd.mojom.TouchPointInfo', [
      mojo.internal.StructField('pressure', 0, 0, ash.cros_healthd.mojom.NullableUint32Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('touch_major', 8, 0, ash.cros_healthd.mojom.NullableUint32Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('touch_minor', 16, 0, ash.cros_healthd.mojom.NullableUint32Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('tracking_id', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('x', 28, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('y', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: TouchpadTouchEvent
mojo.internal.Struct(
    ash.cros_healthd.mojom.TouchpadTouchEventSpec, 'ash.cros_healthd.mojom.TouchpadTouchEvent', [
      mojo.internal.StructField('touch_points', 0, 0, mojo.internal.Array(ash.cros_healthd.mojom.TouchPointInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TouchpadConnectedEvent
mojo.internal.Struct(
    ash.cros_healthd.mojom.TouchpadConnectedEventSpec, 'ash.cros_healthd.mojom.TouchpadConnectedEvent', [
      mojo.internal.StructField('buttons', 0, 0, mojo.internal.Array(ash.cros_healthd.mojom.InputTouchButtonSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('max_x', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('max_y', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('max_pressure', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ExternalDisplayEventInfo
mojo.internal.Struct(
    ash.cros_healthd.mojom.ExternalDisplayEventInfoSpec, 'ash.cros_healthd.mojom.ExternalDisplayEventInfo', [
      mojo.internal.StructField('kUnmappedEnumField', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TouchscreenTouchEvent
mojo.internal.Struct(
    ash.cros_healthd.mojom.TouchscreenTouchEventSpec, 'ash.cros_healthd.mojom.TouchscreenTouchEvent', [
      mojo.internal.StructField('touch_points', 0, 0, mojo.internal.Array(ash.cros_healthd.mojom.TouchPointInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TouchscreenConnectedEvent
mojo.internal.Struct(
    ash.cros_healthd.mojom.TouchscreenConnectedEventSpec, 'ash.cros_healthd.mojom.TouchscreenConnectedEvent', [
      mojo.internal.StructField('max_x', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('max_y', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('max_pressure', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: StylusGarageEventInfo
mojo.internal.Struct(
    ash.cros_healthd.mojom.StylusGarageEventInfoSpec, 'ash.cros_healthd.mojom.StylusGarageEventInfo', [
      mojo.internal.StructField('kUnmappedEnumField', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: StylusTouchPointInfo
mojo.internal.Struct(
    ash.cros_healthd.mojom.StylusTouchPointInfoSpec, 'ash.cros_healthd.mojom.StylusTouchPointInfo', [
      mojo.internal.StructField('pressure', 0, 0, ash.cros_healthd.mojom.NullableUint32Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('x', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('y', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: StylusTouchEvent
mojo.internal.Struct(
    ash.cros_healthd.mojom.StylusTouchEventSpec, 'ash.cros_healthd.mojom.StylusTouchEvent', [
      mojo.internal.StructField('touch_point', 0, 0, ash.cros_healthd.mojom.StylusTouchPointInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

// Struct: StylusConnectedEvent
mojo.internal.Struct(
    ash.cros_healthd.mojom.StylusConnectedEventSpec, 'ash.cros_healthd.mojom.StylusConnectedEvent', [
      mojo.internal.StructField('max_x', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('max_y', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('max_pressure', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: CrashUploadInfo
mojo.internal.Struct(
    ash.cros_healthd.mojom.CrashUploadInfoSpec, 'ash.cros_healthd.mojom.CrashUploadInfo', [
      mojo.internal.StructField('crash_report_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('creation_time', 8, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('offset', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: CrashEventInfo
mojo.internal.Struct(
    ash.cros_healthd.mojom.CrashEventInfoSpec, 'ash.cros_healthd.mojom.CrashEventInfo', [
      mojo.internal.StructField('kUnknown', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: CrosHealthdBluetoothObserver
mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdBluetoothObserver_OnAdapterAdded_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdBluetoothObserver_OnAdapterAdded_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdBluetoothObserver_OnAdapterRemoved_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdBluetoothObserver_OnAdapterRemoved_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdBluetoothObserver_OnAdapterPropertyChanged_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdBluetoothObserver_OnAdapterPropertyChanged_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdBluetoothObserver_OnDeviceAdded_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdBluetoothObserver_OnDeviceAdded_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdBluetoothObserver_OnDeviceRemoved_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdBluetoothObserver_OnDeviceRemoved_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdBluetoothObserver_OnDevicePropertyChanged_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdBluetoothObserver_OnDevicePropertyChanged_Params', [
    ],
    [[0, 8]]);

ash.cros_healthd.mojom.CrosHealthdBluetoothObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.cros_healthd.mojom.CrosHealthdBluetoothObserverRemote = class {
  static get $interfaceName() {
    return 'ash.cros_healthd.mojom.CrosHealthdBluetoothObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.cros_healthd.mojom.CrosHealthdBluetoothObserverPendingReceiver,
      handle);
    this.$ = new ash.cros_healthd.mojom.CrosHealthdBluetoothObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onAdapterAdded() {
    return this.$.onAdapterAdded();
  }
  onAdapterRemoved() {
    return this.$.onAdapterRemoved();
  }
  onAdapterPropertyChanged() {
    return this.$.onAdapterPropertyChanged();
  }
  onDeviceAdded() {
    return this.$.onDeviceAdded();
  }
  onDeviceRemoved() {
    return this.$.onDeviceRemoved();
  }
  onDevicePropertyChanged() {
    return this.$.onDevicePropertyChanged();
  }
};

ash.cros_healthd.mojom.CrosHealthdBluetoothObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CrosHealthdBluetoothObserver', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
    ]);
  }

  onAdapterAdded() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdBluetoothObserver_OnAdapterAdded_ParamsSpec,
      null,
      [],
      false);
  }

  onAdapterRemoved() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdBluetoothObserver_OnAdapterRemoved_ParamsSpec,
      null,
      [],
      false);
  }

  onAdapterPropertyChanged() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdBluetoothObserver_OnAdapterPropertyChanged_ParamsSpec,
      null,
      [],
      false);
  }

  onDeviceAdded() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdBluetoothObserver_OnDeviceAdded_ParamsSpec,
      null,
      [],
      false);
  }

  onDeviceRemoved() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdBluetoothObserver_OnDeviceRemoved_ParamsSpec,
      null,
      [],
      false);
  }

  onDevicePropertyChanged() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdBluetoothObserver_OnDevicePropertyChanged_ParamsSpec,
      null,
      [],
      false);
  }

};

ash.cros_healthd.mojom.CrosHealthdBluetoothObserver.getRemote = function() {
  let remote = new ash.cros_healthd.mojom.CrosHealthdBluetoothObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cros_healthd.mojom.CrosHealthdBluetoothObserver',
    'context');
  return remote.$;
};

ash.cros_healthd.mojom.CrosHealthdBluetoothObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CrosHealthdBluetoothObserver', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdBluetoothObserver_OnAdapterAdded_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdBluetoothObserver_OnAdapterRemoved_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdBluetoothObserver_OnAdapterPropertyChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdBluetoothObserver_OnDeviceAdded_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdBluetoothObserver_OnDeviceRemoved_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdBluetoothObserver_OnDevicePropertyChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdBluetoothObserver_OnAdapterAdded_ParamsSpec.$.structSpec);
          const result = this.impl.onAdapterAdded();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdBluetoothObserver_OnAdapterRemoved_ParamsSpec.$.structSpec);
          const result = this.impl.onAdapterRemoved();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdBluetoothObserver_OnAdapterPropertyChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onAdapterPropertyChanged();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdBluetoothObserver_OnDeviceAdded_ParamsSpec.$.structSpec);
          const result = this.impl.onDeviceAdded();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdBluetoothObserver_OnDeviceRemoved_ParamsSpec.$.structSpec);
          const result = this.impl.onDeviceRemoved();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdBluetoothObserver_OnDevicePropertyChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onDevicePropertyChanged();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.cros_healthd.mojom.CrosHealthdBluetoothObserverReceiver = ash.cros_healthd.mojom.CrosHealthdBluetoothObserverReceiver;

ash.cros_healthd.mojom.CrosHealthdBluetoothObserverPtr = ash.cros_healthd.mojom.CrosHealthdBluetoothObserverRemote;
ash.cros_healthd.mojom.CrosHealthdBluetoothObserverRequest = ash.cros_healthd.mojom.CrosHealthdBluetoothObserverPendingReceiver;


// Interface: CrosHealthdLidObserver
mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdLidObserver_OnLidClosed_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdLidObserver_OnLidClosed_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdLidObserver_OnLidOpened_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdLidObserver_OnLidOpened_Params', [
    ],
    [[0, 8]]);

ash.cros_healthd.mojom.CrosHealthdLidObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.cros_healthd.mojom.CrosHealthdLidObserverRemote = class {
  static get $interfaceName() {
    return 'ash.cros_healthd.mojom.CrosHealthdLidObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.cros_healthd.mojom.CrosHealthdLidObserverPendingReceiver,
      handle);
    this.$ = new ash.cros_healthd.mojom.CrosHealthdLidObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onLidClosed() {
    return this.$.onLidClosed();
  }
  onLidOpened() {
    return this.$.onLidOpened();
  }
};

ash.cros_healthd.mojom.CrosHealthdLidObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CrosHealthdLidObserver', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
  }

  onLidClosed() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdLidObserver_OnLidClosed_ParamsSpec,
      null,
      [],
      false);
  }

  onLidOpened() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdLidObserver_OnLidOpened_ParamsSpec,
      null,
      [],
      false);
  }

};

ash.cros_healthd.mojom.CrosHealthdLidObserver.getRemote = function() {
  let remote = new ash.cros_healthd.mojom.CrosHealthdLidObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cros_healthd.mojom.CrosHealthdLidObserver',
    'context');
  return remote.$;
};

ash.cros_healthd.mojom.CrosHealthdLidObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CrosHealthdLidObserver', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdLidObserver_OnLidClosed_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdLidObserver_OnLidOpened_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdLidObserver_OnLidClosed_ParamsSpec.$.structSpec);
          const result = this.impl.onLidClosed();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdLidObserver_OnLidOpened_ParamsSpec.$.structSpec);
          const result = this.impl.onLidOpened();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.cros_healthd.mojom.CrosHealthdLidObserverReceiver = ash.cros_healthd.mojom.CrosHealthdLidObserverReceiver;

ash.cros_healthd.mojom.CrosHealthdLidObserverPtr = ash.cros_healthd.mojom.CrosHealthdLidObserverRemote;
ash.cros_healthd.mojom.CrosHealthdLidObserverRequest = ash.cros_healthd.mojom.CrosHealthdLidObserverPendingReceiver;


// Interface: CrosHealthdPowerObserver
mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdPowerObserver_OnAcInserted_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdPowerObserver_OnAcInserted_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdPowerObserver_OnAcRemoved_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdPowerObserver_OnAcRemoved_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdPowerObserver_OnOsSuspend_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdPowerObserver_OnOsSuspend_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdPowerObserver_OnOsResume_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdPowerObserver_OnOsResume_Params', [
    ],
    [[0, 8]]);

ash.cros_healthd.mojom.CrosHealthdPowerObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.cros_healthd.mojom.CrosHealthdPowerObserverRemote = class {
  static get $interfaceName() {
    return 'ash.cros_healthd.mojom.CrosHealthdPowerObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.cros_healthd.mojom.CrosHealthdPowerObserverPendingReceiver,
      handle);
    this.$ = new ash.cros_healthd.mojom.CrosHealthdPowerObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onAcInserted() {
    return this.$.onAcInserted();
  }
  onAcRemoved() {
    return this.$.onAcRemoved();
  }
  onOsSuspend() {
    return this.$.onOsSuspend();
  }
  onOsResume() {
    return this.$.onOsResume();
  }
};

ash.cros_healthd.mojom.CrosHealthdPowerObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CrosHealthdPowerObserver', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
    ]);
  }

  onAcInserted() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdPowerObserver_OnAcInserted_ParamsSpec,
      null,
      [],
      false);
  }

  onAcRemoved() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdPowerObserver_OnAcRemoved_ParamsSpec,
      null,
      [],
      false);
  }

  onOsSuspend() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdPowerObserver_OnOsSuspend_ParamsSpec,
      null,
      [],
      false);
  }

  onOsResume() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdPowerObserver_OnOsResume_ParamsSpec,
      null,
      [],
      false);
  }

};

ash.cros_healthd.mojom.CrosHealthdPowerObserver.getRemote = function() {
  let remote = new ash.cros_healthd.mojom.CrosHealthdPowerObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cros_healthd.mojom.CrosHealthdPowerObserver',
    'context');
  return remote.$;
};

ash.cros_healthd.mojom.CrosHealthdPowerObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CrosHealthdPowerObserver', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdPowerObserver_OnAcInserted_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdPowerObserver_OnAcRemoved_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdPowerObserver_OnOsSuspend_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdPowerObserver_OnOsResume_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdPowerObserver_OnAcInserted_ParamsSpec.$.structSpec);
          const result = this.impl.onAcInserted();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdPowerObserver_OnAcRemoved_ParamsSpec.$.structSpec);
          const result = this.impl.onAcRemoved();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdPowerObserver_OnOsSuspend_ParamsSpec.$.structSpec);
          const result = this.impl.onOsSuspend();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdPowerObserver_OnOsResume_ParamsSpec.$.structSpec);
          const result = this.impl.onOsResume();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.cros_healthd.mojom.CrosHealthdPowerObserverReceiver = ash.cros_healthd.mojom.CrosHealthdPowerObserverReceiver;

ash.cros_healthd.mojom.CrosHealthdPowerObserverPtr = ash.cros_healthd.mojom.CrosHealthdPowerObserverRemote;
ash.cros_healthd.mojom.CrosHealthdPowerObserverRequest = ash.cros_healthd.mojom.CrosHealthdPowerObserverPendingReceiver;


// Interface: CrosHealthdAudioObserver
mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdAudioObserver_OnUnderrun_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdAudioObserver_OnUnderrun_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdAudioObserver_OnSevereUnderrun_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdAudioObserver_OnSevereUnderrun_Params', [
    ],
    [[0, 8]]);

ash.cros_healthd.mojom.CrosHealthdAudioObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.cros_healthd.mojom.CrosHealthdAudioObserverRemote = class {
  static get $interfaceName() {
    return 'ash.cros_healthd.mojom.CrosHealthdAudioObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.cros_healthd.mojom.CrosHealthdAudioObserverPendingReceiver,
      handle);
    this.$ = new ash.cros_healthd.mojom.CrosHealthdAudioObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onUnderrun() {
    return this.$.onUnderrun();
  }
  onSevereUnderrun() {
    return this.$.onSevereUnderrun();
  }
};

ash.cros_healthd.mojom.CrosHealthdAudioObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CrosHealthdAudioObserver', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
  }

  onUnderrun() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdAudioObserver_OnUnderrun_ParamsSpec,
      null,
      [],
      false);
  }

  onSevereUnderrun() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdAudioObserver_OnSevereUnderrun_ParamsSpec,
      null,
      [],
      false);
  }

};

ash.cros_healthd.mojom.CrosHealthdAudioObserver.getRemote = function() {
  let remote = new ash.cros_healthd.mojom.CrosHealthdAudioObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cros_healthd.mojom.CrosHealthdAudioObserver',
    'context');
  return remote.$;
};

ash.cros_healthd.mojom.CrosHealthdAudioObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CrosHealthdAudioObserver', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdAudioObserver_OnUnderrun_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdAudioObserver_OnSevereUnderrun_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdAudioObserver_OnUnderrun_ParamsSpec.$.structSpec);
          const result = this.impl.onUnderrun();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdAudioObserver_OnSevereUnderrun_ParamsSpec.$.structSpec);
          const result = this.impl.onSevereUnderrun();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.cros_healthd.mojom.CrosHealthdAudioObserverReceiver = ash.cros_healthd.mojom.CrosHealthdAudioObserverReceiver;

ash.cros_healthd.mojom.CrosHealthdAudioObserverPtr = ash.cros_healthd.mojom.CrosHealthdAudioObserverRemote;
ash.cros_healthd.mojom.CrosHealthdAudioObserverRequest = ash.cros_healthd.mojom.CrosHealthdAudioObserverPendingReceiver;


// Interface: CrosHealthdThunderboltObserver
mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdThunderboltObserver_OnAdd_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdThunderboltObserver_OnAdd_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdThunderboltObserver_OnRemove_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdThunderboltObserver_OnRemove_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdThunderboltObserver_OnAuthorized_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdThunderboltObserver_OnAuthorized_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdThunderboltObserver_OnUnAuthorized_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdThunderboltObserver_OnUnAuthorized_Params', [
    ],
    [[0, 8]]);

ash.cros_healthd.mojom.CrosHealthdThunderboltObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.cros_healthd.mojom.CrosHealthdThunderboltObserverRemote = class {
  static get $interfaceName() {
    return 'ash.cros_healthd.mojom.CrosHealthdThunderboltObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.cros_healthd.mojom.CrosHealthdThunderboltObserverPendingReceiver,
      handle);
    this.$ = new ash.cros_healthd.mojom.CrosHealthdThunderboltObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onAdd() {
    return this.$.onAdd();
  }
  onRemove() {
    return this.$.onRemove();
  }
  onAuthorized() {
    return this.$.onAuthorized();
  }
  onUnAuthorized() {
    return this.$.onUnAuthorized();
  }
};

ash.cros_healthd.mojom.CrosHealthdThunderboltObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CrosHealthdThunderboltObserver', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
    ]);
  }

  onAdd() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdThunderboltObserver_OnAdd_ParamsSpec,
      null,
      [],
      false);
  }

  onRemove() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdThunderboltObserver_OnRemove_ParamsSpec,
      null,
      [],
      false);
  }

  onAuthorized() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdThunderboltObserver_OnAuthorized_ParamsSpec,
      null,
      [],
      false);
  }

  onUnAuthorized() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdThunderboltObserver_OnUnAuthorized_ParamsSpec,
      null,
      [],
      false);
  }

};

ash.cros_healthd.mojom.CrosHealthdThunderboltObserver.getRemote = function() {
  let remote = new ash.cros_healthd.mojom.CrosHealthdThunderboltObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cros_healthd.mojom.CrosHealthdThunderboltObserver',
    'context');
  return remote.$;
};

ash.cros_healthd.mojom.CrosHealthdThunderboltObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CrosHealthdThunderboltObserver', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdThunderboltObserver_OnAdd_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdThunderboltObserver_OnRemove_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdThunderboltObserver_OnAuthorized_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdThunderboltObserver_OnUnAuthorized_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdThunderboltObserver_OnAdd_ParamsSpec.$.structSpec);
          const result = this.impl.onAdd();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdThunderboltObserver_OnRemove_ParamsSpec.$.structSpec);
          const result = this.impl.onRemove();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdThunderboltObserver_OnAuthorized_ParamsSpec.$.structSpec);
          const result = this.impl.onAuthorized();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdThunderboltObserver_OnUnAuthorized_ParamsSpec.$.structSpec);
          const result = this.impl.onUnAuthorized();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.cros_healthd.mojom.CrosHealthdThunderboltObserverReceiver = ash.cros_healthd.mojom.CrosHealthdThunderboltObserverReceiver;

ash.cros_healthd.mojom.CrosHealthdThunderboltObserverPtr = ash.cros_healthd.mojom.CrosHealthdThunderboltObserverRemote;
ash.cros_healthd.mojom.CrosHealthdThunderboltObserverRequest = ash.cros_healthd.mojom.CrosHealthdThunderboltObserverPendingReceiver;


// Interface: CrosHealthdUsbObserver
mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdUsbObserver_OnAdd_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdUsbObserver_OnAdd_Params', [
      mojo.internal.StructField('info', 0, 0, ash.cros_healthd.mojom.UsbEventInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdUsbObserver_OnRemove_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdUsbObserver_OnRemove_Params', [
      mojo.internal.StructField('info', 0, 0, ash.cros_healthd.mojom.UsbEventInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.cros_healthd.mojom.CrosHealthdUsbObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.cros_healthd.mojom.CrosHealthdUsbObserverRemote = class {
  static get $interfaceName() {
    return 'ash.cros_healthd.mojom.CrosHealthdUsbObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.cros_healthd.mojom.CrosHealthdUsbObserverPendingReceiver,
      handle);
    this.$ = new ash.cros_healthd.mojom.CrosHealthdUsbObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onAdd(info) {
    return this.$.onAdd(info);
  }
  onRemove(info) {
    return this.$.onRemove(info);
  }
};

ash.cros_healthd.mojom.CrosHealthdUsbObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CrosHealthdUsbObserver', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
  }

  onAdd(info) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdUsbObserver_OnAdd_ParamsSpec,
      null,
      [info],
      false);
  }

  onRemove(info) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdUsbObserver_OnRemove_ParamsSpec,
      null,
      [info],
      false);
  }

};

ash.cros_healthd.mojom.CrosHealthdUsbObserver.getRemote = function() {
  let remote = new ash.cros_healthd.mojom.CrosHealthdUsbObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cros_healthd.mojom.CrosHealthdUsbObserver',
    'context');
  return remote.$;
};

ash.cros_healthd.mojom.CrosHealthdUsbObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CrosHealthdUsbObserver', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdUsbObserver_OnAdd_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdUsbObserver_OnRemove_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdUsbObserver_OnAdd_ParamsSpec.$.structSpec);
          const result = this.impl.onAdd(params.info);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdUsbObserver_OnRemove_ParamsSpec.$.structSpec);
          const result = this.impl.onRemove(params.info);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.cros_healthd.mojom.CrosHealthdUsbObserverReceiver = ash.cros_healthd.mojom.CrosHealthdUsbObserverReceiver;

ash.cros_healthd.mojom.CrosHealthdUsbObserverPtr = ash.cros_healthd.mojom.CrosHealthdUsbObserverRemote;
ash.cros_healthd.mojom.CrosHealthdUsbObserverRequest = ash.cros_healthd.mojom.CrosHealthdUsbObserverPendingReceiver;


// Interface: CrosHealthdSdCardObserver
mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdSdCardObserver_OnAdd_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdSdCardObserver_OnAdd_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cros_healthd.mojom.CrosHealthdSdCardObserver_OnRemove_ParamsSpec, 'ash.cros_healthd.mojom.CrosHealthdSdCardObserver_OnRemove_Params', [
    ],
    [[0, 8]]);

ash.cros_healthd.mojom.CrosHealthdSdCardObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.cros_healthd.mojom.CrosHealthdSdCardObserverRemote = class {
  static get $interfaceName() {
    return 'ash.cros_healthd.mojom.CrosHealthdSdCardObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.cros_healthd.mojom.CrosHealthdSdCardObserverPendingReceiver,
      handle);
    this.$ = new ash.cros_healthd.mojom.CrosHealthdSdCardObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onAdd() {
    return this.$.onAdd();
  }
  onRemove() {
    return this.$.onRemove();
  }
};

ash.cros_healthd.mojom.CrosHealthdSdCardObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CrosHealthdSdCardObserver', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
  }

  onAdd() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdSdCardObserver_OnAdd_ParamsSpec,
      null,
      [],
      false);
  }

  onRemove() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.cros_healthd.mojom.CrosHealthdSdCardObserver_OnRemove_ParamsSpec,
      null,
      [],
      false);
  }

};

ash.cros_healthd.mojom.CrosHealthdSdCardObserver.getRemote = function() {
  let remote = new ash.cros_healthd.mojom.CrosHealthdSdCardObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cros_healthd.mojom.CrosHealthdSdCardObserver',
    'context');
  return remote.$;
};

ash.cros_healthd.mojom.CrosHealthdSdCardObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CrosHealthdSdCardObserver', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdSdCardObserver_OnAdd_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdSdCardObserver_OnRemove_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdSdCardObserver_OnAdd_ParamsSpec.$.structSpec);
          const result = this.impl.onAdd();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.CrosHealthdSdCardObserver_OnRemove_ParamsSpec.$.structSpec);
          const result = this.impl.onRemove();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.cros_healthd.mojom.CrosHealthdSdCardObserverReceiver = ash.cros_healthd.mojom.CrosHealthdSdCardObserverReceiver;

ash.cros_healthd.mojom.CrosHealthdSdCardObserverPtr = ash.cros_healthd.mojom.CrosHealthdSdCardObserverRemote;
ash.cros_healthd.mojom.CrosHealthdSdCardObserverRequest = ash.cros_healthd.mojom.CrosHealthdSdCardObserverPendingReceiver;


// Interface: EventObserver
mojo.internal.Struct(
    ash.cros_healthd.mojom.EventObserver_OnEvent_ParamsSpec, 'ash.cros_healthd.mojom.EventObserver_OnEvent_Params', [
      mojo.internal.StructField('info', 0, 0, ash.cros_healthd.mojom.EventInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.cros_healthd.mojom.EventObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.cros_healthd.mojom.EventObserverRemote = class {
  static get $interfaceName() {
    return 'ash.cros_healthd.mojom.EventObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.cros_healthd.mojom.EventObserverPendingReceiver,
      handle);
    this.$ = new ash.cros_healthd.mojom.EventObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onEvent(info) {
    return this.$.onEvent(info);
  }
};

ash.cros_healthd.mojom.EventObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('EventObserver', [
      { explicit: 0 },
    ]);
  }

  onEvent(info) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.cros_healthd.mojom.EventObserver_OnEvent_ParamsSpec,
      null,
      [info],
      false);
  }

};

ash.cros_healthd.mojom.EventObserver.getRemote = function() {
  let remote = new ash.cros_healthd.mojom.EventObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cros_healthd.mojom.EventObserver',
    'context');
  return remote.$;
};

ash.cros_healthd.mojom.EventObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('EventObserver', [
      { explicit: 0 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cros_healthd.mojom.EventObserver_OnEvent_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cros_healthd.mojom.EventObserver_OnEvent_ParamsSpec.$.structSpec);
          const result = this.impl.onEvent(params.info);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.cros_healthd.mojom.EventObserverReceiver = ash.cros_healthd.mojom.EventObserverReceiver;

ash.cros_healthd.mojom.EventObserverPtr = ash.cros_healthd.mojom.EventObserverRemote;
ash.cros_healthd.mojom.EventObserverRequest = ash.cros_healthd.mojom.EventObserverPendingReceiver;

