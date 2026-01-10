// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/privacy_items.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Struct: PrivacyApplication
arc.mojom.mojom.PrivacyApplicationSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PrivacyApplication',
      packedSize: 24,
      fields: [
        { name: 'package_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'uid', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: PrivacyItem
arc.mojom.mojom.PrivacyItemSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PrivacyItem',
      packedSize: 24,
      fields: [
        { name: 'permission_group', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.AppPermissionGroupSpec, nullable: false, minVersion: 0 },
        { name: 'privacy_application', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.PrivacyApplicationSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: PrivacyItemsHost
arc.mojom.mojom.PrivacyItemsHost = {};

arc.mojom.mojom.PrivacyItemsHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.mojom.PrivacyItemsHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.PrivacyItemsHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.mojom.PrivacyItemsHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.mojom.PrivacyItemsHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.mojom.PrivacyItemsHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onPrivacyItemsChanged(privacy_items) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.mojom.PrivacyItemsHost_OnPrivacyItemsChanged_ParamsSpec,
      null,
      [privacy_items]);
  }

  onMicCameraIndicatorRequirementChanged(flag) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.mojom.PrivacyItemsHost_OnMicCameraIndicatorRequirementChanged_ParamsSpec,
      null,
      [flag]);
  }

  onLocationIndicatorRequirementChanged(flag) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.mojom.PrivacyItemsHost_OnLocationIndicatorRequirementChanged_ParamsSpec,
      null,
      [flag]);
  }

};

arc.mojom.mojom.PrivacyItemsHost.getRemote = function() {
  let remote = new arc.mojom.mojom.PrivacyItemsHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.PrivacyItemsHost',
    'context');
  return remote.$;
};

// ParamsSpec for OnPrivacyItemsChanged
arc.mojom.mojom.PrivacyItemsHost_OnPrivacyItemsChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PrivacyItemsHost.OnPrivacyItemsChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'privacy_items', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.PrivacyItemSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnMicCameraIndicatorRequirementChanged
arc.mojom.mojom.PrivacyItemsHost_OnMicCameraIndicatorRequirementChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PrivacyItemsHost.OnMicCameraIndicatorRequirementChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'flag', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnLocationIndicatorRequirementChanged
arc.mojom.mojom.PrivacyItemsHost_OnLocationIndicatorRequirementChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PrivacyItemsHost.OnLocationIndicatorRequirementChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'flag', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.mojom.PrivacyItemsHostPtr = arc.mojom.mojom.PrivacyItemsHostRemote;
arc.mojom.mojom.PrivacyItemsHostRequest = arc.mojom.mojom.PrivacyItemsHostPendingReceiver;


// Interface: PrivacyItemsInstance
arc.mojom.mojom.PrivacyItemsInstance = {};

arc.mojom.mojom.PrivacyItemsInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.mojom.PrivacyItemsInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.PrivacyItemsInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.mojom.PrivacyItemsInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.mojom.PrivacyItemsInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.mojom.PrivacyItemsInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(host_remote) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.mojom.PrivacyItemsInstance_Init_ParamsSpec,
      null,
      [host_remote]);
  }

  onStaticPrivacyIndicatorBoundsChanged(displayId, bounds) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.mojom.PrivacyItemsInstance_OnStaticPrivacyIndicatorBoundsChanged_ParamsSpec,
      null,
      [displayId, bounds]);
  }

};

arc.mojom.mojom.PrivacyItemsInstance.getRemote = function() {
  let remote = new arc.mojom.mojom.PrivacyItemsInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.PrivacyItemsInstance',
    'context');
  return remote.$;
};

// ParamsSpec for Init
arc.mojom.mojom.PrivacyItemsInstance_Init_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PrivacyItemsInstance.Init_Params',
      packedSize: 16,
      fields: [
        { name: 'host_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnStaticPrivacyIndicatorBoundsChanged
arc.mojom.mojom.PrivacyItemsInstance_OnStaticPrivacyIndicatorBoundsChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PrivacyItemsInstance.OnStaticPrivacyIndicatorBoundsChanged_Params',
      packedSize: 24,
      fields: [
        { name: 'displayId', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'bounds', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.RectSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
arc.mojom.mojom.PrivacyItemsInstancePtr = arc.mojom.mojom.PrivacyItemsInstanceRemote;
arc.mojom.mojom.PrivacyItemsInstanceRequest = arc.mojom.mojom.PrivacyItemsInstancePendingReceiver;

