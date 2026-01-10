// Auto-generated MojoJS binding
// Source: chromium_src/components/services/storage/privileged/mojom/indexed_db_client_state_checker.mojom
// Module: storage.mojom

'use strict';

// Module namespace
var storage = storage || {};
storage.mojom = storage.mojom || {};

storage.mojom.DisallowInactiveClientReasonSpec = { $: mojo.internal.Enum() };
storage.mojom.IndexedDBClientStateChecker = {};
storage.mojom.IndexedDBClientStateChecker.$interfaceName = 'storage.mojom.IndexedDBClientStateChecker';
storage.mojom.IndexedDBClientStateChecker_DisallowInactiveClient_ParamsSpec = { $: {} };
storage.mojom.IndexedDBClientStateChecker_DisallowInactiveClient_ResponseParamsSpec = { $: {} };
storage.mojom.IndexedDBClientStateChecker_MakeClone_ParamsSpec = { $: {} };
storage.mojom.IndexedDBClientKeepActive = {};
storage.mojom.IndexedDBClientKeepActive.$interfaceName = 'storage.mojom.IndexedDBClientKeepActive';

// Enum: DisallowInactiveClientReason
storage.mojom.DisallowInactiveClientReason = {
  kVersionChangeEvent: 0,
  kTransactionIsAcquiringLocks: 1,
  kTransactionIsStartingWhileBlockingOthers: 2,
  kTransactionIsOngoingAndBlockingOthers: 3,
};

// Interface: IndexedDBClientStateChecker
mojo.internal.Struct(
    storage.mojom.IndexedDBClientStateChecker_DisallowInactiveClient_ParamsSpec, 'storage.mojom.IndexedDBClientStateChecker_DisallowInactiveClient_Params', [
      mojo.internal.StructField('connection_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('reason', 12, 0, storage.mojom.DisallowInactiveClientReasonSpec, null, false, 0, undefined),
      mojo.internal.StructField('keep_active', 0, 0, mojo.internal.InterfaceRequest(storage.mojom.IndexedDBClientKeepActiveRemote), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    storage.mojom.IndexedDBClientStateChecker_DisallowInactiveClient_ResponseParamsSpec, 'storage.mojom.IndexedDBClientStateChecker_DisallowInactiveClient_ResponseParams', [
      mojo.internal.StructField('was_active', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    storage.mojom.IndexedDBClientStateChecker_MakeClone_ParamsSpec, 'storage.mojom.IndexedDBClientStateChecker_MakeClone_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(storage.mojom.IndexedDBClientStateCheckerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

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

storage.mojom.IndexedDBClientStateCheckerPtr = storage.mojom.IndexedDBClientStateCheckerRemote;
storage.mojom.IndexedDBClientStateCheckerRequest = storage.mojom.IndexedDBClientStateCheckerPendingReceiver;


// Interface: IndexedDBClientKeepActive
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

storage.mojom.IndexedDBClientKeepActivePtr = storage.mojom.IndexedDBClientKeepActiveRemote;
storage.mojom.IndexedDBClientKeepActiveRequest = storage.mojom.IndexedDBClientKeepActivePendingReceiver;

