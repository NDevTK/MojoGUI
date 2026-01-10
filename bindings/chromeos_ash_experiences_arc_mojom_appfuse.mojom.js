// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/appfuse.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Interface: AppfuseHost
arc.mojom.AppfuseHost = {};

arc.mojom.AppfuseHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.AppfuseHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.AppfuseHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.AppfuseHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.AppfuseHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.AppfuseHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  mount(uid, mount_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.AppfuseHost_Mount_ParamsSpec,
      arc.mojom.AppfuseHost_Mount_ResponseParamsSpec,
      [uid, mount_id]);
  }

  unmount(uid, mount_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.AppfuseHost_Unmount_ParamsSpec,
      arc.mojom.AppfuseHost_Unmount_ResponseParamsSpec,
      [uid, mount_id]);
  }

  openFile(uid, mount_id, file_id, flags) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.AppfuseHost_OpenFile_ParamsSpec,
      arc.mojom.AppfuseHost_OpenFile_ResponseParamsSpec,
      [uid, mount_id, file_id, flags]);
  }

};

arc.mojom.AppfuseHost.getRemote = function() {
  let remote = new arc.mojom.AppfuseHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.AppfuseHost',
    'context');
  return remote.$;
};

// ParamsSpec for Mount
arc.mojom.AppfuseHost_Mount_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppfuseHost.Mount_Params',
      packedSize: 16,
      fields: [
        { name: 'uid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'mount_id', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.AppfuseHost_Mount_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'fd', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Handle, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Unmount
arc.mojom.AppfuseHost_Unmount_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppfuseHost.Unmount_Params',
      packedSize: 16,
      fields: [
        { name: 'uid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'mount_id', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.AppfuseHost_Unmount_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OpenFile
arc.mojom.AppfuseHost_OpenFile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppfuseHost.OpenFile_Params',
      packedSize: 24,
      fields: [
        { name: 'uid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'mount_id', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'file_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'flags', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

arc.mojom.AppfuseHost_OpenFile_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'fd', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Handle, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.AppfuseHostPtr = arc.mojom.AppfuseHostRemote;
arc.mojom.AppfuseHostRequest = arc.mojom.AppfuseHostPendingReceiver;


// Interface: AppfuseInstance
arc.mojom.AppfuseInstance = {};

arc.mojom.AppfuseInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.AppfuseInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.AppfuseInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.AppfuseInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.AppfuseInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.AppfuseInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(host_remote) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.AppfuseInstance_Init_ParamsSpec,
      null,
      [host_remote]);
  }

};

arc.mojom.AppfuseInstance.getRemote = function() {
  let remote = new arc.mojom.AppfuseInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.AppfuseInstance',
    'context');
  return remote.$;
};

// ParamsSpec for Init
arc.mojom.AppfuseInstance_Init_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppfuseInstance.Init_Params',
      packedSize: 16,
      fields: [
        { name: 'host_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.AppfuseInstancePtr = arc.mojom.AppfuseInstanceRemote;
arc.mojom.AppfuseInstanceRequest = arc.mojom.AppfuseInstancePendingReceiver;

