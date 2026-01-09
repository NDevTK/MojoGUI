// Auto-generated MojoJS binding
// Source: chromium_src/components/services/storage/privileged/mojom/indexed_db_client_state_checker.mojom
// Module: storage.mojom

'use strict';

// Module namespace
var storage = storage || {};
storage.mojom = storage.mojom || {};


// Enum: DisallowInactiveClientReason
storage.mojom.DisallowInactiveClientReason = {
  kVersionChangeEvent: 0,
  kTransactionIsAcquiringLocks: 1,
  kTransactionIsStartingWhileBlockingOthers: 2,
  kTransactionIsOngoingAndBlockingOthers: 3,
};

// Interface: IndexedDBClientStateChecker
storage.mojom.IndexedDBClientStateChecker = {};

storage.mojom.IndexedDBClientStateCheckerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

storage.mojom.IndexedDBClientStateCheckerRemote = class {
  static get $interfaceName() {
    return 'storage.mojom.IndexedDBClientStateChecker';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      storage.mojom.IndexedDBClientStateCheckerPendingReceiver,
      handle);
    this.$ = new storage.mojom.IndexedDBClientStateCheckerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

storage.mojom.IndexedDBClientStateCheckerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  disallowInactiveClient(connection_id, reason, keep_active) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      storage.mojom.IndexedDBClientStateChecker_DisallowInactiveClient_ParamsSpec,
      storage.mojom.IndexedDBClientStateChecker_DisallowInactiveClient_ResponseParamsSpec,
      [connection_id, reason, keep_active]);
  }

  makeClone(receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      storage.mojom.IndexedDBClientStateChecker_MakeClone_ParamsSpec,
      null,
      [receiver]);
  }

};

storage.mojom.IndexedDBClientStateChecker.getRemote = function() {
  let remote = new storage.mojom.IndexedDBClientStateCheckerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'storage.mojom.IndexedDBClientStateChecker',
    'context');
  return remote.$;
};

// ParamsSpec for DisallowInactiveClient
storage.mojom.IndexedDBClientStateChecker_DisallowInactiveClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IndexedDBClientStateChecker.DisallowInactiveClient_Params',
      packedSize: 32,
      fields: [
        { name: 'connection_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'reason', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'keep_active', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

storage.mojom.IndexedDBClientStateChecker_DisallowInactiveClient_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IndexedDBClientStateChecker.DisallowInactiveClient_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'was_active', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for MakeClone
storage.mojom.IndexedDBClientStateChecker_MakeClone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'storage.mojom.IndexedDBClientStateChecker.MakeClone_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
storage.mojom.IndexedDBClientStateCheckerPtr = storage.mojom.IndexedDBClientStateCheckerRemote;
storage.mojom.IndexedDBClientStateCheckerRequest = storage.mojom.IndexedDBClientStateCheckerPendingReceiver;


// Interface: IndexedDBClientKeepActive
storage.mojom.IndexedDBClientKeepActive = {};

storage.mojom.IndexedDBClientKeepActivePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

storage.mojom.IndexedDBClientKeepActiveRemote = class {
  static get $interfaceName() {
    return 'storage.mojom.IndexedDBClientKeepActive';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      storage.mojom.IndexedDBClientKeepActivePendingReceiver,
      handle);
    this.$ = new storage.mojom.IndexedDBClientKeepActiveRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

storage.mojom.IndexedDBClientKeepActiveRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

storage.mojom.IndexedDBClientKeepActive.getRemote = function() {
  let remote = new storage.mojom.IndexedDBClientKeepActiveRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'storage.mojom.IndexedDBClientKeepActive',
    'context');
  return remote.$;
};

// Legacy compatibility
storage.mojom.IndexedDBClientKeepActivePtr = storage.mojom.IndexedDBClientKeepActiveRemote;
storage.mojom.IndexedDBClientKeepActiveRequest = storage.mojom.IndexedDBClientKeepActivePendingReceiver;

