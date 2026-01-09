// Auto-generated MojoJS binding
// Source: chromium_src/components/browsing_topics/mojom/browsing_topics_internals.mojom
// Module: browsing_topics.mojom

'use strict';

// Module namespace
var browsing_topics = browsing_topics || {};
browsing_topics.mojom = browsing_topics.mojom || {};


// Struct: WebUIBrowsingTopicsConfiguration
browsing_topics.mojom.WebUIBrowsingTopicsConfiguration = class {
  constructor(values = {}) {
    this.number_of_top_topics_per_epoch = values.number_of_top_topics_per_epoch !== undefined ? values.number_of_top_topics_per_epoch : 0;
    this.taxonomy = values.taxonomy !== undefined ? values.taxonomy : null;
    this.max_number_of_api_usage_context_domains_to_store_per_page_load = values.max_number_of_api_usage_context_domains_to_store_per_page_load !== undefined ? values.max_number_of_api_usage_context_domains_to_store_per_page_load : 0;
    this.disabled_topics_list = values.disabled_topics_list !== undefined ? values.disabled_topics_list : 0;
  }
};

// Struct: WebUITopic
browsing_topics.mojom.WebUITopic = class {
  constructor(values = {}) {
    this.observed_by_domains = values.observed_by_domains !== undefined ? values.observed_by_domains : 0;
  }
};

// Struct: WebUIEpoch
browsing_topics.mojom.WebUIEpoch = class {
  constructor(values = {}) {
    this.taxonomy_version = values.taxonomy_version !== undefined ? values.taxonomy_version : "";
  }
};

// Struct: WebUIBrowsingTopicsState
browsing_topics.mojom.WebUIBrowsingTopicsState = class {
  constructor(values = {}) {
    this.next_scheduled_calculation_time = values.next_scheduled_calculation_time !== undefined ? values.next_scheduled_calculation_time : [];
  }
};

// Struct: WebUIModelInfo
browsing_topics.mojom.WebUIModelInfo = class {
  constructor(values = {}) {
    this.model_file_path = values.model_file_path !== undefined ? values.model_file_path : "";
  }
};

// Interface: PageHandler
browsing_topics.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'browsing_topics.mojom.PageHandler';
  }

  getBrowsingTopicsConfiguration() {
    // Method: GetBrowsingTopicsConfiguration
    return new Promise((resolve) => {
      // Call: GetBrowsingTopicsConfiguration()
      resolve({});
    });
  }

  getBrowsingTopicsState(calculate_now) {
    // Method: GetBrowsingTopicsState
    return new Promise((resolve) => {
      // Call: GetBrowsingTopicsState(calculate_now)
      resolve({});
    });
  }

  getModelInfo() {
    // Method: GetModelInfo
    return new Promise((resolve) => {
      // Call: GetModelInfo()
      resolve({});
    });
  }

  classifyHosts(hosts) {
    // Method: ClassifyHosts
    return new Promise((resolve) => {
      // Call: ClassifyHosts(hosts)
      resolve({});
    });
  }

};

browsing_topics.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
