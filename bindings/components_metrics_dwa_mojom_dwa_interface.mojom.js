// Auto-generated MojoJS binding
// Source: chromium_src/components/metrics/dwa/mojom/dwa_interface.mojom
// Module: metrics.dwa.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var metrics = metrics || {};
metrics.dwa = metrics.dwa || {};
metrics.dwa.mojom = metrics.dwa.mojom || {};

metrics.dwa.mojom.DwaEntrySpec = { $: {} };
metrics.dwa.mojom.DwaRecorderClientInterface = {};
metrics.dwa.mojom.DwaRecorderClientInterface.$interfaceName = 'metrics.dwa.mojom.DwaRecorderClientInterface';
metrics.dwa.mojom.DwaRecorderInterface = {};
metrics.dwa.mojom.DwaRecorderInterface.$interfaceName = 'metrics.dwa.mojom.DwaRecorderInterface';
metrics.dwa.mojom.DwaRecorderInterface_AddEntry_ParamsSpec = { $: {} };
metrics.dwa.mojom.DwaRecorderFactory = {};
metrics.dwa.mojom.DwaRecorderFactory.$interfaceName = 'metrics.dwa.mojom.DwaRecorderFactory';
metrics.dwa.mojom.DwaRecorderFactory_CreateDwaRecorder_ParamsSpec = { $: {} };

// Struct: DwaEntry
mojo.internal.Struct(
    metrics.dwa.mojom.DwaEntrySpec, 'metrics.dwa.mojom.DwaEntry', [
      mojo.internal.StructField('event_hash', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('content_hash', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('studies_of_interest', 16, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.Bool, false), null, false, 0, undefined),
      mojo.internal.StructField('metrics', 24, 0, mojo.internal.Map(mojo.internal.Uint64, mojo.internal.Int64, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: DwaRecorderClientInterface
metrics.dwa.mojom.DwaRecorderClientInterfacePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

metrics.dwa.mojom.DwaRecorderClientInterfaceRemote = class {
  static get $interfaceName() {
    return 'metrics.dwa.mojom.DwaRecorderClientInterface';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      metrics.dwa.mojom.DwaRecorderClientInterfacePendingReceiver,
      handle);
    this.$ = new metrics.dwa.mojom.DwaRecorderClientInterfaceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

metrics.dwa.mojom.DwaRecorderClientInterfaceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DwaRecorderClientInterface', [
    ]);
  }

};

metrics.dwa.mojom.DwaRecorderClientInterface.getRemote = function() {
  let remote = new metrics.dwa.mojom.DwaRecorderClientInterfaceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'metrics.dwa.mojom.DwaRecorderClientInterface',
    'context');
  return remote.$;
};

metrics.dwa.mojom.DwaRecorderClientInterfaceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DwaRecorderClientInterface', [
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
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
      }
      } catch (err) {}
    });
  }
};

metrics.dwa.mojom.DwaRecorderClientInterfaceReceiver = metrics.dwa.mojom.DwaRecorderClientInterfaceReceiver;

metrics.dwa.mojom.DwaRecorderClientInterfacePtr = metrics.dwa.mojom.DwaRecorderClientInterfaceRemote;
metrics.dwa.mojom.DwaRecorderClientInterfaceRequest = metrics.dwa.mojom.DwaRecorderClientInterfacePendingReceiver;


// Interface: DwaRecorderInterface
mojo.internal.Struct(
    metrics.dwa.mojom.DwaRecorderInterface_AddEntry_ParamsSpec, 'metrics.dwa.mojom.DwaRecorderInterface_AddEntry_Params', [
      mojo.internal.StructField('entry', 0, 0, metrics.dwa.mojom.DwaEntrySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

metrics.dwa.mojom.DwaRecorderInterfacePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

metrics.dwa.mojom.DwaRecorderInterfaceRemote = class {
  static get $interfaceName() {
    return 'metrics.dwa.mojom.DwaRecorderInterface';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      metrics.dwa.mojom.DwaRecorderInterfacePendingReceiver,
      handle);
    this.$ = new metrics.dwa.mojom.DwaRecorderInterfaceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  addEntry(entry) {
    return this.$.addEntry(entry);
  }
};

metrics.dwa.mojom.DwaRecorderInterfaceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DwaRecorderInterface', [
      { explicit: null },
    ]);
  }

  addEntry(entry) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      metrics.dwa.mojom.DwaRecorderInterface_AddEntry_ParamsSpec,
      null,
      [entry],
      false);
  }

};

metrics.dwa.mojom.DwaRecorderInterface.getRemote = function() {
  let remote = new metrics.dwa.mojom.DwaRecorderInterfaceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'metrics.dwa.mojom.DwaRecorderInterface',
    'context');
  return remote.$;
};

metrics.dwa.mojom.DwaRecorderInterfaceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DwaRecorderInterface', [
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
             decoder.decodeStructInline(metrics.dwa.mojom.DwaRecorderInterface_AddEntry_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(metrics.dwa.mojom.DwaRecorderInterface_AddEntry_ParamsSpec.$.structSpec);
          const result = this.impl.addEntry(params.entry);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

metrics.dwa.mojom.DwaRecorderInterfaceReceiver = metrics.dwa.mojom.DwaRecorderInterfaceReceiver;

metrics.dwa.mojom.DwaRecorderInterfacePtr = metrics.dwa.mojom.DwaRecorderInterfaceRemote;
metrics.dwa.mojom.DwaRecorderInterfaceRequest = metrics.dwa.mojom.DwaRecorderInterfacePendingReceiver;


// Interface: DwaRecorderFactory
mojo.internal.Struct(
    metrics.dwa.mojom.DwaRecorderFactory_CreateDwaRecorder_ParamsSpec, 'metrics.dwa.mojom.DwaRecorderFactory_CreateDwaRecorder_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(metrics.dwa.mojom.DwaRecorderInterfaceRemote), null, false, 0, undefined),
      mojo.internal.StructField('client_remote', 8, 0, mojo.internal.InterfaceProxy(metrics.dwa.mojom.DwaRecorderClientInterfaceRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

metrics.dwa.mojom.DwaRecorderFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

metrics.dwa.mojom.DwaRecorderFactoryRemote = class {
  static get $interfaceName() {
    return 'metrics.dwa.mojom.DwaRecorderFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      metrics.dwa.mojom.DwaRecorderFactoryPendingReceiver,
      handle);
    this.$ = new metrics.dwa.mojom.DwaRecorderFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createDwaRecorder(receiver, client_remote) {
    return this.$.createDwaRecorder(receiver, client_remote);
  }
};

metrics.dwa.mojom.DwaRecorderFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DwaRecorderFactory', [
      { explicit: null },
    ]);
  }

  createDwaRecorder(receiver, client_remote) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      metrics.dwa.mojom.DwaRecorderFactory_CreateDwaRecorder_ParamsSpec,
      null,
      [receiver, client_remote],
      false);
  }

};

metrics.dwa.mojom.DwaRecorderFactory.getRemote = function() {
  let remote = new metrics.dwa.mojom.DwaRecorderFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'metrics.dwa.mojom.DwaRecorderFactory',
    'context');
  return remote.$;
};

metrics.dwa.mojom.DwaRecorderFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DwaRecorderFactory', [
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
             decoder.decodeStructInline(metrics.dwa.mojom.DwaRecorderFactory_CreateDwaRecorder_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(metrics.dwa.mojom.DwaRecorderFactory_CreateDwaRecorder_ParamsSpec.$.structSpec);
          const result = this.impl.createDwaRecorder(params.receiver, params.client_remote);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

metrics.dwa.mojom.DwaRecorderFactoryReceiver = metrics.dwa.mojom.DwaRecorderFactoryReceiver;

metrics.dwa.mojom.DwaRecorderFactoryPtr = metrics.dwa.mojom.DwaRecorderFactoryRemote;
metrics.dwa.mojom.DwaRecorderFactoryRequest = metrics.dwa.mojom.DwaRecorderFactoryPendingReceiver;

