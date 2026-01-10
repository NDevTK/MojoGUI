// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/components/local_search_service/public/mojom/local_search_service.mojom
// Module: ash.local_search_service.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.local_search_service = ash.local_search_service || {};
ash.local_search_service.mojom = ash.local_search_service.mojom || {};
var sandbox = sandbox || {};

ash.local_search_service.mojom.IndexIdSpec = { $: mojo.internal.Enum() };
ash.local_search_service.mojom.BackendSpec = { $: mojo.internal.Enum() };
ash.local_search_service.mojom.SearchMetricsReporter = {};
ash.local_search_service.mojom.SearchMetricsReporter.$interfaceName = 'ash.local_search_service.mojom.SearchMetricsReporter';
ash.local_search_service.mojom.SearchMetricsReporter_OnSearchPerformed_ParamsSpec = { $: {} };
ash.local_search_service.mojom.SearchMetricsReporter_OnSearchPerformed_ResponseParamsSpec = { $: {} };
ash.local_search_service.mojom.LocalSearchService = {};
ash.local_search_service.mojom.LocalSearchService.$interfaceName = 'ash.local_search_service.mojom.LocalSearchService';
ash.local_search_service.mojom.LocalSearchService_BindIndex_ParamsSpec = { $: {} };
ash.local_search_service.mojom.LocalSearchService_BindIndex_ResponseParamsSpec = { $: {} };

// Enum: IndexId
ash.local_search_service.mojom.IndexId = {
  kCrosSettings: 0,
  kHelpApp: 1,
  kHelpAppLauncher: 2,
  kPersonalization: 3,
  kShortcutsApp: 4,
};

// Enum: Backend
ash.local_search_service.mojom.Backend = {
  kLinearMap: 0,
  kInvertedIndex: 1,
};

// Interface: SearchMetricsReporter
mojo.internal.Struct(
    ash.local_search_service.mojom.SearchMetricsReporter_OnSearchPerformed_ParamsSpec, 'ash.local_search_service.mojom.SearchMetricsReporter_OnSearchPerformed_Params', [
      mojo.internal.StructField('index_id', 0, 0, ash.local_search_service.mojom.IndexIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.local_search_service.mojom.SearchMetricsReporter_OnSearchPerformed_ResponseParamsSpec, 'ash.local_search_service.mojom.SearchMetricsReporter_OnSearchPerformed_ResponseParams', [
    ],
    [[0, 8]]);

ash.local_search_service.mojom.SearchMetricsReporterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.local_search_service.mojom.SearchMetricsReporterRemote = class {
  static get $interfaceName() {
    return 'ash.local_search_service.mojom.SearchMetricsReporter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.local_search_service.mojom.SearchMetricsReporterPendingReceiver,
      handle);
    this.$ = new ash.local_search_service.mojom.SearchMetricsReporterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.local_search_service.mojom.SearchMetricsReporterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onSearchPerformed(index_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.local_search_service.mojom.SearchMetricsReporter_OnSearchPerformed_ParamsSpec,
      ash.local_search_service.mojom.SearchMetricsReporter_OnSearchPerformed_ResponseParamsSpec,
      [index_id],
      false);
  }

};

ash.local_search_service.mojom.SearchMetricsReporter.getRemote = function() {
  let remote = new ash.local_search_service.mojom.SearchMetricsReporterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.local_search_service.mojom.SearchMetricsReporter',
    'context');
  return remote.$;
};

ash.local_search_service.mojom.SearchMetricsReporterReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.local_search_service.mojom.SearchMetricsReporter_OnSearchPerformed_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onSearchPerformed(params.index_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.local_search_service.mojom.SearchMetricsReporter_OnSearchPerformed_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

ash.local_search_service.mojom.SearchMetricsReporterReceiver = ash.local_search_service.mojom.SearchMetricsReporterReceiver;

ash.local_search_service.mojom.SearchMetricsReporterPtr = ash.local_search_service.mojom.SearchMetricsReporterRemote;
ash.local_search_service.mojom.SearchMetricsReporterRequest = ash.local_search_service.mojom.SearchMetricsReporterPendingReceiver;


// Interface: LocalSearchService
mojo.internal.Struct(
    ash.local_search_service.mojom.LocalSearchService_BindIndex_ParamsSpec, 'ash.local_search_service.mojom.LocalSearchService_BindIndex_Params', [
      mojo.internal.StructField('index_id', 0, 0, ash.local_search_service.mojom.IndexIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('backend', 8, 0, ash.local_search_service.mojom.BackendSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('index_receiver', 16, 0, mojo.internal.InterfaceRequest(ash.local_search_service.mojom.IndexRemote), null, false, 0, undefined),
      mojo.internal.StructField('reporter_remote', 24, 0, mojo.internal.InterfaceProxy(ash.local_search_service.mojom.SearchMetricsReporterSpec), null, true, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    ash.local_search_service.mojom.LocalSearchService_BindIndex_ResponseParamsSpec, 'ash.local_search_service.mojom.LocalSearchService_BindIndex_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

ash.local_search_service.mojom.LocalSearchServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.local_search_service.mojom.LocalSearchServiceRemote = class {
  static get $interfaceName() {
    return 'ash.local_search_service.mojom.LocalSearchService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.local_search_service.mojom.LocalSearchServicePendingReceiver,
      handle);
    this.$ = new ash.local_search_service.mojom.LocalSearchServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.local_search_service.mojom.LocalSearchServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindIndex(index_id, backend, index_receiver, reporter_remote) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.local_search_service.mojom.LocalSearchService_BindIndex_ParamsSpec,
      ash.local_search_service.mojom.LocalSearchService_BindIndex_ResponseParamsSpec,
      [index_id, backend, index_receiver, reporter_remote],
      false);
  }

};

ash.local_search_service.mojom.LocalSearchService.getRemote = function() {
  let remote = new ash.local_search_service.mojom.LocalSearchServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.local_search_service.mojom.LocalSearchService',
    'context');
  return remote.$;
};

ash.local_search_service.mojom.LocalSearchServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.local_search_service.mojom.LocalSearchService_BindIndex_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bindIndex(params.index_id, params.backend, params.index_receiver, params.reporter_remote);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.local_search_service.mojom.LocalSearchService_BindIndex_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

ash.local_search_service.mojom.LocalSearchServiceReceiver = ash.local_search_service.mojom.LocalSearchServiceReceiver;

ash.local_search_service.mojom.LocalSearchServicePtr = ash.local_search_service.mojom.LocalSearchServiceRemote;
ash.local_search_service.mojom.LocalSearchServiceRequest = ash.local_search_service.mojom.LocalSearchServicePendingReceiver;

