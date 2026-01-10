// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/loader/content_security_notifier.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var url = url || {};


// Interface: ContentSecurityNotifier
blink.mojom.mojom.ContentSecurityNotifier = {};

blink.mojom.mojom.ContentSecurityNotifierPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.ContentSecurityNotifierRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ContentSecurityNotifier';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.ContentSecurityNotifierPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.ContentSecurityNotifierRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.ContentSecurityNotifierRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  notifyContentWithCertificateErrorsRan() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.ContentSecurityNotifier_NotifyContentWithCertificateErrorsRan_ParamsSpec,
      null,
      []);
  }

  notifyContentWithCertificateErrorsDisplayed() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.ContentSecurityNotifier_NotifyContentWithCertificateErrorsDisplayed_ParamsSpec,
      null,
      []);
  }

  notifyInsecureContentRan(origin, insecure_url) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.mojom.ContentSecurityNotifier_NotifyInsecureContentRan_ParamsSpec,
      null,
      [origin, insecure_url]);
  }

};

blink.mojom.mojom.ContentSecurityNotifier.getRemote = function() {
  let remote = new blink.mojom.mojom.ContentSecurityNotifierRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ContentSecurityNotifier',
    'context');
  return remote.$;
};

// ParamsSpec for NotifyContentWithCertificateErrorsRan
blink.mojom.mojom.ContentSecurityNotifier_NotifyContentWithCertificateErrorsRan_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ContentSecurityNotifier.NotifyContentWithCertificateErrorsRan_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for NotifyContentWithCertificateErrorsDisplayed
blink.mojom.mojom.ContentSecurityNotifier_NotifyContentWithCertificateErrorsDisplayed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ContentSecurityNotifier.NotifyContentWithCertificateErrorsDisplayed_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for NotifyInsecureContentRan
blink.mojom.mojom.ContentSecurityNotifier_NotifyInsecureContentRan_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ContentSecurityNotifier.NotifyInsecureContentRan_Params',
      packedSize: 24,
      fields: [
        { name: 'origin', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'insecure_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.ContentSecurityNotifierPtr = blink.mojom.mojom.ContentSecurityNotifierRemote;
blink.mojom.mojom.ContentSecurityNotifierRequest = blink.mojom.mojom.ContentSecurityNotifierPendingReceiver;

