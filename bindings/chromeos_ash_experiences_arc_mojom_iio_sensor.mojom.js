// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/iio_sensor.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Interface: IioSensorHost
arc.mojom.mojom.IioSensorHost = {};

arc.mojom.mojom.IioSensorHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.mojom.IioSensorHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.IioSensorHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.mojom.IioSensorHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.mojom.IioSensorHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.mojom.IioSensorHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  registerSensorHalClient(client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.mojom.IioSensorHost_RegisterSensorHalClient_ParamsSpec,
      null,
      [client]);
  }

};

arc.mojom.mojom.IioSensorHost.getRemote = function() {
  let remote = new arc.mojom.mojom.IioSensorHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.IioSensorHost',
    'context');
  return remote.$;
};

// ParamsSpec for RegisterSensorHalClient
arc.mojom.mojom.IioSensorHost_RegisterSensorHalClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.IioSensorHost.RegisterSensorHalClient_Params',
      packedSize: 16,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(chromeos.sensors.mojom.SensorHalClientRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.mojom.IioSensorHostPtr = arc.mojom.mojom.IioSensorHostRemote;
arc.mojom.mojom.IioSensorHostRequest = arc.mojom.mojom.IioSensorHostPendingReceiver;


// Interface: IioSensorInstance
arc.mojom.mojom.IioSensorInstance = {};

arc.mojom.mojom.IioSensorInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.mojom.IioSensorInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.IioSensorInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.mojom.IioSensorInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.mojom.IioSensorInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.mojom.IioSensorInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(host_remote) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.mojom.IioSensorInstance_Init_ParamsSpec,
      null,
      [host_remote]);
  }

  onTabletModeChanged(is_tablet_mode_on) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.mojom.IioSensorInstance_OnTabletModeChanged_ParamsSpec,
      null,
      [is_tablet_mode_on]);
  }

};

arc.mojom.mojom.IioSensorInstance.getRemote = function() {
  let remote = new arc.mojom.mojom.IioSensorInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.IioSensorInstance',
    'context');
  return remote.$;
};

// ParamsSpec for Init
arc.mojom.mojom.IioSensorInstance_Init_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.IioSensorInstance.Init_Params',
      packedSize: 16,
      fields: [
        { name: 'host_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.IioSensorHostRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnTabletModeChanged
arc.mojom.mojom.IioSensorInstance_OnTabletModeChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.IioSensorInstance.OnTabletModeChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'is_tablet_mode_on', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.mojom.IioSensorInstancePtr = arc.mojom.mojom.IioSensorInstanceRemote;
arc.mojom.mojom.IioSensorInstanceRequest = arc.mojom.mojom.IioSensorInstancePendingReceiver;

