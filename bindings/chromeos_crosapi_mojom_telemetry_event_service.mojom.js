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

// Enum: DeviceType
crosapi.mojom.DeviceType = {
  kHeadphone: 0,
  kMicrophone: 1,
};

// Enum: State
crosapi.mojom.State = {
  kClosed: 0,
  kOpened: 1,
};

// Enum: State
crosapi.mojom.State = {
  kAdd: 0,
  kRemove: 1,
};

// Enum: State
crosapi.mojom.State = {
  kAdd: 0,
  kRemove: 1,
};

// Enum: State
crosapi.mojom.State = {
  kAdd: 0,
  kRemove: 1,
};

// Enum: State
crosapi.mojom.State = {
  kAcInserted: 0,
  kAcRemoved: 1,
  kOsSuspend: 2,
  kOsResume: 3,
};

// Enum: State
crosapi.mojom.State = {
  kInserted: 0,
  kRemoved: 1,
};

// Enum: TelemetryInputTouchButton
crosapi.mojom.TelemetryInputTouchButton = {
  kLeft: 0,
  kMiddle: 1,
  kRight: 2,
};

// Enum: State
crosapi.mojom.State = {
  kPressed: 0,
  kReleased: 1,
};

// Enum: TelemetryEventCategoryEnum
crosapi.mojom.TelemetryEventCategoryEnum = {
  kAudioJack: 0,
};

// Struct: TelemetryAudioJackEventInfo
crosapi.mojom.TelemetryAudioJackEventInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryAudioJackEventInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TelemetryLidEventInfo
crosapi.mojom.TelemetryLidEventInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryLidEventInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TelemetryUsbEventInfo
crosapi.mojom.TelemetryUsbEventInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryUsbEventInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TelemetryExternalDisplayEventInfo
crosapi.mojom.TelemetryExternalDisplayEventInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryExternalDisplayEventInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TelemetrySdCardEventInfo
crosapi.mojom.TelemetrySdCardEventInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetrySdCardEventInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TelemetryPowerEventInfo
crosapi.mojom.TelemetryPowerEventInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryPowerEventInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TelemetryStylusGarageEventInfo
crosapi.mojom.TelemetryStylusGarageEventInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryStylusGarageEventInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TelemetryTouchpadButtonEventInfo
crosapi.mojom.TelemetryTouchpadButtonEventInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryTouchpadButtonEventInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TelemetryTouchPointInfo
crosapi.mojom.TelemetryTouchPointInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryTouchPointInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TelemetryTouchpadTouchEventInfo
crosapi.mojom.TelemetryTouchpadTouchEventInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryTouchpadTouchEventInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TelemetryTouchpadConnectedEventInfo
crosapi.mojom.TelemetryTouchpadConnectedEventInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryTouchpadConnectedEventInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TelemetryTouchscreenTouchEventInfo
crosapi.mojom.TelemetryTouchscreenTouchEventInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryTouchscreenTouchEventInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TelemetryTouchscreenConnectedEventInfo
crosapi.mojom.TelemetryTouchscreenConnectedEventInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryTouchscreenConnectedEventInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TelemetryStylusTouchPointInfo
crosapi.mojom.TelemetryStylusTouchPointInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryStylusTouchPointInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TelemetryStylusTouchEventInfo
crosapi.mojom.TelemetryStylusTouchEventInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryStylusTouchEventInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TelemetryStylusConnectedEventInfo
crosapi.mojom.TelemetryStylusConnectedEventInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.TelemetryStylusConnectedEventInfo',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
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

// Legacy compatibility
crosapi.mojom.TelemetryEventServicePtr = crosapi.mojom.TelemetryEventServiceRemote;
crosapi.mojom.TelemetryEventServiceRequest = crosapi.mojom.TelemetryEventServicePendingReceiver;

