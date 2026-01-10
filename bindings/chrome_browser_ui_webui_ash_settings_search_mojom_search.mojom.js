// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/settings/search/mojom/search.mojom
// Module: ash.settings.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.settings = ash.settings || {};
ash.settings.mojom = ash.settings.mojom || {};
var chromeos = chromeos || {};
var mojo_base = mojo_base || {};

ash.settings.mojom.SearchResultTypeSpec = { $: mojo.internal.Enum() };
ash.settings.mojom.SearchResultDefaultRankSpec = { $: mojo.internal.Enum() };
ash.settings.mojom.ParentResultBehaviorSpec = { $: mojo.internal.Enum() };
ash.settings.mojom.SearchResultIdentifierSpec = { $: {} };
ash.settings.mojom.SearchResultSpec = { $: {} };
ash.settings.mojom.SearchResultsObserver = {};
ash.settings.mojom.SearchResultsObserver.$interfaceName = 'ash.settings.mojom.SearchResultsObserver';
ash.settings.mojom.SearchResultsObserver_OnSearchResultsChanged_ParamsSpec = { $: {} };
ash.settings.mojom.SearchHandler = {};
ash.settings.mojom.SearchHandler.$interfaceName = 'ash.settings.mojom.SearchHandler';
ash.settings.mojom.SearchHandler_Search_ParamsSpec = { $: {} };
ash.settings.mojom.SearchHandler_Search_ResponseParamsSpec = { $: {} };
ash.settings.mojom.SearchHandler_Observe_ParamsSpec = { $: {} };

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

// Union: SearchResultIdentifier
mojo.internal.Union(
    ash.settings.mojom.SearchResultIdentifierSpec, 'ash.settings.mojom.SearchResultIdentifier', {
      'section': {
        'ordinal': 0,
        'type': chromeos.settings.mojom.SectionSpec.$,
        'nullable': false,
      },
      'subpage': {
        'ordinal': 1,
        'type': chromeos.settings.mojom.SubpageSpec.$,
        'nullable': false,
      },
      'setting': {
        'ordinal': 2,
        'type': chromeos.settings.mojom.SettingSpec.$,
        'nullable': false,
      },
    });

// Struct: SearchResult
mojo.internal.Struct(
    ash.settings.mojom.SearchResultSpec, 'ash.settings.mojom.SearchResult', [
      mojo.internal.StructField('text', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('canonical_text', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('url_path_with_parameters', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('icon', 24, 0, ash.settings.mojom.SearchResultIconSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('relevance_score', 32, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('settings_page_hierarchy', 40, 0, mojo.internal.Array(mojo_base.mojom.String16Spec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('default_rank', 48, 0, ash.settings.mojom.SearchResultDefaultRankSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('type', 56, 0, ash.settings.mojom.SearchResultTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('id', 64, 0, ash.settings.mojom.SearchResultIdentifierSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('was_generated_from_text_match', 72, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 88]]);

// Interface: SearchResultsObserver
mojo.internal.Struct(
    ash.settings.mojom.SearchResultsObserver_OnSearchResultsChanged_ParamsSpec, 'ash.settings.mojom.SearchResultsObserver_OnSearchResultsChanged_Params', [
    ],
    [[0, 8]]);

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
      [],
      false);
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

ash.settings.mojom.SearchResultsObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.settings.mojom.SearchResultsObserver_OnSearchResultsChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onSearchResultsChanged();
          break;
        }
      }
    });
  }
};

ash.settings.mojom.SearchResultsObserverReceiver = ash.settings.mojom.SearchResultsObserverReceiver;

ash.settings.mojom.SearchResultsObserverPtr = ash.settings.mojom.SearchResultsObserverRemote;
ash.settings.mojom.SearchResultsObserverRequest = ash.settings.mojom.SearchResultsObserverPendingReceiver;


// Interface: SearchHandler
mojo.internal.Struct(
    ash.settings.mojom.SearchHandler_Search_ParamsSpec, 'ash.settings.mojom.SearchHandler_Search_Params', [
      mojo.internal.StructField('query', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('parent_result_behavior', 8, 0, ash.settings.mojom.ParentResultBehaviorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('max_num_results', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    ash.settings.mojom.SearchHandler_Search_ResponseParamsSpec, 'ash.settings.mojom.SearchHandler_Search_ResponseParams', [
      mojo.internal.StructField('results', 0, 0, mojo.internal.Array(ash.settings.mojom.SearchResultSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.settings.mojom.SearchHandler_Observe_ParamsSpec, 'ash.settings.mojom.SearchHandler_Observe_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.settings.mojom.SearchResultsObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [query, max_num_results, parent_result_behavior],
      false);
  }

  observe(observer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.settings.mojom.SearchHandler_Observe_ParamsSpec,
      null,
      [observer],
      false);
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

ash.settings.mojom.SearchHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.settings.mojom.SearchHandler_Search_ParamsSpec.$.decode(message.payload);
          const result = this.impl.search(params.query, params.max_num_results, params.parent_result_behavior);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.settings.mojom.SearchHandler_Search_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = ash.settings.mojom.SearchHandler_Observe_ParamsSpec.$.decode(message.payload);
          const result = this.impl.observe(params.observer);
          break;
        }
      }
    });
  }
};

ash.settings.mojom.SearchHandlerReceiver = ash.settings.mojom.SearchHandlerReceiver;

ash.settings.mojom.SearchHandlerPtr = ash.settings.mojom.SearchHandlerRemote;
ash.settings.mojom.SearchHandlerRequest = ash.settings.mojom.SearchHandlerPendingReceiver;

