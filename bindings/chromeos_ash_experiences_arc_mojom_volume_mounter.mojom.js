// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/volume_mounter.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


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
arc.mojom.MountPointInfoSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.MountPointInfo',
      packedSize: 56,
      fields: [
        { name: 'mount_event', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.MountEventSpec, nullable: false },
        { name: 'source_path', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'mount_path', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'fs_uuid', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'label', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'device_type', packedOffset: 48, packedBitOffset: 0, type: arc.mojom.DeviceTypeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: VolumeMounterHost
arc.mojom.VolumeMounterHost = {};

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

// Legacy compatibility
arc.mojom.VolumeMounterHostPtr = arc.mojom.VolumeMounterHostRemote;
arc.mojom.VolumeMounterHostRequest = arc.mojom.VolumeMounterHostPendingReceiver;


// Interface: VolumeMounterInstance
arc.mojom.VolumeMounterInstance = {};

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

// Legacy compatibility
arc.mojom.VolumeMounterInstancePtr = arc.mojom.VolumeMounterInstanceRemote;
arc.mojom.VolumeMounterInstanceRequest = arc.mojom.VolumeMounterInstancePendingReceiver;

