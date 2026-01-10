// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/components/drivefs/mojom/fake_drivefs_launcher.mojom
// Module: drivefs.mojom

'use strict';

// Module namespace
var drivefs = drivefs || {};
drivefs.mojom = drivefs.mojom || {};
var mojo_base = mojo_base || {};

drivefs.mojom.FakeDriveFsLauncher = {};
drivefs.mojom.FakeDriveFsLauncher.$interfaceName = 'drivefs.mojom.FakeDriveFsLauncher';
drivefs.mojom.FakeDriveFsLauncher_LaunchDriveFs_ParamsSpec = { $: {} };

// Interface: FakeDriveFsLauncher
mojo.internal.Struct(
    drivefs.mojom.FakeDriveFsLauncher_LaunchDriveFs_ParamsSpec, 'drivefs.mojom.FakeDriveFsLauncher_LaunchDriveFs_Params', [
      mojo.internal.StructField('datadir_path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('mount_path', 8, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
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
      [datadir_path, mount_path, mojo_socket_handle],
      false);
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

drivefs.mojom.FakeDriveFsLauncherReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = drivefs.mojom.FakeDriveFsLauncher_LaunchDriveFs_ParamsSpec.$.decode(message.payload);
          const result = this.impl.launchDriveFs(params.datadir_path, params.mount_path, params.mojo_socket_handle);
          break;
        }
      }
    }});
  }
};

drivefs.mojom.FakeDriveFsLauncherReceiver = drivefs.mojom.FakeDriveFsLauncherReceiver;

drivefs.mojom.FakeDriveFsLauncherPtr = drivefs.mojom.FakeDriveFsLauncherRemote;
drivefs.mojom.FakeDriveFsLauncherRequest = drivefs.mojom.FakeDriveFsLauncherPendingReceiver;

