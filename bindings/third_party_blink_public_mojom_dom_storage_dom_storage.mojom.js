// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/dom_storage/dom_storage.mojom
// Module: blink.mojom

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.DomStorageProvider = {};
blink.mojom.DomStorageProvider.$interfaceName = 'blink.mojom.DomStorageProvider';
blink.mojom.DomStorageProvider_BindDomStorage_ParamsSpec = { $: {} };
blink.mojom.DomStorage = {};
blink.mojom.DomStorage.$interfaceName = 'blink.mojom.DomStorage';
blink.mojom.DomStorage_OpenLocalStorage_ParamsSpec = { $: {} };
blink.mojom.DomStorage_BindSessionStorageNamespace_ParamsSpec = { $: {} };
blink.mojom.DomStorage_BindSessionStorageArea_ParamsSpec = { $: {} };
blink.mojom.DomStorageClient = {};
blink.mojom.DomStorageClient.$interfaceName = 'blink.mojom.DomStorageClient';
blink.mojom.DomStorageClient_ResetSessionStorageConnections_ParamsSpec = { $: {} };
blink.mojom.DomStorageClient_ResetLocalStorageConnections_ParamsSpec = { $: {} };

// Interface: DomStorageProvider
mojo.internal.Struct(
    blink.mojom.DomStorageProvider_BindDomStorage_ParamsSpec, 'blink.mojom.DomStorageProvider_BindDomStorage_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(blink.mojom.DomStorageRemote), null, false, 0, undefined),
      mojo.internal.StructField('client', 8, 0, mojo.internal.InterfaceProxy(blink.mojom.DomStorageClientRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.DomStorageProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.DomStorageProviderRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.DomStorageProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.DomStorageProviderPendingReceiver,
      handle);
    this.$ = new blink.mojom.DomStorageProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  bindDomStorage(receiver, client) {
    return this.$.bindDomStorage(receiver, client);
  }
};

blink.mojom.DomStorageProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DomStorageProvider', [
      { explicit: null },
    ]);
  }

  bindDomStorage(receiver, client) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.DomStorageProvider_BindDomStorage_ParamsSpec,
      null,
      [receiver, client],
      false);
  }

};

blink.mojom.DomStorageProvider.getRemote = function() {
  let remote = new blink.mojom.DomStorageProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.DomStorageProvider',
    'context');
  return remote.$;
};

blink.mojom.DomStorageProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DomStorageProvider', [
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.DomStorageProvider_BindDomStorage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.DomStorageProvider_BindDomStorage_ParamsSpec.$.structSpec);
          const result = this.impl.bindDomStorage(params.receiver, params.client);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.DomStorageProviderReceiver = blink.mojom.DomStorageProviderReceiver;

blink.mojom.DomStorageProviderPtr = blink.mojom.DomStorageProviderRemote;
blink.mojom.DomStorageProviderRequest = blink.mojom.DomStorageProviderPendingReceiver;


// Interface: DomStorage
mojo.internal.Struct(
    blink.mojom.DomStorage_OpenLocalStorage_ParamsSpec, 'blink.mojom.DomStorage_OpenLocalStorage_Params', [
      mojo.internal.StructField('storage_key', 0, 0, blink.mojom.StorageKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('local_frame_token', 8, 0, blink.mojom.LocalFrameTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('area', 16, 0, mojo.internal.InterfaceRequest(blink.mojom.StorageAreaRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.DomStorage_BindSessionStorageNamespace_ParamsSpec, 'blink.mojom.DomStorage_BindSessionStorageNamespace_Params', [
      mojo.internal.StructField('namespace_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('receiver', 8, 0, mojo.internal.InterfaceRequest(blink.mojom.SessionStorageNamespaceRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.DomStorage_BindSessionStorageArea_ParamsSpec, 'blink.mojom.DomStorage_BindSessionStorageArea_Params', [
      mojo.internal.StructField('storage_key', 0, 0, blink.mojom.StorageKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('local_frame_token', 8, 0, blink.mojom.LocalFrameTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('namespace_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('session_namespace', 24, 0, mojo.internal.InterfaceRequest(blink.mojom.StorageAreaRemote), null, false, 0, undefined),
    ],
    [[0, 40]]);

blink.mojom.DomStoragePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.DomStorageRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.DomStorage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.DomStoragePendingReceiver,
      handle);
    this.$ = new blink.mojom.DomStorageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  openLocalStorage(storage_key, local_frame_token, area) {
    return this.$.openLocalStorage(storage_key, local_frame_token, area);
  }
  bindSessionStorageNamespace(namespace_id, receiver) {
    return this.$.bindSessionStorageNamespace(namespace_id, receiver);
  }
  bindSessionStorageArea(storage_key, local_frame_token, namespace_id, session_namespace) {
    return this.$.bindSessionStorageArea(storage_key, local_frame_token, namespace_id, session_namespace);
  }
};

blink.mojom.DomStorageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DomStorage', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  openLocalStorage(storage_key, local_frame_token, area) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.DomStorage_OpenLocalStorage_ParamsSpec,
      null,
      [storage_key, local_frame_token, area],
      false);
  }

  bindSessionStorageNamespace(namespace_id, receiver) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.DomStorage_BindSessionStorageNamespace_ParamsSpec,
      null,
      [namespace_id, receiver],
      false);
  }

  bindSessionStorageArea(storage_key, local_frame_token, namespace_id, session_namespace) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.DomStorage_BindSessionStorageArea_ParamsSpec,
      null,
      [storage_key, local_frame_token, namespace_id, session_namespace],
      false);
  }

};

blink.mojom.DomStorage.getRemote = function() {
  let remote = new blink.mojom.DomStorageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.DomStorage',
    'context');
  return remote.$;
};

blink.mojom.DomStorageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DomStorage', [
      { explicit: null },
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
             decoder.decodeStructInline(blink.mojom.DomStorage_OpenLocalStorage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.DomStorage_BindSessionStorageNamespace_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.DomStorage_BindSessionStorageArea_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.DomStorage_OpenLocalStorage_ParamsSpec.$.structSpec);
          const result = this.impl.openLocalStorage(params.storage_key, params.local_frame_token, params.area);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.DomStorage_BindSessionStorageNamespace_ParamsSpec.$.structSpec);
          const result = this.impl.bindSessionStorageNamespace(params.namespace_id, params.receiver);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.DomStorage_BindSessionStorageArea_ParamsSpec.$.structSpec);
          const result = this.impl.bindSessionStorageArea(params.storage_key, params.local_frame_token, params.namespace_id, params.session_namespace);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.DomStorageReceiver = blink.mojom.DomStorageReceiver;

blink.mojom.DomStoragePtr = blink.mojom.DomStorageRemote;
blink.mojom.DomStorageRequest = blink.mojom.DomStoragePendingReceiver;


// Interface: DomStorageClient
mojo.internal.Struct(
    blink.mojom.DomStorageClient_ResetSessionStorageConnections_ParamsSpec, 'blink.mojom.DomStorageClient_ResetSessionStorageConnections_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.DomStorageClient_ResetLocalStorageConnections_ParamsSpec, 'blink.mojom.DomStorageClient_ResetLocalStorageConnections_Params', [
    ],
    [[0, 8]]);

blink.mojom.DomStorageClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.DomStorageClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.DomStorageClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.DomStorageClientPendingReceiver,
      handle);
    this.$ = new blink.mojom.DomStorageClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  resetSessionStorageConnections() {
    return this.$.resetSessionStorageConnections();
  }
  resetLocalStorageConnections() {
    return this.$.resetLocalStorageConnections();
  }
};

blink.mojom.DomStorageClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DomStorageClient', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  resetSessionStorageConnections() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.DomStorageClient_ResetSessionStorageConnections_ParamsSpec,
      null,
      [],
      false);
  }

  resetLocalStorageConnections() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.DomStorageClient_ResetLocalStorageConnections_ParamsSpec,
      null,
      [],
      false);
  }

};

blink.mojom.DomStorageClient.getRemote = function() {
  let remote = new blink.mojom.DomStorageClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.DomStorageClient',
    'context');
  return remote.$;
};

blink.mojom.DomStorageClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DomStorageClient', [
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
             decoder.decodeStructInline(blink.mojom.DomStorageClient_ResetSessionStorageConnections_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.DomStorageClient_ResetLocalStorageConnections_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.DomStorageClient_ResetSessionStorageConnections_ParamsSpec.$.structSpec);
          const result = this.impl.resetSessionStorageConnections();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.DomStorageClient_ResetLocalStorageConnections_ParamsSpec.$.structSpec);
          const result = this.impl.resetLocalStorageConnections();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.DomStorageClientReceiver = blink.mojom.DomStorageClientReceiver;

blink.mojom.DomStorageClientPtr = blink.mojom.DomStorageClientRemote;
blink.mojom.DomStorageClientRequest = blink.mojom.DomStorageClientPendingReceiver;

