// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/components/drivefs/mojom/fake_drivefs_launcher.mojom
// Module: drivefs.mojom

'use strict';

// Module namespace
var drivefs = drivefs || {};
drivefs.mojom = drivefs.mojom || {};


// Interface: FakeDriveFsLauncher
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
      drivefs.mojom.FakeDriveFsLauncher_LaunchDriveFs_ParamsSpec.$,
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
}};

// ParamsSpec for LaunchDriveFs
drivefs.mojom.FakeDriveFsLauncher_LaunchDriveFs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.FakeDriveFsLauncher.LaunchDriveFs_Params',
      packedSize: 32,
      fields: [
        { name: 'datadir_path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'mount_path', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'mojo_socket_handle', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
drivefs.mojom.FakeDriveFsLauncherPtr = drivefs.mojom.FakeDriveFsLauncherRemote;
drivefs.mojom.FakeDriveFsLauncherRequest = drivefs.mojom.FakeDriveFsLauncherPendingReceiver;

