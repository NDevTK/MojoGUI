// Auto-generated MojoJS binding
// Source: chromium_src/components/url_rewrite/mojom/url_request_rewrite.mojom
// Module: url_rewrite.mojom

// Module namespace
var url_rewrite = url_rewrite || {};
url_rewrite.mojom = url_rewrite.mojom || {};
var url = url || {};

url_rewrite.mojom.UrlRequestAccessPolicySpec = { $: mojo.internal.Enum() };
url_rewrite.mojom.UrlRequestActionSpec = { $: {} };
url_rewrite.mojom.UrlRequestRewriteRulesSpec = { $: {} };
url_rewrite.mojom.UrlRequestRuleSpec = { $: {} };
url_rewrite.mojom.UrlRequestRewriteAddHeadersSpec = { $: {} };
url_rewrite.mojom.UrlHeaderSpec = { $: {} };
url_rewrite.mojom.UrlRequestRewriteRemoveHeaderSpec = { $: {} };
url_rewrite.mojom.UrlRequestRewriteSubstituteQueryPatternSpec = { $: {} };
url_rewrite.mojom.UrlRequestRewriteReplaceUrlSpec = { $: {} };
url_rewrite.mojom.UrlRequestRewriteAppendToQuerySpec = { $: {} };
url_rewrite.mojom.UrlRequestRulesReceiver = {};
url_rewrite.mojom.UrlRequestRulesReceiver.$interfaceName = 'url_rewrite.mojom.UrlRequestRulesReceiver';
url_rewrite.mojom.UrlRequestRulesReceiver_OnRulesUpdated_ParamsSpec = { $: {} };

// Enum: UrlRequestAccessPolicy
url_rewrite.mojom.UrlRequestAccessPolicy = {
  kAllow: 0,
  kDeny: 1,
};

// Union: UrlRequestAction
mojo.internal.Union(
    url_rewrite.mojom.UrlRequestActionSpec, 'url_rewrite.mojom.UrlRequestAction', {
      'add_headers': {
        'ordinal': 0,
        'type': url_rewrite.mojom.UrlRequestRewriteAddHeadersSpec.$,
        'nullable': false,
      },
      'remove_header': {
        'ordinal': 1,
        'type': url_rewrite.mojom.UrlRequestRewriteRemoveHeaderSpec.$,
        'nullable': false,
      },
      'substitute_query_pattern': {
        'ordinal': 2,
        'type': url_rewrite.mojom.UrlRequestRewriteSubstituteQueryPatternSpec.$,
        'nullable': false,
      },
      'replace_url': {
        'ordinal': 3,
        'type': url_rewrite.mojom.UrlRequestRewriteReplaceUrlSpec.$,
        'nullable': false,
      },
      'append_to_query': {
        'ordinal': 4,
        'type': url_rewrite.mojom.UrlRequestRewriteAppendToQuerySpec.$,
        'nullable': false,
      },
      'policy': {
        'ordinal': 5,
        'type': url_rewrite.mojom.UrlRequestAccessPolicySpec.$,
        'nullable': false,
      },
    });

// Struct: UrlRequestRewriteRules
mojo.internal.Struct(
    url_rewrite.mojom.UrlRequestRewriteRulesSpec, 'url_rewrite.mojom.UrlRequestRewriteRules', [
      mojo.internal.StructField('rules', 0, 0, mojo.internal.Array(url_rewrite.mojom.UrlRequestRuleSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: UrlRequestRule
mojo.internal.Struct(
    url_rewrite.mojom.UrlRequestRuleSpec, 'url_rewrite.mojom.UrlRequestRule', [
      mojo.internal.StructField('hosts_filter', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('schemes_filter', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('actions', 16, 0, mojo.internal.Array(url_rewrite.mojom.UrlRequestActionSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: UrlRequestRewriteAddHeaders
mojo.internal.Struct(
    url_rewrite.mojom.UrlRequestRewriteAddHeadersSpec, 'url_rewrite.mojom.UrlRequestRewriteAddHeaders', [
      mojo.internal.StructField('headers', 0, 0, mojo.internal.Array(url_rewrite.mojom.UrlHeaderSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: UrlHeader
mojo.internal.Struct(
    url_rewrite.mojom.UrlHeaderSpec, 'url_rewrite.mojom.UrlHeader', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: UrlRequestRewriteRemoveHeader
mojo.internal.Struct(
    url_rewrite.mojom.UrlRequestRewriteRemoveHeaderSpec, 'url_rewrite.mojom.UrlRequestRewriteRemoveHeader', [
      mojo.internal.StructField('query_pattern', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('header_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: UrlRequestRewriteSubstituteQueryPattern
mojo.internal.Struct(
    url_rewrite.mojom.UrlRequestRewriteSubstituteQueryPatternSpec, 'url_rewrite.mojom.UrlRequestRewriteSubstituteQueryPattern', [
      mojo.internal.StructField('pattern', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('substitution', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: UrlRequestRewriteReplaceUrl
mojo.internal.Struct(
    url_rewrite.mojom.UrlRequestRewriteReplaceUrlSpec, 'url_rewrite.mojom.UrlRequestRewriteReplaceUrl', [
      mojo.internal.StructField('url_ends_with', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('new_url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: UrlRequestRewriteAppendToQuery
mojo.internal.Struct(
    url_rewrite.mojom.UrlRequestRewriteAppendToQuerySpec, 'url_rewrite.mojom.UrlRequestRewriteAppendToQuery', [
      mojo.internal.StructField('query', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: UrlRequestRulesReceiver
mojo.internal.Struct(
    url_rewrite.mojom.UrlRequestRulesReceiver_OnRulesUpdated_ParamsSpec, 'url_rewrite.mojom.UrlRequestRulesReceiver_OnRulesUpdated_Params', [
      mojo.internal.StructField('rules', 0, 0, url_rewrite.mojom.UrlRequestRewriteRulesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
  onRulesUpdated(rules) {
    return this.$.onRulesUpdated(rules);
  }
};

url_rewrite.mojom.UrlRequestRulesReceiverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('UrlRequestRulesReceiver', [
      { explicit: null },
    ]);
  }

  onRulesUpdated(rules) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      url_rewrite.mojom.UrlRequestRulesReceiver_OnRulesUpdated_ParamsSpec,
      null,
      [rules],
      false);
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

url_rewrite.mojom.UrlRequestRulesReceiverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('UrlRequestRulesReceiver', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(url_rewrite.mojom.UrlRequestRulesReceiver_OnRulesUpdated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(url_rewrite.mojom.UrlRequestRulesReceiver_OnRulesUpdated_ParamsSpec.$.structSpec);
          const result = this.impl.onRulesUpdated(params.rules);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

url_rewrite.mojom.UrlRequestRulesReceiverReceiver = url_rewrite.mojom.UrlRequestRulesReceiverReceiver;

url_rewrite.mojom.UrlRequestRulesReceiverPtr = url_rewrite.mojom.UrlRequestRulesReceiverRemote;
url_rewrite.mojom.UrlRequestRulesReceiverRequest = url_rewrite.mojom.UrlRequestRulesReceiverPendingReceiver;

