// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/chromebox_for_meetings/public/mojom/meet_browser.mojom
// Module: ash.cfm.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.cfm = ash.cfm || {};
ash.cfm.mojom = ash.cfm.mojom || {};


// Interface: MeetBrowser
ash.cfm.mojom.MeetBrowserPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.cfm.mojom.MeetBrowserRemote = class {
  static get $interfaceName() {
    return 'ash.cfm.mojom.MeetBrowser';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.cfm.mojom.MeetBrowserPendingReceiver,
      handle);
    this.$ = new ash.cfm.mojom.MeetBrowserRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.cfm.mojom.MeetBrowserRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

ash.cfm.mojom.MeetBrowser.getRemote = function() {
  let remote = new ash.cfm.mojom.MeetBrowserRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cfm.mojom.MeetBrowser',
    'context');
  return remote.$;
}};

// Legacy compatibility
ash.cfm.mojom.MeetBrowserPtr = ash.cfm.mojom.MeetBrowserRemote;
ash.cfm.mojom.MeetBrowserRequest = ash.cfm.mojom.MeetBrowserPendingReceiver;

