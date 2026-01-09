// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/content_index/content_index.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: ContentIndexError
blink.mojom.ContentIndexError = {
  NONE: 0,
};

// Enum: ContentCategory
blink.mojom.ContentCategory = {
};

// Struct: ContentIconDefinition
blink.mojom.ContentIconDefinition = class {
  constructor(values = {}) {
    this.type = values.type !== undefined ? values.type : "";
  }
};

// Struct: ContentDescription
blink.mojom.ContentDescription = class {
  constructor(values = {}) {
    this.launch_url = values.launch_url !== undefined ? values.launch_url : "";
  }
};

// Interface: ContentIndexService
blink.mojom.ContentIndexServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.ContentIndexService';
  }

  getIconSizes(category) {
    // Method: GetIconSizes
    return new Promise((resolve) => {
      // Call: GetIconSizes(category)
      resolve({});
    });
  }

  add(service_worker_registration_id, description, icon, launchUrl) {
    // Method: Add
    return new Promise((resolve) => {
      // Call: Add(service_worker_registration_id, description, icon, launchUrl)
      resolve({});
    });
  }

  delete(service_worker_registration_id, id) {
    // Method: Delete
    return new Promise((resolve) => {
      // Call: Delete(service_worker_registration_id, id)
      resolve({});
    });
  }

  getDescriptions(service_worker_registration_id) {
    // Method: GetDescriptions
    return new Promise((resolve) => {
      // Call: GetDescriptions(service_worker_registration_id)
      resolve({});
    });
  }

};

blink.mojom.ContentIndexServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
