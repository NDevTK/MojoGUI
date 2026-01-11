// Auto-generated MojoJS binding
// Source: chromium_src/components/services/storage/privileged/mojom/indexed_db_client_state_checker.mojom
// Module: storage.mojom

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
      mojo.internal.StructField('reason', 0, 0, storage.mojom.DisallowInactiveClientReasonSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('keep_active', 8, 0, mojo.internal.InterfaceRequest(storage.mojom.IndexedDBClientKeepActiveRemote), null, true, 0, undefined),
      mojo.internal.StructField('connection_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

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
  disallowInactiveClient(connection_id, reason, keep_active) {
    return this.$.disallowInactiveClient(connection_id, reason, keep_active);
  }
  makeClone(receiver) {
    return this.$.makeClone(receiver);
  }
};

storage.mojom.IndexedDBClientStateCheckerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('IndexedDBClientStateChecker', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  disallowInactiveClient(connection_id, reason, keep_active) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      storage.mojom.IndexedDBClientStateChecker_DisallowInactiveClient_ParamsSpec,
      storage.mojom.IndexedDBClientStateChecker_DisallowInactiveClient_ResponseParamsSpec,
      [connection_id, reason, keep_active],
      false);
  }

  makeClone(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      storage.mojom.IndexedDBClientStateChecker_MakeClone_ParamsSpec,
      null,
      [receiver],
      false);
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

storage.mojom.IndexedDBClientStateCheckerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('IndexedDBClientStateChecker', [
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.IndexedDBClientStateChecker_DisallowInactiveClient_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(storage.mojom.IndexedDBClientStateChecker_MakeClone_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.IndexedDBClientStateChecker_DisallowInactiveClient_ParamsSpec.$.structSpec);
          const result = this.impl.disallowInactiveClient(params.connection_id, params.reason, params.keep_active);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, storage.mojom.IndexedDBClientStateChecker_DisallowInactiveClient_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(storage.mojom.IndexedDBClientStateChecker_MakeClone_ParamsSpec.$.structSpec);
          const result = this.impl.makeClone(params.receiver);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

storage.mojom.IndexedDBClientStateCheckerReceiver = storage.mojom.IndexedDBClientStateCheckerReceiver;

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
    this.ordinals = window.mojoScrambler.getOrdinals('IndexedDBClientKeepActive', [
    ]);
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

storage.mojom.IndexedDBClientKeepActiveReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('IndexedDBClientKeepActive', [
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
      }
      } catch (err) {}
    }});
  }
};

storage.mojom.IndexedDBClientKeepActiveReceiver = storage.mojom.IndexedDBClientKeepActiveReceiver;

storage.mojom.IndexedDBClientKeepActivePtr = storage.mojom.IndexedDBClientKeepActiveRemote;
storage.mojom.IndexedDBClientKeepActiveRequest = storage.mojom.IndexedDBClientKeepActivePendingReceiver;

