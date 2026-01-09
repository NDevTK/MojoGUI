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

// Interface: TelemetryEventObserver
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

