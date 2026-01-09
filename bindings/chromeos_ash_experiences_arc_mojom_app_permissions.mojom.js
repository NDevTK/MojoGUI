// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/app_permissions.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


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

// Interface: AppPermissionsInstance
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

};

arc.mojom.AppPermissionsInstance.getRemote = function() {
  let remote = new arc.mojom.AppPermissionsInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.AppPermissionsInstance',
    'context');
  return remote.$;
}};

// Legacy compatibility
arc.mojom.AppPermissionsInstancePtr = arc.mojom.AppPermissionsInstanceRemote;
arc.mojom.AppPermissionsInstanceRequest = arc.mojom.AppPermissionsInstancePendingReceiver;

