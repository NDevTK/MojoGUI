// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/app_permissions.mojom
// Module: arc.mojom

'use strict';

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
};

arc.mojom.AppPermissionsInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  grantPermission(package_name, permission) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.AppPermissionsInstance_GrantPermission_ParamsSpec,
      null,
      [package_name, permission],
      false);
  }

  revokePermission(package_name, permission) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = arc.mojom.AppPermissionsInstance_GrantPermission_ParamsSpec.$.decode(message.payload);
          const result = this.impl.grantPermission(params.package_name, params.permission);
          break;
        }
        case 1: {
          const params = arc.mojom.AppPermissionsInstance_RevokePermission_ParamsSpec.$.decode(message.payload);
          const result = this.impl.revokePermission(params.package_name, params.permission);
          break;
        }
      }
    }});
  }
};

arc.mojom.AppPermissionsInstanceReceiver = arc.mojom.AppPermissionsInstanceReceiver;

arc.mojom.AppPermissionsInstancePtr = arc.mojom.AppPermissionsInstanceRemote;
arc.mojom.AppPermissionsInstanceRequest = arc.mojom.AppPermissionsInstancePendingReceiver;

