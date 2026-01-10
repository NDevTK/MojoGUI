// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/help_app_ui/search/search.mojom
// Module: ash.help_app.mojom

'use strict';

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
};

ash.help_app.mojom.SearchResultsObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onSearchResultAvailabilityChanged() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.help_app.mojom.SearchResultsObserver_OnSearchResultAvailabilityChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onSearchResultAvailabilityChanged();
          break;
        }
      }
    });
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
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.help_app.mojom.SearchResultsObserverSpec), null, false, 0, undefined),
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
};

ash.help_app.mojom.SearchHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  search(query, max_num_results) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.help_app.mojom.SearchHandler_Search_ParamsSpec,
      ash.help_app.mojom.SearchHandler_Search_ResponseParamsSpec,
      [query, max_num_results],
      false);
  }

  update(concepts) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.help_app.mojom.SearchHandler_Update_ParamsSpec,
      ash.help_app.mojom.SearchHandler_Update_ResponseParamsSpec,
      [concepts],
      false);
  }

  observe(observer) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.help_app.mojom.SearchHandler_Search_ParamsSpec.$.decode(message.payload);
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
          const params = ash.help_app.mojom.SearchHandler_Update_ParamsSpec.$.decode(message.payload);
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
          const params = ash.help_app.mojom.SearchHandler_Observe_ParamsSpec.$.decode(message.payload);
          const result = this.impl.observe(params.observer);
          break;
        }
      }
    });
  }
};

ash.help_app.mojom.SearchHandlerReceiver = ash.help_app.mojom.SearchHandlerReceiver;

ash.help_app.mojom.SearchHandlerPtr = ash.help_app.mojom.SearchHandlerRemote;
ash.help_app.mojom.SearchHandlerRequest = ash.help_app.mojom.SearchHandlerPendingReceiver;

