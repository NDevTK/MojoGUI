// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/disk_space.mojom
// Module: arc.mojom

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
  isQuotaSupported() {
    return this.$.isQuotaSupported();
  }
  getQuotaCurrentSpaceForUid(uid) {
    return this.$.getQuotaCurrentSpaceForUid(uid);
  }
  getQuotaCurrentSpaceForGid(gid) {
    return this.$.getQuotaCurrentSpaceForGid(gid);
  }
  getQuotaCurrentSpaceForProjectId(project_id) {
    return this.$.getQuotaCurrentSpaceForProjectId(project_id);
  }
  getQuotaCurrentSpacesForIds(uids, gids, project_ids) {
    return this.$.getQuotaCurrentSpacesForIds(uids, gids, project_ids);
  }
  getFreeDiskSpace() {
    return this.$.getFreeDiskSpace();
  }
};

arc.mojom.DiskSpaceHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DiskSpaceHost', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 6 },
      { explicit: 5 },
    ]);
  }

  isQuotaSupported() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.DiskSpaceHost_IsQuotaSupported_ParamsSpec,
      arc.mojom.DiskSpaceHost_IsQuotaSupported_ResponseParamsSpec,
      [],
      false);
  }

  getQuotaCurrentSpaceForUid(uid) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForUid_ParamsSpec,
      arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForUid_ResponseParamsSpec,
      [uid],
      false);
  }

  getQuotaCurrentSpaceForGid(gid) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForGid_ParamsSpec,
      arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForGid_ResponseParamsSpec,
      [gid],
      false);
  }

  getQuotaCurrentSpaceForProjectId(project_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForProjectId_ParamsSpec,
      arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForProjectId_ResponseParamsSpec,
      [project_id],
      false);
  }

  getQuotaCurrentSpacesForIds(uids, gids, project_ids) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      arc.mojom.DiskSpaceHost_GetQuotaCurrentSpacesForIds_ParamsSpec,
      arc.mojom.DiskSpaceHost_GetQuotaCurrentSpacesForIds_ResponseParamsSpec,
      [uids, gids, project_ids],
      false);
  }

  getFreeDiskSpace() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DiskSpaceHost', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 6 },
      { explicit: 5 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.DiskSpaceHost_IsQuotaSupported_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForUid_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForGid_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForProjectId_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.DiskSpaceHost_GetQuotaCurrentSpacesForIds_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.DiskSpaceHost_GetFreeDiskSpace_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.DiskSpaceHost_IsQuotaSupported_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForUid_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForGid_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForProjectId_ParamsSpec.$.structSpec);
          const result = this.impl.getQuotaCurrentSpaceForProjectId(params.project_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.DiskSpaceHost_GetQuotaCurrentSpaceForProjectId_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.DiskSpaceHost_GetQuotaCurrentSpacesForIds_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.DiskSpaceHost_GetFreeDiskSpace_ParamsSpec.$.structSpec);
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
      } catch (err) {}
    }});
  }
};

arc.mojom.DiskSpaceHostReceiver = arc.mojom.DiskSpaceHostReceiver;

arc.mojom.DiskSpaceHostPtr = arc.mojom.DiskSpaceHostRemote;
arc.mojom.DiskSpaceHostRequest = arc.mojom.DiskSpaceHostPendingReceiver;


// Interface: DiskSpaceInstance
mojo.internal.Struct(
    arc.mojom.DiskSpaceInstance_Init_ParamsSpec, 'arc.mojom.DiskSpaceInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.DiskSpaceHostRemote), null, false, 0, undefined),
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
  init(host_remote) {
    return this.$.init(host_remote);
  }
  getApplicationsSize() {
    return this.$.getApplicationsSize();
  }
  resizeStorageBalloon(free_space_bytes) {
    return this.$.resizeStorageBalloon(free_space_bytes);
  }
};

arc.mojom.DiskSpaceInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DiskSpaceInstance', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
    ]);
  }

  init(host_remote) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.DiskSpaceInstance_Init_ParamsSpec,
      arc.mojom.DiskSpaceInstance_Init_ResponseParamsSpec,
      [host_remote],
      false);
  }

  getApplicationsSize() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      arc.mojom.DiskSpaceInstance_GetApplicationsSize_ParamsSpec,
      arc.mojom.DiskSpaceInstance_GetApplicationsSize_ResponseParamsSpec,
      [],
      false);
  }

  resizeStorageBalloon(free_space_bytes) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DiskSpaceInstance', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.DiskSpaceInstance_Init_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.DiskSpaceInstance_GetApplicationsSize_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.DiskSpaceInstance_ResizeStorageBalloon_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.DiskSpaceInstance_Init_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.DiskSpaceInstance_GetApplicationsSize_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.DiskSpaceInstance_ResizeStorageBalloon_ParamsSpec.$.structSpec);
          const result = this.impl.resizeStorageBalloon(params.free_space_bytes);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

arc.mojom.DiskSpaceInstanceReceiver = arc.mojom.DiskSpaceInstanceReceiver;

arc.mojom.DiskSpaceInstancePtr = arc.mojom.DiskSpaceInstanceRemote;
arc.mojom.DiskSpaceInstanceRequest = arc.mojom.DiskSpaceInstancePendingReceiver;

