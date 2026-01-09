// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/components/local_search_service/public/mojom/local_search_service.mojom
// Module: ash.local_search_service.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.local_search_service = ash.local_search_service || {};
ash.local_search_service.mojom = ash.local_search_service.mojom || {};


// Enum: IndexId
ash.local_search_service.mojom.IndexId = {
};

// Enum: Backend
ash.local_search_service.mojom.Backend = {
};

// Interface: SearchMetricsReporter
ash.local_search_service.mojom.SearchMetricsReporterPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.local_search_service.mojom.SearchMetricsReporter';
  }

  onSearchPerformed(index_id) {
    // Method: OnSearchPerformed
    // Call: OnSearchPerformed(index_id)
  }

};

ash.local_search_service.mojom.SearchMetricsReporterRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: LocalSearchService
ash.local_search_service.mojom.LocalSearchServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.local_search_service.mojom.LocalSearchService';
  }

  bindIndex(index_id, backend, index_receiver, reporter_remote) {
    // Method: BindIndex
    return new Promise((resolve) => {
      // Call: BindIndex(index_id, backend, index_receiver, reporter_remote)
      resolve({});
    });
  }

};

ash.local_search_service.mojom.LocalSearchServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
