// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/settings/search/mojom/search.mojom
// Module: ash.settings.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.settings = ash.settings || {};
ash.settings.mojom = ash.settings.mojom || {};


// Enum: SearchResultType
ash.settings.mojom.SearchResultType = {
  kSection: 0,
  kSubpage: 1,
  kSetting: 2,
};

// Enum: SearchResultDefaultRank
ash.settings.mojom.SearchResultDefaultRank = {
  kHigh: 0,
  kMedium: 1,
  kLow: 2,
};

// Enum: ParentResultBehavior
ash.settings.mojom.ParentResultBehavior = {
  kAllowParentResults: 0,
  kDoNotIncludeParentResults: 1,
};

// Interface: SearchResultsObserver
ash.settings.mojom.SearchResultsObserver = {};

ash.settings.mojom.SearchResultsObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.mojom.SearchResultsObserverRemote = class {
  static get $interfaceName() {
    return 'ash.settings.mojom.SearchResultsObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.mojom.SearchResultsObserverPendingReceiver,
      handle);
    this.$ = new ash.settings.mojom.SearchResultsObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.mojom.SearchResultsObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onSearchResultsChanged() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.mojom.SearchResultsObserver_OnSearchResultsChanged_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

};

ash.settings.mojom.SearchResultsObserver.getRemote = function() {
  let remote = new ash.settings.mojom.SearchResultsObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.mojom.SearchResultsObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnSearchResultsChanged
ash.settings.mojom.SearchResultsObserver_OnSearchResultsChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.SearchResultsObserver.OnSearchResultsChanged_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
ash.settings.mojom.SearchResultsObserverPtr = ash.settings.mojom.SearchResultsObserverRemote;
ash.settings.mojom.SearchResultsObserverRequest = ash.settings.mojom.SearchResultsObserverPendingReceiver;


// Interface: SearchHandler
ash.settings.mojom.SearchHandler = {};

ash.settings.mojom.SearchHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.mojom.SearchHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.settings.mojom.SearchHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.mojom.SearchHandlerPendingReceiver,
      handle);
    this.$ = new ash.settings.mojom.SearchHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.mojom.SearchHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  search(query, max_num_results, parent_result_behavior) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.mojom.SearchHandler_Search_ParamsSpec,
      ash.settings.mojom.SearchHandler_Search_ResponseParamsSpec,
      ash.settings.mojom.SearchHandler_Search_ResponseParamsSpec,
      [query, max_num_results, parent_result_behavior],
      undefined,
      undefined
    );
  }

  observe(observer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.settings.mojom.SearchHandler_Observe_ParamsSpec,
      null,
      null,
      [observer],
      undefined,
      undefined
    );
  }

};

ash.settings.mojom.SearchHandler.getRemote = function() {
  let remote = new ash.settings.mojom.SearchHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.mojom.SearchHandler',
    'context');
  return remote.$;
};

// ParamsSpec for Search
ash.settings.mojom.SearchHandler_Search_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.SearchHandler.Search_Params',
      packedSize: 32,
      fields: [
        { name: 'query', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'max_num_results', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'parent_result_behavior', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

ash.settings.mojom.SearchHandler_Search_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.SearchHandler.Search_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'results', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Observe
ash.settings.mojom.SearchHandler_Observe_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.SearchHandler.Observe_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.settings.mojom.SearchHandlerPtr = ash.settings.mojom.SearchHandlerRemote;
ash.settings.mojom.SearchHandlerRequest = ash.settings.mojom.SearchHandlerPendingReceiver;

