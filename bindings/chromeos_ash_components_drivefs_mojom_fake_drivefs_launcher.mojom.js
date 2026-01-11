// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/components/drivefs/mojom/fake_drivefs_launcher.mojom
// Module: drivefs.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
  launchDriveFs(datadir_path, mount_path, mojo_socket_handle) {
    return this.$.launchDriveFs(datadir_path, mount_path, mojo_socket_handle);
  }
};

drivefs.mojom.FakeDriveFsLauncherRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FakeDriveFsLauncher', [
      { explicit: null },
    ]);
  }

  launchDriveFs(datadir_path, mount_path, mojo_socket_handle) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('FakeDriveFsLauncher', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(drivefs.mojom.FakeDriveFsLauncher_LaunchDriveFs_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(drivefs.mojom.FakeDriveFsLauncher_LaunchDriveFs_ParamsSpec.$.structSpec);
          const result = this.impl.launchDriveFs(params.datadir_path, params.mount_path, params.mojo_socket_handle);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

drivefs.mojom.FakeDriveFsLauncherReceiver = drivefs.mojom.FakeDriveFsLauncherReceiver;

drivefs.mojom.FakeDriveFsLauncherPtr = drivefs.mojom.FakeDriveFsLauncherRemote;
drivefs.mojom.FakeDriveFsLauncherRequest = drivefs.mojom.FakeDriveFsLauncherPendingReceiver;

