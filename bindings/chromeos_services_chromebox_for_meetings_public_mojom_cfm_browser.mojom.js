// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/chromebox_for_meetings/public/mojom/cfm_browser.mojom
// Module: chromeos.cfm.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.cfm = chromeos.cfm || {};
chromeos.cfm.mojom = chromeos.cfm.mojom || {};


// Interface: CfmBrowser
chromeos.cfm.mojom.CfmBrowserPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.cfm.mojom.CfmBrowserRemote = class {
  static get $interfaceName() {
    return 'chromeos.cfm.mojom.CfmBrowser';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.cfm.mojom.CfmBrowserPendingReceiver,
      handle);
    this.$ = new chromeos.cfm.mojom.CfmBrowserRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.cfm.mojom.CfmBrowserRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

chromeos.cfm.mojom.CfmBrowser.getRemote = function() {
  let remote = new chromeos.cfm.mojom.CfmBrowserRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.cfm.mojom.CfmBrowser',
    'context');
  return remote.$;
}};

// Legacy compatibility
chromeos.cfm.mojom.CfmBrowserPtr = chromeos.cfm.mojom.CfmBrowserRemote;
chromeos.cfm.mojom.CfmBrowserRequest = chromeos.cfm.mojom.CfmBrowserPendingReceiver;

