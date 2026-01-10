// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/volume_mounter.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: MountEvent
arc.mojom.mojom.MountEvent = {
  MOUNTING: 0,
  UNMOUNTING: 1,
};
arc.mojom.mojom.MountEventSpec = { $: mojo.internal.Enum() };

// Enum: DeviceType
arc.mojom.mojom.DeviceType = {
  DEVICE_TYPE_UNKNOWN: 0,
  DEVICE_TYPE_USB: 1,
  DEVICE_TYPE_SD: 2,
};
arc.mojom.mojom.DeviceTypeSpec = { $: mojo.internal.Enum() };

// Struct: MountPointInfo
arc.mojom.mojom.MountPointInfoSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.MountPointInfo',
      packedSize: 56,
      fields: [
        { name: 'mount_event', packedOffset: 32, packedBitOffset: 0, type: arc.mojom.MountEventSpec, nullable: false, minVersion: 0 },
        { name: 'source_path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'mount_path', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'fs_uuid', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'label', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'device_type', packedOffset: 36, packedBitOffset: 0, type: arc.mojom.DeviceTypeSpec, nullable: false, minVersion: 0 },
        { name: 'visible', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 2 },
      ],
      versions: [{version: 0, packedSize: 48}, {version: 2, packedSize: 56}]
    }
  }
};

// Interface: VolumeMounterHost
arc.mojom.mojom.VolumeMounterHost = {};

arc.mojom.mojom.VolumeMounterHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.mojom.VolumeMounterHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.VolumeMounterHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.mojom.VolumeMounterHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.mojom.VolumeMounterHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.mojom.VolumeMounterHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestAllMountPoints() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.mojom.VolumeMounterHost_RequestAllMountPoints_ParamsSpec,
      null,
      []);
  }

  setUpExternalStorageMountPoints(media_provider_uid) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.mojom.VolumeMounterHost_SetUpExternalStorageMountPoints_ParamsSpec,
      arc.mojom.mojom.VolumeMounterHost_SetUpExternalStorageMountPoints_ResponseParamsSpec,
      [media_provider_uid]);
  }

  onReadyToSuspend(success) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      arc.mojom.mojom.VolumeMounterHost_OnReadyToSuspend_ParamsSpec,
      null,
      [success]);
  }

};

arc.mojom.mojom.VolumeMounterHost.getRemote = function() {
  let remote = new arc.mojom.mojom.VolumeMounterHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.VolumeMounterHost',
    'context');
  return remote.$;
};

// ParamsSpec for RequestAllMountPoints
arc.mojom.mojom.VolumeMounterHost_RequestAllMountPoints_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VolumeMounterHost.RequestAllMountPoints_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SetUpExternalStorageMountPoints
arc.mojom.mojom.VolumeMounterHost_SetUpExternalStorageMountPoints_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VolumeMounterHost.SetUpExternalStorageMountPoints_Params',
      packedSize: 16,
      fields: [
        { name: 'media_provider_uid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.mojom.VolumeMounterHost_SetUpExternalStorageMountPoints_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VolumeMounterHost.SetUpExternalStorageMountPoints_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnReadyToSuspend
arc.mojom.mojom.VolumeMounterHost_OnReadyToSuspend_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VolumeMounterHost.OnReadyToSuspend_Params',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.mojom.VolumeMounterHostPtr = arc.mojom.mojom.VolumeMounterHostRemote;
arc.mojom.mojom.VolumeMounterHostRequest = arc.mojom.mojom.VolumeMounterHostPendingReceiver;


// Interface: VolumeMounterInstance
arc.mojom.mojom.VolumeMounterInstance = {};

arc.mojom.mojom.VolumeMounterInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.mojom.VolumeMounterInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.VolumeMounterInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.mojom.VolumeMounterInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.mojom.VolumeMounterInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.mojom.VolumeMounterInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(host_remote) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.mojom.VolumeMounterInstance_Init_ParamsSpec,
      null,
      [host_remote]);
  }

  onMountEvent(mount_point_info) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.mojom.VolumeMounterInstance_OnMountEvent_ParamsSpec,
      null,
      [mount_point_info]);
  }

  prepareForRemovableMediaUnmount(path) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.mojom.VolumeMounterInstance_PrepareForRemovableMediaUnmount_ParamsSpec,
      arc.mojom.mojom.VolumeMounterInstance_PrepareForRemovableMediaUnmount_ResponseParamsSpec,
      [path]);
  }

};

arc.mojom.mojom.VolumeMounterInstance.getRemote = function() {
  let remote = new arc.mojom.mojom.VolumeMounterInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.VolumeMounterInstance',
    'context');
  return remote.$;
};

// ParamsSpec for Init
arc.mojom.mojom.VolumeMounterInstance_Init_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VolumeMounterInstance.Init_Params',
      packedSize: 16,
      fields: [
        { name: 'host_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnMountEvent
arc.mojom.mojom.VolumeMounterInstance_OnMountEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VolumeMounterInstance.OnMountEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'mount_point_info', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.MountPointInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for PrepareForRemovableMediaUnmount
arc.mojom.mojom.VolumeMounterInstance_PrepareForRemovableMediaUnmount_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VolumeMounterInstance.PrepareForRemovableMediaUnmount_Params',
      packedSize: 16,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.mojom.VolumeMounterInstance_PrepareForRemovableMediaUnmount_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.VolumeMounterInstance.PrepareForRemovableMediaUnmount_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.mojom.VolumeMounterInstancePtr = arc.mojom.mojom.VolumeMounterInstanceRemote;
arc.mojom.mojom.VolumeMounterInstanceRequest = arc.mojom.mojom.VolumeMounterInstancePendingReceiver;

