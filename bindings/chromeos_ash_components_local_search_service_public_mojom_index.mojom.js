// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/components/local_search_service/public/mojom/index.mojom
// Module: ash.local_search_service.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.local_search_service = ash.local_search_service || {};
ash.local_search_service.mojom = ash.local_search_service.mojom || {};


// Interface: Index
ash.local_search_service.mojom.IndexPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.local_search_service.mojom.Index';
  }

  getSize() {
    // Method: GetSize
    return new Promise((resolve) => {
      // Call: GetSize()
      resolve({});
    });
  }

  addOrUpdate(data) {
    // Method: AddOrUpdate
    // Call: AddOrUpdate(data)
  }

  delete(ids) {
    // Method: Delete
    return new Promise((resolve) => {
      // Call: Delete(ids)
      resolve({});
    });
  }

  updateDocuments(data) {
    // Method: UpdateDocuments
    return new Promise((resolve) => {
      // Call: UpdateDocuments(data)
      resolve({});
    });
  }

  find(query, max_results) {
    // Method: Find
    return new Promise((resolve) => {
      // Call: Find(query, max_results)
      resolve({});
    });
  }

  clearIndex() {
    // Method: ClearIndex
    // Call: ClearIndex()
  }

  setSearchParams(search_params) {
    // Method: SetSearchParams
    // Call: SetSearchParams(search_params)
  }

};

ash.local_search_service.mojom.IndexRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
