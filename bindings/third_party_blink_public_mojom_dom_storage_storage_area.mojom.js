// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/dom_storage/storage_area.mojom
// Module: blink.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.KeyValueSpec = { $: {} };
blink.mojom.StorageAreaObserver = {};
blink.mojom.StorageAreaObserver.$interfaceName = 'blink.mojom.StorageAreaObserver';
blink.mojom.StorageAreaObserver_KeyChanged_ParamsSpec = { $: {} };
blink.mojom.StorageAreaObserver_KeyChangeFailed_ParamsSpec = { $: {} };
blink.mojom.StorageAreaObserver_KeyDeleted_ParamsSpec = { $: {} };
blink.mojom.StorageAreaObserver_AllDeleted_ParamsSpec = { $: {} };
blink.mojom.StorageAreaObserver_ShouldSendOldValueOnMutations_ParamsSpec = { $: {} };
blink.mojom.StorageArea = {};
blink.mojom.StorageArea.$interfaceName = 'blink.mojom.StorageArea';
blink.mojom.StorageArea_AddObserver_ParamsSpec = { $: {} };
blink.mojom.StorageArea_Put_ParamsSpec = { $: {} };
blink.mojom.StorageArea_Put_ResponseParamsSpec = { $: {} };
blink.mojom.StorageArea_Delete_ParamsSpec = { $: {} };
blink.mojom.StorageArea_Delete_ResponseParamsSpec = { $: {} };
blink.mojom.StorageArea_DeleteAll_ParamsSpec = { $: {} };
blink.mojom.StorageArea_DeleteAll_ResponseParamsSpec = { $: {} };
blink.mojom.StorageArea_Get_ParamsSpec = { $: {} };
blink.mojom.StorageArea_Get_ResponseParamsSpec = { $: {} };
blink.mojom.StorageArea_GetAll_ParamsSpec = { $: {} };
blink.mojom.StorageArea_GetAll_ResponseParamsSpec = { $: {} };

blink.mojom.kPerStorageAreaQuota = 10485760;

blink.mojom.kPerStorageAreaOverQuotaAllowance = 102400;

// Struct: KeyValue
mojo.internal.Struct(
    blink.mojom.KeyValueSpec, 'blink.mojom.KeyValue', [
      mojo.internal.StructField('key', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: StorageAreaObserver
mojo.internal.Struct(
    blink.mojom.StorageAreaObserver_KeyChanged_ParamsSpec, 'blink.mojom.StorageAreaObserver_KeyChanged_Params', [
      mojo.internal.StructField('key', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('new_value', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('old_value', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('source', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.StorageAreaObserver_KeyChangeFailed_ParamsSpec, 'blink.mojom.StorageAreaObserver_KeyChangeFailed_Params', [
      mojo.internal.StructField('key', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('source', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.StorageAreaObserver_KeyDeleted_ParamsSpec, 'blink.mojom.StorageAreaObserver_KeyDeleted_Params', [
      mojo.internal.StructField('key', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('old_value', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('source', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.StorageAreaObserver_AllDeleted_ParamsSpec, 'blink.mojom.StorageAreaObserver_AllDeleted_Params', [
      mojo.internal.StructField('source', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('was_nonempty', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.StorageAreaObserver_ShouldSendOldValueOnMutations_ParamsSpec, 'blink.mojom.StorageAreaObserver_ShouldSendOldValueOnMutations_Params', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.StorageAreaObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.StorageAreaObserverRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.StorageAreaObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.StorageAreaObserverPendingReceiver,
      handle);
    this.$ = new blink.mojom.StorageAreaObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  keyChanged(key, new_value, old_value, source) {
    return this.$.keyChanged(key, new_value, old_value, source);
  }
  keyChangeFailed(key, source) {
    return this.$.keyChangeFailed(key, source);
  }
  keyDeleted(key, old_value, source) {
    return this.$.keyDeleted(key, old_value, source);
  }
  allDeleted(was_nonempty, source) {
    return this.$.allDeleted(was_nonempty, source);
  }
  shouldSendOldValueOnMutations(value) {
    return this.$.shouldSendOldValueOnMutations(value);
  }
};

blink.mojom.StorageAreaObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('StorageAreaObserver', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  keyChanged(key, new_value, old_value, source) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.StorageAreaObserver_KeyChanged_ParamsSpec,
      null,
      [key, new_value, old_value, source],
      false);
  }

  keyChangeFailed(key, source) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.StorageAreaObserver_KeyChangeFailed_ParamsSpec,
      null,
      [key, source],
      false);
  }

  keyDeleted(key, old_value, source) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.StorageAreaObserver_KeyDeleted_ParamsSpec,
      null,
      [key, old_value, source],
      false);
  }

  allDeleted(was_nonempty, source) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.StorageAreaObserver_AllDeleted_ParamsSpec,
      null,
      [was_nonempty, source],
      false);
  }

  shouldSendOldValueOnMutations(value) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      blink.mojom.StorageAreaObserver_ShouldSendOldValueOnMutations_ParamsSpec,
      null,
      [value],
      false);
  }

};

blink.mojom.StorageAreaObserver.getRemote = function() {
  let remote = new blink.mojom.StorageAreaObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.StorageAreaObserver',
    'context');
  return remote.$;
};

blink.mojom.StorageAreaObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('StorageAreaObserver', [
      { explicit: null },
      { explicit: null },
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.StorageAreaObserver_KeyChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.StorageAreaObserver_KeyChangeFailed_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.StorageAreaObserver_KeyDeleted_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.StorageAreaObserver_AllDeleted_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.StorageAreaObserver_ShouldSendOldValueOnMutations_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.StorageAreaObserver_KeyChanged_ParamsSpec.$.structSpec);
          const result = this.impl.keyChanged(params.key, params.new_value, params.old_value, params.source);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.StorageAreaObserver_KeyChangeFailed_ParamsSpec.$.structSpec);
          const result = this.impl.keyChangeFailed(params.key, params.source);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.StorageAreaObserver_KeyDeleted_ParamsSpec.$.structSpec);
          const result = this.impl.keyDeleted(params.key, params.old_value, params.source);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.StorageAreaObserver_AllDeleted_ParamsSpec.$.structSpec);
          const result = this.impl.allDeleted(params.was_nonempty, params.source);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.StorageAreaObserver_ShouldSendOldValueOnMutations_ParamsSpec.$.structSpec);
          const result = this.impl.shouldSendOldValueOnMutations(params.value);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.StorageAreaObserverReceiver = blink.mojom.StorageAreaObserverReceiver;

blink.mojom.StorageAreaObserverPtr = blink.mojom.StorageAreaObserverRemote;
blink.mojom.StorageAreaObserverRequest = blink.mojom.StorageAreaObserverPendingReceiver;


// Interface: StorageArea
mojo.internal.Struct(
    blink.mojom.StorageArea_AddObserver_ParamsSpec, 'blink.mojom.StorageArea_AddObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.StorageAreaObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.StorageArea_Put_ParamsSpec, 'blink.mojom.StorageArea_Put_Params', [
      mojo.internal.StructField('key', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('client_old_value', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('source', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.StorageArea_Put_ResponseParamsSpec, 'blink.mojom.StorageArea_Put_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.StorageArea_Delete_ParamsSpec, 'blink.mojom.StorageArea_Delete_Params', [
      mojo.internal.StructField('key', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('client_old_value', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('source', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.StorageArea_Delete_ResponseParamsSpec, 'blink.mojom.StorageArea_Delete_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.StorageArea_DeleteAll_ParamsSpec, 'blink.mojom.StorageArea_DeleteAll_Params', [
      mojo.internal.StructField('source', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('new_observer', 8, 0, mojo.internal.InterfaceProxy(blink.mojom.StorageAreaObserverRemote), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.StorageArea_DeleteAll_ResponseParamsSpec, 'blink.mojom.StorageArea_DeleteAll_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.StorageArea_Get_ParamsSpec, 'blink.mojom.StorageArea_Get_Params', [
      mojo.internal.StructField('key', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.StorageArea_Get_ResponseParamsSpec, 'blink.mojom.StorageArea_Get_ResponseParams', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.StorageArea_GetAll_ParamsSpec, 'blink.mojom.StorageArea_GetAll_Params', [
      mojo.internal.StructField('new_observer', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.StorageAreaObserverRemote), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.StorageArea_GetAll_ResponseParamsSpec, 'blink.mojom.StorageArea_GetAll_ResponseParams', [
      mojo.internal.StructField('data', 0, 0, mojo.internal.Array(blink.mojom.KeyValueSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.StorageAreaPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.StorageAreaRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.StorageArea';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.StorageAreaPendingReceiver,
      handle);
    this.$ = new blink.mojom.StorageAreaRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  addObserver(observer) {
    return this.$.addObserver(observer);
  }
  put(key, value, client_old_value, source) {
    return this.$.put(key, value, client_old_value, source);
  }
  delete(key, client_old_value, source) {
    return this.$.delete(key, client_old_value, source);
  }
  deleteAll(source, new_observer) {
    return this.$.deleteAll(source, new_observer);
  }
  get(key) {
    return this.$.get(key);
  }
  getAll(new_observer) {
    return this.$.getAll(new_observer);
  }
};

blink.mojom.StorageAreaRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('StorageArea', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  addObserver(observer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.StorageArea_AddObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  put(key, value, client_old_value, source) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.StorageArea_Put_ParamsSpec,
      blink.mojom.StorageArea_Put_ResponseParamsSpec,
      [key, value, client_old_value, source],
      false);
  }

  delete(key, client_old_value, source) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.StorageArea_Delete_ParamsSpec,
      blink.mojom.StorageArea_Delete_ResponseParamsSpec,
      [key, client_old_value, source],
      false);
  }

  deleteAll(source, new_observer) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.StorageArea_DeleteAll_ParamsSpec,
      blink.mojom.StorageArea_DeleteAll_ResponseParamsSpec,
      [source, new_observer],
      false);
  }

  get(key) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      blink.mojom.StorageArea_Get_ParamsSpec,
      blink.mojom.StorageArea_Get_ResponseParamsSpec,
      [key],
      false);
  }

  getAll(new_observer) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      blink.mojom.StorageArea_GetAll_ParamsSpec,
      blink.mojom.StorageArea_GetAll_ResponseParamsSpec,
      [new_observer],
      false);
  }

};

blink.mojom.StorageArea.getRemote = function() {
  let remote = new blink.mojom.StorageAreaRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.StorageArea',
    'context');
  return remote.$;
};

blink.mojom.StorageAreaReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('StorageArea', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.StorageArea_AddObserver_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.StorageArea_Put_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.StorageArea_Delete_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.StorageArea_DeleteAll_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.StorageArea_Get_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.StorageArea_GetAll_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.StorageArea_AddObserver_ParamsSpec.$.structSpec);
          const result = this.impl.addObserver(params.observer);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.StorageArea_Put_ParamsSpec.$.structSpec);
          const result = this.impl.put(params.key, params.value, params.client_old_value, params.source);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.StorageArea_Put_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.StorageArea_Delete_ParamsSpec.$.structSpec);
          const result = this.impl.delete(params.key, params.client_old_value, params.source);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.StorageArea_Delete_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.StorageArea_DeleteAll_ParamsSpec.$.structSpec);
          const result = this.impl.deleteAll(params.source, params.new_observer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.StorageArea_DeleteAll_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.StorageArea_Get_ParamsSpec.$.structSpec);
          const result = this.impl.get(params.key);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.StorageArea_Get_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.StorageArea_GetAll_ParamsSpec.$.structSpec);
          const result = this.impl.getAll(params.new_observer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.StorageArea_GetAll_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.StorageAreaReceiver = blink.mojom.StorageAreaReceiver;

blink.mojom.StorageAreaPtr = blink.mojom.StorageAreaRemote;
blink.mojom.StorageAreaRequest = blink.mojom.StorageAreaPendingReceiver;

