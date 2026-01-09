// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/components/drivefs/mojom/fake_drivefs_launcher.mojom
// Module: drivefs.mojom

'use strict';

// Module namespace
var drivefs = drivefs || {};
drivefs.mojom = drivefs.mojom || {};


// Interface: FakeDriveFsLauncher
drivefs.mojom.FakeDriveFsLauncherPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'drivefs.mojom.FakeDriveFsLauncher';
  }

  launchDriveFs(datadir_path, mount_path, mojo_socket_handle) {
    // Method: LaunchDriveFs
    // Call: LaunchDriveFs(datadir_path, mount_path, mojo_socket_handle)
  }

};

drivefs.mojom.FakeDriveFsLauncherRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
