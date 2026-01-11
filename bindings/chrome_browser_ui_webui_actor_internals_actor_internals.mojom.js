// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/actor_internals/actor_internals.mojom
// Module: actor_internals.mojom

// Module namespace
var actor_internals = actor_internals || {};
actor_internals.mojom = actor_internals.mojom || {};
var mojo_base = mojo_base || {};

actor_internals.mojom.JournalEntrySpec = { $: {} };
actor_internals.mojom.Page = {};
actor_internals.mojom.Page.$interfaceName = 'actor_internals.mojom.Page';
actor_internals.mojom.Page_JournalEntryAdded_ParamsSpec = { $: {} };
actor_internals.mojom.PageHandler = {};
actor_internals.mojom.PageHandler.$interfaceName = 'actor_internals.mojom.PageHandler';
actor_internals.mojom.PageHandler_StartLogging_ParamsSpec = { $: {} };
actor_internals.mojom.PageHandler_StopLogging_ParamsSpec = { $: {} };
actor_internals.mojom.PageHandlerFactory = {};
actor_internals.mojom.PageHandlerFactory.$interfaceName = 'actor_internals.mojom.PageHandlerFactory';
actor_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };

// Struct: JournalEntry
mojo.internal.Struct(
    actor_internals.mojom.JournalEntrySpec, 'actor_internals.mojom.JournalEntry', [
      mojo.internal.StructField('url', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('event', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('type', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('details', 24, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('timestamp', 32, 0, mojo_base.mojom.JSTimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('track', 40, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('screenshot', 48, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('task_id', 56, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 72]]);

// Interface: Page
mojo.internal.Struct(
    actor_internals.mojom.Page_JournalEntryAdded_ParamsSpec, 'actor_internals.mojom.Page_JournalEntryAdded_Params', [
      mojo.internal.StructField('entry', 0, 0, actor_internals.mojom.JournalEntrySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

actor_internals.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

actor_internals.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'actor_internals.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      actor_internals.mojom.PagePendingReceiver,
      handle);
    this.$ = new actor_internals.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  journalEntryAdded(entry) {
    return this.$.journalEntryAdded(entry);
  }
};

actor_internals.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Page', [
      { explicit: null },
    ]);
  }

  journalEntryAdded(entry) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      actor_internals.mojom.Page_JournalEntryAdded_ParamsSpec,
      null,
      [entry],
      false);
  }

};

actor_internals.mojom.Page.getRemote = function() {
  let remote = new actor_internals.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'actor_internals.mojom.Page',
    'context');
  return remote.$;
};

actor_internals.mojom.PageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Page', [
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
             decoder.decodeStructInline(actor_internals.mojom.Page_JournalEntryAdded_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(actor_internals.mojom.Page_JournalEntryAdded_ParamsSpec.$.structSpec);
          const result = this.impl.journalEntryAdded(params.entry);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

actor_internals.mojom.PageReceiver = actor_internals.mojom.PageReceiver;

actor_internals.mojom.PagePtr = actor_internals.mojom.PageRemote;
actor_internals.mojom.PageRequest = actor_internals.mojom.PagePendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    actor_internals.mojom.PageHandler_StartLogging_ParamsSpec, 'actor_internals.mojom.PageHandler_StartLogging_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    actor_internals.mojom.PageHandler_StopLogging_ParamsSpec, 'actor_internals.mojom.PageHandler_StopLogging_Params', [
    ],
    [[0, 8]]);

actor_internals.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

actor_internals.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'actor_internals.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      actor_internals.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new actor_internals.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  startLogging() {
    return this.$.startLogging();
  }
  stopLogging() {
    return this.$.stopLogging();
  }
};

actor_internals.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  startLogging() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      actor_internals.mojom.PageHandler_StartLogging_ParamsSpec,
      null,
      [],
      false);
  }

  stopLogging() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      actor_internals.mojom.PageHandler_StopLogging_ParamsSpec,
      null,
      [],
      false);
  }

};

actor_internals.mojom.PageHandler.getRemote = function() {
  let remote = new actor_internals.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'actor_internals.mojom.PageHandler',
    'context');
  return remote.$;
};

actor_internals.mojom.PageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
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
             decoder.decodeStructInline(actor_internals.mojom.PageHandler_StartLogging_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(actor_internals.mojom.PageHandler_StopLogging_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(actor_internals.mojom.PageHandler_StartLogging_ParamsSpec.$.structSpec);
          const result = this.impl.startLogging();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(actor_internals.mojom.PageHandler_StopLogging_ParamsSpec.$.structSpec);
          const result = this.impl.stopLogging();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

actor_internals.mojom.PageHandlerReceiver = actor_internals.mojom.PageHandlerReceiver;

actor_internals.mojom.PageHandlerPtr = actor_internals.mojom.PageHandlerRemote;
actor_internals.mojom.PageHandlerRequest = actor_internals.mojom.PageHandlerPendingReceiver;


// Interface: PageHandlerFactory
mojo.internal.Struct(
    actor_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'actor_internals.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(actor_internals.mojom.PageRemote), null, false, 0, undefined),
      mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(actor_internals.mojom.PageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

actor_internals.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

actor_internals.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'actor_internals.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      actor_internals.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new actor_internals.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createPageHandler(page, handler) {
    return this.$.createPageHandler(page, handler);
  }
};

actor_internals.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createPageHandler(page, handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      actor_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler],
      false);
  }

};

actor_internals.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new actor_internals.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'actor_internals.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

actor_internals.mojom.PageHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
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
             decoder.decodeStructInline(actor_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(actor_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
          const result = this.impl.createPageHandler(params.page, params.handler);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

actor_internals.mojom.PageHandlerFactoryReceiver = actor_internals.mojom.PageHandlerFactoryReceiver;

actor_internals.mojom.PageHandlerFactoryPtr = actor_internals.mojom.PageHandlerFactoryRemote;
actor_internals.mojom.PageHandlerFactoryRequest = actor_internals.mojom.PageHandlerFactoryPendingReceiver;

