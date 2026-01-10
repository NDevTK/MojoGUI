// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/usb_host.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Interface: UsbHostHost
arc.mojom.UsbHostHost = {};

arc.mojom.UsbHostHost_OpenDevice_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.UsbHostHost_OpenDevice_Params',
      packedSize: 24,
      fields: [
        { name: 'guid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'pkg_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

arc.mojom.UsbHostHost_GetDeviceInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.UsbHostHost_GetDeviceInfo_Params',
      packedSize: 16,
      fields: [
        { name: 'guid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.UsbHostHost_RequestPermission_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.UsbHostHost_RequestPermission_Params',
      packedSize: 32,
      fields: [
        { name: 'guid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'pkg_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'interactive', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

arc.mojom.UsbHostHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.UsbHostHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.UsbHostHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.UsbHostHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.UsbHostHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.UsbHostHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  openDevice(guid, pkg_name) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.UsbHostHost_OpenDevice_ParamsSpec,
      arc.mojom.UsbHostHost_OpenDevice_ResponseParamsSpec,
      [guid, pkg_name]);
  }

  getDeviceInfo(guid) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.UsbHostHost_GetDeviceInfo_ParamsSpec,
      arc.mojom.UsbHostHost_GetDeviceInfo_ResponseParamsSpec,
      [guid]);
  }

  requestPermission(guid, pkg_name, interactive) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.UsbHostHost_RequestPermission_ParamsSpec,
      arc.mojom.UsbHostHost_RequestPermission_ResponseParamsSpec,
      [guid, pkg_name, interactive]);
  }

};

arc.mojom.UsbHostHost.getRemote = function() {
  let remote = new arc.mojom.UsbHostHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.UsbHostHost',
    'context');
  return remote.$;
};

// ParamsSpec for OpenDevice
arc.mojom.UsbHostHost_OpenDevice_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.UsbHostHost.OpenDevice_Params',
      packedSize: 24,
      fields: [
        { name: 'guid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'pkg_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

arc.mojom.UsbHostHost_OpenDevice_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.UsbHostHost.OpenDevice_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'usb_fd', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Handle, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetDeviceInfo
arc.mojom.UsbHostHost_GetDeviceInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.UsbHostHost.GetDeviceInfo_Params',
      packedSize: 16,
      fields: [
        { name: 'guid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.UsbHostHost_GetDeviceInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.UsbHostHost.GetDeviceInfo_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'device_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'info', packedOffset: 8, packedBitOffset: 0, type: device.mojom.UsbDeviceInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for RequestPermission
arc.mojom.UsbHostHost_RequestPermission_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.UsbHostHost.RequestPermission_Params',
      packedSize: 32,
      fields: [
        { name: 'guid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'pkg_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'interactive', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

arc.mojom.UsbHostHost_RequestPermission_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.UsbHostHost.RequestPermission_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'authorized', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.UsbHostHostPtr = arc.mojom.UsbHostHostRemote;
arc.mojom.UsbHostHostRequest = arc.mojom.UsbHostHostPendingReceiver;


// Interface: UsbHostInstance
arc.mojom.UsbHostInstance = {};

arc.mojom.UsbHostInstance_Init_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.UsbHostInstance_Init_Params',
      packedSize: 16,
      fields: [
        { name: 'host_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.UsbHostHostRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.UsbHostInstance_OnDeviceAdded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.UsbHostInstance_OnDeviceAdded_Params',
      packedSize: 24,
      fields: [
        { name: 'guid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'event_receiver_packages', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: true, minVersion: 2 },
      ],
      versions: [{version: 0, packedSize: 16}, {version: 2, packedSize: 24}]
    }
  }
};

arc.mojom.UsbHostInstance_OnDeviceRemoved_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.UsbHostInstance_OnDeviceRemoved_Params',
      packedSize: 24,
      fields: [
        { name: 'guid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'event_receiver_packages', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: true, minVersion: 2 },
      ],
      versions: [{version: 0, packedSize: 16}, {version: 2, packedSize: 24}]
    }
  }
};

arc.mojom.UsbHostInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.UsbHostInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.UsbHostInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.UsbHostInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.UsbHostInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.UsbHostInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(host_remote) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.UsbHostInstance_Init_ParamsSpec,
      null,
      [host_remote]);
  }

  onDeviceAdded(guid, event_receiver_packages) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.UsbHostInstance_OnDeviceAdded_ParamsSpec,
      null,
      [guid, event_receiver_packages]);
  }

  onDeviceRemoved(guid, event_receiver_packages) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.UsbHostInstance_OnDeviceRemoved_ParamsSpec,
      null,
      [guid, event_receiver_packages]);
  }

};

arc.mojom.UsbHostInstance.getRemote = function() {
  let remote = new arc.mojom.UsbHostInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.UsbHostInstance',
    'context');
  return remote.$;
};

// ParamsSpec for Init
arc.mojom.UsbHostInstance_Init_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.UsbHostInstance.Init_Params',
      packedSize: 16,
      fields: [
        { name: 'host_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.UsbHostHostRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnDeviceAdded
arc.mojom.UsbHostInstance_OnDeviceAdded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.UsbHostInstance.OnDeviceAdded_Params',
      packedSize: 24,
      fields: [
        { name: 'guid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'event_receiver_packages', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: true, minVersion: 2 },
      ],
      versions: [{version: 0, packedSize: 16}, {version: 2, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnDeviceRemoved
arc.mojom.UsbHostInstance_OnDeviceRemoved_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.UsbHostInstance.OnDeviceRemoved_Params',
      packedSize: 24,
      fields: [
        { name: 'guid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'event_receiver_packages', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: true, minVersion: 2 },
      ],
      versions: [{version: 0, packedSize: 16}, {version: 2, packedSize: 24}]
    }
  }
};

// Legacy compatibility
arc.mojom.UsbHostInstancePtr = arc.mojom.UsbHostInstanceRemote;
arc.mojom.UsbHostInstanceRequest = arc.mojom.UsbHostInstancePendingReceiver;

