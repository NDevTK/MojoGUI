// Auto-generated MojoJS binding
// Source: chromium_src/components/global_media_controls/public/mojom/device_service.mojom
// Module: global_media_controls.mojom

'use strict';

// Module namespace
var global_media_controls = global_media_controls || {};
global_media_controls.mojom = global_media_controls.mojom || {};


// Enum: IconType
global_media_controls.mojom.IconType = {
  kUnknown: 0,
  kThrobber: 1,
  kInfo: 2,
  kTv: 3,
  kSpeaker: 4,
  kSpeakerGroup: 5,
  kInput: 6,
};

// Interface: DeviceListHost
global_media_controls.mojom.DeviceListHost = {};

global_media_controls.mojom.DeviceListHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

global_media_controls.mojom.DeviceListHostRemote = class {
  static get $interfaceName() {
    return 'global_media_controls.mojom.DeviceListHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      global_media_controls.mojom.DeviceListHostPendingReceiver,
      handle);
    this.$ = new global_media_controls.mojom.DeviceListHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

global_media_controls.mojom.DeviceListHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

global_media_controls.mojom.DeviceListHost.getRemote = function() {
  let remote = new global_media_controls.mojom.DeviceListHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'global_media_controls.mojom.DeviceListHost',
    'context');
  return remote.$;
};

// Legacy compatibility
global_media_controls.mojom.DeviceListHostPtr = global_media_controls.mojom.DeviceListHostRemote;
global_media_controls.mojom.DeviceListHostRequest = global_media_controls.mojom.DeviceListHostPendingReceiver;


// Interface: DeviceListClient
global_media_controls.mojom.DeviceListClient = {};

global_media_controls.mojom.DeviceListClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

global_media_controls.mojom.DeviceListClientRemote = class {
  static get $interfaceName() {
    return 'global_media_controls.mojom.DeviceListClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      global_media_controls.mojom.DeviceListClientPendingReceiver,
      handle);
    this.$ = new global_media_controls.mojom.DeviceListClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

global_media_controls.mojom.DeviceListClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

global_media_controls.mojom.DeviceListClient.getRemote = function() {
  let remote = new global_media_controls.mojom.DeviceListClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'global_media_controls.mojom.DeviceListClient',
    'context');
  return remote.$;
};

// Legacy compatibility
global_media_controls.mojom.DeviceListClientPtr = global_media_controls.mojom.DeviceListClientRemote;
global_media_controls.mojom.DeviceListClientRequest = global_media_controls.mojom.DeviceListClientPendingReceiver;


// Interface: DeviceService
global_media_controls.mojom.DeviceService = {};

global_media_controls.mojom.DeviceServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

global_media_controls.mojom.DeviceServiceRemote = class {
  static get $interfaceName() {
    return 'global_media_controls.mojom.DeviceService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      global_media_controls.mojom.DeviceServicePendingReceiver,
      handle);
    this.$ = new global_media_controls.mojom.DeviceServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

global_media_controls.mojom.DeviceServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

global_media_controls.mojom.DeviceService.getRemote = function() {
  let remote = new global_media_controls.mojom.DeviceServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'global_media_controls.mojom.DeviceService',
    'context');
  return remote.$;
};

// Legacy compatibility
global_media_controls.mojom.DeviceServicePtr = global_media_controls.mojom.DeviceServiceRemote;
global_media_controls.mojom.DeviceServiceRequest = global_media_controls.mojom.DeviceServicePendingReceiver;


// Interface: DevicePickerProvider
global_media_controls.mojom.DevicePickerProvider = {};

global_media_controls.mojom.DevicePickerProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

global_media_controls.mojom.DevicePickerProviderRemote = class {
  static get $interfaceName() {
    return 'global_media_controls.mojom.DevicePickerProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      global_media_controls.mojom.DevicePickerProviderPendingReceiver,
      handle);
    this.$ = new global_media_controls.mojom.DevicePickerProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

global_media_controls.mojom.DevicePickerProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

global_media_controls.mojom.DevicePickerProvider.getRemote = function() {
  let remote = new global_media_controls.mojom.DevicePickerProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'global_media_controls.mojom.DevicePickerProvider',
    'context');
  return remote.$;
};

// Legacy compatibility
global_media_controls.mojom.DevicePickerProviderPtr = global_media_controls.mojom.DevicePickerProviderRemote;
global_media_controls.mojom.DevicePickerProviderRequest = global_media_controls.mojom.DevicePickerProviderPendingReceiver;


// Interface: DevicePickerObserver
global_media_controls.mojom.DevicePickerObserver = {};

global_media_controls.mojom.DevicePickerObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

global_media_controls.mojom.DevicePickerObserverRemote = class {
  static get $interfaceName() {
    return 'global_media_controls.mojom.DevicePickerObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      global_media_controls.mojom.DevicePickerObserverPendingReceiver,
      handle);
    this.$ = new global_media_controls.mojom.DevicePickerObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

global_media_controls.mojom.DevicePickerObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

global_media_controls.mojom.DevicePickerObserver.getRemote = function() {
  let remote = new global_media_controls.mojom.DevicePickerObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'global_media_controls.mojom.DevicePickerObserver',
    'context');
  return remote.$;
};

// Legacy compatibility
global_media_controls.mojom.DevicePickerObserverPtr = global_media_controls.mojom.DevicePickerObserverRemote;
global_media_controls.mojom.DevicePickerObserverRequest = global_media_controls.mojom.DevicePickerObserverPendingReceiver;

