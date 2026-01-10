// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/mhtml_page_notifier.mojom
// Module: offline_pages.mojom

'use strict';

// Module namespace
var offline_pages = offline_pages || {};
offline_pages.mojom = offline_pages.mojom || {};
var mojo_base = mojo_base || {};
var blink = blink || {};
var url = url || {};

offline_pages.mojom.MhtmlPageNotifier = {};
offline_pages.mojom.MhtmlPageNotifier.$interfaceName = 'offline_pages.mojom.MhtmlPageNotifier';
offline_pages.mojom.MhtmlPageNotifier_NotifyMhtmlPageLoadAttempted_ParamsSpec = { $: {} };

// Interface: MhtmlPageNotifier
mojo.internal.Struct(
    offline_pages.mojom.MhtmlPageNotifier_NotifyMhtmlPageLoadAttempted_ParamsSpec, 'offline_pages.mojom.MhtmlPageNotifier_NotifyMhtmlPageLoadAttempted_Params', [
      mojo.internal.StructField('load_result', 0, 0, blink.mojom.MHTMLLoadResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('date', 16, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

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
      [load_result, url, date],
      false);
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

offline_pages.mojom.MhtmlPageNotifierReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = offline_pages.mojom.MhtmlPageNotifier_NotifyMhtmlPageLoadAttempted_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.notifyMhtmlPageLoadAttempted');
          const result = this.impl.notifyMhtmlPageLoadAttempted(params.load_result, params.url, params.date);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

offline_pages.mojom.MhtmlPageNotifierReceiver = offline_pages.mojom.MhtmlPageNotifierReceiver;

offline_pages.mojom.MhtmlPageNotifierPtr = offline_pages.mojom.MhtmlPageNotifierRemote;
offline_pages.mojom.MhtmlPageNotifierRequest = offline_pages.mojom.MhtmlPageNotifierPendingReceiver;

