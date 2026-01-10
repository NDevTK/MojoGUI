// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/background_sync/background_sync.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: BackgroundSyncError
blink.mojom.mojom.BackgroundSyncError = {
  NONE: 0,
  STORAGE: 1,
  NOT_FOUND: 2,
  NO_SERVICE_WORKER: 3,
  NOT_ALLOWED: 4,
  PERMISSION_DENIED: 5,
  MAX: 6,
};
blink.mojom.mojom.BackgroundSyncErrorSpec = { $: mojo.internal.Enum() };

// Enum: BackgroundSyncState
blink.mojom.mojom.BackgroundSyncState = {
  PENDING: 0,
  FIRING: 1,
  REREGISTERED_WHILE_FIRING: 2,
};
blink.mojom.mojom.BackgroundSyncStateSpec = { $: mojo.internal.Enum() };

// Enum: BackgroundSyncEventLastChance
blink.mojom.mojom.BackgroundSyncEventLastChance = {
  IS_NOT_LAST_CHANCE: 0,
  IS_LAST_CHANCE: 1,
};
blink.mojom.mojom.BackgroundSyncEventLastChanceSpec = { $: mojo.internal.Enum() };

// Enum: BackgroundSyncType
blink.mojom.mojom.BackgroundSyncType = {
  ONE_SHOT: 0,
  PERIODIC: 1,
};
blink.mojom.mojom.BackgroundSyncTypeSpec = { $: mojo.internal.Enum() };

// Struct: SyncRegistrationOptions
blink.mojom.mojom.SyncRegistrationOptionsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SyncRegistrationOptions',
      packedSize: 24,
      fields: [
        { name: 'tag', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'min_interval', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: BackgroundSyncRegistrationInfo
blink.mojom.mojom.BackgroundSyncRegistrationInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BackgroundSyncRegistrationInfo',
      packedSize: 32,
      fields: [
        { name: 'service_worker_registration_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'tag', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'sync_type', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.BackgroundSyncTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: OneShotBackgroundSyncService
blink.mojom.mojom.OneShotBackgroundSyncService = {};

blink.mojom.mojom.OneShotBackgroundSyncServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.OneShotBackgroundSyncServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.OneShotBackgroundSyncService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.OneShotBackgroundSyncServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.OneShotBackgroundSyncServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.OneShotBackgroundSyncServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  register(options, service_worker_registration_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.OneShotBackgroundSyncService_Register_ParamsSpec,
      blink.mojom.mojom.OneShotBackgroundSyncService_Register_ResponseParamsSpec,
      [options, service_worker_registration_id]);
  }

  didResolveRegistration(registration_info) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.OneShotBackgroundSyncService_DidResolveRegistration_ParamsSpec,
      null,
      [registration_info]);
  }

  getRegistrations(service_worker_registration_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.mojom.OneShotBackgroundSyncService_GetRegistrations_ParamsSpec,
      blink.mojom.mojom.OneShotBackgroundSyncService_GetRegistrations_ResponseParamsSpec,
      [service_worker_registration_id]);
  }

};

blink.mojom.mojom.OneShotBackgroundSyncService.getRemote = function() {
  let remote = new blink.mojom.mojom.OneShotBackgroundSyncServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.OneShotBackgroundSyncService',
    'context');
  return remote.$;
};

// ParamsSpec for Register
blink.mojom.mojom.OneShotBackgroundSyncService_Register_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.OneShotBackgroundSyncService.Register_Params',
      packedSize: 24,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.SyncRegistrationOptionsSpec, nullable: false, minVersion: 0 },
        { name: 'service_worker_registration_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.mojom.OneShotBackgroundSyncService_Register_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.OneShotBackgroundSyncService.Register_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'err', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.BackgroundSyncErrorSpec, nullable: false, minVersion: 0 },
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.SyncRegistrationOptionsSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for DidResolveRegistration
blink.mojom.mojom.OneShotBackgroundSyncService_DidResolveRegistration_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.OneShotBackgroundSyncService.DidResolveRegistration_Params',
      packedSize: 16,
      fields: [
        { name: 'registration_info', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.BackgroundSyncRegistrationInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetRegistrations
blink.mojom.mojom.OneShotBackgroundSyncService_GetRegistrations_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.OneShotBackgroundSyncService.GetRegistrations_Params',
      packedSize: 16,
      fields: [
        { name: 'service_worker_registration_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.mojom.OneShotBackgroundSyncService_GetRegistrations_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.OneShotBackgroundSyncService.GetRegistrations_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'err', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.BackgroundSyncErrorSpec, nullable: false, minVersion: 0 },
        { name: 'registrations', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.SyncRegistrationOptionsSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.OneShotBackgroundSyncServicePtr = blink.mojom.mojom.OneShotBackgroundSyncServiceRemote;
blink.mojom.mojom.OneShotBackgroundSyncServiceRequest = blink.mojom.mojom.OneShotBackgroundSyncServicePendingReceiver;


// Interface: PeriodicBackgroundSyncService
blink.mojom.mojom.PeriodicBackgroundSyncService = {};

blink.mojom.mojom.PeriodicBackgroundSyncServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.PeriodicBackgroundSyncServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.PeriodicBackgroundSyncService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.PeriodicBackgroundSyncServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.PeriodicBackgroundSyncServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.PeriodicBackgroundSyncServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  register(options, service_worker_registration_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.PeriodicBackgroundSyncService_Register_ParamsSpec,
      blink.mojom.mojom.PeriodicBackgroundSyncService_Register_ResponseParamsSpec,
      [options, service_worker_registration_id]);
  }

  unregister(service_worker_registration_id, tag) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.PeriodicBackgroundSyncService_Unregister_ParamsSpec,
      blink.mojom.mojom.PeriodicBackgroundSyncService_Unregister_ResponseParamsSpec,
      [service_worker_registration_id, tag]);
  }

  getRegistrations(service_worker_registration_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.mojom.PeriodicBackgroundSyncService_GetRegistrations_ParamsSpec,
      blink.mojom.mojom.PeriodicBackgroundSyncService_GetRegistrations_ResponseParamsSpec,
      [service_worker_registration_id]);
  }

};

blink.mojom.mojom.PeriodicBackgroundSyncService.getRemote = function() {
  let remote = new blink.mojom.mojom.PeriodicBackgroundSyncServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.PeriodicBackgroundSyncService',
    'context');
  return remote.$;
};

// ParamsSpec for Register
blink.mojom.mojom.PeriodicBackgroundSyncService_Register_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PeriodicBackgroundSyncService.Register_Params',
      packedSize: 24,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.SyncRegistrationOptionsSpec, nullable: false, minVersion: 0 },
        { name: 'service_worker_registration_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.mojom.PeriodicBackgroundSyncService_Register_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PeriodicBackgroundSyncService.Register_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'err', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.BackgroundSyncErrorSpec, nullable: false, minVersion: 0 },
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.SyncRegistrationOptionsSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for Unregister
blink.mojom.mojom.PeriodicBackgroundSyncService_Unregister_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PeriodicBackgroundSyncService.Unregister_Params',
      packedSize: 24,
      fields: [
        { name: 'service_worker_registration_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'tag', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.mojom.PeriodicBackgroundSyncService_Unregister_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PeriodicBackgroundSyncService.Unregister_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'err', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.BackgroundSyncErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetRegistrations
blink.mojom.mojom.PeriodicBackgroundSyncService_GetRegistrations_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PeriodicBackgroundSyncService.GetRegistrations_Params',
      packedSize: 16,
      fields: [
        { name: 'service_worker_registration_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.mojom.PeriodicBackgroundSyncService_GetRegistrations_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PeriodicBackgroundSyncService.GetRegistrations_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'err', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.BackgroundSyncErrorSpec, nullable: false, minVersion: 0 },
        { name: 'registrations', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.SyncRegistrationOptionsSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.PeriodicBackgroundSyncServicePtr = blink.mojom.mojom.PeriodicBackgroundSyncServiceRemote;
blink.mojom.mojom.PeriodicBackgroundSyncServiceRequest = blink.mojom.mojom.PeriodicBackgroundSyncServicePendingReceiver;

