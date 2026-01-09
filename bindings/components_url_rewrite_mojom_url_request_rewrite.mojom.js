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
url_rewrite.mojom.UrlRequestAccessPolicySpec = { $: mojo.internal.Enum() };

// Union: UrlRequestAction
url_rewrite.mojom.UrlRequestActionSpec = { $: mojo.internal.Union(
    'url_rewrite.mojom.UrlRequestAction', {
      'add_headers': {
        'ordinal': 0,
        'type': url_rewrite.mojom.UrlRequestRewriteAddHeadersSpec,
      }},
      'remove_header': {
        'ordinal': 1,
        'type': url_rewrite.mojom.UrlRequestRewriteRemoveHeaderSpec,
      }},
      'substitute_query_pattern': {
        'ordinal': 2,
        'type': url_rewrite.mojom.UrlRequestRewriteSubstituteQueryPatternSpec,
      }},
      'replace_url': {
        'ordinal': 3,
        'type': url_rewrite.mojom.UrlRequestRewriteReplaceUrlSpec,
      }},
      'append_to_query': {
        'ordinal': 4,
        'type': url_rewrite.mojom.UrlRequestRewriteAppendToQuerySpec,
      }},
      'policy': {
        'ordinal': 5,
        'type': url_rewrite.mojom.UrlRequestAccessPolicySpec,
      }},
    })
};

// Struct: UrlRequestRewriteRules
url_rewrite.mojom.UrlRequestRewriteRulesSpec = {
  $: {
    structSpec: {
      name: 'url_rewrite.mojom.UrlRequestRewriteRules',
      packedSize: 16,
      fields: [
        { name: 'rules', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(url_rewrite.mojom.UrlRequestRuleSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: UrlRequestRule
url_rewrite.mojom.UrlRequestRuleSpec = {
  $: {
    structSpec: {
      name: 'url_rewrite.mojom.UrlRequestRule',
      packedSize: 32,
      fields: [
        { name: 'hosts_filter', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: true, minVersion: 0 },
        { name: 'schemes_filter', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: true, minVersion: 0 },
        { name: 'actions', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(url_rewrite.mojom.UrlRequestActionSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: UrlRequestRewriteAddHeaders
url_rewrite.mojom.UrlRequestRewriteAddHeadersSpec = {
  $: {
    structSpec: {
      name: 'url_rewrite.mojom.UrlRequestRewriteAddHeaders',
      packedSize: 16,
      fields: [
        { name: 'headers', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(url_rewrite.mojom.UrlHeaderSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: UrlHeader
url_rewrite.mojom.UrlHeaderSpec = {
  $: {
    structSpec: {
      name: 'url_rewrite.mojom.UrlHeader',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: UrlRequestRewriteRemoveHeader
url_rewrite.mojom.UrlRequestRewriteRemoveHeaderSpec = {
  $: {
    structSpec: {
      name: 'url_rewrite.mojom.UrlRequestRewriteRemoveHeader',
      packedSize: 24,
      fields: [
        { name: 'query_pattern', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'header_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: UrlRequestRewriteSubstituteQueryPattern
url_rewrite.mojom.UrlRequestRewriteSubstituteQueryPatternSpec = {
  $: {
    structSpec: {
      name: 'url_rewrite.mojom.UrlRequestRewriteSubstituteQueryPattern',
      packedSize: 24,
      fields: [
        { name: 'pattern', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'substitution', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: UrlRequestRewriteReplaceUrl
url_rewrite.mojom.UrlRequestRewriteReplaceUrlSpec = {
  $: {
    structSpec: {
      name: 'url_rewrite.mojom.UrlRequestRewriteReplaceUrl',
      packedSize: 24,
      fields: [
        { name: 'url_ends_with', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'new_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: UrlRequestRewriteAppendToQuery
url_rewrite.mojom.UrlRequestRewriteAppendToQuerySpec = {
  $: {
    structSpec: {
      name: 'url_rewrite.mojom.UrlRequestRewriteAppendToQuery',
      packedSize: 16,
      fields: [
        { name: 'query', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: UrlRequestRulesReceiver
url_rewrite.mojom.UrlRequestRulesReceiver = {};

url_rewrite.mojom.UrlRequestRulesReceiverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

url_rewrite.mojom.UrlRequestRulesReceiverRemote = class {
  static get $interfaceName() {
    return 'url_rewrite.mojom.UrlRequestRulesReceiver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      url_rewrite.mojom.UrlRequestRulesReceiverPendingReceiver,
      handle);
    this.$ = new url_rewrite.mojom.UrlRequestRulesReceiverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

url_rewrite.mojom.UrlRequestRulesReceiverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onRulesUpdated(rules) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      url_rewrite.mojom.UrlRequestRulesReceiver_OnRulesUpdated_ParamsSpec,
      null,
      [rules]);
  }

};

url_rewrite.mojom.UrlRequestRulesReceiver.getRemote = function() {
  let remote = new url_rewrite.mojom.UrlRequestRulesReceiverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'url_rewrite.mojom.UrlRequestRulesReceiver',
    'context');
  return remote.$;
};

// ParamsSpec for OnRulesUpdated
url_rewrite.mojom.UrlRequestRulesReceiver_OnRulesUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'url_rewrite.mojom.UrlRequestRulesReceiver.OnRulesUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'rules', packedOffset: 0, packedBitOffset: 0, type: url_rewrite.mojom.UrlRequestRewriteRulesSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
url_rewrite.mojom.UrlRequestRulesReceiverPtr = url_rewrite.mojom.UrlRequestRulesReceiverRemote;
url_rewrite.mojom.UrlRequestRulesReceiverRequest = url_rewrite.mojom.UrlRequestRulesReceiverPendingReceiver;

