// Auto-generated MojoJS binding
// Source: chromium_src/components/url_rewrite/mojom/url_request_rewrite.mojom
// Module: url_rewrite.mojom

'use strict';

// Module namespace
var url_rewrite = url_rewrite || {};
url_rewrite.mojom = url_rewrite.mojom || {};


// Enum: UrlRequestAccessPolicy
url_rewrite.mojom.UrlRequestAccessPolicy = {
  kAllow: 0,
  kDeny: 1,
};

// Struct: UrlRequestRewriteRules
url_rewrite.mojom.UrlRequestRewriteRules = class {
  constructor(values = {}) {
    this.rules = values.rules !== undefined ? values.rules : [];
  }
};

// Struct: UrlRequestRule
url_rewrite.mojom.UrlRequestRule = class {
  constructor(values = {}) {
    this.to = values.to !== undefined ? values.to : null;
    this.hosts_filter = values.hosts_filter !== undefined ? values.hosts_filter : "";
    this.to = values.to !== undefined ? values.to : null;
    this.actions = values.actions !== undefined ? values.actions : "";
  }
};

// Struct: UrlRequestRewriteAddHeaders
url_rewrite.mojom.UrlRequestRewriteAddHeaders = class {
  constructor(values = {}) {
    this.headers = values.headers !== undefined ? values.headers : [];
  }
};

// Struct: UrlHeader
url_rewrite.mojom.UrlHeader = class {
  constructor(values = {}) {
    this.value = values.value !== undefined ? values.value : "";
  }
};

// Struct: UrlRequestRewriteRemoveHeader
url_rewrite.mojom.UrlRequestRewriteRemoveHeader = class {
  constructor(values = {}) {
    this.header_name = values.header_name !== undefined ? values.header_name : "";
  }
};

// Struct: UrlRequestRewriteSubstituteQueryPattern
url_rewrite.mojom.UrlRequestRewriteSubstituteQueryPattern = class {
  constructor(values = {}) {
    this.substitution = values.substitution !== undefined ? values.substitution : "";
  }
};

// Struct: UrlRequestRewriteReplaceUrl
url_rewrite.mojom.UrlRequestRewriteReplaceUrl = class {
  constructor(values = {}) {
    this.new_url = values.new_url !== undefined ? values.new_url : "";
  }
};

// Struct: UrlRequestRewriteAppendToQuery
url_rewrite.mojom.UrlRequestRewriteAppendToQuery = class {
  constructor(values = {}) {
    this.query = values.query !== undefined ? values.query : "";
  }
};

// Interface: UrlRequestRulesReceiver
url_rewrite.mojom.UrlRequestRulesReceiverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'url_rewrite.mojom.UrlRequestRulesReceiver';
  }

  onRulesUpdated(rules) {
    // Method: OnRulesUpdated
    // Call: OnRulesUpdated(rules)
  }

};

url_rewrite.mojom.UrlRequestRulesReceiverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
