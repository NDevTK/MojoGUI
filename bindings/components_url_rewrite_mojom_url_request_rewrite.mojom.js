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

// Interface: UrlRequestRulesReceiver
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
      url_rewrite.mojom.UrlRequestRulesReceiver_OnRulesUpdated_ParamsSpec.$,
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
        { name: 'rules', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
url_rewrite.mojom.UrlRequestRulesReceiverPtr = url_rewrite.mojom.UrlRequestRulesReceiverRemote;
url_rewrite.mojom.UrlRequestRulesReceiverRequest = url_rewrite.mojom.UrlRequestRulesReceiverPendingReceiver;

