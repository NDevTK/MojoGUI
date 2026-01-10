// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/components/local_search_service/public/mojom/local_search_service.mojom
// Module: ash.local_search_service.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.local_search_service = ash.local_search_service || {};
ash.local_search_service.local_search_service.mojom = ash.local_search_service.local_search_service.mojom || {};


// Enum: IndexId
ash.local_search_service.local_search_service.mojom.mojom.IndexId = {
  kCrosSettings: 0,
  kHelpApp: 1,
  kHelpAppLauncher: 2,
  kPersonalization: 3,
  kShortcutsApp: 4,
};
ash.local_search_service.local_search_service.mojom.mojom.IndexIdSpec = { $: mojo.internal.Enum() };

// Enum: Backend
ash.local_search_service.local_search_service.mojom.mojom.Backend = {
  kLinearMap: 0,
  kInvertedIndex: 1,
};
ash.local_search_service.local_search_service.mojom.mojom.BackendSpec = { $: mojo.internal.Enum() };

// Interface: SearchMetricsReporter
ash.local_search_service.local_search_service.mojom.mojom.SearchMetricsReporter = {};

ash.local_search_service.local_search_service.mojom.mojom.SearchMetricsReporterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.local_search_service.local_search_service.mojom.mojom.SearchMetricsReporterRemote = class {
  static get $interfaceName() {
    return 'ash.local_search_service.mojom.SearchMetricsReporter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.local_search_service.local_search_service.mojom.mojom.SearchMetricsReporterPendingReceiver,
      handle);
    this.$ = new ash.local_search_service.local_search_service.mojom.mojom.SearchMetricsReporterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.local_search_service.local_search_service.mojom.mojom.SearchMetricsReporterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onSearchPerformed(index_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.local_search_service.local_search_service.mojom.mojom.SearchMetricsReporter_OnSearchPerformed_ParamsSpec,
      null,
      [index_id]);
  }

};

ash.local_search_service.local_search_service.mojom.mojom.SearchMetricsReporter.getRemote = function() {
  let remote = new ash.local_search_service.local_search_service.mojom.mojom.SearchMetricsReporterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.local_search_service.mojom.SearchMetricsReporter',
    'context');
  return remote.$;
};

// ParamsSpec for OnSearchPerformed
ash.local_search_service.local_search_service.mojom.mojom.SearchMetricsReporter_OnSearchPerformed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.local_search_service.mojom.SearchMetricsReporter.OnSearchPerformed_Params',
      packedSize: 16,
      fields: [
        { name: 'index_id', packedOffset: 0, packedBitOffset: 0, type: ash.local_search_service.mojom.IndexIdSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.local_search_service.local_search_service.mojom.mojom.SearchMetricsReporterPtr = ash.local_search_service.local_search_service.mojom.mojom.SearchMetricsReporterRemote;
ash.local_search_service.local_search_service.mojom.mojom.SearchMetricsReporterRequest = ash.local_search_service.local_search_service.mojom.mojom.SearchMetricsReporterPendingReceiver;


// Interface: LocalSearchService
ash.local_search_service.local_search_service.mojom.mojom.LocalSearchService = {};

ash.local_search_service.local_search_service.mojom.mojom.LocalSearchServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.local_search_service.local_search_service.mojom.mojom.LocalSearchServiceRemote = class {
  static get $interfaceName() {
    return 'ash.local_search_service.mojom.LocalSearchService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.local_search_service.local_search_service.mojom.mojom.LocalSearchServicePendingReceiver,
      handle);
    this.$ = new ash.local_search_service.local_search_service.mojom.mojom.LocalSearchServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.local_search_service.local_search_service.mojom.mojom.LocalSearchServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindIndex(index_id, backend, index_receiver, reporter_remote) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.local_search_service.local_search_service.mojom.mojom.LocalSearchService_BindIndex_ParamsSpec,
      ash.local_search_service.local_search_service.mojom.mojom.LocalSearchService_BindIndex_ResponseParamsSpec,
      [index_id, backend, index_receiver, reporter_remote]);
  }

};

ash.local_search_service.local_search_service.mojom.mojom.LocalSearchService.getRemote = function() {
  let remote = new ash.local_search_service.local_search_service.mojom.mojom.LocalSearchServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.local_search_service.mojom.LocalSearchService',
    'context');
  return remote.$;
};

// ParamsSpec for BindIndex
ash.local_search_service.local_search_service.mojom.mojom.LocalSearchService_BindIndex_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.local_search_service.mojom.LocalSearchService.BindIndex_Params',
      packedSize: 24,
      fields: [
        { name: 'index_id', packedOffset: 0, packedBitOffset: 0, type: ash.local_search_service.mojom.IndexIdSpec, nullable: false, minVersion: 0 },
        { name: 'backend', packedOffset: 4, packedBitOffset: 0, type: ash.local_search_service.mojom.BackendSpec, nullable: false, minVersion: 0 },
        { name: 'index_receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'reporter_remote', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.local_search_service.local_search_service.mojom.mojom.LocalSearchService_BindIndex_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.local_search_service.mojom.LocalSearchService.BindIndex_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.local_search_service.local_search_service.mojom.mojom.LocalSearchServicePtr = ash.local_search_service.local_search_service.mojom.mojom.LocalSearchServiceRemote;
ash.local_search_service.local_search_service.mojom.mojom.LocalSearchServiceRequest = ash.local_search_service.local_search_service.mojom.mojom.LocalSearchServicePendingReceiver;

