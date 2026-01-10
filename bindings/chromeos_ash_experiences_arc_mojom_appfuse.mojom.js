// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/appfuse.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};

arc.mojom.AppfuseHost = {};
arc.mojom.AppfuseHost.$interfaceName = 'arc.mojom.AppfuseHost';
arc.mojom.AppfuseHost_Mount_ParamsSpec = { $: {} };
arc.mojom.AppfuseHost_Mount_ResponseParamsSpec = { $: {} };
arc.mojom.AppfuseHost_Unmount_ParamsSpec = { $: {} };
arc.mojom.AppfuseHost_Unmount_ResponseParamsSpec = { $: {} };
arc.mojom.AppfuseHost_OpenFile_ParamsSpec = { $: {} };
arc.mojom.AppfuseHost_OpenFile_ResponseParamsSpec = { $: {} };
arc.mojom.AppfuseInstance = {};
arc.mojom.AppfuseInstance.$interfaceName = 'arc.mojom.AppfuseInstance';
arc.mojom.AppfuseInstance_Init_ParamsSpec = { $: {} };
arc.mojom.AppfuseInstance_Init_ResponseParamsSpec = { $: {} };

// Interface: AppfuseHost
mojo.internal.Struct(
    arc.mojom.AppfuseHost_Mount_ParamsSpec, 'arc.mojom.AppfuseHost_Mount_Params', [
      mojo.internal.StructField('uid', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('mount_id', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.AppfuseHost_Mount_ResponseParamsSpec, 'arc.mojom.AppfuseHost_Mount_ResponseParams', [
      mojo.internal.StructField('fd', 0, 0, mojo.internal.Handle, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.AppfuseHost_Unmount_ParamsSpec, 'arc.mojom.AppfuseHost_Unmount_Params', [
      mojo.internal.StructField('uid', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('mount_id', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.AppfuseHost_Unmount_ResponseParamsSpec, 'arc.mojom.AppfuseHost_Unmount_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.AppfuseHost_OpenFile_ParamsSpec, 'arc.mojom.AppfuseHost_OpenFile_Params', [
      mojo.internal.StructField('uid', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('mount_id', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('file_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('flags', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.AppfuseHost_OpenFile_ResponseParamsSpec, 'arc.mojom.AppfuseHost_OpenFile_ResponseParams', [
      mojo.internal.StructField('fd', 0, 0, mojo.internal.Handle, null, true, 0, undefined),
    ],
    [[0, 16]]);

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
      [uid, mount_id],
      false);
  }

  unmount(uid, mount_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.AppfuseHost_Unmount_ParamsSpec,
      arc.mojom.AppfuseHost_Unmount_ResponseParamsSpec,
      [uid, mount_id],
      false);
  }

  openFile(uid, mount_id, file_id, flags) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.AppfuseHost_OpenFile_ParamsSpec,
      arc.mojom.AppfuseHost_OpenFile_ResponseParamsSpec,
      [uid, mount_id, file_id, flags],
      false);
  }

};

arc.mojom.AppfuseHost.getRemote = function() {
  let remote = new arc.mojom.AppfuseHostRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'arc.mojom.AppfuseHost',
    'context');
  return remote.$;
};

arc.mojom.AppfuseHostPtr = arc.mojom.AppfuseHostRemote;
arc.mojom.AppfuseHostRequest = arc.mojom.AppfuseHostPendingReceiver;


// Interface: AppfuseInstance
mojo.internal.Struct(
    arc.mojom.AppfuseInstance_Init_ParamsSpec, 'arc.mojom.AppfuseInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.AppfuseHostRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.AppfuseInstance_Init_ResponseParamsSpec, 'arc.mojom.AppfuseInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

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
      arc.mojom.AppfuseInstance_Init_ResponseParamsSpec,
      [host_remote],
      false);
  }

};

arc.mojom.AppfuseInstance.getRemote = function() {
  let remote = new arc.mojom.AppfuseInstanceRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'arc.mojom.AppfuseInstance',
    'context');
  return remote.$;
};

arc.mojom.AppfuseInstancePtr = arc.mojom.AppfuseInstanceRemote;
arc.mojom.AppfuseInstanceRequest = arc.mojom.AppfuseInstancePendingReceiver;

