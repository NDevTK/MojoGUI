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

// Enum: State
ash.cros_healthd.mojom.State = {
  kAdd: 0,
  kRemove: 1,
  kAuthorized: 2,
  kUnAuthorized: 3,
};

// Enum: State
ash.cros_healthd.mojom.State = {
  kClosed: 0,
  kOpened: 1,
};

// Enum: State
ash.cros_healthd.mojom.State = {
  kAdapterAdded: 0,
  kAdapterRemoved: 1,
  kAdapterPropertyChanged: 2,
  kDeviceAdded: 3,
  kDeviceRemoved: 4,
  kDevicePropertyChanged: 5,
};

// Enum: State
ash.cros_healthd.mojom.State = {
  kAcInserted: 0,
  kAcRemoved: 1,
  kOsSuspend: 2,
  kOsResume: 3,
};

// Enum: State
ash.cros_healthd.mojom.State = {
  kUnderrun: 0,
  kSevereUnderrun: 1,
};

// Enum: State
ash.cros_healthd.mojom.State = {
  kAdd: 0,
  kRemove: 1,
};

// Enum: DeviceType
ash.cros_healthd.mojom.DeviceType = {
  kHeadphone: 0,
  kMicrophone: 1,
};

// Enum: State
ash.cros_healthd.mojom.State = {
  kAdd: 0,
  kRemove: 1,
};

// Enum: InputTouchButton
ash.cros_healthd.mojom.InputTouchButton = {
  kLeft: 0,
  kMiddle: 1,
  kRight: 2,
};

// Enum: State
ash.cros_healthd.mojom.State = {
  kAdd: 0,
  kRemove: 1,
};

// Enum: State
ash.cros_healthd.mojom.State = {
  kInserted: 0,
  kRemoved: 1,
};

// Enum: CrashType
ash.cros_healthd.mojom.CrashType = {
  kKernel: 0,
  kEmbeddedController: 1,
};

// Enum: EventCategoryEnum
ash.cros_healthd.mojom.EventCategoryEnum = {
  kUsb: 0,
  kThunderbolt: 1,
  kLid: 2,
  kBluetooth: 3,
  kPower: 4,
  kAudio: 5,
};

// Interface: CrosHealthdBluetoothObserver
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

// Legacy compatibility
ash.cros_healthd.mojom.CrosHealthdBluetoothObserverPtr = ash.cros_healthd.mojom.CrosHealthdBluetoothObserverRemote;
ash.cros_healthd.mojom.CrosHealthdBluetoothObserverRequest = ash.cros_healthd.mojom.CrosHealthdBluetoothObserverPendingReceiver;


// Interface: CrosHealthdLidObserver
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

// Legacy compatibility
ash.cros_healthd.mojom.CrosHealthdLidObserverPtr = ash.cros_healthd.mojom.CrosHealthdLidObserverRemote;
ash.cros_healthd.mojom.CrosHealthdLidObserverRequest = ash.cros_healthd.mojom.CrosHealthdLidObserverPendingReceiver;


// Interface: CrosHealthdPowerObserver
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

// Legacy compatibility
ash.cros_healthd.mojom.CrosHealthdPowerObserverPtr = ash.cros_healthd.mojom.CrosHealthdPowerObserverRemote;
ash.cros_healthd.mojom.CrosHealthdPowerObserverRequest = ash.cros_healthd.mojom.CrosHealthdPowerObserverPendingReceiver;


// Interface: CrosHealthdAudioObserver
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

// Legacy compatibility
ash.cros_healthd.mojom.CrosHealthdAudioObserverPtr = ash.cros_healthd.mojom.CrosHealthdAudioObserverRemote;
ash.cros_healthd.mojom.CrosHealthdAudioObserverRequest = ash.cros_healthd.mojom.CrosHealthdAudioObserverPendingReceiver;


// Interface: CrosHealthdThunderboltObserver
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

// Legacy compatibility
ash.cros_healthd.mojom.CrosHealthdThunderboltObserverPtr = ash.cros_healthd.mojom.CrosHealthdThunderboltObserverRemote;
ash.cros_healthd.mojom.CrosHealthdThunderboltObserverRequest = ash.cros_healthd.mojom.CrosHealthdThunderboltObserverPendingReceiver;


// Interface: CrosHealthdUsbObserver
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

// Legacy compatibility
ash.cros_healthd.mojom.CrosHealthdUsbObserverPtr = ash.cros_healthd.mojom.CrosHealthdUsbObserverRemote;
ash.cros_healthd.mojom.CrosHealthdUsbObserverRequest = ash.cros_healthd.mojom.CrosHealthdUsbObserverPendingReceiver;


// Interface: CrosHealthdSdCardObserver
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

// Legacy compatibility
ash.cros_healthd.mojom.CrosHealthdSdCardObserverPtr = ash.cros_healthd.mojom.CrosHealthdSdCardObserverRemote;
ash.cros_healthd.mojom.CrosHealthdSdCardObserverRequest = ash.cros_healthd.mojom.CrosHealthdSdCardObserverPendingReceiver;


// Interface: EventObserver
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

// Legacy compatibility
ash.cros_healthd.mojom.EventObserverPtr = ash.cros_healthd.mojom.EventObserverRemote;
ash.cros_healthd.mojom.EventObserverRequest = ash.cros_healthd.mojom.EventObserverPendingReceiver;

