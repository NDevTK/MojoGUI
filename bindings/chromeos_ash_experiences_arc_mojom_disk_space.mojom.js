// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/disk_space.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Struct: ApplicationsSize
arc.mojom.mojom.ApplicationsSizeSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ApplicationsSize',
      packedSize: 32,
      fields: [
        { name: 'total_code_bytes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'total_data_bytes', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'total_cache_bytes', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: DiskSpace
arc.mojom.mojom.DiskSpaceSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.DiskSpace',
      packedSize: 16,
      fields: [
        { name: 'space_in_bytes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: QuotaSpaces
arc.mojom.mojom.QuotaSpacesSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.QuotaSpaces',
      packedSize: 32,
      fields: [
        { name: 'curspaces_for_uids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Int64, false), nullable: false, minVersion: 0 },
        { name: 'curspaces_for_gids', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Int64, false), nullable: false, minVersion: 0 },
        { name: 'curspaces_for_project_ids', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Int64, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: DiskSpaceHost
arc.mojom.mojom.DiskSpaceHost = {};

arc.mojom.mojom.DiskSpaceHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.mojom.DiskSpaceHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.DiskSpaceHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.mojom.DiskSpaceHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.mojom.DiskSpaceHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.mojom.DiskSpaceHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  isQuotaSupported() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.mojom.DiskSpaceHost_IsQuotaSupported_ParamsSpec,
      arc.mojom.mojom.DiskSpaceHost_IsQuotaSupported_ResponseParamsSpec,
      []);
  }

  getQuotaCurrentSpaceForUid(uid) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForUid_ParamsSpec,
      arc.mojom.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForUid_ResponseParamsSpec,
      [uid]);
  }

  getQuotaCurrentSpaceForGid(gid) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForGid_ParamsSpec,
      arc.mojom.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForGid_ResponseParamsSpec,
      [gid]);
  }

  getQuotaCurrentSpaceForProjectId(project_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForProjectId_ParamsSpec,
      arc.mojom.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForProjectId_ResponseParamsSpec,
      [project_id]);
  }

  getQuotaCurrentSpacesForIds(uids, gids, project_ids) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      arc.mojom.mojom.DiskSpaceHost_GetQuotaCurrentSpacesForIds_ParamsSpec,
      arc.mojom.mojom.DiskSpaceHost_GetQuotaCurrentSpacesForIds_ResponseParamsSpec,
      [uids, gids, project_ids]);
  }

  getFreeDiskSpace() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      arc.mojom.mojom.DiskSpaceHost_GetFreeDiskSpace_ParamsSpec,
      arc.mojom.mojom.DiskSpaceHost_GetFreeDiskSpace_ResponseParamsSpec,
      []);
  }

};

arc.mojom.mojom.DiskSpaceHost.getRemote = function() {
  let remote = new arc.mojom.mojom.DiskSpaceHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.DiskSpaceHost',
    'context');
  return remote.$;
};

// ParamsSpec for IsQuotaSupported
arc.mojom.mojom.DiskSpaceHost_IsQuotaSupported_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.DiskSpaceHost.IsQuotaSupported_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.mojom.DiskSpaceHost_IsQuotaSupported_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.DiskSpaceHost.IsQuotaSupported_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'supported', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetQuotaCurrentSpaceForUid
arc.mojom.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForUid_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.DiskSpaceHost.GetQuotaCurrentSpaceForUid_Params',
      packedSize: 16,
      fields: [
        { name: 'uid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForUid_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.DiskSpaceHost.GetQuotaCurrentSpaceForUid_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'cur_space', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetQuotaCurrentSpaceForGid
arc.mojom.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForGid_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.DiskSpaceHost.GetQuotaCurrentSpaceForGid_Params',
      packedSize: 16,
      fields: [
        { name: 'gid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForGid_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.DiskSpaceHost.GetQuotaCurrentSpaceForGid_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'cur_space', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetQuotaCurrentSpaceForProjectId
arc.mojom.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForProjectId_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.DiskSpaceHost.GetQuotaCurrentSpaceForProjectId_Params',
      packedSize: 16,
      fields: [
        { name: 'project_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForProjectId_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.DiskSpaceHost.GetQuotaCurrentSpaceForProjectId_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'cur_space', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetQuotaCurrentSpacesForIds
arc.mojom.mojom.DiskSpaceHost_GetQuotaCurrentSpacesForIds_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.DiskSpaceHost.GetQuotaCurrentSpacesForIds_Params',
      packedSize: 32,
      fields: [
        { name: 'uids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint32, false), nullable: false, minVersion: 0 },
        { name: 'gids', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint32, false), nullable: false, minVersion: 0 },
        { name: 'project_ids', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint32, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

arc.mojom.mojom.DiskSpaceHost_GetQuotaCurrentSpacesForIds_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.DiskSpaceHost.GetQuotaCurrentSpacesForIds_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'quota_spaces', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.QuotaSpacesSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetFreeDiskSpace
arc.mojom.mojom.DiskSpaceHost_GetFreeDiskSpace_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.DiskSpaceHost.GetFreeDiskSpace_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.mojom.DiskSpaceHost_GetFreeDiskSpace_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.DiskSpaceHost.GetFreeDiskSpace_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'free_space', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.DiskSpaceSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.mojom.DiskSpaceHostPtr = arc.mojom.mojom.DiskSpaceHostRemote;
arc.mojom.mojom.DiskSpaceHostRequest = arc.mojom.mojom.DiskSpaceHostPendingReceiver;


// Interface: DiskSpaceInstance
arc.mojom.mojom.DiskSpaceInstance = {};

arc.mojom.mojom.DiskSpaceInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.mojom.DiskSpaceInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.DiskSpaceInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.mojom.DiskSpaceInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.mojom.DiskSpaceInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.mojom.DiskSpaceInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(host_remote) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.mojom.DiskSpaceInstance_Init_ParamsSpec,
      null,
      [host_remote]);
  }

  getApplicationsSize() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.mojom.DiskSpaceInstance_GetApplicationsSize_ParamsSpec,
      arc.mojom.mojom.DiskSpaceInstance_GetApplicationsSize_ResponseParamsSpec,
      []);
  }

  resizeStorageBalloon(free_space_bytes) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.mojom.DiskSpaceInstance_ResizeStorageBalloon_ParamsSpec,
      null,
      [free_space_bytes]);
  }

};

arc.mojom.mojom.DiskSpaceInstance.getRemote = function() {
  let remote = new arc.mojom.mojom.DiskSpaceInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.DiskSpaceInstance',
    'context');
  return remote.$;
};

// ParamsSpec for Init
arc.mojom.mojom.DiskSpaceInstance_Init_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.DiskSpaceInstance.Init_Params',
      packedSize: 16,
      fields: [
        { name: 'host_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetApplicationsSize
arc.mojom.mojom.DiskSpaceInstance_GetApplicationsSize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.DiskSpaceInstance.GetApplicationsSize_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.mojom.DiskSpaceInstance_GetApplicationsSize_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.DiskSpaceInstance.GetApplicationsSize_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'succeeded', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'applications_size', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.ApplicationsSizeSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ResizeStorageBalloon
arc.mojom.mojom.DiskSpaceInstance_ResizeStorageBalloon_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.DiskSpaceInstance.ResizeStorageBalloon_Params',
      packedSize: 16,
      fields: [
        { name: 'free_space_bytes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.mojom.DiskSpaceInstancePtr = arc.mojom.mojom.DiskSpaceInstanceRemote;
arc.mojom.mojom.DiskSpaceInstanceRequest = arc.mojom.mojom.DiskSpaceInstancePendingReceiver;

