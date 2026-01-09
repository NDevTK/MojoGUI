// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/cros_healthd/public/mojom/cros_healthd_events.mojom
// Module: ash.cros_healthd.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.cros_healthd = ash.cros_healthd || {};
ash.cros_healthd.mojom = ash.cros_healthd.mojom || {};


// Enum: State
ash.cros_healthd.mojom.State = {
  kAdd: 0,
  kRemove: 1,
};
ash.cros_healthd.mojom.StateSpec = { $: mojo.internal.Enum() };

// Enum: State
ash.cros_healthd.mojom.State = {
  kAdd: 0,
  kRemove: 1,
  kAuthorized: 2,
  kUnAuthorized: 3,
};
ash.cros_healthd.mojom.StateSpec = { $: mojo.internal.Enum() };

// Enum: State
ash.cros_healthd.mojom.State = {
  kClosed: 0,
  kOpened: 1,
};
ash.cros_healthd.mojom.StateSpec = { $: mojo.internal.Enum() };

// Enum: State
ash.cros_healthd.mojom.State = {
  kAdapterAdded: 0,
  kAdapterRemoved: 1,
  kAdapterPropertyChanged: 2,
  kDeviceAdded: 3,
  kDeviceRemoved: 4,
  kDevicePropertyChanged: 5,
};
ash.cros_healthd.mojom.StateSpec = { $: mojo.internal.Enum() };

// Enum: State
ash.cros_healthd.mojom.State = {
  kAcInserted: 0,
  kAcRemoved: 1,
  kOsSuspend: 2,
  kOsResume: 3,
};
ash.cros_healthd.mojom.StateSpec = { $: mojo.internal.Enum() };

// Enum: State
ash.cros_healthd.mojom.State = {
  kUnderrun: 0,
  kSevereUnderrun: 1,
};
ash.cros_healthd.mojom.StateSpec = { $: mojo.internal.Enum() };

// Enum: State
ash.cros_healthd.mojom.State = {
  kAdd: 0,
  kRemove: 1,
};
ash.cros_healthd.mojom.StateSpec = { $: mojo.internal.Enum() };

// Enum: DeviceType
ash.cros_healthd.mojom.DeviceType = {
  kHeadphone: 0,
  kMicrophone: 1,
};
ash.cros_healthd.mojom.DeviceTypeSpec = { $: mojo.internal.Enum() };

// Enum: State
ash.cros_healthd.mojom.State = {
  kAdd: 0,
  kRemove: 1,
};
ash.cros_healthd.mojom.StateSpec = { $: mojo.internal.Enum() };

// Enum: InputTouchButton
ash.cros_healthd.mojom.InputTouchButton = {
  kLeft: 0,
  kMiddle: 1,
  kRight: 2,
};
ash.cros_healthd.mojom.InputTouchButtonSpec = { $: mojo.internal.Enum() };

// Enum: State
ash.cros_healthd.mojom.State = {
  kAdd: 0,
  kRemove: 1,
};
ash.cros_healthd.mojom.StateSpec = { $: mojo.internal.Enum() };

// Enum: State
ash.cros_healthd.mojom.State = {
  kInserted: 0,
  kRemoved: 1,
};
ash.cros_healthd.mojom.StateSpec = { $: mojo.internal.Enum() };

// Enum: CrashType
ash.cros_healthd.mojom.CrashType = {
  kKernel: 0,
  kEmbeddedController: 1,
};
ash.cros_healthd.mojom.CrashTypeSpec = { $: mojo.internal.Enum() };

// Enum: EventCategoryEnum
ash.cros_healthd.mojom.EventCategoryEnum = {
  kUsb: 0,
  kThunderbolt: 1,
  kLid: 2,
  kBluetooth: 3,
  kPower: 4,
  kAudio: 5,
};
ash.cros_healthd.mojom.EventCategoryEnumSpec = { $: mojo.internal.Enum() };

// Union: TouchpadEventInfo
ash.cros_healthd.mojom.TouchpadEventInfoSpec = { $: mojo.internal.Union(
    'ash.cros_healthd.mojom.TouchpadEventInfo', {
      'default_type': {
        'ordinal': 0,
        'type': mojo.internal.Uint8,
      }},
      'button_event': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.TouchpadButtonEventSpec,
      }},
      'touch_event': {
        'ordinal': 2,
        'type': ash.cros_healthd.mojom.TouchpadTouchEventSpec,
      }},
      'connected_event': {
        'ordinal': 3,
        'type': ash.cros_healthd.mojom.TouchpadConnectedEventSpec,
      }},
    })
};

// Union: TouchscreenEventInfo
ash.cros_healthd.mojom.TouchscreenEventInfoSpec = { $: mojo.internal.Union(
    'ash.cros_healthd.mojom.TouchscreenEventInfo', {
      'default_type': {
        'ordinal': 0,
        'type': mojo.internal.Uint8,
      }},
      'touch_event': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.TouchscreenTouchEventSpec,
      }},
      'connected_event': {
        'ordinal': 2,
        'type': ash.cros_healthd.mojom.TouchscreenConnectedEventSpec,
      }},
    })
};

// Union: StylusEventInfo
ash.cros_healthd.mojom.StylusEventInfoSpec = { $: mojo.internal.Union(
    'ash.cros_healthd.mojom.StylusEventInfo', {
      'default_type': {
        'ordinal': 0,
        'type': mojo.internal.Uint8,
      }},
      'touch_event': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.StylusTouchEventSpec,
      }},
      'connected_event': {
        'ordinal': 2,
        'type': ash.cros_healthd.mojom.StylusConnectedEventSpec,
      }},
    })
};

// Union: EventInfo
ash.cros_healthd.mojom.EventInfoSpec = { $: mojo.internal.Union(
    'ash.cros_healthd.mojom.EventInfo', {
      'default_type': {
        'ordinal': 0,
        'type': mojo.internal.Uint8,
      }},
      'usb_event_info': {
        'ordinal': 1,
        'type': ash.cros_healthd.mojom.UsbEventInfoSpec,
      }},
      'thunderbolt_event_info': {
        'ordinal': 2,
        'type': ash.cros_healthd.mojom.ThunderboltEventInfoSpec,
      }},
      'lid_event_info': {
        'ordinal': 3,
        'type': ash.cros_healthd.mojom.LidEventInfoSpec,
      }},
      'bluetooth_event_info': {
        'ordinal': 4,
        'type': ash.cros_healthd.mojom.BluetoothEventInfoSpec,
      }},
      'power_event_info': {
        'ordinal': 5,
        'type': ash.cros_healthd.mojom.PowerEventInfoSpec,
      }},
      'audio_event_info': {
        'ordinal': 6,
        'type': ash.cros_healthd.mojom.AudioEventInfoSpec,
      }},
      'audio_jack_event_info': {
        'ordinal': 7,
        'type': ash.cros_healthd.mojom.AudioJackEventInfoSpec,
      }},
      'sd_card_event_info': {
        'ordinal': 8,
        'type': ash.cros_healthd.mojom.SdCardEventInfoSpec,
      }},
      'keyboard_diagnostic_event_info': {
        'ordinal': 9,
        'type': ash.diagnostics.mojom.KeyboardDiagnosticEventInfoSpec,
      }},
      'touchpad_event_info': {
        'ordinal': 10,
        'type': ash.cros_healthd.mojom.TouchpadEventInfoSpec,
      }},
      'external_display_event_info': {
        'ordinal': 11,
        'type': ash.cros_healthd.mojom.ExternalDisplayEventInfoSpec,
      }},
      'touchscreen_event_info': {
        'ordinal': 12,
        'type': ash.cros_healthd.mojom.TouchscreenEventInfoSpec,
      }},
      'stylus_garage_event_info': {
        'ordinal': 13,
        'type': ash.cros_healthd.mojom.StylusGarageEventInfoSpec,
      }},
      'stylus_event_info': {
        'ordinal': 14,
        'type': ash.cros_healthd.mojom.StylusEventInfoSpec,
      }},
      'crash_event_info': {
        'ordinal': 15,
        'type': ash.cros_healthd.mojom.CrashEventInfoSpec,
      }},
    })
};

// Struct: UsbEventInfo
ash.cros_healthd.mojom.UsbEventInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.UsbEventInfo',
      packedSize: 48,
      fields: [
        { name: 'vendor', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'vid', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
        { name: 'pid', packedOffset: 18, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
        { name: 'categories', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'kUnmappedEnumField', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: ThunderboltEventInfo
ash.cros_healthd.mojom.ThunderboltEventInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.ThunderboltEventInfo',
      packedSize: 16,
      fields: [
        { name: 'kUnmappedEnumField', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: LidEventInfo
ash.cros_healthd.mojom.LidEventInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.LidEventInfo',
      packedSize: 16,
      fields: [
        { name: 'kUnmappedEnumField', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: BluetoothEventInfo
ash.cros_healthd.mojom.BluetoothEventInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.BluetoothEventInfo',
      packedSize: 16,
      fields: [
        { name: 'kUnmappedEnumField', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: PowerEventInfo
ash.cros_healthd.mojom.PowerEventInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.PowerEventInfo',
      packedSize: 16,
      fields: [
        { name: 'kUnmappedEnumField', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: AudioEventInfo
ash.cros_healthd.mojom.AudioEventInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.AudioEventInfo',
      packedSize: 16,
      fields: [
        { name: 'kUnmappedEnumField', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: AudioJackEventInfo
ash.cros_healthd.mojom.AudioJackEventInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.AudioJackEventInfo',
      packedSize: 16,
      fields: [
        { name: 'kUnmappedEnumField', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: SdCardEventInfo
ash.cros_healthd.mojom.SdCardEventInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.SdCardEventInfo',
      packedSize: 16,
      fields: [
        { name: 'kUnmappedEnumField', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: TouchpadButtonEvent
ash.cros_healthd.mojom.TouchpadButtonEventSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.TouchpadButtonEvent',
      packedSize: 16,
      fields: [
        { name: 'button', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.InputTouchButtonSpec, nullable: false, minVersion: 0 },
        { name: 'pressed', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: TouchPointInfo
ash.cros_healthd.mojom.TouchPointInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.TouchPointInfo',
      packedSize: 48,
      fields: [
        { name: 'tracking_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'x', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'y', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'pressure', packedOffset: 16, packedBitOffset: 0, type: ash.cros_healthd.mojom.NullableUint32Spec, nullable: true, minVersion: 0 },
        { name: 'touch_major', packedOffset: 24, packedBitOffset: 0, type: ash.cros_healthd.mojom.NullableUint32Spec, nullable: true, minVersion: 0 },
        { name: 'touch_minor', packedOffset: 32, packedBitOffset: 0, type: ash.cros_healthd.mojom.NullableUint32Spec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: TouchpadTouchEvent
ash.cros_healthd.mojom.TouchpadTouchEventSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.TouchpadTouchEvent',
      packedSize: 16,
      fields: [
        { name: 'touch_points', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.cros_healthd.mojom.TouchPointInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: TouchpadConnectedEvent
ash.cros_healthd.mojom.TouchpadConnectedEventSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.TouchpadConnectedEvent',
      packedSize: 32,
      fields: [
        { name: 'max_x', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'max_y', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'max_pressure', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'buttons', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(ash.cros_healthd.mojom.InputTouchButtonSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: ExternalDisplayEventInfo
ash.cros_healthd.mojom.ExternalDisplayEventInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.ExternalDisplayEventInfo',
      packedSize: 16,
      fields: [
        { name: 'kUnmappedEnumField', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: TouchscreenTouchEvent
ash.cros_healthd.mojom.TouchscreenTouchEventSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.TouchscreenTouchEvent',
      packedSize: 16,
      fields: [
        { name: 'touch_points', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.cros_healthd.mojom.TouchPointInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: TouchscreenConnectedEvent
ash.cros_healthd.mojom.TouchscreenConnectedEventSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.TouchscreenConnectedEvent',
      packedSize: 24,
      fields: [
        { name: 'max_x', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'max_y', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'max_pressure', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: StylusGarageEventInfo
ash.cros_healthd.mojom.StylusGarageEventInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.StylusGarageEventInfo',
      packedSize: 16,
      fields: [
        { name: 'kUnmappedEnumField', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: StylusTouchPointInfo
ash.cros_healthd.mojom.StylusTouchPointInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.StylusTouchPointInfo',
      packedSize: 24,
      fields: [
        { name: 'x', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'y', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'pressure', packedOffset: 8, packedBitOffset: 0, type: ash.cros_healthd.mojom.NullableUint32Spec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: StylusTouchEvent
ash.cros_healthd.mojom.StylusTouchEventSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.StylusTouchEvent',
      packedSize: 16,
      fields: [
        { name: 'touch_point', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.StylusTouchPointInfoSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: StylusConnectedEvent
ash.cros_healthd.mojom.StylusConnectedEventSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.StylusConnectedEvent',
      packedSize: 24,
      fields: [
        { name: 'max_x', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'max_y', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'max_pressure', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: CrashUploadInfo
ash.cros_healthd.mojom.CrashUploadInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrashUploadInfo',
      packedSize: 32,
      fields: [
        { name: 'crash_report_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'creation_time', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
        { name: 'offset', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: CrashEventInfo
ash.cros_healthd.mojom.CrashEventInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrashEventInfo',
      packedSize: 16,
      fields: [
        { name: 'kUnknown', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: CrosHealthdBluetoothObserver
ash.cros_healthd.mojom.CrosHealthdBluetoothObserver = {};

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
};

ash.cros_healthd.mojom.CrosHealthdBluetoothObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onAdapterAdded() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdBluetoothObserver_OnAdapterAdded_ParamsSpec,
      null,
      []);
  }

  onAdapterRemoved() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdBluetoothObserver_OnAdapterRemoved_ParamsSpec,
      null,
      []);
  }

  onAdapterPropertyChanged() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdBluetoothObserver_OnAdapterPropertyChanged_ParamsSpec,
      null,
      []);
  }

  onDeviceAdded() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdBluetoothObserver_OnDeviceAdded_ParamsSpec,
      null,
      []);
  }

  onDeviceRemoved() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdBluetoothObserver_OnDeviceRemoved_ParamsSpec,
      null,
      []);
  }

  onDevicePropertyChanged() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdBluetoothObserver_OnDevicePropertyChanged_ParamsSpec,
      null,
      []);
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

// ParamsSpec for OnAdapterAdded
ash.cros_healthd.mojom.CrosHealthdBluetoothObserver_OnAdapterAdded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdBluetoothObserver.OnAdapterAdded_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnAdapterRemoved
ash.cros_healthd.mojom.CrosHealthdBluetoothObserver_OnAdapterRemoved_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdBluetoothObserver.OnAdapterRemoved_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnAdapterPropertyChanged
ash.cros_healthd.mojom.CrosHealthdBluetoothObserver_OnAdapterPropertyChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdBluetoothObserver.OnAdapterPropertyChanged_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnDeviceAdded
ash.cros_healthd.mojom.CrosHealthdBluetoothObserver_OnDeviceAdded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdBluetoothObserver.OnDeviceAdded_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnDeviceRemoved
ash.cros_healthd.mojom.CrosHealthdBluetoothObserver_OnDeviceRemoved_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdBluetoothObserver.OnDeviceRemoved_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnDevicePropertyChanged
ash.cros_healthd.mojom.CrosHealthdBluetoothObserver_OnDevicePropertyChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdBluetoothObserver.OnDevicePropertyChanged_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
ash.cros_healthd.mojom.CrosHealthdBluetoothObserverPtr = ash.cros_healthd.mojom.CrosHealthdBluetoothObserverRemote;
ash.cros_healthd.mojom.CrosHealthdBluetoothObserverRequest = ash.cros_healthd.mojom.CrosHealthdBluetoothObserverPendingReceiver;


// Interface: CrosHealthdLidObserver
ash.cros_healthd.mojom.CrosHealthdLidObserver = {};

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
};

ash.cros_healthd.mojom.CrosHealthdLidObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onLidClosed() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdLidObserver_OnLidClosed_ParamsSpec,
      null,
      []);
  }

  onLidOpened() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdLidObserver_OnLidOpened_ParamsSpec,
      null,
      []);
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

// ParamsSpec for OnLidClosed
ash.cros_healthd.mojom.CrosHealthdLidObserver_OnLidClosed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdLidObserver.OnLidClosed_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnLidOpened
ash.cros_healthd.mojom.CrosHealthdLidObserver_OnLidOpened_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdLidObserver.OnLidOpened_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
ash.cros_healthd.mojom.CrosHealthdLidObserverPtr = ash.cros_healthd.mojom.CrosHealthdLidObserverRemote;
ash.cros_healthd.mojom.CrosHealthdLidObserverRequest = ash.cros_healthd.mojom.CrosHealthdLidObserverPendingReceiver;


// Interface: CrosHealthdPowerObserver
ash.cros_healthd.mojom.CrosHealthdPowerObserver = {};

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
};

ash.cros_healthd.mojom.CrosHealthdPowerObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onAcInserted() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdPowerObserver_OnAcInserted_ParamsSpec,
      null,
      []);
  }

  onAcRemoved() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdPowerObserver_OnAcRemoved_ParamsSpec,
      null,
      []);
  }

  onOsSuspend() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdPowerObserver_OnOsSuspend_ParamsSpec,
      null,
      []);
  }

  onOsResume() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdPowerObserver_OnOsResume_ParamsSpec,
      null,
      []);
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

// ParamsSpec for OnAcInserted
ash.cros_healthd.mojom.CrosHealthdPowerObserver_OnAcInserted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdPowerObserver.OnAcInserted_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnAcRemoved
ash.cros_healthd.mojom.CrosHealthdPowerObserver_OnAcRemoved_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdPowerObserver.OnAcRemoved_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnOsSuspend
ash.cros_healthd.mojom.CrosHealthdPowerObserver_OnOsSuspend_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdPowerObserver.OnOsSuspend_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnOsResume
ash.cros_healthd.mojom.CrosHealthdPowerObserver_OnOsResume_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdPowerObserver.OnOsResume_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
ash.cros_healthd.mojom.CrosHealthdPowerObserverPtr = ash.cros_healthd.mojom.CrosHealthdPowerObserverRemote;
ash.cros_healthd.mojom.CrosHealthdPowerObserverRequest = ash.cros_healthd.mojom.CrosHealthdPowerObserverPendingReceiver;


// Interface: CrosHealthdAudioObserver
ash.cros_healthd.mojom.CrosHealthdAudioObserver = {};

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
};

ash.cros_healthd.mojom.CrosHealthdAudioObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onUnderrun() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdAudioObserver_OnUnderrun_ParamsSpec,
      null,
      []);
  }

  onSevereUnderrun() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdAudioObserver_OnSevereUnderrun_ParamsSpec,
      null,
      []);
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

// ParamsSpec for OnUnderrun
ash.cros_healthd.mojom.CrosHealthdAudioObserver_OnUnderrun_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdAudioObserver.OnUnderrun_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnSevereUnderrun
ash.cros_healthd.mojom.CrosHealthdAudioObserver_OnSevereUnderrun_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdAudioObserver.OnSevereUnderrun_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
ash.cros_healthd.mojom.CrosHealthdAudioObserverPtr = ash.cros_healthd.mojom.CrosHealthdAudioObserverRemote;
ash.cros_healthd.mojom.CrosHealthdAudioObserverRequest = ash.cros_healthd.mojom.CrosHealthdAudioObserverPendingReceiver;


// Interface: CrosHealthdThunderboltObserver
ash.cros_healthd.mojom.CrosHealthdThunderboltObserver = {};

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
};

ash.cros_healthd.mojom.CrosHealthdThunderboltObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onAdd() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdThunderboltObserver_OnAdd_ParamsSpec,
      null,
      []);
  }

  onRemove() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdThunderboltObserver_OnRemove_ParamsSpec,
      null,
      []);
  }

  onAuthorized() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdThunderboltObserver_OnAuthorized_ParamsSpec,
      null,
      []);
  }

  onUnAuthorized() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdThunderboltObserver_OnUnAuthorized_ParamsSpec,
      null,
      []);
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

// ParamsSpec for OnAdd
ash.cros_healthd.mojom.CrosHealthdThunderboltObserver_OnAdd_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdThunderboltObserver.OnAdd_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnRemove
ash.cros_healthd.mojom.CrosHealthdThunderboltObserver_OnRemove_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdThunderboltObserver.OnRemove_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnAuthorized
ash.cros_healthd.mojom.CrosHealthdThunderboltObserver_OnAuthorized_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdThunderboltObserver.OnAuthorized_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnUnAuthorized
ash.cros_healthd.mojom.CrosHealthdThunderboltObserver_OnUnAuthorized_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdThunderboltObserver.OnUnAuthorized_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
ash.cros_healthd.mojom.CrosHealthdThunderboltObserverPtr = ash.cros_healthd.mojom.CrosHealthdThunderboltObserverRemote;
ash.cros_healthd.mojom.CrosHealthdThunderboltObserverRequest = ash.cros_healthd.mojom.CrosHealthdThunderboltObserverPendingReceiver;


// Interface: CrosHealthdUsbObserver
ash.cros_healthd.mojom.CrosHealthdUsbObserver = {};

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
};

ash.cros_healthd.mojom.CrosHealthdUsbObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onAdd(info) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdUsbObserver_OnAdd_ParamsSpec,
      null,
      [info]);
  }

  onRemove(info) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdUsbObserver_OnRemove_ParamsSpec,
      null,
      [info]);
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

// ParamsSpec for OnAdd
ash.cros_healthd.mojom.CrosHealthdUsbObserver_OnAdd_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdUsbObserver.OnAdd_Params',
      packedSize: 16,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.UsbEventInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnRemove
ash.cros_healthd.mojom.CrosHealthdUsbObserver_OnRemove_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdUsbObserver.OnRemove_Params',
      packedSize: 16,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.UsbEventInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.cros_healthd.mojom.CrosHealthdUsbObserverPtr = ash.cros_healthd.mojom.CrosHealthdUsbObserverRemote;
ash.cros_healthd.mojom.CrosHealthdUsbObserverRequest = ash.cros_healthd.mojom.CrosHealthdUsbObserverPendingReceiver;


// Interface: CrosHealthdSdCardObserver
ash.cros_healthd.mojom.CrosHealthdSdCardObserver = {};

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
};

ash.cros_healthd.mojom.CrosHealthdSdCardObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onAdd() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdSdCardObserver_OnAdd_ParamsSpec,
      null,
      []);
  }

  onRemove() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.cros_healthd.mojom.CrosHealthdSdCardObserver_OnRemove_ParamsSpec,
      null,
      []);
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

// ParamsSpec for OnAdd
ash.cros_healthd.mojom.CrosHealthdSdCardObserver_OnAdd_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdSdCardObserver.OnAdd_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnRemove
ash.cros_healthd.mojom.CrosHealthdSdCardObserver_OnRemove_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.CrosHealthdSdCardObserver.OnRemove_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
ash.cros_healthd.mojom.CrosHealthdSdCardObserverPtr = ash.cros_healthd.mojom.CrosHealthdSdCardObserverRemote;
ash.cros_healthd.mojom.CrosHealthdSdCardObserverRequest = ash.cros_healthd.mojom.CrosHealthdSdCardObserverPendingReceiver;


// Interface: EventObserver
ash.cros_healthd.mojom.EventObserver = {};

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
};

ash.cros_healthd.mojom.EventObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onEvent(info) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.cros_healthd.mojom.EventObserver_OnEvent_ParamsSpec,
      null,
      [info]);
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

// ParamsSpec for OnEvent
ash.cros_healthd.mojom.EventObserver_OnEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.mojom.EventObserver.OnEvent_Params',
      packedSize: 24,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: ash.cros_healthd.mojom.EventInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
ash.cros_healthd.mojom.EventObserverPtr = ash.cros_healthd.mojom.EventObserverRemote;
ash.cros_healthd.mojom.EventObserverRequest = ash.cros_healthd.mojom.EventObserverPendingReceiver;

