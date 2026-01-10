// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/idle/idle_manager.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


blink.mojom.mojom.kUserInputThresholdMs = 60000;

// Enum: IdleManagerError
blink.mojom.mojom.IdleManagerError = {
  kSuccess: 0,
  kPermissionDisabled: 1,
};
blink.mojom.mojom.IdleManagerErrorSpec = { $: mojo.internal.Enum() };

// Struct: IdleState
blink.mojom.mojom.IdleStateSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.IdleState',
      packedSize: 24,
      fields: [
        { name: 'idle_time', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: true, minVersion: 0 },
        { name: 'screen_locked', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: IdleMonitor
blink.mojom.mojom.IdleMonitor = {};

blink.mojom.mojom.IdleMonitorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.IdleMonitorRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.IdleMonitor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.IdleMonitorPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.IdleMonitorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.IdleMonitorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  update(state, is_overridden_by_devtools) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.IdleMonitor_Update_ParamsSpec,
      null,
      [state, is_overridden_by_devtools]);
  }

};

blink.mojom.mojom.IdleMonitor.getRemote = function() {
  let remote = new blink.mojom.mojom.IdleMonitorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.IdleMonitor',
    'context');
  return remote.$;
};

// ParamsSpec for Update
blink.mojom.mojom.IdleMonitor_Update_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.IdleMonitor.Update_Params',
      packedSize: 24,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.IdleStateSpec, nullable: false, minVersion: 0 },
        { name: 'is_overridden_by_devtools', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.IdleMonitorPtr = blink.mojom.mojom.IdleMonitorRemote;
blink.mojom.mojom.IdleMonitorRequest = blink.mojom.mojom.IdleMonitorPendingReceiver;


// Interface: IdleManager
blink.mojom.mojom.IdleManager = {};

blink.mojom.mojom.IdleManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.IdleManagerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.IdleManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.IdleManagerPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.IdleManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.IdleManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addMonitor(monitor) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.IdleManager_AddMonitor_ParamsSpec,
      blink.mojom.mojom.IdleManager_AddMonitor_ResponseParamsSpec,
      [monitor]);
  }

};

blink.mojom.mojom.IdleManager.getRemote = function() {
  let remote = new blink.mojom.mojom.IdleManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.IdleManager',
    'context');
  return remote.$;
};

// ParamsSpec for AddMonitor
blink.mojom.mojom.IdleManager_AddMonitor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.IdleManager.AddMonitor_Params',
      packedSize: 16,
      fields: [
        { name: 'monitor', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(blink.mojom.IdleMonitorRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.mojom.IdleManager_AddMonitor_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.IdleManager.AddMonitor_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.IdleManagerErrorSpec, nullable: false, minVersion: 0 },
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.IdleStateSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.IdleManagerPtr = blink.mojom.mojom.IdleManagerRemote;
blink.mojom.mojom.IdleManagerRequest = blink.mojom.mojom.IdleManagerPendingReceiver;

