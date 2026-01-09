// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/iio_sensor.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Interface: IioSensorHost
arc.mojom.IioSensorHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.IioSensorHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.IioSensorHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.IioSensorHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.IioSensorHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.IioSensorHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.IioSensorHost.getRemote = function() {
  let remote = new arc.mojom.IioSensorHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.IioSensorHost',
    'context');
  return remote.$;
};

// Legacy compatibility
arc.mojom.IioSensorHostPtr = arc.mojom.IioSensorHostRemote;
arc.mojom.IioSensorHostRequest = arc.mojom.IioSensorHostPendingReceiver;


// Interface: IioSensorInstance
arc.mojom.IioSensorInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.IioSensorInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.IioSensorInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.IioSensorInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.IioSensorInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.IioSensorInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.IioSensorInstance.getRemote = function() {
  let remote = new arc.mojom.IioSensorInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.IioSensorInstance',
    'context');
  return remote.$;
};

// Legacy compatibility
arc.mojom.IioSensorInstancePtr = arc.mojom.IioSensorInstanceRemote;
arc.mojom.IioSensorInstanceRequest = arc.mojom.IioSensorInstancePendingReceiver;

