// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/disk_space.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Struct: ApplicationsSize
arc.mojom.ApplicationsSizeSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ApplicationsSize',
      packedSize: 32,
      fields: [
        { name: 'total_code_bytes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'total_data_bytes', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'total_cache_bytes', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DiskSpace
arc.mojom.DiskSpaceSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.DiskSpace',
      packedSize: 16,
      fields: [
        { name: 'space_in_bytes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: QuotaSpaces
arc.mojom.QuotaSpacesSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.QuotaSpaces',
      packedSize: 32,
      fields: [
        { name: 'curspaces_for_uids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'curspaces_for_gids', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'curspaces_for_project_ids', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: DiskSpaceHost
arc.mojom.DiskSpaceHost = {};

arc.mojom.DiskSpaceHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.DiskSpaceHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.DiskSpaceHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.DiskSpaceHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.DiskSpaceHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.DiskSpaceHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.DiskSpaceHost.getRemote = function() {
  let remote = new arc.mojom.DiskSpaceHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.DiskSpaceHost',
    'context');
  return remote.$;
};

// Legacy compatibility
arc.mojom.DiskSpaceHostPtr = arc.mojom.DiskSpaceHostRemote;
arc.mojom.DiskSpaceHostRequest = arc.mojom.DiskSpaceHostPendingReceiver;


// Interface: DiskSpaceInstance
arc.mojom.DiskSpaceInstance = {};

arc.mojom.DiskSpaceInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.DiskSpaceInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.DiskSpaceInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.DiskSpaceInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.DiskSpaceInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.DiskSpaceInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.DiskSpaceInstance.getRemote = function() {
  let remote = new arc.mojom.DiskSpaceInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.DiskSpaceInstance',
    'context');
  return remote.$;
};

// Legacy compatibility
arc.mojom.DiskSpaceInstancePtr = arc.mojom.DiskSpaceInstanceRemote;
arc.mojom.DiskSpaceInstanceRequest = arc.mojom.DiskSpaceInstancePendingReceiver;

