// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/pip.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: ArcPipEvent
arc.mojom.mojom.ArcPipEvent = {
  ENTER: 0,
};
arc.mojom.mojom.ArcPipEventSpec = { $: mojo.internal.Enum() };

// Interface: PipHost
arc.mojom.mojom.PipHost = {};

arc.mojom.mojom.PipHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.mojom.PipHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.PipHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.mojom.PipHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.mojom.PipHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.mojom.PipHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onPipEvent(event) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.mojom.PipHost_OnPipEvent_ParamsSpec,
      null,
      [event]);
  }

};

arc.mojom.mojom.PipHost.getRemote = function() {
  let remote = new arc.mojom.mojom.PipHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.PipHost',
    'context');
  return remote.$;
};

// ParamsSpec for OnPipEvent
arc.mojom.mojom.PipHost_OnPipEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PipHost.OnPipEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'event', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.ArcPipEventSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.mojom.PipHostPtr = arc.mojom.mojom.PipHostRemote;
arc.mojom.mojom.PipHostRequest = arc.mojom.mojom.PipHostPendingReceiver;


// Interface: PipInstance
arc.mojom.mojom.PipInstance = {};

arc.mojom.mojom.PipInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.mojom.PipInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.PipInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.mojom.PipInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.mojom.PipInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.mojom.PipInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(host_remote) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.mojom.PipInstance_Init_ParamsSpec,
      null,
      [host_remote]);
  }

  closePip() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.mojom.PipInstance_ClosePip_ParamsSpec,
      null,
      []);
  }

  setPipSuppressionStatus(suppressed) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.mojom.PipInstance_SetPipSuppressionStatus_ParamsSpec,
      null,
      [suppressed]);
  }

};

arc.mojom.mojom.PipInstance.getRemote = function() {
  let remote = new arc.mojom.mojom.PipInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.PipInstance',
    'context');
  return remote.$;
};

// ParamsSpec for Init
arc.mojom.mojom.PipInstance_Init_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PipInstance.Init_Params',
      packedSize: 16,
      fields: [
        { name: 'host_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.PipHostRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ClosePip
arc.mojom.mojom.PipInstance_ClosePip_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PipInstance.ClosePip_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SetPipSuppressionStatus
arc.mojom.mojom.PipInstance_SetPipSuppressionStatus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PipInstance.SetPipSuppressionStatus_Params',
      packedSize: 16,
      fields: [
        { name: 'suppressed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.mojom.PipInstancePtr = arc.mojom.mojom.PipInstanceRemote;
arc.mojom.mojom.PipInstanceRequest = arc.mojom.mojom.PipInstancePendingReceiver;

