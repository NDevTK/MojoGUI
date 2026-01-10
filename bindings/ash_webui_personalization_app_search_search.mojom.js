// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/personalization_app/search/search.mojom
// Module: ash.personalization_app.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.personalization_app = ash.personalization_app || {};
ash.personalization_app.mojom = ash.personalization_app.mojom || {};
var mojo_base = mojo_base || {};

ash.personalization_app.mojom.SearchConceptIdSpec = { $: mojo.internal.Enum() };
ash.personalization_app.mojom.SearchResultSpec = { $: {} };
ash.personalization_app.mojom.SearchResultsObserver = {};
ash.personalization_app.mojom.SearchResultsObserver.$interfaceName = 'ash.personalization_app.mojom.SearchResultsObserver';
ash.personalization_app.mojom.SearchResultsObserver_OnSearchResultsChanged_ParamsSpec = { $: {} };
ash.personalization_app.mojom.SearchHandler = {};
ash.personalization_app.mojom.SearchHandler.$interfaceName = 'ash.personalization_app.mojom.SearchHandler';
ash.personalization_app.mojom.SearchHandler_Search_ParamsSpec = { $: {} };
ash.personalization_app.mojom.SearchHandler_Search_ResponseParamsSpec = { $: {} };
ash.personalization_app.mojom.SearchHandler_AddObserver_ParamsSpec = { $: {} };

// Enum: SearchConceptId
ash.personalization_app.mojom.SearchConceptId = {
  kPersonalization: 0,
  kChangeWallpaper: 100,
  kTimeOfDayWallpaper: 101,
  kChangeDeviceAccountImage: 200,
  kAmbientMode: 300,
  kAmbientModeChooseSource: 301,
  kAmbientModeTurnOff: 302,
  kAmbientModeGooglePhotos: 303,
  kAmbientModeArtGallery: 304,
  kAmbientModeTurnOn: 305,
  kAmbientModeTimeOfDay: 306,
  kDarkMode: 400,
  kDarkModeSchedule: 401,
  kDarkModeTurnOff: 402,
  kDarkModeTurnOn: 403,
  kDynamicColor: 404,
  kKeyboardBacklight: 500,
};

// Struct: SearchResult
mojo.internal.Struct(
    ash.personalization_app.mojom.SearchResultSpec, 'ash.personalization_app.mojom.SearchResult', [
      mojo.internal.StructField('search_concept_id', 0, 0, ash.personalization_app.mojom.SearchConceptIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('text', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('relative_url', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('relevance_score', 24, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: SearchResultsObserver
mojo.internal.Struct(
    ash.personalization_app.mojom.SearchResultsObserver_OnSearchResultsChanged_ParamsSpec, 'ash.personalization_app.mojom.SearchResultsObserver_OnSearchResultsChanged_Params', [
    ],
    [[0, 8]]);

ash.personalization_app.mojom.SearchResultsObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.personalization_app.mojom.SearchResultsObserverRemote = class {
  static get $interfaceName() {
    return 'ash.personalization_app.mojom.SearchResultsObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.personalization_app.mojom.SearchResultsObserverPendingReceiver,
      handle);
    this.$ = new ash.personalization_app.mojom.SearchResultsObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.personalization_app.mojom.SearchResultsObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onSearchResultsChanged() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.personalization_app.mojom.SearchResultsObserver_OnSearchResultsChanged_ParamsSpec,
      null,
      [],
      false);
  }

};

ash.personalization_app.mojom.SearchResultsObserver.getRemote = function() {
  let remote = new ash.personalization_app.mojom.SearchResultsObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.personalization_app.mojom.SearchResultsObserver',
    'context');
  return remote.$;
};

ash.personalization_app.mojom.SearchResultsObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnSearchResultsChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.personalization_app.mojom.SearchResultsObserver_OnSearchResultsChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSearchResultsChanged (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.personalization_app.mojom.SearchResultsObserver_OnSearchResultsChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onSearchResultsChanged');
          const result = this.impl.onSearchResultsChanged();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.personalization_app.mojom.SearchResultsObserverReceiver = ash.personalization_app.mojom.SearchResultsObserverReceiver;

ash.personalization_app.mojom.SearchResultsObserverPtr = ash.personalization_app.mojom.SearchResultsObserverRemote;
ash.personalization_app.mojom.SearchResultsObserverRequest = ash.personalization_app.mojom.SearchResultsObserverPendingReceiver;


// Interface: SearchHandler
mojo.internal.Struct(
    ash.personalization_app.mojom.SearchHandler_Search_ParamsSpec, 'ash.personalization_app.mojom.SearchHandler_Search_Params', [
      mojo.internal.StructField('query', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('max_num_results', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.SearchHandler_Search_ResponseParamsSpec, 'ash.personalization_app.mojom.SearchHandler_Search_ResponseParams', [
      mojo.internal.StructField('results', 0, 0, mojo.internal.Array(ash.personalization_app.mojom.SearchResultSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.SearchHandler_AddObserver_ParamsSpec, 'ash.personalization_app.mojom.SearchHandler_AddObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.personalization_app.mojom.SearchResultsObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.personalization_app.mojom.SearchHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.personalization_app.mojom.SearchHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.personalization_app.mojom.SearchHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.personalization_app.mojom.SearchHandlerPendingReceiver,
      handle);
    this.$ = new ash.personalization_app.mojom.SearchHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.personalization_app.mojom.SearchHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  search(query, max_num_results) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.personalization_app.mojom.SearchHandler_Search_ParamsSpec,
      ash.personalization_app.mojom.SearchHandler_Search_ResponseParamsSpec,
      [query, max_num_results],
      false);
  }

  addObserver(observer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.personalization_app.mojom.SearchHandler_AddObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

};

ash.personalization_app.mojom.SearchHandler.getRemote = function() {
  let remote = new ash.personalization_app.mojom.SearchHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.personalization_app.mojom.SearchHandler',
    'context');
  return remote.$;
};

ash.personalization_app.mojom.SearchHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: Search
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.personalization_app.mojom.SearchHandler_Search_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Search (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: AddObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.personalization_app.mojom.SearchHandler_AddObserver_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddObserver (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.personalization_app.mojom.SearchHandler_Search_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.search');
          const result = this.impl.search(params.query, params.max_num_results);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.personalization_app.mojom.SearchHandler_Search_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.personalization_app.mojom.SearchHandler_AddObserver_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.addObserver');
          const result = this.impl.addObserver(params.observer);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.personalization_app.mojom.SearchHandlerReceiver = ash.personalization_app.mojom.SearchHandlerReceiver;

ash.personalization_app.mojom.SearchHandlerPtr = ash.personalization_app.mojom.SearchHandlerRemote;
ash.personalization_app.mojom.SearchHandlerRequest = ash.personalization_app.mojom.SearchHandlerPendingReceiver;

