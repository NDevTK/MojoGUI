// Auto-generated MojoJS binding
// Source: chromium_src/components/services/storage/privileged/mojom/indexed_db_client_state_checker.mojom
// Module: storage.mojom

'use strict';

// Module namespace
var storage = storage || {};
storage.mojom = storage.mojom || {};


// Enum: DisallowInactiveClientReason
storage.mojom.mojom.DisallowInactiveClientReason = {
  kVersionChangeEvent: 0,
  kTransactionIsAcquiringLocks: 1,
  kTransactionIsStartingWhileBlockingOthers: 2,
  kTransactionIsOngoingAndBlockingOthers: 3,
};
storage.mojom.mojom.DisallowInactiveClientReasonSpec = { $: mojo.internal.Enum() };

// Interface: IndexedDBClientStateChecker
storage.mojom.mojom.IndexedDBClientStateChecker = {};

storage.mojom.mojom.IndexedDBClientStateCheckerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

storage.mojom.mojom.IndexedDBClientStateCheckerRemote = class {
  static get $interfaceName() {
    return 'storage.mojom.IndexedDBClientStateChecker';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      storage.mojom.mojom.IndexedDBClientStateCheckerPendingReceiver,
      handle);
    this.$ = new storage.mojom.mojom.IndexedDBClientStateCheckerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

storage.mojom.mojom.IndexedDBClientStateCheckerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  disallowInactiveClient(connection_id, reason, keep_active) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      storage.mojom.mojom.IndexedDBClientStateChecker_DisallowInactiveClient_ParamsSpec,
      storage.mojom.mojom.IndexedDBClientStateChecker_DisallowInactiveClient_ResponseParamsSpec,
      [connection_id, reason, keep_active]);
  }

  makeClone(receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      storage.mojom.mojom.IndexedDBClientStateChecker_MakeClone_ParamsSpec,
      null,
      [receiver]);
  }

};

storage.mojom.mojom.IndexedDBClientStateChecker.getRemote = function() {
  let remote = new storage.mojom.mojom.IndexedDBClientStateCheckerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'storage.mojom.IndexedDBClientStateChecker',
    'context');
  return remote.$;
};

// ParamsSpec for DisallowInactiveClient
storage.mojom.mojom.IndexedDBClientStateChecker_DisallowInactiveClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IndexedDBClientStateChecker.DisallowInactiveClient_Params',
      packedSize: 24,
      fields: [
        { name: 'connection_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'reason', packedOffset: 4, packedBitOffset: 0, type: storage.mojom.DisallowInactiveClientReasonSpec, nullable: false, minVersion: 0 },
        { name: 'keep_active', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

storage.mojom.mojom.IndexedDBClientStateChecker_DisallowInactiveClient_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IndexedDBClientStateChecker.DisallowInactiveClient_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'was_active', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for MakeClone
storage.mojom.mojom.IndexedDBClientStateChecker_MakeClone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IndexedDBClientStateChecker.MakeClone_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
storage.mojom.mojom.IndexedDBClientStateCheckerPtr = storage.mojom.mojom.IndexedDBClientStateCheckerRemote;
storage.mojom.mojom.IndexedDBClientStateCheckerRequest = storage.mojom.mojom.IndexedDBClientStateCheckerPendingReceiver;


// Interface: IndexedDBClientKeepActive
storage.mojom.mojom.IndexedDBClientKeepActive = {};

storage.mojom.mojom.IndexedDBClientKeepActivePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

storage.mojom.mojom.IndexedDBClientKeepActiveRemote = class {
  static get $interfaceName() {
    return 'storage.mojom.IndexedDBClientKeepActive';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      storage.mojom.mojom.IndexedDBClientKeepActivePendingReceiver,
      handle);
    this.$ = new storage.mojom.mojom.IndexedDBClientKeepActiveRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

storage.mojom.mojom.IndexedDBClientKeepActiveRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

storage.mojom.mojom.IndexedDBClientKeepActive.getRemote = function() {
  let remote = new storage.mojom.mojom.IndexedDBClientKeepActiveRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'storage.mojom.IndexedDBClientKeepActive',
    'context');
  return remote.$;
};

// Legacy compatibility
storage.mojom.mojom.IndexedDBClientKeepActivePtr = storage.mojom.mojom.IndexedDBClientKeepActiveRemote;
storage.mojom.mojom.IndexedDBClientKeepActiveRequest = storage.mojom.mojom.IndexedDBClientKeepActivePendingReceiver;

