// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/volume_mounter.mojom
// Module: arc.mojom

'use strict';

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
};

arc.mojom.VolumeMounterHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestAllMountPoints() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.VolumeMounterHost_RequestAllMountPoints_ParamsSpec,
      null,
      [],
      false);
  }

  setUpExternalStorageMountPoints(media_provider_uid) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.VolumeMounterHost_SetUpExternalStorageMountPoints_ParamsSpec,
      arc.mojom.VolumeMounterHost_SetUpExternalStorageMountPoints_ResponseParamsSpec,
      [media_provider_uid],
      false);
  }

  onReadyToSuspend(success) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
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
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 1: {
          const params = arc.mojom.VolumeMounterHost_RequestAllMountPoints_ParamsSpec.$.decode(message.payload);
          const result = this.impl.requestAllMountPoints();
          break;
        }
        case 3: {
          const params = arc.mojom.VolumeMounterHost_SetUpExternalStorageMountPoints_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setUpExternalStorageMountPoints(params.media_provider_uid);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.VolumeMounterHost_SetUpExternalStorageMountPoints_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const params = arc.mojom.VolumeMounterHost_OnReadyToSuspend_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onReadyToSuspend(params.success);
          break;
        }
      }
    });
  }
};

arc.mojom.VolumeMounterHostReceiver = arc.mojom.VolumeMounterHostReceiver;

arc.mojom.VolumeMounterHostPtr = arc.mojom.VolumeMounterHostRemote;
arc.mojom.VolumeMounterHostRequest = arc.mojom.VolumeMounterHostPendingReceiver;


// Interface: VolumeMounterInstance
mojo.internal.Struct(
    arc.mojom.VolumeMounterInstance_Init_ParamsSpec, 'arc.mojom.VolumeMounterInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.VolumeMounterHostSpec), null, false, 0, undefined),
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
};

arc.mojom.VolumeMounterInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(host_remote) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.VolumeMounterInstance_Init_ParamsSpec,
      arc.mojom.VolumeMounterInstance_Init_ResponseParamsSpec,
      [host_remote],
      false);
  }

  onMountEvent(mount_point_info) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.VolumeMounterInstance_OnMountEvent_ParamsSpec,
      null,
      [mount_point_info],
      false);
  }

  prepareForRemovableMediaUnmount(path) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
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
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = arc.mojom.VolumeMounterInstance_Init_ParamsSpec.$.decode(message.payload);
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
          const params = arc.mojom.VolumeMounterInstance_OnMountEvent_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onMountEvent(params.mount_point_info);
          break;
        }
        case 2: {
          const params = arc.mojom.VolumeMounterInstance_PrepareForRemovableMediaUnmount_ParamsSpec.$.decode(message.payload);
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
    });
  }
};

arc.mojom.VolumeMounterInstanceReceiver = arc.mojom.VolumeMounterInstanceReceiver;

arc.mojom.VolumeMounterInstancePtr = arc.mojom.VolumeMounterInstanceRemote;
arc.mojom.VolumeMounterInstanceRequest = arc.mojom.VolumeMounterInstancePendingReceiver;

