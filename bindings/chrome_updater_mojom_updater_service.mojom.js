// Auto-generated MojoJS binding
// Source: chromium_src/chrome/updater/mojom/updater_service.mojom
// Module: updater.mojom

'use strict';

// Module namespace
var updater = updater || {};
updater.mojom = updater.mojom || {};


// Enum: State
updater.mojom.State = {
  kNotStarted: 0,
  kCheckingForUpdates: 1,
  kUpdateAvailable: 2,
  kDownloading: 3,
  kInstalling: 4,
  kUpdated: 5,
  kNoUpdate: 6,
  kUpdateError: 7,
};

// Enum: PolicySource
updater.mojom.PolicySource = {
  kSourceDefault: 0,
  kSourceExternalConstants: 1,
  kSourcePlatform: 2,
  kSourceCloud: 3,
};

// Enum: PolicySameVersionUpdate
updater.mojom.PolicySameVersionUpdate = {
  kAllowed: 0,
};

// Enum: Result
updater.mojom.Result = {
  kSuccess: 0,
  kUpdateInProgress: 1,
  kUpdateCanceled: 2,
  kRetryLater: 3,
  kServiceFailed: 4,
  kUpdateCheckFailed: 5,
  kAppNotFound: 6,
  kInvalidArgument: 7,
  kInactive: 8,
  kIPCConnectionFailed: 9,
  kInstallFailed: 10,
  kPermissionDenied: 11,
};

// Enum: ErrorCategory
updater.mojom.ErrorCategory = {
  kNone: 0,
  kDownload: 1,
  kUnpack: 2,
  kInstall: 3,
  kService: 4,
  kUpdateCheck: 5,
};

// Enum: Priority
updater.mojom.Priority = {
  kBackground: 0,
  kForeground: 1,
};

// Struct: RegistrationRequest
updater.mojom.RegistrationRequestSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.RegistrationRequest',
      packedSize: 56,
      fields: [
        { name: 'app_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'brand_code', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'brand_path', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false },
        { name: 'ap', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'version', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'existence_checker_path', packedOffset: 48, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: UpdateState
updater.mojom.UpdateStateSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.UpdateState',
      packedSize: 16,
      fields: [
        { name: 'kUnknown', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AppState
updater.mojom.AppStateSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.AppState',
      packedSize: 56,
      fields: [
        { name: 'app_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'version', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'ap', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'brand_code', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'brand_path', packedOffset: 40, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false },
        { name: 'ecp', packedOffset: 48, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PolicyValue
updater.mojom.PolicyValueSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.PolicyValue',
      packedSize: 16,
      fields: [
        { name: 'kSourceUnknown', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: UpdaterState
updater.mojom.UpdaterStateSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.UpdaterState',
      packedSize: 40,
      fields: [
        { name: 'active_version', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'inactive_versions', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'last_checked', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false },
        { name: 'last_started', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: UpdateService
updater.mojom.UpdateService = {};

updater.mojom.UpdateServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

updater.mojom.UpdateServiceRemote = class {
  static get $interfaceName() {
    return 'updater.mojom.UpdateService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      updater.mojom.UpdateServicePendingReceiver,
      handle);
    this.$ = new updater.mojom.UpdateServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

updater.mojom.UpdateServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

updater.mojom.UpdateService.getRemote = function() {
  let remote = new updater.mojom.UpdateServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'updater.mojom.UpdateService',
    'context');
  return remote.$;
};

// Legacy compatibility
updater.mojom.UpdateServicePtr = updater.mojom.UpdateServiceRemote;
updater.mojom.UpdateServiceRequest = updater.mojom.UpdateServicePendingReceiver;


// Interface: StateChangeObserver
updater.mojom.StateChangeObserver = {};

updater.mojom.StateChangeObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

updater.mojom.StateChangeObserverRemote = class {
  static get $interfaceName() {
    return 'updater.mojom.StateChangeObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      updater.mojom.StateChangeObserverPendingReceiver,
      handle);
    this.$ = new updater.mojom.StateChangeObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

updater.mojom.StateChangeObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

updater.mojom.StateChangeObserver.getRemote = function() {
  let remote = new updater.mojom.StateChangeObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'updater.mojom.StateChangeObserver',
    'context');
  return remote.$;
};

// Legacy compatibility
updater.mojom.StateChangeObserverPtr = updater.mojom.StateChangeObserverRemote;
updater.mojom.StateChangeObserverRequest = updater.mojom.StateChangeObserverPendingReceiver;

