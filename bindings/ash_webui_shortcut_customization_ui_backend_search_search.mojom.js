// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/shortcut_customization_ui/backend/search/search.mojom
// Module: ash.shortcut_customization.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.shortcut_customization = ash.shortcut_customization || {};
ash.shortcut_customization.mojom = ash.shortcut_customization.mojom || {};


// Struct: SearchResult
ash.shortcut_customization.mojom.SearchResultSpec = {
  $: {
    structSpec: {
      name: 'ash.shortcut_customization.mojom.SearchResult',
      packedSize: 32,
      fields: [
        { name: 'accelerator_layout_info', packedOffset: 0, packedBitOffset: 0, type: ash.mojom.AcceleratorLayoutInfoSpec, nullable: false, minVersion: 0 },
        { name: 'accelerator_infos', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(ash.mojom.AcceleratorInfoSpec, false), nullable: false, minVersion: 0 },
        { name: 'relevance_score', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: SearchResultsAvailabilityObserver
ash.shortcut_customization.mojom.SearchResultsAvailabilityObserver = {};

ash.shortcut_customization.mojom.SearchResultsAvailabilityObserver_OnSearchResultsAvailabilityChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shortcut_customization.mojom.SearchResultsAvailabilityObserver_OnSearchResultsAvailabilityChanged_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

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
      []);
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

// ParamsSpec for OnSearchResultsAvailabilityChanged
ash.shortcut_customization.mojom.SearchResultsAvailabilityObserver_OnSearchResultsAvailabilityChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shortcut_customization.mojom.SearchResultsAvailabilityObserver.OnSearchResultsAvailabilityChanged_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
ash.shortcut_customization.mojom.SearchResultsAvailabilityObserverPtr = ash.shortcut_customization.mojom.SearchResultsAvailabilityObserverRemote;
ash.shortcut_customization.mojom.SearchResultsAvailabilityObserverRequest = ash.shortcut_customization.mojom.SearchResultsAvailabilityObserverPendingReceiver;


// Interface: SearchHandler
ash.shortcut_customization.mojom.SearchHandler = {};

ash.shortcut_customization.mojom.SearchHandler_Search_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shortcut_customization.mojom.SearchHandler_Search_Params',
      packedSize: 24,
      fields: [
        { name: 'query', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'max_num_results', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.shortcut_customization.mojom.SearchHandler_AddSearchResultsAvailabilityObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shortcut_customization.mojom.SearchHandler_AddSearchResultsAvailabilityObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.shortcut_customization.mojom.SearchResultsAvailabilityObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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
      [query, max_num_results]);
  }

  addSearchResultsAvailabilityObserver(observer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.shortcut_customization.mojom.SearchHandler_AddSearchResultsAvailabilityObserver_ParamsSpec,
      null,
      [observer]);
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

// ParamsSpec for Search
ash.shortcut_customization.mojom.SearchHandler_Search_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shortcut_customization.mojom.SearchHandler.Search_Params',
      packedSize: 24,
      fields: [
        { name: 'query', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'max_num_results', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.shortcut_customization.mojom.SearchHandler_Search_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shortcut_customization.mojom.SearchHandler.Search_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'results', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.shortcut_customization.mojom.SearchResultSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AddSearchResultsAvailabilityObserver
ash.shortcut_customization.mojom.SearchHandler_AddSearchResultsAvailabilityObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.shortcut_customization.mojom.SearchHandler.AddSearchResultsAvailabilityObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.shortcut_customization.mojom.SearchResultsAvailabilityObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.shortcut_customization.mojom.SearchHandlerPtr = ash.shortcut_customization.mojom.SearchHandlerRemote;
ash.shortcut_customization.mojom.SearchHandlerRequest = ash.shortcut_customization.mojom.SearchHandlerPendingReceiver;

