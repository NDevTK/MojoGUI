// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/app_permissions.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: AppPermission
arc.mojom.mojom.AppPermission = {
  CAMERA: 0,
  LOCATION: 1,
  MICROPHONE: 2,
  NOTIFICATIONS: 3,
  CONTACTS: 4,
  STORAGE: 5,
};
arc.mojom.mojom.AppPermissionSpec = { $: mojo.internal.Enum() };

// Enum: AppPermissionGroup
arc.mojom.mojom.AppPermissionGroup = {
  CAMERA: 0,
  MICROPHONE: 1,
  LOCATION: 2,
};
arc.mojom.mojom.AppPermissionGroupSpec = { $: mojo.internal.Enum() };

// Struct: PermissionState
arc.mojom.mojom.PermissionStateSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PermissionState',
      packedSize: 24,
      fields: [
        { name: 'granted', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'managed', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'details', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 1 },
        { name: 'one_time', packedOffset: 8, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 2 },
      ],
      versions: [{version: 0, packedSize: 24}, {version: 1, packedSize: 24}, {version: 2, packedSize: 24}]
    }
  }
};

// Interface: AppPermissionsInstance
arc.mojom.mojom.AppPermissionsInstance = {};

arc.mojom.mojom.AppPermissionsInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.mojom.AppPermissionsInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.AppPermissionsInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.mojom.AppPermissionsInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.mojom.AppPermissionsInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.mojom.AppPermissionsInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  grantPermission(package_name, permission) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.mojom.AppPermissionsInstance_GrantPermission_ParamsSpec,
      null,
      [package_name, permission]);
  }

  revokePermission(package_name, permission) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.mojom.AppPermissionsInstance_RevokePermission_ParamsSpec,
      null,
      [package_name, permission]);
  }

};

arc.mojom.mojom.AppPermissionsInstance.getRemote = function() {
  let remote = new arc.mojom.mojom.AppPermissionsInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.AppPermissionsInstance',
    'context');
  return remote.$;
};

// ParamsSpec for GrantPermission
arc.mojom.mojom.AppPermissionsInstance_GrantPermission_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppPermissionsInstance.GrantPermission_Params',
      packedSize: 24,
      fields: [
        { name: 'package_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'permission', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.AppPermissionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for RevokePermission
arc.mojom.mojom.AppPermissionsInstance_RevokePermission_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.AppPermissionsInstance.RevokePermission_Params',
      packedSize: 24,
      fields: [
        { name: 'package_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'permission', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.AppPermissionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
arc.mojom.mojom.AppPermissionsInstancePtr = arc.mojom.mojom.AppPermissionsInstanceRemote;
arc.mojom.mojom.AppPermissionsInstanceRequest = arc.mojom.mojom.AppPermissionsInstancePendingReceiver;

