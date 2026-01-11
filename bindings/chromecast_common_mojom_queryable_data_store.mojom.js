// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/common/mojom/queryable_data_store.mojom
// Module: chromecast.shell.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var chromecast = chromecast || {};
chromecast.shell = chromecast.shell || {};
chromecast.shell.mojom = chromecast.shell.mojom || {};
var mojo_base = mojo_base || {};

chromecast.shell.mojom.QueryableDataStore = {};
chromecast.shell.mojom.QueryableDataStore.$interfaceName = 'chromecast.shell.mojom.QueryableDataStore';
chromecast.shell.mojom.QueryableDataStore_Set_ParamsSpec = { $: {} };

// Interface: QueryableDataStore
mojo.internal.Struct(
    chromecast.shell.mojom.QueryableDataStore_Set_ParamsSpec, 'chromecast.shell.mojom.QueryableDataStore_Set_Params', [
      mojo.internal.StructField('key', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo_base.mojom.ValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

chromecast.shell.mojom.QueryableDataStorePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.shell.mojom.QueryableDataStoreRemote = class {
  static get $interfaceName() {
    return 'chromecast.shell.mojom.QueryableDataStore';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.shell.mojom.QueryableDataStorePendingReceiver,
      handle);
    this.$ = new chromecast.shell.mojom.QueryableDataStoreRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  set(key, value) {
    return this.$.set(key, value);
  }
};

chromecast.shell.mojom.QueryableDataStoreRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('QueryableDataStore', [
      { explicit: null },
    ]);
  }

  set(key, value) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chromecast.shell.mojom.QueryableDataStore_Set_ParamsSpec,
      null,
      [key, value],
      false);
  }

};

chromecast.shell.mojom.QueryableDataStore.getRemote = function() {
  let remote = new chromecast.shell.mojom.QueryableDataStoreRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.shell.mojom.QueryableDataStore',
    'context');
  return remote.$;
};

chromecast.shell.mojom.QueryableDataStoreReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('QueryableDataStore', [
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.shell.mojom.QueryableDataStore_Set_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.shell.mojom.QueryableDataStore_Set_ParamsSpec.$.structSpec);
          const result = this.impl.set(params.key, params.value);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

chromecast.shell.mojom.QueryableDataStoreReceiver = chromecast.shell.mojom.QueryableDataStoreReceiver;

chromecast.shell.mojom.QueryableDataStorePtr = chromecast.shell.mojom.QueryableDataStoreRemote;
chromecast.shell.mojom.QueryableDataStoreRequest = chromecast.shell.mojom.QueryableDataStorePendingReceiver;

