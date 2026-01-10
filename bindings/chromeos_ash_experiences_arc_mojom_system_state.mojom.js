// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/system_state.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};

arc.mojom.SystemAppRunningStateSpec = { $: {} };
arc.mojom.SystemStateHost = {};
arc.mojom.SystemStateHost.$interfaceName = 'arc.mojom.SystemStateHost';
arc.mojom.SystemStateHost_UpdateAppRunningState_ParamsSpec = { $: {} };
arc.mojom.SystemStateInstance = {};
arc.mojom.SystemStateInstance.$interfaceName = 'arc.mojom.SystemStateInstance';
arc.mojom.SystemStateInstance_Init_ParamsSpec = { $: {} };
arc.mojom.SystemStateInstance_Init_ResponseParamsSpec = { $: {} };

// Struct: SystemAppRunningState
mojo.internal.Struct(
    arc.mojom.SystemAppRunningStateSpec, 'arc.mojom.SystemAppRunningState', [
      mojo.internal.StructField('top_layer_app', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('foreground_app', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('background_app', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('performance_sensitive_app', 0, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('background_service', 0, 4, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: SystemStateHost
mojo.internal.Struct(
    arc.mojom.SystemStateHost_UpdateAppRunningState_ParamsSpec, 'arc.mojom.SystemStateHost_UpdateAppRunningState_Params', [
      mojo.internal.StructField('state', 0, 0, arc.mojom.SystemAppRunningStateSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

arc.mojom.SystemStateHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.SystemStateHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.SystemStateHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.SystemStateHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.SystemStateHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.SystemStateHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  updateAppRunningState(state) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.SystemStateHost_UpdateAppRunningState_ParamsSpec,
      null,
      [state]);
  }

};

arc.mojom.SystemStateHost.getRemote = function() {
  let remote = new arc.mojom.SystemStateHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.SystemStateHost',
    'context');
  return remote.$;
};

arc.mojom.SystemStateHostPtr = arc.mojom.SystemStateHostRemote;
arc.mojom.SystemStateHostRequest = arc.mojom.SystemStateHostPendingReceiver;


// Interface: SystemStateInstance
mojo.internal.Struct(
    arc.mojom.SystemStateInstance_Init_ParamsSpec, 'arc.mojom.SystemStateInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.SystemStateHostRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.SystemStateInstance_Init_ResponseParamsSpec, 'arc.mojom.SystemStateInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

arc.mojom.SystemStateInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.SystemStateInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.SystemStateInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.SystemStateInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.SystemStateInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.SystemStateInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(host_remote) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.SystemStateInstance_Init_ParamsSpec,
      arc.mojom.SystemStateInstance_Init_ResponseParamsSpec,
      [host_remote]);
  }

};

arc.mojom.SystemStateInstance.getRemote = function() {
  let remote = new arc.mojom.SystemStateInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.SystemStateInstance',
    'context');
  return remote.$;
};

arc.mojom.SystemStateInstancePtr = arc.mojom.SystemStateInstanceRemote;
arc.mojom.SystemStateInstanceRequest = arc.mojom.SystemStateInstancePendingReceiver;

