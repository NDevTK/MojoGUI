// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/backup_settings.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};

arc.mojom.BackupSettingsInstance = {};
arc.mojom.BackupSettingsInstance.$interfaceName = 'arc.mojom.BackupSettingsInstance';
arc.mojom.BackupSettingsInstance_SetBackupEnabled_ParamsSpec = { $: {} };

// Interface: BackupSettingsInstance
mojo.internal.Struct(
    arc.mojom.BackupSettingsInstance_SetBackupEnabled_ParamsSpec, 'arc.mojom.BackupSettingsInstance_SetBackupEnabled_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('managed', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

arc.mojom.BackupSettingsInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.BackupSettingsInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.BackupSettingsInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.BackupSettingsInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.BackupSettingsInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.BackupSettingsInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setBackupEnabled(enabled, managed) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.BackupSettingsInstance_SetBackupEnabled_ParamsSpec,
      null,
      [enabled, managed],
      false);
  }

};

arc.mojom.BackupSettingsInstance.getRemote = function() {
  let remote = new arc.mojom.BackupSettingsInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.BackupSettingsInstance',
    'context');
  return remote.$;
};

arc.mojom.BackupSettingsInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = arc.mojom.BackupSettingsInstance_SetBackupEnabled_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setBackupEnabled(params.enabled, params.managed);
          break;
        }
      }
    });
  }
};

arc.mojom.BackupSettingsInstanceReceiver = arc.mojom.BackupSettingsInstanceReceiver;

arc.mojom.BackupSettingsInstancePtr = arc.mojom.BackupSettingsInstanceRemote;
arc.mojom.BackupSettingsInstanceRequest = arc.mojom.BackupSettingsInstancePendingReceiver;

