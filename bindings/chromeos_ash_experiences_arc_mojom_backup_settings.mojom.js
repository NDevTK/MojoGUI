// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/backup_settings.mojom
// Module: arc.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
  setBackupEnabled(enabled, managed) {
    return this.$.setBackupEnabled(enabled, managed);
  }
};

arc.mojom.BackupSettingsInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('BackupSettingsInstance', [
      { explicit: 0 },
    ]);
  }

  setBackupEnabled(enabled, managed) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('BackupSettingsInstance', [
      { explicit: 0 },
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.BackupSettingsInstance_SetBackupEnabled_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.BackupSettingsInstance_SetBackupEnabled_ParamsSpec.$.structSpec);
          const result = this.impl.setBackupEnabled(params.enabled, params.managed);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

arc.mojom.BackupSettingsInstanceReceiver = arc.mojom.BackupSettingsInstanceReceiver;

arc.mojom.BackupSettingsInstancePtr = arc.mojom.BackupSettingsInstanceRemote;
arc.mojom.BackupSettingsInstanceRequest = arc.mojom.BackupSettingsInstancePendingReceiver;

