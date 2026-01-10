// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/components/drivefs/mojom/fake_drivefs_launcher.mojom
// Module: drivefs.mojom

'use strict';

// Module namespace
var drivefs = drivefs || {};
drivefs.mojom = drivefs.mojom || {};

drivefs.mojom.FakeDriveFsLauncher = {};
drivefs.mojom.FakeDriveFsLauncher.$interfaceName = 'drivefs.mojom.FakeDriveFsLauncher';
drivefs.mojom.FakeDriveFsLauncher_LaunchDriveFs_ParamsSpec = { $: {} };

// Interface: FakeDriveFsLauncher
mojo.internal.Struct(
    drivefs.mojom.FakeDriveFsLauncher_LaunchDriveFs_ParamsSpec, 'drivefs.mojom.FakeDriveFsLauncher_LaunchDriveFs_Params', [
      mojo.internal.StructField('datadir_path', 0, 0, mojo_base.mojom.FilePathSpec, null, false, 0, undefined),
      mojo.internal.StructField('mount_path', 8, 0, mojo_base.mojom.FilePathSpec, null, false, 0, undefined),
      mojo.internal.StructField('mojo_socket_handle', 16, 0, mojo.internal.Handle, null, false, 0, undefined),
    ],
    [[0, 32]]);

drivefs.mojom.FakeDriveFsLauncherPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

drivefs.mojom.FakeDriveFsLauncherRemote = class {
  static get $interfaceName() {
    return 'drivefs.mojom.FakeDriveFsLauncher';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      drivefs.mojom.FakeDriveFsLauncherPendingReceiver,
      handle);
    this.$ = new drivefs.mojom.FakeDriveFsLauncherRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

drivefs.mojom.FakeDriveFsLauncherRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  launchDriveFs(datadir_path, mount_path, mojo_socket_handle) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      drivefs.mojom.FakeDriveFsLauncher_LaunchDriveFs_ParamsSpec,
      null,
      [datadir_path, mount_path, mojo_socket_handle]);
  }

};

drivefs.mojom.FakeDriveFsLauncher.getRemote = function() {
  let remote = new drivefs.mojom.FakeDriveFsLauncherRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'drivefs.mojom.FakeDriveFsLauncher',
    'context');
  return remote.$;
};

drivefs.mojom.FakeDriveFsLauncherPtr = drivefs.mojom.FakeDriveFsLauncherRemote;
drivefs.mojom.FakeDriveFsLauncherRequest = drivefs.mojom.FakeDriveFsLauncherPendingReceiver;

