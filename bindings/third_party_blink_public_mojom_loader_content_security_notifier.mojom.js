// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/loader/content_security_notifier.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: ContentSecurityNotifier
blink.mojom.ContentSecurityNotifierPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.ContentSecurityNotifier';
  }

  content(script) {
    // Method: content
    // Call: content(script)
  }

  notifyContentWithCertificateErrorsRan() {
    // Method: NotifyContentWithCertificateErrorsRan
    // Call: NotifyContentWithCertificateErrorsRan()
  }

  content(image) {
    // Method: content
    // Call: content(image)
  }

  notifyContentWithCertificateErrorsDisplayed() {
    // Method: NotifyContentWithCertificateErrorsDisplayed
    // Call: NotifyContentWithCertificateErrorsDisplayed()
  }

  content(script) {
    // Method: content
    // Call: content(script)
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  notifyInsecureContentRan(origin, insecure_url) {
    // Method: NotifyInsecureContentRan
    // Call: NotifyInsecureContentRan(origin, insecure_url)
  }

};

blink.mojom.ContentSecurityNotifierRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
