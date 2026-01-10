// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/obb_mounter.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Interface: ObbMounterHost
arc.mojom.mojom.ObbMounterHost = {};

arc.mojom.mojom.ObbMounterHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.mojom.ObbMounterHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.ObbMounterHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.mojom.ObbMounterHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.mojom.ObbMounterHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.mojom.ObbMounterHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  mountObb(obb_file, target_path, owner_gid) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.mojom.ObbMounterHost_MountObb_ParamsSpec,
      arc.mojom.mojom.ObbMounterHost_MountObb_ResponseParamsSpec,
      [obb_file, target_path, owner_gid]);
  }

  unmountObb(target_path) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.mojom.ObbMounterHost_UnmountObb_ParamsSpec,
      arc.mojom.mojom.ObbMounterHost_UnmountObb_ResponseParamsSpec,
      [target_path]);
  }

};

arc.mojom.mojom.ObbMounterHost.getRemote = function() {
  let remote = new arc.mojom.mojom.ObbMounterHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.ObbMounterHost',
    'context');
  return remote.$;
};

// ParamsSpec for MountObb
arc.mojom.mojom.ObbMounterHost_MountObb_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ObbMounterHost.MountObb_Params',
      packedSize: 32,
      fields: [
        { name: 'obb_file', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'target_path', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'owner_gid', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

arc.mojom.mojom.ObbMounterHost_MountObb_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ObbMounterHost.MountObb_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UnmountObb
arc.mojom.mojom.ObbMounterHost_UnmountObb_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ObbMounterHost.UnmountObb_Params',
      packedSize: 16,
      fields: [
        { name: 'target_path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.mojom.ObbMounterHost_UnmountObb_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ObbMounterHost.UnmountObb_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.mojom.ObbMounterHostPtr = arc.mojom.mojom.ObbMounterHostRemote;
arc.mojom.mojom.ObbMounterHostRequest = arc.mojom.mojom.ObbMounterHostPendingReceiver;


// Interface: ObbMounterInstance
arc.mojom.mojom.ObbMounterInstance = {};

arc.mojom.mojom.ObbMounterInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.mojom.ObbMounterInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.ObbMounterInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.mojom.ObbMounterInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.mojom.ObbMounterInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.mojom.ObbMounterInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(host_remote) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.mojom.ObbMounterInstance_Init_ParamsSpec,
      null,
      [host_remote]);
  }

};

arc.mojom.mojom.ObbMounterInstance.getRemote = function() {
  let remote = new arc.mojom.mojom.ObbMounterInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.ObbMounterInstance',
    'context');
  return remote.$;
};

// ParamsSpec for Init
arc.mojom.mojom.ObbMounterInstance_Init_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ObbMounterInstance.Init_Params',
      packedSize: 16,
      fields: [
        { name: 'host_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.ObbMounterHostRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.mojom.ObbMounterInstancePtr = arc.mojom.mojom.ObbMounterInstanceRemote;
arc.mojom.mojom.ObbMounterInstanceRequest = arc.mojom.mojom.ObbMounterInstancePendingReceiver;

