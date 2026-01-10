// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/kiosk.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Interface: KioskHost
arc.mojom.mojom.KioskHost = {};

arc.mojom.mojom.KioskHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.mojom.KioskHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.KioskHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.mojom.KioskHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.mojom.KioskHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.mojom.KioskHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onMaintenanceSessionCreated(session_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.mojom.KioskHost_OnMaintenanceSessionCreated_ParamsSpec,
      null,
      [session_id]);
  }

  onMaintenanceSessionFinished(session_id, succeeded) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.mojom.KioskHost_OnMaintenanceSessionFinished_ParamsSpec,
      null,
      [session_id, succeeded]);
  }

};

arc.mojom.mojom.KioskHost.getRemote = function() {
  let remote = new arc.mojom.mojom.KioskHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.KioskHost',
    'context');
  return remote.$;
};

// ParamsSpec for OnMaintenanceSessionCreated
arc.mojom.mojom.KioskHost_OnMaintenanceSessionCreated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.KioskHost.OnMaintenanceSessionCreated_Params',
      packedSize: 16,
      fields: [
        { name: 'session_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnMaintenanceSessionFinished
arc.mojom.mojom.KioskHost_OnMaintenanceSessionFinished_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.KioskHost.OnMaintenanceSessionFinished_Params',
      packedSize: 16,
      fields: [
        { name: 'session_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'succeeded', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.mojom.KioskHostPtr = arc.mojom.mojom.KioskHostRemote;
arc.mojom.mojom.KioskHostRequest = arc.mojom.mojom.KioskHostPendingReceiver;


// Interface: KioskInstance
arc.mojom.mojom.KioskInstance = {};

arc.mojom.mojom.KioskInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.mojom.KioskInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.KioskInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.mojom.KioskInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.mojom.KioskInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.mojom.KioskInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(host_remote) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.mojom.KioskInstance_Init_ParamsSpec,
      null,
      [host_remote]);
  }

};

arc.mojom.mojom.KioskInstance.getRemote = function() {
  let remote = new arc.mojom.mojom.KioskInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.KioskInstance',
    'context');
  return remote.$;
};

// ParamsSpec for Init
arc.mojom.mojom.KioskInstance_Init_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.KioskInstance.Init_Params',
      packedSize: 16,
      fields: [
        { name: 'host_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.KioskHostRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.mojom.KioskInstancePtr = arc.mojom.mojom.KioskInstanceRemote;
arc.mojom.mojom.KioskInstanceRequest = arc.mojom.mojom.KioskInstancePendingReceiver;

