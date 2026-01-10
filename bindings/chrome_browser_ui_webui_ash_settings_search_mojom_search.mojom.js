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
ash.settings.mojom.SearchResultTypeSpec = { $: mojo.internal.Enum() };

// Enum: SearchResultDefaultRank
ash.settings.mojom.SearchResultDefaultRank = {
  kHigh: 0,
  kMedium: 1,
  kLow: 2,
};
ash.settings.mojom.SearchResultDefaultRankSpec = { $: mojo.internal.Enum() };

// Enum: ParentResultBehavior
ash.settings.mojom.ParentResultBehavior = {
  kAllowParentResults: 0,
  kDoNotIncludeParentResults: 1,
};
ash.settings.mojom.ParentResultBehaviorSpec = { $: mojo.internal.Enum() };

// Union: SearchResultIdentifier
ash.settings.mojom.SearchResultIdentifierSpec = { $: mojo.internal.Union(
    'ash.settings.mojom.SearchResultIdentifier', {
      'section': {
        'ordinal': 0,
        'type': chromeos.settings.mojom.SectionSpec,
      }},
      'subpage': {
        'ordinal': 1,
        'type': chromeos.settings.mojom.SubpageSpec,
      }},
      'setting': {
        'ordinal': 2,
        'type': chromeos.settings.mojom.SettingSpec,
      }},
    })
};

// Struct: SearchResult
ash.settings.mojom.SearchResultSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.SearchResult',
      packedSize: 80,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'canonical_text', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'url_path_with_parameters', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'icon', packedOffset: 24, packedBitOffset: 0, type: ash.settings.mojom.SearchResultIconSpec, nullable: false, minVersion: 0 },
        { name: 'relevance_score', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'settings_page_hierarchy', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array(mojo_base.mojom.String16Spec, false), nullable: false, minVersion: 0 },
        { name: 'default_rank', packedOffset: 28, packedBitOffset: 0, type: ash.settings.mojom.SearchResultDefaultRankSpec, nullable: false, minVersion: 0 },
        { name: 'was_generated_from_text_match', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 52, packedBitOffset: 0, type: ash.settings.mojom.SearchResultTypeSpec, nullable: false, minVersion: 0 },
        { name: 'id', packedOffset: 56, packedBitOffset: 0, type: ash.settings.mojom.SearchResultIdentifierSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 80}]
    }
  }
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
      []);
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
      [query, max_num_results, parent_result_behavior]);
  }

  observe(observer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.settings.mojom.SearchHandler_Observe_ParamsSpec,
      null,
      [observer]);
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
      packedSize: 24,
      fields: [
        { name: 'query', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'max_num_results', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'parent_result_behavior', packedOffset: 12, packedBitOffset: 0, type: ash.settings.mojom.ParentResultBehaviorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.settings.mojom.SearchHandler_Search_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.mojom.SearchHandler.Search_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'results', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.settings.mojom.SearchResultSpec, false), nullable: false, minVersion: 0 },
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
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.settings.mojom.SearchHandlerPtr = ash.settings.mojom.SearchHandlerRemote;
ash.settings.mojom.SearchHandlerRequest = ash.settings.mojom.SearchHandlerPendingReceiver;

