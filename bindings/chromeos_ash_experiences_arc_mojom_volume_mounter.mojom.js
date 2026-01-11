// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/volume_mounter.mojom
// Module: arc.mojom

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};
var mojo_base = mojo_base || {};

arc.mojom.MountEventSpec = { $: mojo.internal.Enum() };
arc.mojom.DeviceTypeSpec = { $: mojo.internal.Enum() };
arc.mojom.MountPointInfoSpec = { $: {} };
arc.mojom.VolumeMounterHost = {};
arc.mojom.VolumeMounterHost.$interfaceName = 'arc.mojom.VolumeMounterHost';
arc.mojom.VolumeMounterHost_RequestAllMountPoints_ParamsSpec = { $: {} };
arc.mojom.VolumeMounterHost_SetUpExternalStorageMountPoints_ParamsSpec = { $: {} };
arc.mojom.VolumeMounterHost_SetUpExternalStorageMountPoints_ResponseParamsSpec = { $: {} };
arc.mojom.VolumeMounterHost_OnReadyToSuspend_ParamsSpec = { $: {} };
arc.mojom.VolumeMounterInstance = {};
arc.mojom.VolumeMounterInstance.$interfaceName = 'arc.mojom.VolumeMounterInstance';
arc.mojom.VolumeMounterInstance_Init_ParamsSpec = { $: {} };
arc.mojom.VolumeMounterInstance_Init_ResponseParamsSpec = { $: {} };
arc.mojom.VolumeMounterInstance_OnMountEvent_ParamsSpec = { $: {} };
arc.mojom.VolumeMounterInstance_PrepareForRemovableMediaUnmount_ParamsSpec = { $: {} };
arc.mojom.VolumeMounterInstance_PrepareForRemovableMediaUnmount_ResponseParamsSpec = { $: {} };

// Enum: MountEvent
arc.mojom.MountEvent = {
  MOUNTING: 0,
  UNMOUNTING: 1,
};

// Enum: DeviceType
arc.mojom.DeviceType = {
  DEVICE_TYPE_UNKNOWN: 0,
  DEVICE_TYPE_USB: 1,
  DEVICE_TYPE_SD: 2,
};

// Struct: MountPointInfo
mojo.internal.Struct(
    arc.mojom.MountPointInfoSpec, 'arc.mojom.MountPointInfo', [
      mojo.internal.StructField('mount_event', 0, 0, arc.mojom.MountEventSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('source_path', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('mount_path', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('fs_uuid', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('label', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('device_type', 40, 0, arc.mojom.DeviceTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('visible', 48, 0, mojo.internal.Bool, false, false, 2, undefined),
    ],
    [[0, 56], [2, 64]]);

// Interface: VolumeMounterHost
mojo.internal.Struct(
    arc.mojom.VolumeMounterHost_RequestAllMountPoints_ParamsSpec, 'arc.mojom.VolumeMounterHost_RequestAllMountPoints_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.VolumeMounterHost_SetUpExternalStorageMountPoints_ParamsSpec, 'arc.mojom.VolumeMounterHost_SetUpExternalStorageMountPoints_Params', [
      mojo.internal.StructField('media_provider_uid', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.VolumeMounterHost_SetUpExternalStorageMountPoints_ResponseParamsSpec, 'arc.mojom.VolumeMounterHost_SetUpExternalStorageMountPoints_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.VolumeMounterHost_OnReadyToSuspend_ParamsSpec, 'arc.mojom.VolumeMounterHost_OnReadyToSuspend_Params', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

arc.mojom.VolumeMounterHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.VolumeMounterHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.VolumeMounterHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.VolumeMounterHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.VolumeMounterHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  requestAllMountPoints() {
    return this.$.requestAllMountPoints();
  }
  setUpExternalStorageMountPoints(media_provider_uid) {
    return this.$.setUpExternalStorageMountPoints(media_provider_uid);
  }
  onReadyToSuspend(success) {
    return this.$.onReadyToSuspend(success);
  }
};

arc.mojom.VolumeMounterHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('VolumeMounterHost', [
      { explicit: 1 },
      { explicit: 3 },
      { explicit: 4 },
    ]);
  }

  requestAllMountPoints() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.VolumeMounterHost_RequestAllMountPoints_ParamsSpec,
      null,
      [],
      false);
  }

  setUpExternalStorageMountPoints(media_provider_uid) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      arc.mojom.VolumeMounterHost_SetUpExternalStorageMountPoints_ParamsSpec,
      arc.mojom.VolumeMounterHost_SetUpExternalStorageMountPoints_ResponseParamsSpec,
      [media_provider_uid],
      false);
  }

  onReadyToSuspend(success) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      arc.mojom.VolumeMounterHost_OnReadyToSuspend_ParamsSpec,
      null,
      [success],
      false);
  }

};

arc.mojom.VolumeMounterHost.getRemote = function() {
  let remote = new arc.mojom.VolumeMounterHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.VolumeMounterHost',
    'context');
  return remote.$;
};

arc.mojom.VolumeMounterHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('VolumeMounterHost', [
      { explicit: 1 },
      { explicit: 3 },
      { explicit: 4 },
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
             decoder.decodeStructInline(arc.mojom.VolumeMounterHost_RequestAllMountPoints_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.VolumeMounterHost_SetUpExternalStorageMountPoints_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.VolumeMounterHost_OnReadyToSuspend_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.VolumeMounterHost_RequestAllMountPoints_ParamsSpec.$.structSpec);
          const result = this.impl.requestAllMountPoints();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.VolumeMounterHost_SetUpExternalStorageMountPoints_ParamsSpec.$.structSpec);
          const result = this.impl.setUpExternalStorageMountPoints(params.media_provider_uid);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.VolumeMounterHost_SetUpExternalStorageMountPoints_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.VolumeMounterHost_OnReadyToSuspend_ParamsSpec.$.structSpec);
          const result = this.impl.onReadyToSuspend(params.success);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

arc.mojom.VolumeMounterHostReceiver = arc.mojom.VolumeMounterHostReceiver;

arc.mojom.VolumeMounterHostPtr = arc.mojom.VolumeMounterHostRemote;
arc.mojom.VolumeMounterHostRequest = arc.mojom.VolumeMounterHostPendingReceiver;


// Interface: VolumeMounterInstance
mojo.internal.Struct(
    arc.mojom.VolumeMounterInstance_Init_ParamsSpec, 'arc.mojom.VolumeMounterInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.VolumeMounterHostRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.VolumeMounterInstance_Init_ResponseParamsSpec, 'arc.mojom.VolumeMounterInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.VolumeMounterInstance_OnMountEvent_ParamsSpec, 'arc.mojom.VolumeMounterInstance_OnMountEvent_Params', [
      mojo.internal.StructField('mount_point_info', 0, 0, arc.mojom.MountPointInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.VolumeMounterInstance_PrepareForRemovableMediaUnmount_ParamsSpec, 'arc.mojom.VolumeMounterInstance_PrepareForRemovableMediaUnmount_Params', [
      mojo.internal.StructField('path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.VolumeMounterInstance_PrepareForRemovableMediaUnmount_ResponseParamsSpec, 'arc.mojom.VolumeMounterInstance_PrepareForRemovableMediaUnmount_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

arc.mojom.VolumeMounterInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.VolumeMounterInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.VolumeMounterInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.VolumeMounterInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.VolumeMounterInstanceRemoteCallHandler(this.proxy);
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
  onMountEvent(mount_point_info) {
    return this.$.onMountEvent(mount_point_info);
  }
  prepareForRemovableMediaUnmount(path) {
    return this.$.prepareForRemovableMediaUnmount(path);
  }
};

arc.mojom.VolumeMounterInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('VolumeMounterInstance', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
    ]);
  }

  init(host_remote) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.VolumeMounterInstance_Init_ParamsSpec,
      arc.mojom.VolumeMounterInstance_Init_ResponseParamsSpec,
      [host_remote],
      false);
  }

  onMountEvent(mount_point_info) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      arc.mojom.VolumeMounterInstance_OnMountEvent_ParamsSpec,
      null,
      [mount_point_info],
      false);
  }

  prepareForRemovableMediaUnmount(path) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      arc.mojom.VolumeMounterInstance_PrepareForRemovableMediaUnmount_ParamsSpec,
      arc.mojom.VolumeMounterInstance_PrepareForRemovableMediaUnmount_ResponseParamsSpec,
      [path],
      false);
  }

};

arc.mojom.VolumeMounterInstance.getRemote = function() {
  let remote = new arc.mojom.VolumeMounterInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.VolumeMounterInstance',
    'context');
  return remote.$;
};

arc.mojom.VolumeMounterInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('VolumeMounterInstance', [
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
             decoder.decodeStructInline(arc.mojom.VolumeMounterInstance_Init_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.VolumeMounterInstance_OnMountEvent_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.VolumeMounterInstance_PrepareForRemovableMediaUnmount_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.VolumeMounterInstance_Init_ParamsSpec.$.structSpec);
          const result = this.impl.init(params.host_remote);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.VolumeMounterInstance_Init_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.VolumeMounterInstance_OnMountEvent_ParamsSpec.$.structSpec);
          const result = this.impl.onMountEvent(params.mount_point_info);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.VolumeMounterInstance_PrepareForRemovableMediaUnmount_ParamsSpec.$.structSpec);
          const result = this.impl.prepareForRemovableMediaUnmount(params.path);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.VolumeMounterInstance_PrepareForRemovableMediaUnmount_ResponseParamsSpec);
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

arc.mojom.VolumeMounterInstanceReceiver = arc.mojom.VolumeMounterInstanceReceiver;

arc.mojom.VolumeMounterInstancePtr = arc.mojom.VolumeMounterInstanceRemote;
arc.mojom.VolumeMounterInstanceRequest = arc.mojom.VolumeMounterInstancePendingReceiver;

