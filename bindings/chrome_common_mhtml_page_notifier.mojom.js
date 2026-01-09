// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/mhtml_page_notifier.mojom
// Module: offline_pages.mojom

'use strict';

// Module namespace
var offline_pages = offline_pages || {};
offline_pages.mojom = offline_pages.mojom || {};


// Interface: MhtmlPageNotifier
offline_pages.mojom.MhtmlPageNotifier = {};

offline_pages.mojom.MhtmlPageNotifierPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

offline_pages.mojom.MhtmlPageNotifierRemote = class {
  static get $interfaceName() {
    return 'offline_pages.mojom.MhtmlPageNotifier';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      offline_pages.mojom.MhtmlPageNotifierPendingReceiver,
      handle);
    this.$ = new offline_pages.mojom.MhtmlPageNotifierRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

offline_pages.mojom.MhtmlPageNotifierRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  notifyMhtmlPageLoadAttempted(load_result, url, date) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      offline_pages.mojom.MhtmlPageNotifier_NotifyMhtmlPageLoadAttempted_ParamsSpec,
      null,
      null,
      [load_result, url, date],
      undefined,
      undefined
    );
  }

};

offline_pages.mojom.MhtmlPageNotifier.getRemote = function() {
  let remote = new offline_pages.mojom.MhtmlPageNotifierRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'offline_pages.mojom.MhtmlPageNotifier',
    'context');
  return remote.$;
};

// ParamsSpec for NotifyMhtmlPageLoadAttempted
offline_pages.mojom.MhtmlPageNotifier_NotifyMhtmlPageLoadAttempted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'offline_pages.mojom.MhtmlPageNotifier.NotifyMhtmlPageLoadAttempted_Params',
      packedSize: 32,
      fields: [
        { name: 'load_result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'date', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
offline_pages.mojom.MhtmlPageNotifierPtr = offline_pages.mojom.MhtmlPageNotifierRemote;
offline_pages.mojom.MhtmlPageNotifierRequest = offline_pages.mojom.MhtmlPageNotifierPendingReceiver;

