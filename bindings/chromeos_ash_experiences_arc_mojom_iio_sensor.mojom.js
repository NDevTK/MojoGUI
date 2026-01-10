// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/iio_sensor.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};
var chromeos = chromeos || {};
var components = components || {};

arc.mojom.IioSensorHost = {};
arc.mojom.IioSensorHost.$interfaceName = 'arc.mojom.IioSensorHost';
arc.mojom.IioSensorHost_RegisterSensorHalClient_ParamsSpec = { $: {} };
arc.mojom.IioSensorInstance = {};
arc.mojom.IioSensorInstance.$interfaceName = 'arc.mojom.IioSensorInstance';
arc.mojom.IioSensorInstance_Init_ParamsSpec = { $: {} };
arc.mojom.IioSensorInstance_Init_ResponseParamsSpec = { $: {} };
arc.mojom.IioSensorInstance_OnTabletModeChanged_ParamsSpec = { $: {} };

// Interface: IioSensorHost
mojo.internal.Struct(
    arc.mojom.IioSensorHost_RegisterSensorHalClient_ParamsSpec, 'arc.mojom.IioSensorHost_RegisterSensorHalClient_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(chromeos.sensors.mojom.SensorHalClientRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

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

  registerSensorHalClient(client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.IioSensorHost_RegisterSensorHalClient_ParamsSpec,
      null,
      [client]);
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

arc.mojom.IioSensorHostPtr = arc.mojom.IioSensorHostRemote;
arc.mojom.IioSensorHostRequest = arc.mojom.IioSensorHostPendingReceiver;


// Interface: IioSensorInstance
mojo.internal.Struct(
    arc.mojom.IioSensorInstance_Init_ParamsSpec, 'arc.mojom.IioSensorInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.IioSensorHostRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.IioSensorInstance_Init_ResponseParamsSpec, 'arc.mojom.IioSensorInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.IioSensorInstance_OnTabletModeChanged_ParamsSpec, 'arc.mojom.IioSensorInstance_OnTabletModeChanged_Params', [
      mojo.internal.StructField('is_tablet_mode_on', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

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

  init(host_remote) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.IioSensorInstance_Init_ParamsSpec,
      arc.mojom.IioSensorInstance_Init_ResponseParamsSpec,
      [host_remote]);
  }

  onTabletModeChanged(is_tablet_mode_on) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.IioSensorInstance_OnTabletModeChanged_ParamsSpec,
      null,
      [is_tablet_mode_on]);
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

arc.mojom.IioSensorInstancePtr = arc.mojom.IioSensorInstanceRemote;
arc.mojom.IioSensorInstanceRequest = arc.mojom.IioSensorInstancePendingReceiver;

