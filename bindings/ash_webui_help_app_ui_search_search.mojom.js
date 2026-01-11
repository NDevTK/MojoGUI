// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/help_app_ui/search/search.mojom
// Module: ash.help_app.mojom

// Module namespace
var ash = ash || {};
ash.help_app = ash.help_app || {};
ash.help_app.mojom = ash.help_app.mojom || {};
var mojo_base = mojo_base || {};

ash.help_app.mojom.SearchResultSpec = { $: {} };
ash.help_app.mojom.SearchConceptSpec = { $: {} };
ash.help_app.mojom.SearchResultsObserver = {};
ash.help_app.mojom.SearchResultsObserver.$interfaceName = 'ash.help_app.mojom.SearchResultsObserver';
ash.help_app.mojom.SearchResultsObserver_OnSearchResultAvailabilityChanged_ParamsSpec = { $: {} };
ash.help_app.mojom.SearchHandler = {};
ash.help_app.mojom.SearchHandler.$interfaceName = 'ash.help_app.mojom.SearchHandler';
ash.help_app.mojom.SearchHandler_Search_ParamsSpec = { $: {} };
ash.help_app.mojom.SearchHandler_Search_ResponseParamsSpec = { $: {} };
ash.help_app.mojom.SearchHandler_Update_ParamsSpec = { $: {} };
ash.help_app.mojom.SearchHandler_Update_ResponseParamsSpec = { $: {} };
ash.help_app.mojom.SearchHandler_Observe_ParamsSpec = { $: {} };

// Struct: SearchResult
mojo.internal.Struct(
    ash.help_app.mojom.SearchResultSpec, 'ash.help_app.mojom.SearchResult', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('title', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('main_category', 16, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('url_path_with_parameters', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('locale', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('relevance_score', 40, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: SearchConcept
mojo.internal.Struct(
    ash.help_app.mojom.SearchConceptSpec, 'ash.help_app.mojom.SearchConcept', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('title', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('main_category', 16, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('tags', 24, 0, mojo.internal.Array(mojo_base.mojom.String16Spec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('tag_locale', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('url_path_with_parameters', 40, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('locale', 48, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 64]]);

// Interface: SearchResultsObserver
mojo.internal.Struct(
    ash.help_app.mojom.SearchResultsObserver_OnSearchResultAvailabilityChanged_ParamsSpec, 'ash.help_app.mojom.SearchResultsObserver_OnSearchResultAvailabilityChanged_Params', [
    ],
    [[0, 8]]);

ash.help_app.mojom.SearchResultsObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.help_app.mojom.SearchResultsObserverRemote = class {
  static get $interfaceName() {
    return 'ash.help_app.mojom.SearchResultsObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.help_app.mojom.SearchResultsObserverPendingReceiver,
      handle);
    this.$ = new ash.help_app.mojom.SearchResultsObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onSearchResultAvailabilityChanged() {
    return this.$.onSearchResultAvailabilityChanged();
  }
};

ash.help_app.mojom.SearchResultsObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SearchResultsObserver', [
      { explicit: null },
    ]);
  }

  onSearchResultAvailabilityChanged() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.help_app.mojom.SearchResultsObserver_OnSearchResultAvailabilityChanged_ParamsSpec,
      null,
      [],
      false);
  }

};

ash.help_app.mojom.SearchResultsObserver.getRemote = function() {
  let remote = new ash.help_app.mojom.SearchResultsObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.help_app.mojom.SearchResultsObserver',
    'context');
  return remote.$;
};

ash.help_app.mojom.SearchResultsObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SearchResultsObserver', [
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
             decoder.decodeStructInline(ash.help_app.mojom.SearchResultsObserver_OnSearchResultAvailabilityChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.help_app.mojom.SearchResultsObserver_OnSearchResultAvailabilityChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onSearchResultAvailabilityChanged();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.help_app.mojom.SearchResultsObserverReceiver = ash.help_app.mojom.SearchResultsObserverReceiver;

ash.help_app.mojom.SearchResultsObserverPtr = ash.help_app.mojom.SearchResultsObserverRemote;
ash.help_app.mojom.SearchResultsObserverRequest = ash.help_app.mojom.SearchResultsObserverPendingReceiver;


// Interface: SearchHandler
mojo.internal.Struct(
    ash.help_app.mojom.SearchHandler_Search_ParamsSpec, 'ash.help_app.mojom.SearchHandler_Search_Params', [
      mojo.internal.StructField('query', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('max_num_results', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.help_app.mojom.SearchHandler_Search_ResponseParamsSpec, 'ash.help_app.mojom.SearchHandler_Search_ResponseParams', [
      mojo.internal.StructField('results', 0, 0, mojo.internal.Array(ash.help_app.mojom.SearchResultSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.help_app.mojom.SearchHandler_Update_ParamsSpec, 'ash.help_app.mojom.SearchHandler_Update_Params', [
      mojo.internal.StructField('concepts', 0, 0, mojo.internal.Array(ash.help_app.mojom.SearchConceptSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.help_app.mojom.SearchHandler_Update_ResponseParamsSpec, 'ash.help_app.mojom.SearchHandler_Update_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.help_app.mojom.SearchHandler_Observe_ParamsSpec, 'ash.help_app.mojom.SearchHandler_Observe_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.help_app.mojom.SearchResultsObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.help_app.mojom.SearchHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.help_app.mojom.SearchHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.help_app.mojom.SearchHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.help_app.mojom.SearchHandlerPendingReceiver,
      handle);
    this.$ = new ash.help_app.mojom.SearchHandlerRemoteCallHandler(this.proxy);
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
  update(concepts) {
    return this.$.update(concepts);
  }
  observe(observer) {
    return this.$.observe(observer);
  }
};

ash.help_app.mojom.SearchHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SearchHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  search(query, max_num_results) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.help_app.mojom.SearchHandler_Search_ParamsSpec,
      ash.help_app.mojom.SearchHandler_Search_ResponseParamsSpec,
      [query, max_num_results],
      false);
  }

  update(concepts) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.help_app.mojom.SearchHandler_Update_ParamsSpec,
      ash.help_app.mojom.SearchHandler_Update_ResponseParamsSpec,
      [concepts],
      false);
  }

  observe(observer) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.help_app.mojom.SearchHandler_Observe_ParamsSpec,
      null,
      [observer],
      false);
  }

};

ash.help_app.mojom.SearchHandler.getRemote = function() {
  let remote = new ash.help_app.mojom.SearchHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.help_app.mojom.SearchHandler',
    'context');
  return remote.$;
};

ash.help_app.mojom.SearchHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SearchHandler', [
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
             decoder.decodeStructInline(ash.help_app.mojom.SearchHandler_Search_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.help_app.mojom.SearchHandler_Update_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.help_app.mojom.SearchHandler_Observe_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.help_app.mojom.SearchHandler_Search_ParamsSpec.$.structSpec);
          const result = this.impl.search(params.query, params.max_num_results);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.help_app.mojom.SearchHandler_Search_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.help_app.mojom.SearchHandler_Update_ParamsSpec.$.structSpec);
          const result = this.impl.update(params.concepts);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.help_app.mojom.SearchHandler_Update_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.help_app.mojom.SearchHandler_Observe_ParamsSpec.$.structSpec);
          const result = this.impl.observe(params.observer);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.help_app.mojom.SearchHandlerReceiver = ash.help_app.mojom.SearchHandlerReceiver;

ash.help_app.mojom.SearchHandlerPtr = ash.help_app.mojom.SearchHandlerRemote;
ash.help_app.mojom.SearchHandlerRequest = ash.help_app.mojom.SearchHandlerPendingReceiver;

