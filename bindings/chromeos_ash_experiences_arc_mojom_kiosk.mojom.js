// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/kiosk.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Interface: KioskHost
arc.mojom.KioskHost = {};

arc.mojom.KioskHost_OnMaintenanceSessionCreated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.KioskHost_OnMaintenanceSessionCreated_Params',
      packedSize: 16,
      fields: [
        { name: 'session_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.KioskHost_OnMaintenanceSessionFinished_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.KioskHost_OnMaintenanceSessionFinished_Params',
      packedSize: 16,
      fields: [
        { name: 'session_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'succeeded', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.KioskHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.KioskHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.KioskHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.KioskHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.KioskHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.KioskHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onMaintenanceSessionCreated(session_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.KioskHost_OnMaintenanceSessionCreated_ParamsSpec,
      null,
      [session_id]);
  }

  onMaintenanceSessionFinished(session_id, succeeded) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.KioskHost_OnMaintenanceSessionFinished_ParamsSpec,
      null,
      [session_id, succeeded]);
  }

};

arc.mojom.KioskHost.getRemote = function() {
  let remote = new arc.mojom.KioskHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.KioskHost',
    'context');
  return remote.$;
};

// ParamsSpec for OnMaintenanceSessionCreated
arc.mojom.KioskHost_OnMaintenanceSessionCreated_ParamsSpec = {
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
arc.mojom.KioskHost_OnMaintenanceSessionFinished_ParamsSpec = {
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
arc.mojom.KioskHostPtr = arc.mojom.KioskHostRemote;
arc.mojom.KioskHostRequest = arc.mojom.KioskHostPendingReceiver;


// Interface: KioskInstance
arc.mojom.KioskInstance = {};

arc.mojom.KioskInstance_Init_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.KioskInstance_Init_Params',
      packedSize: 16,
      fields: [
        { name: 'host_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.KioskHostRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.KioskInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.KioskInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.KioskInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.KioskInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.KioskInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.KioskInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(host_remote) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.KioskInstance_Init_ParamsSpec,
      null,
      [host_remote]);
  }

};

arc.mojom.KioskInstance.getRemote = function() {
  let remote = new arc.mojom.KioskInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.KioskInstance',
    'context');
  return remote.$;
};

// ParamsSpec for Init
arc.mojom.KioskInstance_Init_ParamsSpec = {
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
arc.mojom.KioskInstancePtr = arc.mojom.KioskInstanceRemote;
arc.mojom.KioskInstanceRequest = arc.mojom.KioskInstancePendingReceiver;

