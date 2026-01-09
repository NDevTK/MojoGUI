// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/background_sync/background_sync.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: BackgroundSyncError
blink.mojom.BackgroundSyncError = {
  NONE: 0,
  STORAGE: 1,
  NOT_FOUND: 2,
  NO_SERVICE_WORKER: 3,
  NOT_ALLOWED: 4,
  PERMISSION_DENIED: 5,
  MAX: 6,
};

// Enum: BackgroundSyncState
blink.mojom.BackgroundSyncState = {
  PENDING: 0,
  FIRING: 1,
  REREGISTERED_WHILE_FIRING: 2,
};

// Enum: BackgroundSyncEventLastChance
blink.mojom.BackgroundSyncEventLastChance = {
  IS_NOT_LAST_CHANCE: 0,
  IS_LAST_CHANCE: 1,
};

// Enum: BackgroundSyncType
blink.mojom.BackgroundSyncType = {
  ONE_SHOT: 0,
  PERIODIC: 1,
};

// Struct: SyncRegistrationOptions
blink.mojom.SyncRegistrationOptionsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SyncRegistrationOptions',
      packedSize: 24,
      fields: [
        { name: 'tag', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'min_interval', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: BackgroundSyncRegistrationInfo
blink.mojom.BackgroundSyncRegistrationInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BackgroundSyncRegistrationInfo',
      packedSize: 32,
      fields: [
        { name: 'service_worker_registration_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'tag', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'sync_type', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: OneShotBackgroundSyncService
blink.mojom.OneShotBackgroundSyncService = {};

blink.mojom.OneShotBackgroundSyncServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.OneShotBackgroundSyncServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.OneShotBackgroundSyncService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.OneShotBackgroundSyncServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.OneShotBackgroundSyncServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.OneShotBackgroundSyncServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  register(options, service_worker_registration_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.OneShotBackgroundSyncService_Register_ParamsSpec,
      blink.mojom.OneShotBackgroundSyncService_Register_ResponseParamsSpec,
      [options, service_worker_registration_id]);
  }

  didResolveRegistration(registration_info) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.OneShotBackgroundSyncService_DidResolveRegistration_ParamsSpec,
      null,
      [registration_info]);
  }

  getRegistrations(service_worker_registration_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.OneShotBackgroundSyncService_GetRegistrations_ParamsSpec,
      blink.mojom.OneShotBackgroundSyncService_GetRegistrations_ResponseParamsSpec,
      [service_worker_registration_id]);
  }

};

blink.mojom.OneShotBackgroundSyncService.getRemote = function() {
  let remote = new blink.mojom.OneShotBackgroundSyncServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.OneShotBackgroundSyncService',
    'context');
  return remote.$;
};

// ParamsSpec for Register
blink.mojom.OneShotBackgroundSyncService_Register_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.OneShotBackgroundSyncService.Register_Params',
      packedSize: 24,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'service_worker_registration_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.OneShotBackgroundSyncService_Register_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.OneShotBackgroundSyncService.Register_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'err', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'options', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DidResolveRegistration
blink.mojom.OneShotBackgroundSyncService_DidResolveRegistration_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.OneShotBackgroundSyncService.DidResolveRegistration_Params',
      packedSize: 16,
      fields: [
        { name: 'registration_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetRegistrations
blink.mojom.OneShotBackgroundSyncService_GetRegistrations_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.OneShotBackgroundSyncService.GetRegistrations_Params',
      packedSize: 16,
      fields: [
        { name: 'service_worker_registration_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.OneShotBackgroundSyncService_GetRegistrations_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.OneShotBackgroundSyncService.GetRegistrations_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'err', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'registrations', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.OneShotBackgroundSyncServicePtr = blink.mojom.OneShotBackgroundSyncServiceRemote;
blink.mojom.OneShotBackgroundSyncServiceRequest = blink.mojom.OneShotBackgroundSyncServicePendingReceiver;


// Interface: PeriodicBackgroundSyncService
blink.mojom.PeriodicBackgroundSyncService = {};

blink.mojom.PeriodicBackgroundSyncServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.PeriodicBackgroundSyncServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.PeriodicBackgroundSyncService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.PeriodicBackgroundSyncServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.PeriodicBackgroundSyncServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.PeriodicBackgroundSyncServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  register(options, service_worker_registration_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.PeriodicBackgroundSyncService_Register_ParamsSpec,
      blink.mojom.PeriodicBackgroundSyncService_Register_ResponseParamsSpec,
      [options, service_worker_registration_id]);
  }

  unregister(service_worker_registration_id, tag) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.PeriodicBackgroundSyncService_Unregister_ParamsSpec,
      blink.mojom.PeriodicBackgroundSyncService_Unregister_ResponseParamsSpec,
      [service_worker_registration_id, tag]);
  }

  getRegistrations(service_worker_registration_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.PeriodicBackgroundSyncService_GetRegistrations_ParamsSpec,
      blink.mojom.PeriodicBackgroundSyncService_GetRegistrations_ResponseParamsSpec,
      [service_worker_registration_id]);
  }

};

blink.mojom.PeriodicBackgroundSyncService.getRemote = function() {
  let remote = new blink.mojom.PeriodicBackgroundSyncServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.PeriodicBackgroundSyncService',
    'context');
  return remote.$;
};

// ParamsSpec for Register
blink.mojom.PeriodicBackgroundSyncService_Register_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PeriodicBackgroundSyncService.Register_Params',
      packedSize: 24,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'service_worker_registration_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.PeriodicBackgroundSyncService_Register_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PeriodicBackgroundSyncService.Register_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'err', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'options', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Unregister
blink.mojom.PeriodicBackgroundSyncService_Unregister_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PeriodicBackgroundSyncService.Unregister_Params',
      packedSize: 24,
      fields: [
        { name: 'service_worker_registration_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'tag', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.PeriodicBackgroundSyncService_Unregister_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PeriodicBackgroundSyncService.Unregister_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'err', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetRegistrations
blink.mojom.PeriodicBackgroundSyncService_GetRegistrations_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PeriodicBackgroundSyncService.GetRegistrations_Params',
      packedSize: 16,
      fields: [
        { name: 'service_worker_registration_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.PeriodicBackgroundSyncService_GetRegistrations_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PeriodicBackgroundSyncService.GetRegistrations_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'err', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'registrations', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.PeriodicBackgroundSyncServicePtr = blink.mojom.PeriodicBackgroundSyncServiceRemote;
blink.mojom.PeriodicBackgroundSyncServiceRequest = blink.mojom.PeriodicBackgroundSyncServicePendingReceiver;

