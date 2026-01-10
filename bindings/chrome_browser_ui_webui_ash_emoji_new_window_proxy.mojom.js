// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/emoji/new_window_proxy.mojom
// Module: new_window_proxy.mojom

'use strict';

// Module namespace
var new_window_proxy = new_window_proxy || {};
new_window_proxy.mojom = new_window_proxy.mojom || {};
var url = url || {};

new_window_proxy.mojom.NewWindowProxy = {};
new_window_proxy.mojom.NewWindowProxy.$interfaceName = 'new_window_proxy.mojom.NewWindowProxy';
new_window_proxy.mojom.NewWindowProxy_OpenUrl_ParamsSpec = { $: {} };

// Interface: NewWindowProxy
mojo.internal.Struct(
    new_window_proxy.mojom.NewWindowProxy_OpenUrl_ParamsSpec, 'new_window_proxy.mojom.NewWindowProxy_OpenUrl_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

new_window_proxy.mojom.NewWindowProxyPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

new_window_proxy.mojom.NewWindowProxyRemote = class {
  static get $interfaceName() {
    return 'new_window_proxy.mojom.NewWindowProxy';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      new_window_proxy.mojom.NewWindowProxyPendingReceiver,
      handle);
    this.$ = new new_window_proxy.mojom.NewWindowProxyRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

new_window_proxy.mojom.NewWindowProxyRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  openUrl(url) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      new_window_proxy.mojom.NewWindowProxy_OpenUrl_ParamsSpec,
      null,
      [url],
      false);
  }

};

new_window_proxy.mojom.NewWindowProxy.getRemote = function() {
  let remote = new new_window_proxy.mojom.NewWindowProxyRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'new_window_proxy.mojom.NewWindowProxy',
    'context');
  return remote.$;
};

new_window_proxy.mojom.NewWindowProxyPtr = new_window_proxy.mojom.NewWindowProxyRemote;
new_window_proxy.mojom.NewWindowProxyRequest = new_window_proxy.mojom.NewWindowProxyPendingReceiver;

