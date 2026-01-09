// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/telemetry_event_service.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};


// Enum: State
crosapi.mojom.State = {
  kAdd: 0,
  kRemove: 1,
};
crosapi.mojom.StateSpec = { $: mojo.internal.Enum() };

// Enum: DeviceType
crosapi.mojom.DeviceType = {
  kHeadphone: 0,
  kMicrophone: 1,
};
crosapi.mojom.DeviceTypeSpec = { $: mojo.internal.Enum() };

// Enum: State
crosapi.mojom.State = {
  kClosed: 0,
  kOpened: 1,
};
crosapi.mojom.StateSpec = { $: mojo.internal.Enum() };

// Enum: State
crosapi.mojom.State = {
  kAdd: 0,
  kRemove: 1,
};
crosapi.mojom.StateSpec = { $: mojo.internal.Enum() };

// Enum: State
crosapi.mojom.State = {
  kAdd: 0,
  kRemove: 1,
};
crosapi.mojom.StateSpec = { $: mojo.internal.Enum() };

// Enum: State
crosapi.mojom.State = {
  kAdd: 0,
  kRemove: 1,
};
crosapi.mojom.StateSpec = { $: mojo.internal.Enum() };

// Enum: State
crosapi.mojom.State = {
  kAcInserted: 0,
  kAcRemoved: 1,
  kOsSuspend: 2,
  kOsResume: 3,
};
crosapi.mojom.StateSpec = { $: mojo.internal.Enum() };

// Enum: State
crosapi.mojom.State = {
  kInserted: 0,
  kRemoved: 1,
};
crosapi.mojom.StateSpec = { $: mojo.internal.Enum() };

// Enum: TelemetryInputTouchButton
crosapi.mojom.TelemetryInputTouchButton = {
  kLeft: 0,
  kMiddle: 1,
  kRight: 2,
};
crosapi.mojom.TelemetryInputTouchButtonSpec = { $: mojo.internal.Enum() };

// Enum: State
crosapi.mojom.State = {
  kPressed: 0,
  kReleased: 1,
};
crosapi.mojom.StateSpec = { $: mojo.internal.Enum() };

// Enum: TelemetryEventCategoryEnum
crosapi.mojom.TelemetryEventCategoryEnum = {
  kAudioJack: 0,
};
crosapi.mojom.TelemetryEventCategoryEnumSpec = { $: mojo.internal.Enum() };

// Union: TelemetryEventInfo
crosapi.mojom.TelemetryEventInfoSpec = { $: mojo.internal.Union(
    'crosapi.mojom.TelemetryEventInfo', {
      'default_type': {
        'ordinal': 0,
        'type': mojo.internal.Uint8,
      }},
      'audio_jack_event_info': {
        'ordinal': 1,
        'type': crosapi.mojom.TelemetryAudioJackEventInfoSpec,
      }},
      'lid_event_info': {
        'ordinal': 2,
        'type': crosapi.mojom.TelemetryLidEventInfoSpec,
      }},
      'usb_event_info': {
        'ordinal': 3,
        'type': crosapi.mojom.TelemetryUsbEventInfoSpec,
      }},
      'sd_card_event_info': {
        'ordinal': 4,
        'type': crosapi.mojom.TelemetrySdCardEventInfoSpec,
      }},
      'power_event_info': {
        'ordinal': 5,
        'type': crosapi.mojom.TelemetryPowerEventInfoSpec,
      }},
      'keyboard_diagnostic_event_info': {
        'ordinal': 6,
        'type': crosapi.mojom.TelemetryKeyboardDiagnosticEventInfoSpec,
      }},
      'stylus_garage_event_info': {
        'ordinal': 7,
        'type': crosapi.mojom.TelemetryStylusGarageEventInfoSpec,
      }},
      'touchpad_button_event_info': {
        'ordinal': 8,
        'type': crosapi.mojom.TelemetryTouchpadButtonEventInfoSpec,
      }},
      'touchpad_touch_event_info': {
        'ordinal': 9,
        'type': crosapi.mojom.TelemetryTouchpadTouchEventInfoSpec,
      }},
      'touchpad_connected_event_info': {
        'ordinal': 10,
        'type': crosapi.mojom.TelemetryTouchpadConnectedEventInfoSpec,
      }},
      'external_display_event_info': {
        'ordinal': 11,
        'type': crosapi.mojom.TelemetryExternalDisplayEventInfoSpec,
      }},
      'stylus_touch_event_info': {
        'ordinal': 12,
        'type': crosapi.mojom.TelemetryStylusTouchEventInfoSpec,
      }},
      'stylus_connected_event_info': {
        'ordinal': 13,
        'type': crosapi.mojom.TelemetryStylusConnectedEventInfoSpec,
      }},
      'touchscreen_touch_event_info': {
        'ordinal': 14,
        'type': crosapi.mojom.TelemetryTouchscreenTouchEventInfoSpec,
      }},
      'touchscreen_connected_event_info': {
        'ordinal': 15,
        'type': crosapi.mojom.TelemetryTouchscreenConnectedEventInfoSpec,
      }},
    })
};

// Struct: TelemetryAudioJackEventInfo
crosapi.mojom.TelemetryAudioJackEventInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryAudioJackEventInfo',
      packedSize: 16,
      fields: [
        { name: 'kUnmappedEnumField', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: TelemetryLidEventInfo
crosapi.mojom.TelemetryLidEventInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryLidEventInfo',
      packedSize: 16,
      fields: [
        { name: 'kUnmappedEnumField', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: TelemetryUsbEventInfo
crosapi.mojom.TelemetryUsbEventInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryUsbEventInfo',
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

// Struct: TelemetryExternalDisplayEventInfo
crosapi.mojom.TelemetryExternalDisplayEventInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryExternalDisplayEventInfo',
      packedSize: 16,
      fields: [
        { name: 'kUnmappedEnumField', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: TelemetrySdCardEventInfo
crosapi.mojom.TelemetrySdCardEventInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetrySdCardEventInfo',
      packedSize: 16,
      fields: [
        { name: 'kUnmappedEnumField', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: TelemetryPowerEventInfo
crosapi.mojom.TelemetryPowerEventInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryPowerEventInfo',
      packedSize: 16,
      fields: [
        { name: 'kUnmappedEnumField', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: TelemetryStylusGarageEventInfo
crosapi.mojom.TelemetryStylusGarageEventInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryStylusGarageEventInfo',
      packedSize: 16,
      fields: [
        { name: 'kUnmappedEnumField', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: TelemetryTouchpadButtonEventInfo
crosapi.mojom.TelemetryTouchpadButtonEventInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryTouchpadButtonEventInfo',
      packedSize: 24,
      fields: [
        { name: 'button', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.TelemetryInputTouchButtonSpec, nullable: false, minVersion: 0 },
        { name: 'kUnmappedEnumField', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: TelemetryTouchPointInfo
crosapi.mojom.TelemetryTouchPointInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryTouchPointInfo',
      packedSize: 48,
      fields: [
        { name: 'tracking_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'x', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'y', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'pressure', packedOffset: 16, packedBitOffset: 0, type: crosapi.mojom.UInt32ValueSpec, nullable: true, minVersion: 0 },
        { name: 'touch_major', packedOffset: 24, packedBitOffset: 0, type: crosapi.mojom.UInt32ValueSpec, nullable: true, minVersion: 0 },
        { name: 'touch_minor', packedOffset: 32, packedBitOffset: 0, type: crosapi.mojom.UInt32ValueSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: TelemetryTouchpadTouchEventInfo
crosapi.mojom.TelemetryTouchpadTouchEventInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryTouchpadTouchEventInfo',
      packedSize: 16,
      fields: [
        { name: 'touch_points', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(crosapi.mojom.TelemetryTouchPointInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: TelemetryTouchpadConnectedEventInfo
crosapi.mojom.TelemetryTouchpadConnectedEventInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryTouchpadConnectedEventInfo',
      packedSize: 32,
      fields: [
        { name: 'max_x', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'max_y', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'max_pressure', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'buttons', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(crosapi.mojom.TelemetryInputTouchButtonSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: TelemetryTouchscreenTouchEventInfo
crosapi.mojom.TelemetryTouchscreenTouchEventInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryTouchscreenTouchEventInfo',
      packedSize: 16,
      fields: [
        { name: 'touch_points', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(crosapi.mojom.TelemetryTouchPointInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: TelemetryTouchscreenConnectedEventInfo
crosapi.mojom.TelemetryTouchscreenConnectedEventInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryTouchscreenConnectedEventInfo',
      packedSize: 24,
      fields: [
        { name: 'max_x_$flag', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'max_x_$value', originalFieldName: 'max_x' } },
        { name: 'max_x_$value', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'max_x_$flag', originalFieldName: 'max_x' } },
        { name: 'max_y_$flag', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'max_y_$value', originalFieldName: 'max_y' } },
        { name: 'max_y_$value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'max_y_$flag', originalFieldName: 'max_y' } },
        { name: 'max_pressure_$flag', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'max_pressure_$value', originalFieldName: 'max_pressure' } },
        { name: 'max_pressure_$value', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'max_pressure_$flag', originalFieldName: 'max_pressure' } },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: TelemetryStylusTouchPointInfo
crosapi.mojom.TelemetryStylusTouchPointInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryStylusTouchPointInfo',
      packedSize: 24,
      fields: [
        { name: 'x_$flag', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'x_$value', originalFieldName: 'x' } },
        { name: 'x_$value', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'x_$flag', originalFieldName: 'x' } },
        { name: 'y_$flag', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'y_$value', originalFieldName: 'y' } },
        { name: 'y_$value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'y_$flag', originalFieldName: 'y' } },
        { name: 'pressure_$flag', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'pressure_$value', originalFieldName: 'pressure' } },
        { name: 'pressure_$value', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'pressure_$flag', originalFieldName: 'pressure' } },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: TelemetryStylusTouchEventInfo
crosapi.mojom.TelemetryStylusTouchEventInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryStylusTouchEventInfo',
      packedSize: 16,
      fields: [
        { name: 'touch_point', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.TelemetryStylusTouchPointInfoSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: TelemetryStylusConnectedEventInfo
crosapi.mojom.TelemetryStylusConnectedEventInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryStylusConnectedEventInfo',
      packedSize: 24,
      fields: [
        { name: 'max_x_$flag', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'max_x_$value', originalFieldName: 'max_x' } },
        { name: 'max_x_$value', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'max_x_$flag', originalFieldName: 'max_x' } },
        { name: 'max_y_$flag', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'max_y_$value', originalFieldName: 'max_y' } },
        { name: 'max_y_$value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'max_y_$flag', originalFieldName: 'max_y' } },
        { name: 'max_pressure_$flag', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'max_pressure_$value', originalFieldName: 'max_pressure' } },
        { name: 'max_pressure_$value', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'max_pressure_$flag', originalFieldName: 'max_pressure' } },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: TelemetryEventObserver
crosapi.mojom.TelemetryEventObserver = {};

crosapi.mojom.TelemetryEventObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.TelemetryEventObserverRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.TelemetryEventObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.TelemetryEventObserverPendingReceiver,
      handle);
    this.$ = new crosapi.mojom.TelemetryEventObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.TelemetryEventObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onEvent(info) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      crosapi.mojom.TelemetryEventObserver_OnEvent_ParamsSpec,
      null,
      [info]);
  }

};

crosapi.mojom.TelemetryEventObserver.getRemote = function() {
  let remote = new crosapi.mojom.TelemetryEventObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.TelemetryEventObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnEvent
crosapi.mojom.TelemetryEventObserver_OnEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryEventObserver.OnEvent_Params',
      packedSize: 24,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.TelemetryEventInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
crosapi.mojom.TelemetryEventObserverPtr = crosapi.mojom.TelemetryEventObserverRemote;
crosapi.mojom.TelemetryEventObserverRequest = crosapi.mojom.TelemetryEventObserverPendingReceiver;


// Interface: TelemetryEventService
crosapi.mojom.TelemetryEventService = {};

crosapi.mojom.TelemetryEventServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.TelemetryEventServiceRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.TelemetryEventService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.TelemetryEventServicePendingReceiver,
      handle);
    this.$ = new crosapi.mojom.TelemetryEventServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.TelemetryEventServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addEventObserver(category, observer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      crosapi.mojom.TelemetryEventService_AddEventObserver_ParamsSpec,
      null,
      [category, observer]);
  }

  isEventSupported(category) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      crosapi.mojom.TelemetryEventService_IsEventSupported_ParamsSpec,
      crosapi.mojom.TelemetryEventService_IsEventSupported_ResponseParamsSpec,
      [category]);
  }

};

crosapi.mojom.TelemetryEventService.getRemote = function() {
  let remote = new crosapi.mojom.TelemetryEventServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.TelemetryEventService',
    'context');
  return remote.$;
};

// ParamsSpec for AddEventObserver
crosapi.mojom.TelemetryEventService_AddEventObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryEventService.AddEventObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'category', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.TelemetryEventCategoryEnumSpec, nullable: false, minVersion: 0 },
        { name: 'observer', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for IsEventSupported
crosapi.mojom.TelemetryEventService_IsEventSupported_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryEventService.IsEventSupported_Params',
      packedSize: 16,
      fields: [
        { name: 'category', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.TelemetryEventCategoryEnumSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.TelemetryEventService_IsEventSupported_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: crosapi.mojom.TelemetryExtensionSupportStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
crosapi.mojom.TelemetryEventServicePtr = crosapi.mojom.TelemetryEventServiceRemote;
crosapi.mojom.TelemetryEventServiceRequest = crosapi.mojom.TelemetryEventServicePendingReceiver;

