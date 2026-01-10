// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/disk_space.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};

arc.mojom.ApplicationsSizeSpec = { $: {} };
arc.mojom.DiskSpaceSpec = { $: {} };
arc.mojom.QuotaSpacesSpec = { $: {} };
arc.mojom.DiskSpaceHost = {};
arc.mojom.DiskSpaceHost.$interfaceName = 'arc.mojom.DiskSpaceHost';
arc.mojom.DiskSpaceHost_IsQuotaSupported_ParamsSpec = { $: {} };
arc.mojom.DiskSpaceHost_IsQuotaSupported_ResponseParamsSpec = { $: {} };
arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForUid_ParamsSpec = { $: {} };
arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForUid_ResponseParamsSpec = { $: {} };
arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForGid_ParamsSpec = { $: {} };
arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForGid_ResponseParamsSpec = { $: {} };
arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForProjectId_ParamsSpec = { $: {} };
arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForProjectId_ResponseParamsSpec = { $: {} };
arc.mojom.DiskSpaceHost_GetQuotaCurrentSpacesForIds_ParamsSpec = { $: {} };
arc.mojom.DiskSpaceHost_GetQuotaCurrentSpacesForIds_ResponseParamsSpec = { $: {} };
arc.mojom.DiskSpaceHost_GetFreeDiskSpace_ParamsSpec = { $: {} };
arc.mojom.DiskSpaceHost_GetFreeDiskSpace_ResponseParamsSpec = { $: {} };
arc.mojom.DiskSpaceInstance = {};
arc.mojom.DiskSpaceInstance.$interfaceName = 'arc.mojom.DiskSpaceInstance';
arc.mojom.DiskSpaceInstance_Init_ParamsSpec = { $: {} };
arc.mojom.DiskSpaceInstance_Init_ResponseParamsSpec = { $: {} };
arc.mojom.DiskSpaceInstance_GetApplicationsSize_ParamsSpec = { $: {} };
arc.mojom.DiskSpaceInstance_GetApplicationsSize_ResponseParamsSpec = { $: {} };
arc.mojom.DiskSpaceInstance_ResizeStorageBalloon_ParamsSpec = { $: {} };

// Struct: ApplicationsSize
mojo.internal.Struct(
    arc.mojom.ApplicationsSizeSpec, 'arc.mojom.ApplicationsSize', [
      mojo.internal.StructField('total_code_bytes', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('total_data_bytes', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('total_cache_bytes', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: DiskSpace
mojo.internal.Struct(
    arc.mojom.DiskSpaceSpec, 'arc.mojom.DiskSpace', [
      mojo.internal.StructField('space_in_bytes', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: QuotaSpaces
mojo.internal.Struct(
    arc.mojom.QuotaSpacesSpec, 'arc.mojom.QuotaSpaces', [
      mojo.internal.StructField('curspaces_for_uids', 0, 0, mojo.internal.Array(mojo.internal.Int64, false), null, false, 0, undefined),
      mojo.internal.StructField('curspaces_for_gids', 8, 0, mojo.internal.Array(mojo.internal.Int64, false), null, false, 0, undefined),
      mojo.internal.StructField('curspaces_for_project_ids', 16, 0, mojo.internal.Array(mojo.internal.Int64, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: DiskSpaceHost
mojo.internal.Struct(
    arc.mojom.DiskSpaceHost_IsQuotaSupported_ParamsSpec, 'arc.mojom.DiskSpaceHost_IsQuotaSupported_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.DiskSpaceHost_IsQuotaSupported_ResponseParamsSpec, 'arc.mojom.DiskSpaceHost_IsQuotaSupported_ResponseParams', [
      mojo.internal.StructField('supported', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForUid_ParamsSpec, 'arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForUid_Params', [
      mojo.internal.StructField('uid', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForUid_ResponseParamsSpec, 'arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForUid_ResponseParams', [
      mojo.internal.StructField('cur_space', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForGid_ParamsSpec, 'arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForGid_Params', [
      mojo.internal.StructField('gid', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForGid_ResponseParamsSpec, 'arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForGid_ResponseParams', [
      mojo.internal.StructField('cur_space', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForProjectId_ParamsSpec, 'arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForProjectId_Params', [
      mojo.internal.StructField('project_id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForProjectId_ResponseParamsSpec, 'arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForProjectId_ResponseParams', [
      mojo.internal.StructField('cur_space', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.DiskSpaceHost_GetQuotaCurrentSpacesForIds_ParamsSpec, 'arc.mojom.DiskSpaceHost_GetQuotaCurrentSpacesForIds_Params', [
      mojo.internal.StructField('uids', 0, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
      mojo.internal.StructField('gids', 8, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
      mojo.internal.StructField('project_ids', 16, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    arc.mojom.DiskSpaceHost_GetQuotaCurrentSpacesForIds_ResponseParamsSpec, 'arc.mojom.DiskSpaceHost_GetQuotaCurrentSpacesForIds_ResponseParams', [
      mojo.internal.StructField('quota_spaces', 0, 0, arc.mojom.QuotaSpacesSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.DiskSpaceHost_GetFreeDiskSpace_ParamsSpec, 'arc.mojom.DiskSpaceHost_GetFreeDiskSpace_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.DiskSpaceHost_GetFreeDiskSpace_ResponseParamsSpec, 'arc.mojom.DiskSpaceHost_GetFreeDiskSpace_ResponseParams', [
      mojo.internal.StructField('free_space', 0, 0, arc.mojom.DiskSpaceSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

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

  isQuotaSupported() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.DiskSpaceHost_IsQuotaSupported_ParamsSpec,
      arc.mojom.DiskSpaceHost_IsQuotaSupported_ResponseParamsSpec,
      [],
      false);
  }

  getQuotaCurrentSpaceForUid(uid) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForUid_ParamsSpec,
      arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForUid_ResponseParamsSpec,
      [uid],
      false);
  }

  getQuotaCurrentSpaceForGid(gid) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForGid_ParamsSpec,
      arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForGid_ResponseParamsSpec,
      [gid],
      false);
  }

  getQuotaCurrentSpaceForProjectId(project_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForProjectId_ParamsSpec,
      arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForProjectId_ResponseParamsSpec,
      [project_id],
      false);
  }

  getQuotaCurrentSpacesForIds(uids, gids, project_ids) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      arc.mojom.DiskSpaceHost_GetQuotaCurrentSpacesForIds_ParamsSpec,
      arc.mojom.DiskSpaceHost_GetQuotaCurrentSpacesForIds_ResponseParamsSpec,
      [uids, gids, project_ids],
      false);
  }

  getFreeDiskSpace() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      arc.mojom.DiskSpaceHost_GetFreeDiskSpace_ParamsSpec,
      arc.mojom.DiskSpaceHost_GetFreeDiskSpace_ResponseParamsSpec,
      [],
      false);
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

arc.mojom.DiskSpaceHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          buffer: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = arc.mojom.DiskSpaceHost_IsQuotaSupported_ParamsSpec.$.decode(message.payload);
          const result = this.impl.isQuotaSupported();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.DiskSpaceHost_IsQuotaSupported_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForUid_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getQuotaCurrentSpaceForUid(params.uid);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForUid_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const params = arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForGid_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getQuotaCurrentSpaceForGid(params.gid);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForGid_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const params = arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForProjectId_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getQuotaCurrentSpaceForProjectId(params.project_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForProjectId_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const params = arc.mojom.DiskSpaceHost_GetQuotaCurrentSpacesForIds_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getQuotaCurrentSpacesForIds(params.uids, params.gids, params.project_ids);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.DiskSpaceHost_GetQuotaCurrentSpacesForIds_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const params = arc.mojom.DiskSpaceHost_GetFreeDiskSpace_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getFreeDiskSpace();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.DiskSpaceHost_GetFreeDiskSpace_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

arc.mojom.DiskSpaceHostReceiver = arc.mojom.DiskSpaceHostReceiver;

arc.mojom.DiskSpaceHostPtr = arc.mojom.DiskSpaceHostRemote;
arc.mojom.DiskSpaceHostRequest = arc.mojom.DiskSpaceHostPendingReceiver;


// Interface: DiskSpaceInstance
mojo.internal.Struct(
    arc.mojom.DiskSpaceInstance_Init_ParamsSpec, 'arc.mojom.DiskSpaceInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.DiskSpaceHostSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.DiskSpaceInstance_Init_ResponseParamsSpec, 'arc.mojom.DiskSpaceInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.DiskSpaceInstance_GetApplicationsSize_ParamsSpec, 'arc.mojom.DiskSpaceInstance_GetApplicationsSize_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.DiskSpaceInstance_GetApplicationsSize_ResponseParamsSpec, 'arc.mojom.DiskSpaceInstance_GetApplicationsSize_ResponseParams', [
      mojo.internal.StructField('applications_size', 0, 0, arc.mojom.ApplicationsSizeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('succeeded', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.DiskSpaceInstance_ResizeStorageBalloon_ParamsSpec, 'arc.mojom.DiskSpaceInstance_ResizeStorageBalloon_Params', [
      mojo.internal.StructField('free_space_bytes', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

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

  init(host_remote) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.DiskSpaceInstance_Init_ParamsSpec,
      arc.mojom.DiskSpaceInstance_Init_ResponseParamsSpec,
      [host_remote],
      false);
  }

  getApplicationsSize() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.DiskSpaceInstance_GetApplicationsSize_ParamsSpec,
      arc.mojom.DiskSpaceInstance_GetApplicationsSize_ResponseParamsSpec,
      [],
      false);
  }

  resizeStorageBalloon(free_space_bytes) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.DiskSpaceInstance_ResizeStorageBalloon_ParamsSpec,
      null,
      [free_space_bytes],
      false);
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

arc.mojom.DiskSpaceInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          buffer: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = arc.mojom.DiskSpaceInstance_Init_ParamsSpec.$.decode(message.payload);
          const result = this.impl.init(params.host_remote);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.DiskSpaceInstance_Init_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = arc.mojom.DiskSpaceInstance_GetApplicationsSize_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getApplicationsSize();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.DiskSpaceInstance_GetApplicationsSize_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const params = arc.mojom.DiskSpaceInstance_ResizeStorageBalloon_ParamsSpec.$.decode(message.payload);
          const result = this.impl.resizeStorageBalloon(params.free_space_bytes);
          break;
        }
      }
    }});
  }
};

arc.mojom.DiskSpaceInstanceReceiver = arc.mojom.DiskSpaceInstanceReceiver;

arc.mojom.DiskSpaceInstancePtr = arc.mojom.DiskSpaceInstanceRemote;
arc.mojom.DiskSpaceInstanceRequest = arc.mojom.DiskSpaceInstancePendingReceiver;

