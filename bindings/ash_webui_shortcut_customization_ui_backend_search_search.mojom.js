// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/shortcut_customization_ui/backend/search/search.mojom
// Module: ash.shortcut_customization.mojom

// Module namespace
var ash = ash || {};
ash.shortcut_customization = ash.shortcut_customization || {};
ash.shortcut_customization.mojom = ash.shortcut_customization.mojom || {};
var mojo_base = mojo_base || {};

ash.shortcut_customization.mojom.SearchResultSpec = { $: {} };
ash.shortcut_customization.mojom.SearchResultsAvailabilityObserver = {};
ash.shortcut_customization.mojom.SearchResultsAvailabilityObserver.$interfaceName = 'ash.shortcut_customization.mojom.SearchResultsAvailabilityObserver';
ash.shortcut_customization.mojom.SearchResultsAvailabilityObserver_OnSearchResultsAvailabilityChanged_ParamsSpec = { $: {} };
ash.shortcut_customization.mojom.SearchHandler = {};
ash.shortcut_customization.mojom.SearchHandler.$interfaceName = 'ash.shortcut_customization.mojom.SearchHandler';
ash.shortcut_customization.mojom.SearchHandler_Search_ParamsSpec = { $: {} };
ash.shortcut_customization.mojom.SearchHandler_Search_ResponseParamsSpec = { $: {} };
ash.shortcut_customization.mojom.SearchHandler_AddSearchResultsAvailabilityObserver_ParamsSpec = { $: {} };

// Struct: SearchResult
mojo.internal.Struct(
    ash.shortcut_customization.mojom.SearchResultSpec, 'ash.shortcut_customization.mojom.SearchResult', [
      mojo.internal.StructField('accelerator_layout_info', 0, 0, ash.mojom.AcceleratorLayoutInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('accelerator_infos', 8, 0, mojo.internal.Array(ash.mojom.AcceleratorInfoSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('relevance_score', 16, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: SearchResultsAvailabilityObserver
mojo.internal.Struct(
    ash.shortcut_customization.mojom.SearchResultsAvailabilityObserver_OnSearchResultsAvailabilityChanged_ParamsSpec, 'ash.shortcut_customization.mojom.SearchResultsAvailabilityObserver_OnSearchResultsAvailabilityChanged_Params', [
    ],
    [[0, 8]]);

ash.shortcut_customization.mojom.SearchResultsAvailabilityObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.shortcut_customization.mojom.SearchResultsAvailabilityObserverRemote = class {
  static get $interfaceName() {
    return 'ash.shortcut_customization.mojom.SearchResultsAvailabilityObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.shortcut_customization.mojom.SearchResultsAvailabilityObserverPendingReceiver,
      handle);
    this.$ = new ash.shortcut_customization.mojom.SearchResultsAvailabilityObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onSearchResultsAvailabilityChanged() {
    return this.$.onSearchResultsAvailabilityChanged();
  }
};

ash.shortcut_customization.mojom.SearchResultsAvailabilityObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SearchResultsAvailabilityObserver', [
      { explicit: null },
    ]);
  }

  onSearchResultsAvailabilityChanged() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.shortcut_customization.mojom.SearchResultsAvailabilityObserver_OnSearchResultsAvailabilityChanged_ParamsSpec,
      null,
      [],
      false);
  }

};

ash.shortcut_customization.mojom.SearchResultsAvailabilityObserver.getRemote = function() {
  let remote = new ash.shortcut_customization.mojom.SearchResultsAvailabilityObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.shortcut_customization.mojom.SearchResultsAvailabilityObserver',
    'context');
  return remote.$;
};

ash.shortcut_customization.mojom.SearchResultsAvailabilityObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SearchResultsAvailabilityObserver', [
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(ash.shortcut_customization.mojom.SearchResultsAvailabilityObserver_OnSearchResultsAvailabilityChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.shortcut_customization.mojom.SearchResultsAvailabilityObserver_OnSearchResultsAvailabilityChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onSearchResultsAvailabilityChanged();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.shortcut_customization.mojom.SearchResultsAvailabilityObserverReceiver = ash.shortcut_customization.mojom.SearchResultsAvailabilityObserverReceiver;

ash.shortcut_customization.mojom.SearchResultsAvailabilityObserverPtr = ash.shortcut_customization.mojom.SearchResultsAvailabilityObserverRemote;
ash.shortcut_customization.mojom.SearchResultsAvailabilityObserverRequest = ash.shortcut_customization.mojom.SearchResultsAvailabilityObserverPendingReceiver;


// Interface: SearchHandler
mojo.internal.Struct(
    ash.shortcut_customization.mojom.SearchHandler_Search_ParamsSpec, 'ash.shortcut_customization.mojom.SearchHandler_Search_Params', [
      mojo.internal.StructField('query', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('max_num_results', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.shortcut_customization.mojom.SearchHandler_Search_ResponseParamsSpec, 'ash.shortcut_customization.mojom.SearchHandler_Search_ResponseParams', [
      mojo.internal.StructField('results', 0, 0, mojo.internal.Array(ash.shortcut_customization.mojom.SearchResultSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.shortcut_customization.mojom.SearchHandler_AddSearchResultsAvailabilityObserver_ParamsSpec, 'ash.shortcut_customization.mojom.SearchHandler_AddSearchResultsAvailabilityObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.shortcut_customization.mojom.SearchResultsAvailabilityObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.shortcut_customization.mojom.SearchHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.shortcut_customization.mojom.SearchHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.shortcut_customization.mojom.SearchHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.shortcut_customization.mojom.SearchHandlerPendingReceiver,
      handle);
    this.$ = new ash.shortcut_customization.mojom.SearchHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  search(query, max_num_results) {
    return this.$.search(query, max_num_results);
  }
  addSearchResultsAvailabilityObserver(observer) {
    return this.$.addSearchResultsAvailabilityObserver(observer);
  }
};

ash.shortcut_customization.mojom.SearchHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SearchHandler', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  search(query, max_num_results) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.shortcut_customization.mojom.SearchHandler_Search_ParamsSpec,
      ash.shortcut_customization.mojom.SearchHandler_Search_ResponseParamsSpec,
      [query, max_num_results],
      false);
  }

  addSearchResultsAvailabilityObserver(observer) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.shortcut_customization.mojom.SearchHandler_AddSearchResultsAvailabilityObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

};

ash.shortcut_customization.mojom.SearchHandler.getRemote = function() {
  let remote = new ash.shortcut_customization.mojom.SearchHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.shortcut_customization.mojom.SearchHandler',
    'context');
  return remote.$;
};

ash.shortcut_customization.mojom.SearchHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SearchHandler', [
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(ash.shortcut_customization.mojom.SearchHandler_Search_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.shortcut_customization.mojom.SearchHandler_AddSearchResultsAvailabilityObserver_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.shortcut_customization.mojom.SearchHandler_Search_ParamsSpec.$.structSpec);
          const result = this.impl.search(params.query, params.max_num_results);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.shortcut_customization.mojom.SearchHandler_Search_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.shortcut_customization.mojom.SearchHandler_AddSearchResultsAvailabilityObserver_ParamsSpec.$.structSpec);
          const result = this.impl.addSearchResultsAvailabilityObserver(params.observer);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.shortcut_customization.mojom.SearchHandlerReceiver = ash.shortcut_customization.mojom.SearchHandlerReceiver;

ash.shortcut_customization.mojom.SearchHandlerPtr = ash.shortcut_customization.mojom.SearchHandlerRemote;
ash.shortcut_customization.mojom.SearchHandlerRequest = ash.shortcut_customization.mojom.SearchHandlerPendingReceiver;

