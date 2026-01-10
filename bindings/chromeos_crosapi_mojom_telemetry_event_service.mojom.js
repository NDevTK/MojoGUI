// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/telemetry_event_service.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};

crosapi.mojom.StateSpec = { $: mojo.internal.Enum() };
crosapi.mojom.DeviceTypeSpec = { $: mojo.internal.Enum() };
crosapi.mojom.StateSpec = { $: mojo.internal.Enum() };
crosapi.mojom.StateSpec = { $: mojo.internal.Enum() };
crosapi.mojom.StateSpec = { $: mojo.internal.Enum() };
crosapi.mojom.StateSpec = { $: mojo.internal.Enum() };
crosapi.mojom.StateSpec = { $: mojo.internal.Enum() };
crosapi.mojom.StateSpec = { $: mojo.internal.Enum() };
crosapi.mojom.TelemetryInputTouchButtonSpec = { $: mojo.internal.Enum() };
crosapi.mojom.StateSpec = { $: mojo.internal.Enum() };
crosapi.mojom.TelemetryEventCategoryEnumSpec = { $: mojo.internal.Enum() };
crosapi.mojom.TelemetryEventInfoSpec = { $: {} };
crosapi.mojom.TelemetryAudioJackEventInfoSpec = { $: {} };
crosapi.mojom.TelemetryLidEventInfoSpec = { $: {} };
crosapi.mojom.TelemetryUsbEventInfoSpec = { $: {} };
crosapi.mojom.TelemetryExternalDisplayEventInfoSpec = { $: {} };
crosapi.mojom.TelemetrySdCardEventInfoSpec = { $: {} };
crosapi.mojom.TelemetryPowerEventInfoSpec = { $: {} };
crosapi.mojom.TelemetryStylusGarageEventInfoSpec = { $: {} };
crosapi.mojom.TelemetryTouchpadButtonEventInfoSpec = { $: {} };
crosapi.mojom.TelemetryTouchPointInfoSpec = { $: {} };
crosapi.mojom.TelemetryTouchpadTouchEventInfoSpec = { $: {} };
crosapi.mojom.TelemetryTouchpadConnectedEventInfoSpec = { $: {} };
crosapi.mojom.TelemetryTouchscreenTouchEventInfoSpec = { $: {} };
crosapi.mojom.TelemetryTouchscreenConnectedEventInfoSpec = { $: {} };
crosapi.mojom.TelemetryStylusTouchPointInfoSpec = { $: {} };
crosapi.mojom.TelemetryStylusTouchEventInfoSpec = { $: {} };
crosapi.mojom.TelemetryStylusConnectedEventInfoSpec = { $: {} };
crosapi.mojom.TelemetryEventObserver = {};
crosapi.mojom.TelemetryEventObserver.$interfaceName = 'crosapi.mojom.TelemetryEventObserver';
crosapi.mojom.TelemetryEventObserver_OnEvent_ParamsSpec = { $: {} };
crosapi.mojom.TelemetryEventService = {};
crosapi.mojom.TelemetryEventService.$interfaceName = 'crosapi.mojom.TelemetryEventService';
crosapi.mojom.TelemetryEventService_AddEventObserver_ParamsSpec = { $: {} };
crosapi.mojom.TelemetryEventService_IsEventSupported_ParamsSpec = { $: {} };
crosapi.mojom.TelemetryEventService_IsEventSupported_ResponseParamsSpec = { $: {} };

// Enum: State
crosapi.mojom.State = {
  kUnmappedEnumField: 0,
  kAdd: 1,
  kRemove: 2,
};

// Enum: DeviceType
crosapi.mojom.DeviceType = {
  kUnmappedEnumField: 0,
  kHeadphone: 1,
  kMicrophone: 2,
};

// Enum: State
crosapi.mojom.State = {
  kUnmappedEnumField: 0,
  kClosed: 1,
  kOpened: 2,
};

// Enum: State
crosapi.mojom.State = {
  kUnmappedEnumField: 0,
  kAdd: 1,
  kRemove: 2,
};

// Enum: State
crosapi.mojom.State = {
  kUnmappedEnumField: 0,
  kAdd: 1,
  kRemove: 2,
};

// Enum: State
crosapi.mojom.State = {
  kUnmappedEnumField: 0,
  kAdd: 1,
  kRemove: 2,
};

// Enum: State
crosapi.mojom.State = {
  kUnmappedEnumField: 0,
  kAcInserted: 1,
  kAcRemoved: 2,
  kOsSuspend: 3,
  kOsResume: 4,
};

// Enum: State
crosapi.mojom.State = {
  kUnmappedEnumField: 0,
  kInserted: 1,
  kRemoved: 2,
};

// Enum: TelemetryInputTouchButton
crosapi.mojom.TelemetryInputTouchButton = {
  kUnmappedEnumField: 0,
  kLeft: 1,
  kMiddle: 2,
  kRight: 3,
};

// Enum: State
crosapi.mojom.State = {
  kUnmappedEnumField: 0,
  kPressed: 1,
  kReleased: 2,
};

// Enum: TelemetryEventCategoryEnum
crosapi.mojom.TelemetryEventCategoryEnum = {
  kUnmappedEnumField: 0,
  kAudioJack: 1,
  MinVersion: 1,
  MinVersion: 1,
  MinVersion: 1,
  MinVersion: 1,
  MinVersion: 1,
  MinVersion: 1,
  MinVersion: 1,
  MinVersion: 1,
  MinVersion: 1,
  MinVersion: 1,
  MinVersion: 1,
  MinVersion: 1,
  MinVersion: 1,
  MinVersion: 1,
};

// Union: TelemetryEventInfo
mojo.internal.Union(
    crosapi.mojom.TelemetryEventInfoSpec, 'crosapi.mojom.TelemetryEventInfo', {
      'default_type': {
        'ordinal': 0,
        'type': mojo.internal.Uint8,
        'nullable': false,
      },
      'audio_jack_event_info': {
        'ordinal': 1,
        'type': crosapi.mojom.TelemetryAudioJackEventInfoSpec.$,
        'nullable': false,
      },
      'lid_event_info': {
        'ordinal': 2,
        'type': crosapi.mojom.TelemetryLidEventInfoSpec.$,
        'nullable': false,
      },
      'usb_event_info': {
        'ordinal': 3,
        'type': crosapi.mojom.TelemetryUsbEventInfoSpec.$,
        'nullable': false,
      },
      'sd_card_event_info': {
        'ordinal': 4,
        'type': crosapi.mojom.TelemetrySdCardEventInfoSpec.$,
        'nullable': false,
      },
      'power_event_info': {
        'ordinal': 5,
        'type': crosapi.mojom.TelemetryPowerEventInfoSpec.$,
        'nullable': false,
      },
      'keyboard_diagnostic_event_info': {
        'ordinal': 6,
        'type': crosapi.mojom.TelemetryKeyboardDiagnosticEventInfoSpec.$,
        'nullable': false,
      },
      'stylus_garage_event_info': {
        'ordinal': 7,
        'type': crosapi.mojom.TelemetryStylusGarageEventInfoSpec.$,
        'nullable': false,
      },
      'touchpad_button_event_info': {
        'ordinal': 8,
        'type': crosapi.mojom.TelemetryTouchpadButtonEventInfoSpec.$,
        'nullable': false,
      },
      'touchpad_touch_event_info': {
        'ordinal': 9,
        'type': crosapi.mojom.TelemetryTouchpadTouchEventInfoSpec.$,
        'nullable': false,
      },
      'touchpad_connected_event_info': {
        'ordinal': 10,
        'type': crosapi.mojom.TelemetryTouchpadConnectedEventInfoSpec.$,
        'nullable': false,
      },
      'external_display_event_info': {
        'ordinal': 11,
        'type': crosapi.mojom.TelemetryExternalDisplayEventInfoSpec.$,
        'nullable': false,
      },
      'stylus_touch_event_info': {
        'ordinal': 12,
        'type': crosapi.mojom.TelemetryStylusTouchEventInfoSpec.$,
        'nullable': false,
      },
      'stylus_connected_event_info': {
        'ordinal': 13,
        'type': crosapi.mojom.TelemetryStylusConnectedEventInfoSpec.$,
        'nullable': false,
      },
      'touchscreen_touch_event_info': {
        'ordinal': 14,
        'type': crosapi.mojom.TelemetryTouchscreenTouchEventInfoSpec.$,
        'nullable': false,
      },
      'touchscreen_connected_event_info': {
        'ordinal': 15,
        'type': crosapi.mojom.TelemetryTouchscreenConnectedEventInfoSpec.$,
        'nullable': false,
      },
    });

// Struct: TelemetryAudioJackEventInfo
mojo.internal.Struct(
    crosapi.mojom.TelemetryAudioJackEventInfoSpec, 'crosapi.mojom.TelemetryAudioJackEventInfo', [
      mojo.internal.StructField('kUnmappedEnumField', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TelemetryLidEventInfo
mojo.internal.Struct(
    crosapi.mojom.TelemetryLidEventInfoSpec, 'crosapi.mojom.TelemetryLidEventInfo', [
      mojo.internal.StructField('kUnmappedEnumField', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TelemetryUsbEventInfo
mojo.internal.Struct(
    crosapi.mojom.TelemetryUsbEventInfoSpec, 'crosapi.mojom.TelemetryUsbEventInfo', [
      mojo.internal.StructField('vendor', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('categories', 16, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('kUnmappedEnumField', 24, 0, mojo.internal.Pointer, 0, false, 0, undefined),
      mojo.internal.StructField('vid', 32, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('pid', 34, 0, mojo.internal.Uint16, 0, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: TelemetryExternalDisplayEventInfo
mojo.internal.Struct(
    crosapi.mojom.TelemetryExternalDisplayEventInfoSpec, 'crosapi.mojom.TelemetryExternalDisplayEventInfo', [
      mojo.internal.StructField('kUnmappedEnumField', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TelemetrySdCardEventInfo
mojo.internal.Struct(
    crosapi.mojom.TelemetrySdCardEventInfoSpec, 'crosapi.mojom.TelemetrySdCardEventInfo', [
      mojo.internal.StructField('kUnmappedEnumField', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TelemetryPowerEventInfo
mojo.internal.Struct(
    crosapi.mojom.TelemetryPowerEventInfoSpec, 'crosapi.mojom.TelemetryPowerEventInfo', [
      mojo.internal.StructField('kUnmappedEnumField', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TelemetryStylusGarageEventInfo
mojo.internal.Struct(
    crosapi.mojom.TelemetryStylusGarageEventInfoSpec, 'crosapi.mojom.TelemetryStylusGarageEventInfo', [
      mojo.internal.StructField('kUnmappedEnumField', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TelemetryTouchpadButtonEventInfo
mojo.internal.Struct(
    crosapi.mojom.TelemetryTouchpadButtonEventInfoSpec, 'crosapi.mojom.TelemetryTouchpadButtonEventInfo', [
      mojo.internal.StructField('button', 0, 0, crosapi.mojom.TelemetryInputTouchButtonSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('kUnmappedEnumField', 8, 0, mojo.internal.Pointer, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TelemetryTouchPointInfo
mojo.internal.Struct(
    crosapi.mojom.TelemetryTouchPointInfoSpec, 'crosapi.mojom.TelemetryTouchPointInfo', [
      mojo.internal.StructField('pressure', 0, 0, crosapi.mojom.UInt32ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('touch_major', 8, 0, crosapi.mojom.UInt32ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('touch_minor', 16, 0, crosapi.mojom.UInt32ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('tracking_id', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('x', 28, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('y', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: TelemetryTouchpadTouchEventInfo
mojo.internal.Struct(
    crosapi.mojom.TelemetryTouchpadTouchEventInfoSpec, 'crosapi.mojom.TelemetryTouchpadTouchEventInfo', [
      mojo.internal.StructField('touch_points', 0, 0, mojo.internal.Array(crosapi.mojom.TelemetryTouchPointInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TelemetryTouchpadConnectedEventInfo
mojo.internal.Struct(
    crosapi.mojom.TelemetryTouchpadConnectedEventInfoSpec, 'crosapi.mojom.TelemetryTouchpadConnectedEventInfo', [
      mojo.internal.StructField('buttons', 0, 0, mojo.internal.Array(crosapi.mojom.TelemetryInputTouchButtonSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('max_x', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('max_y', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('max_pressure', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: TelemetryTouchscreenTouchEventInfo
mojo.internal.Struct(
    crosapi.mojom.TelemetryTouchscreenTouchEventInfoSpec, 'crosapi.mojom.TelemetryTouchscreenTouchEventInfo', [
      mojo.internal.StructField('touch_points', 0, 0, mojo.internal.Array(crosapi.mojom.TelemetryTouchPointInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TelemetryTouchscreenConnectedEventInfo
mojo.internal.Struct(
    crosapi.mojom.TelemetryTouchscreenConnectedEventInfoSpec, 'crosapi.mojom.TelemetryTouchscreenConnectedEventInfo', [
      mojo.internal.StructField('max_x_$value', 0, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'max_x_$flag', originalFieldName: 'max_x' }),
      mojo.internal.StructField('max_y_$value', 4, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'max_y_$flag', originalFieldName: 'max_y' }),
      mojo.internal.StructField('max_pressure_$value', 8, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'max_pressure_$flag', originalFieldName: 'max_pressure' }),
      mojo.internal.StructField('max_x_$flag', 12, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'max_x_$value', originalFieldName: 'max_x' }),
      mojo.internal.StructField('max_y_$flag', 12, 1, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'max_y_$value', originalFieldName: 'max_y' }),
      mojo.internal.StructField('max_pressure_$flag', 12, 2, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'max_pressure_$value', originalFieldName: 'max_pressure' }),
    ],
    [[0, 24]]);

// Struct: TelemetryStylusTouchPointInfo
mojo.internal.Struct(
    crosapi.mojom.TelemetryStylusTouchPointInfoSpec, 'crosapi.mojom.TelemetryStylusTouchPointInfo', [
      mojo.internal.StructField('x_$value', 0, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'x_$flag', originalFieldName: 'x' }),
      mojo.internal.StructField('y_$value', 4, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'y_$flag', originalFieldName: 'y' }),
      mojo.internal.StructField('pressure_$value', 8, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'pressure_$flag', originalFieldName: 'pressure' }),
      mojo.internal.StructField('x_$flag', 12, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'x_$value', originalFieldName: 'x' }),
      mojo.internal.StructField('y_$flag', 12, 1, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'y_$value', originalFieldName: 'y' }),
      mojo.internal.StructField('pressure_$flag', 12, 2, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'pressure_$value', originalFieldName: 'pressure' }),
    ],
    [[0, 24]]);

// Struct: TelemetryStylusTouchEventInfo
mojo.internal.Struct(
    crosapi.mojom.TelemetryStylusTouchEventInfoSpec, 'crosapi.mojom.TelemetryStylusTouchEventInfo', [
      mojo.internal.StructField('touch_point', 0, 0, crosapi.mojom.TelemetryStylusTouchPointInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TelemetryStylusConnectedEventInfo
mojo.internal.Struct(
    crosapi.mojom.TelemetryStylusConnectedEventInfoSpec, 'crosapi.mojom.TelemetryStylusConnectedEventInfo', [
      mojo.internal.StructField('max_x_$value', 0, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'max_x_$flag', originalFieldName: 'max_x' }),
      mojo.internal.StructField('max_y_$value', 4, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'max_y_$flag', originalFieldName: 'max_y' }),
      mojo.internal.StructField('max_pressure_$value', 8, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'max_pressure_$flag', originalFieldName: 'max_pressure' }),
      mojo.internal.StructField('max_x_$flag', 12, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'max_x_$value', originalFieldName: 'max_x' }),
      mojo.internal.StructField('max_y_$flag', 12, 1, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'max_y_$value', originalFieldName: 'max_y' }),
      mojo.internal.StructField('max_pressure_$flag', 12, 2, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'max_pressure_$value', originalFieldName: 'max_pressure' }),
    ],
    [[0, 24]]);

// Interface: TelemetryEventObserver
mojo.internal.Struct(
    crosapi.mojom.TelemetryEventObserver_OnEvent_ParamsSpec, 'crosapi.mojom.TelemetryEventObserver_OnEvent_Params', [
      mojo.internal.StructField('info', 0, 0, crosapi.mojom.TelemetryEventInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [info],
      false);
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

crosapi.mojom.TelemetryEventObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = crosapi.mojom.TelemetryEventObserver_OnEvent_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onEvent(params.info);
          break;
        }
      }
    });
  }
};

crosapi.mojom.TelemetryEventObserverReceiver = crosapi.mojom.TelemetryEventObserverReceiver;

crosapi.mojom.TelemetryEventObserverPtr = crosapi.mojom.TelemetryEventObserverRemote;
crosapi.mojom.TelemetryEventObserverRequest = crosapi.mojom.TelemetryEventObserverPendingReceiver;


// Interface: TelemetryEventService
mojo.internal.Struct(
    crosapi.mojom.TelemetryEventService_AddEventObserver_ParamsSpec, 'crosapi.mojom.TelemetryEventService_AddEventObserver_Params', [
      mojo.internal.StructField('category', 0, 0, crosapi.mojom.TelemetryEventCategoryEnumSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('observer', 8, 0, mojo.internal.InterfaceProxy(crosapi.mojom.TelemetryEventObserverSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    crosapi.mojom.TelemetryEventService_IsEventSupported_ParamsSpec, 'crosapi.mojom.TelemetryEventService_IsEventSupported_Params', [
      mojo.internal.StructField('category', 0, 0, crosapi.mojom.TelemetryEventCategoryEnumSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.TelemetryEventService_IsEventSupported_ResponseParamsSpec, 'crosapi.mojom.TelemetryEventService_IsEventSupported_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, crosapi.mojom.TelemetryExtensionSupportStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [category, observer],
      false);
  }

  isEventSupported(category) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      crosapi.mojom.TelemetryEventService_IsEventSupported_ParamsSpec,
      crosapi.mojom.TelemetryEventService_IsEventSupported_ResponseParamsSpec,
      [category],
      false);
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

crosapi.mojom.TelemetryEventServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 1: {
          const params = crosapi.mojom.TelemetryEventService_AddEventObserver_ParamsSpec.$.decode(message.payload);
          const result = this.impl.addEventObserver(params.category, params.observer);
          break;
        }
        case 2: {
          const params = crosapi.mojom.TelemetryEventService_IsEventSupported_ParamsSpec.$.decode(message.payload);
          const result = this.impl.isEventSupported(params.category);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.TelemetryEventService_IsEventSupported_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
      }
    });
  }
};

crosapi.mojom.TelemetryEventServiceReceiver = crosapi.mojom.TelemetryEventServiceReceiver;

crosapi.mojom.TelemetryEventServicePtr = crosapi.mojom.TelemetryEventServiceRemote;
crosapi.mojom.TelemetryEventServiceRequest = crosapi.mojom.TelemetryEventServicePendingReceiver;

