// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/shortcut_customization_ui/backend/search/search.mojom
// Module: ash.shortcut_customization.mojom

'use strict';

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
};

ash.shortcut_customization.mojom.SearchResultsAvailabilityObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onSearchResultsAvailabilityChanged() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          buffer: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = ash.shortcut_customization.mojom.SearchResultsAvailabilityObserver_OnSearchResultsAvailabilityChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onSearchResultsAvailabilityChanged();
          break;
        }
      }
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
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.shortcut_customization.mojom.SearchResultsAvailabilityObserverSpec), null, false, 0, undefined),
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
};

ash.shortcut_customization.mojom.SearchHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  search(query, max_num_results) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.shortcut_customization.mojom.SearchHandler_Search_ParamsSpec,
      ash.shortcut_customization.mojom.SearchHandler_Search_ResponseParamsSpec,
      [query, max_num_results],
      false);
  }

  addSearchResultsAvailabilityObserver(observer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          buffer: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = ash.shortcut_customization.mojom.SearchHandler_Search_ParamsSpec.$.decode(message.payload);
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
          const params = ash.shortcut_customization.mojom.SearchHandler_AddSearchResultsAvailabilityObserver_ParamsSpec.$.decode(message.payload);
          const result = this.impl.addSearchResultsAvailabilityObserver(params.observer);
          break;
        }
      }
    }});
  }
};

ash.shortcut_customization.mojom.SearchHandlerReceiver = ash.shortcut_customization.mojom.SearchHandlerReceiver;

ash.shortcut_customization.mojom.SearchHandlerPtr = ash.shortcut_customization.mojom.SearchHandlerRemote;
ash.shortcut_customization.mojom.SearchHandlerRequest = ash.shortcut_customization.mojom.SearchHandlerPendingReceiver;

