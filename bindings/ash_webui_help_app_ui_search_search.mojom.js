// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/help_app_ui/search/search.mojom
// Module: ash.help_app.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.help_app = ash.help_app || {};
ash.help_app.mojom = ash.help_app.mojom || {};


// Struct: SearchResult
ash.help_app.mojom.SearchResultSpec = {
  $: {
    structSpec: {
      name: 'ash.help_app.mojom.SearchResult',
      packedSize: 16,
      fields: [
        { name: 'relevance_score', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SearchConcept
ash.help_app.mojom.SearchConceptSpec = {
  $: {
    structSpec: {
      name: 'ash.help_app.mojom.SearchConcept',
      packedSize: 16,
      fields: [
        { name: 'locale', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: SearchResultsObserver
ash.help_app.mojom.SearchResultsObserver = {};

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
      []);
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

// ParamsSpec for OnSearchResultAvailabilityChanged
ash.help_app.mojom.SearchResultsObserver_OnSearchResultAvailabilityChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.help_app.mojom.SearchResultsObserver.OnSearchResultAvailabilityChanged_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.help_app.mojom.SearchResultsObserverPtr = ash.help_app.mojom.SearchResultsObserverRemote;
ash.help_app.mojom.SearchResultsObserverRequest = ash.help_app.mojom.SearchResultsObserverPendingReceiver;


// Interface: SearchHandler
ash.help_app.mojom.SearchHandler = {};

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
      [query, max_num_results]);
  }

  update(concepts) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.help_app.mojom.SearchHandler_Update_ParamsSpec,
      null,
      [concepts]);
  }

  observe(observer) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.help_app.mojom.SearchHandler_Observe_ParamsSpec,
      null,
      [observer]);
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

// ParamsSpec for Search
ash.help_app.mojom.SearchHandler_Search_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.help_app.mojom.SearchHandler.Search_Params',
      packedSize: 24,
      fields: [
        { name: 'query', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'max_num_results', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.help_app.mojom.SearchHandler_Search_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.help_app.mojom.SearchHandler.Search_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'results', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Update
ash.help_app.mojom.SearchHandler_Update_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.help_app.mojom.SearchHandler.Update_Params',
      packedSize: 16,
      fields: [
        { name: 'concepts', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Observe
ash.help_app.mojom.SearchHandler_Observe_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.help_app.mojom.SearchHandler.Observe_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.help_app.mojom.SearchHandlerPtr = ash.help_app.mojom.SearchHandlerRemote;
ash.help_app.mojom.SearchHandlerRequest = ash.help_app.mojom.SearchHandlerPendingReceiver;

