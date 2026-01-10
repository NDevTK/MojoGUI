// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/pressure_manager.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Enum: PressureManagerAddClientResult
device.mojom.PressureManagerAddClientResult = {
  kNotSupported: 0,
  kOk: 1,
};
device.mojom.PressureManagerAddClientResultSpec = { $: mojo.internal.Enum() };

// Struct: VirtualPressureSourceMetadata
device.mojom.VirtualPressureSourceMetadataSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.VirtualPressureSourceMetadata',
      packedSize: 16,
      fields: [
        { name: 'available', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: PressureManager
device.mojom.PressureManager = {};

device.mojom.PressureManager_AddVirtualPressureSource_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.PressureManager_AddVirtualPressureSource_Params',
      packedSize: 32,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'source', packedOffset: 16, packedBitOffset: 0, type: device.mojom.PressureSourceSpec, nullable: false, minVersion: 0 },
        { name: 'metadata', packedOffset: 8, packedBitOffset: 0, type: device.mojom.VirtualPressureSourceMetadataSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

device.mojom.PressureManager_RemoveVirtualPressureSource_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.PressureManager_RemoveVirtualPressureSource_Params',
      packedSize: 24,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'source', packedOffset: 8, packedBitOffset: 0, type: device.mojom.PressureSourceSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

device.mojom.PressureManager_UpdateVirtualPressureSourceData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.PressureManager_UpdateVirtualPressureSourceData_Params',
      packedSize: 32,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'source', packedOffset: 16, packedBitOffset: 0, type: device.mojom.PressureSourceSpec, nullable: false, minVersion: 0 },
        { name: 'state', packedOffset: 20, packedBitOffset: 0, type: device.mojom.PressureStateSpec, nullable: false, minVersion: 0 },
        { name: 'own_contribution_estimate', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

device.mojom.PressureManager_AddClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.PressureManager_AddClient_Params',
      packedSize: 32,
      fields: [
        { name: 'source', packedOffset: 16, packedBitOffset: 0, type: device.mojom.PressureSourceSpec, nullable: false, minVersion: 0 },
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true, minVersion: 0 },
        { name: 'client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy(device.mojom.PressureClientRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

device.mojom.PressureManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.PressureManagerRemote = class {
  static get $interfaceName() {
    return 'device.mojom.PressureManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.PressureManagerPendingReceiver,
      handle);
    this.$ = new device.mojom.PressureManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.PressureManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addVirtualPressureSource(token, source, metadata) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.PressureManager_AddVirtualPressureSource_ParamsSpec,
      null,
      [token, source, metadata]);
  }

  removeVirtualPressureSource(token, source) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.PressureManager_RemoveVirtualPressureSource_ParamsSpec,
      null,
      [token, source]);
  }

  updateVirtualPressureSourceData(token, source, state, own_contribution_estimate) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.PressureManager_UpdateVirtualPressureSourceData_ParamsSpec,
      null,
      [token, source, state, own_contribution_estimate]);
  }

  addClient(source, token, client) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      device.mojom.PressureManager_AddClient_ParamsSpec,
      device.mojom.PressureManager_AddClient_ResponseParamsSpec,
      [source, token, client]);
  }

};

device.mojom.PressureManager.getRemote = function() {
  let remote = new device.mojom.PressureManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.PressureManager',
    'context');
  return remote.$;
};

// ParamsSpec for AddVirtualPressureSource
device.mojom.PressureManager_AddVirtualPressureSource_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.PressureManager.AddVirtualPressureSource_Params',
      packedSize: 32,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'source', packedOffset: 16, packedBitOffset: 0, type: device.mojom.PressureSourceSpec, nullable: false, minVersion: 0 },
        { name: 'metadata', packedOffset: 8, packedBitOffset: 0, type: device.mojom.VirtualPressureSourceMetadataSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for RemoveVirtualPressureSource
device.mojom.PressureManager_RemoveVirtualPressureSource_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.PressureManager.RemoveVirtualPressureSource_Params',
      packedSize: 24,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'source', packedOffset: 8, packedBitOffset: 0, type: device.mojom.PressureSourceSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for UpdateVirtualPressureSourceData
device.mojom.PressureManager_UpdateVirtualPressureSourceData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.PressureManager.UpdateVirtualPressureSourceData_Params',
      packedSize: 32,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'source', packedOffset: 16, packedBitOffset: 0, type: device.mojom.PressureSourceSpec, nullable: false, minVersion: 0 },
        { name: 'state', packedOffset: 20, packedBitOffset: 0, type: device.mojom.PressureStateSpec, nullable: false, minVersion: 0 },
        { name: 'own_contribution_estimate', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for AddClient
device.mojom.PressureManager_AddClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.PressureManager.AddClient_Params',
      packedSize: 32,
      fields: [
        { name: 'source', packedOffset: 16, packedBitOffset: 0, type: device.mojom.PressureSourceSpec, nullable: false, minVersion: 0 },
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true, minVersion: 0 },
        { name: 'client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy(device.mojom.PressureClientRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

device.mojom.PressureManager_AddClient_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.PressureManager.AddClient_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: device.mojom.PressureManagerAddClientResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
device.mojom.PressureManagerPtr = device.mojom.PressureManagerRemote;
device.mojom.PressureManagerRequest = device.mojom.PressureManagerPendingReceiver;


// Interface: PressureClient
device.mojom.PressureClient = {};

device.mojom.PressureClient_OnPressureUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.PressureClient_OnPressureUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'update', packedOffset: 0, packedBitOffset: 0, type: device.mojom.PressureUpdateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

device.mojom.PressureClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.PressureClientRemote = class {
  static get $interfaceName() {
    return 'device.mojom.PressureClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.PressureClientPendingReceiver,
      handle);
    this.$ = new device.mojom.PressureClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.PressureClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onPressureUpdated(update) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.PressureClient_OnPressureUpdated_ParamsSpec,
      null,
      [update]);
  }

};

device.mojom.PressureClient.getRemote = function() {
  let remote = new device.mojom.PressureClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.PressureClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnPressureUpdated
device.mojom.PressureClient_OnPressureUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.PressureClient.OnPressureUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'update', packedOffset: 0, packedBitOffset: 0, type: device.mojom.PressureUpdateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
device.mojom.PressureClientPtr = device.mojom.PressureClientRemote;
device.mojom.PressureClientRequest = device.mojom.PressureClientPendingReceiver;

