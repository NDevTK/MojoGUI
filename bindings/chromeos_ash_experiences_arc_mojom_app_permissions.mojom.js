// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/app_permissions.mojom
// Module: arc.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};

arc.mojom.AppPermissionSpec = { $: mojo.internal.Enum() };
arc.mojom.AppPermissionGroupSpec = { $: mojo.internal.Enum() };
arc.mojom.PermissionStateSpec = { $: {} };
arc.mojom.AppPermissionsInstance = {};
arc.mojom.AppPermissionsInstance.$interfaceName = 'arc.mojom.AppPermissionsInstance';
arc.mojom.AppPermissionsInstance_GrantPermission_ParamsSpec = { $: {} };
arc.mojom.AppPermissionsInstance_RevokePermission_ParamsSpec = { $: {} };

// Enum: AppPermission
arc.mojom.AppPermission = {
  CAMERA: 0,
  LOCATION: 1,
  MICROPHONE: 2,
  NOTIFICATIONS: 3,
  CONTACTS: 4,
  STORAGE: 5,
};

// Enum: AppPermissionGroup
arc.mojom.AppPermissionGroup = {
  CAMERA: 0,
  MICROPHONE: 1,
  LOCATION: 2,
};

// Struct: PermissionState
mojo.internal.Struct(
    arc.mojom.PermissionStateSpec, 'arc.mojom.PermissionState', [
      mojo.internal.StructField('granted', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('managed', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('details', 8, 0, mojo.internal.String, null, true, 1, undefined),
      mojo.internal.StructField('one_time', 16, 0, mojo.internal.Bool, false, false, 2, undefined),
    ],
    [[0, 16], [1, 24], [2, 32]]);

// Interface: AppPermissionsInstance
mojo.internal.Struct(
    arc.mojom.AppPermissionsInstance_GrantPermission_ParamsSpec, 'arc.mojom.AppPermissionsInstance_GrantPermission_Params', [
      mojo.internal.StructField('package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('permission', 8, 0, arc.mojom.AppPermissionSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.AppPermissionsInstance_RevokePermission_ParamsSpec, 'arc.mojom.AppPermissionsInstance_RevokePermission_Params', [
      mojo.internal.StructField('package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('permission', 8, 0, arc.mojom.AppPermissionSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

arc.mojom.AppPermissionsInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.AppPermissionsInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.AppPermissionsInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.AppPermissionsInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.AppPermissionsInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  grantPermission(package_name, permission) {
    return this.$.grantPermission(package_name, permission);
  }
  revokePermission(package_name, permission) {
    return this.$.revokePermission(package_name, permission);
  }
};

arc.mojom.AppPermissionsInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AppPermissionsInstance', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
  }

  grantPermission(package_name, permission) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.AppPermissionsInstance_GrantPermission_ParamsSpec,
      null,
      [package_name, permission],
      false);
  }

  revokePermission(package_name, permission) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      arc.mojom.AppPermissionsInstance_RevokePermission_ParamsSpec,
      null,
      [package_name, permission],
      false);
  }

};

arc.mojom.AppPermissionsInstance.getRemote = function() {
  let remote = new arc.mojom.AppPermissionsInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.AppPermissionsInstance',
    'context');
  return remote.$;
};

arc.mojom.AppPermissionsInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AppPermissionsInstance', [
      { explicit: 0 },
      { explicit: 1 },
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
             decoder.decodeStructInline(arc.mojom.AppPermissionsInstance_GrantPermission_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.AppPermissionsInstance_RevokePermission_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.AppPermissionsInstance_GrantPermission_ParamsSpec.$.structSpec);
          const result = this.impl.grantPermission(params.package_name, params.permission);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.AppPermissionsInstance_RevokePermission_ParamsSpec.$.structSpec);
          const result = this.impl.revokePermission(params.package_name, params.permission);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

arc.mojom.AppPermissionsInstanceReceiver = arc.mojom.AppPermissionsInstanceReceiver;

arc.mojom.AppPermissionsInstancePtr = arc.mojom.AppPermissionsInstanceRemote;
arc.mojom.AppPermissionsInstanceRequest = arc.mojom.AppPermissionsInstancePendingReceiver;

