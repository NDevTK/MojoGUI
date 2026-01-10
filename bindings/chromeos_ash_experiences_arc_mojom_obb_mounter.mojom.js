// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/obb_mounter.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Interface: ObbMounterHost
arc.mojom.ObbMounterHost = {};

arc.mojom.ObbMounterHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.ObbMounterHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.ObbMounterHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.ObbMounterHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.ObbMounterHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.ObbMounterHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  mountObb(obb_file, target_path, owner_gid) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.ObbMounterHost_MountObb_ParamsSpec,
      arc.mojom.ObbMounterHost_MountObb_ResponseParamsSpec,
      [obb_file, target_path, owner_gid]);
  }

  unmountObb(target_path) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.ObbMounterHost_UnmountObb_ParamsSpec,
      arc.mojom.ObbMounterHost_UnmountObb_ResponseParamsSpec,
      [target_path]);
  }

};

arc.mojom.ObbMounterHost.getRemote = function() {
  let remote = new arc.mojom.ObbMounterHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.ObbMounterHost',
    'context');
  return remote.$;
};

// ParamsSpec for MountObb
arc.mojom.ObbMounterHost_MountObb_ParamsSpec = {
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

arc.mojom.ObbMounterHost_MountObb_ResponseParamsSpec = {
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
arc.mojom.ObbMounterHost_UnmountObb_ParamsSpec = {
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

arc.mojom.ObbMounterHost_UnmountObb_ResponseParamsSpec = {
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
arc.mojom.ObbMounterHostPtr = arc.mojom.ObbMounterHostRemote;
arc.mojom.ObbMounterHostRequest = arc.mojom.ObbMounterHostPendingReceiver;


// Interface: ObbMounterInstance
arc.mojom.ObbMounterInstance = {};

arc.mojom.ObbMounterInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.ObbMounterInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.ObbMounterInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.ObbMounterInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.ObbMounterInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.ObbMounterInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(host_remote) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.ObbMounterInstance_Init_ParamsSpec,
      null,
      [host_remote]);
  }

};

arc.mojom.ObbMounterInstance.getRemote = function() {
  let remote = new arc.mojom.ObbMounterInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.ObbMounterInstance',
    'context');
  return remote.$;
};

// ParamsSpec for Init
arc.mojom.ObbMounterInstance_Init_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ObbMounterInstance.Init_Params',
      packedSize: 16,
      fields: [
        { name: 'host_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.ObbMounterInstancePtr = arc.mojom.ObbMounterInstanceRemote;
arc.mojom.ObbMounterInstanceRequest = arc.mojom.ObbMounterInstancePendingReceiver;

