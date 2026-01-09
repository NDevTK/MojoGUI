// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/loader/content_security_notifier.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: ContentSecurityNotifier
blink.mojom.ContentSecurityNotifier = {};

blink.mojom.ContentSecurityNotifierPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.ContentSecurityNotifierRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ContentSecurityNotifier';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.ContentSecurityNotifierPendingReceiver,
      handle);
    this.$ = new blink.mojom.ContentSecurityNotifierRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.ContentSecurityNotifierRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  notifyContentWithCertificateErrorsRan() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.ContentSecurityNotifier_NotifyContentWithCertificateErrorsRan_ParamsSpec.$,
      null,
      []);
  }

  notifyContentWithCertificateErrorsDisplayed() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.ContentSecurityNotifier_NotifyContentWithCertificateErrorsDisplayed_ParamsSpec.$,
      null,
      []);
  }

  notifyInsecureContentRan(origin, insecure_url) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.ContentSecurityNotifier_NotifyInsecureContentRan_ParamsSpec.$,
      null,
      [origin, insecure_url]);
  }

};

blink.mojom.ContentSecurityNotifier.getRemote = function() {
  let remote = new blink.mojom.ContentSecurityNotifierRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ContentSecurityNotifier',
    'context');
  return remote.$;
};

// ParamsSpec for NotifyContentWithCertificateErrorsRan
blink.mojom.ContentSecurityNotifier_NotifyContentWithCertificateErrorsRan_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ContentSecurityNotifier.NotifyContentWithCertificateErrorsRan_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for NotifyContentWithCertificateErrorsDisplayed
blink.mojom.ContentSecurityNotifier_NotifyContentWithCertificateErrorsDisplayed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ContentSecurityNotifier.NotifyContentWithCertificateErrorsDisplayed_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for NotifyInsecureContentRan
blink.mojom.ContentSecurityNotifier_NotifyInsecureContentRan_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ContentSecurityNotifier.NotifyInsecureContentRan_Params',
      packedSize: 24,
      fields: [
        { name: 'origin', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'insecure_url', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.ContentSecurityNotifierPtr = blink.mojom.ContentSecurityNotifierRemote;
blink.mojom.ContentSecurityNotifierRequest = blink.mojom.ContentSecurityNotifierPendingReceiver;

