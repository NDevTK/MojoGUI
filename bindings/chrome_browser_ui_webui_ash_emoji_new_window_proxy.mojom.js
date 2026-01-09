// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/emoji/new_window_proxy.mojom
// Module: new_window_proxy.mojom

'use strict';

// Module namespace
var new_window_proxy = new_window_proxy || {};
new_window_proxy.mojom = new_window_proxy.mojom || {};


// Interface: NewWindowProxy
new_window_proxy.mojom.NewWindowProxy = {};

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
      new_window_proxy.mojom.NewWindowProxy_OpenUrl_ParamsSpec.$,
      null,
      [url]);
  }

};

new_window_proxy.mojom.NewWindowProxy.getRemote = function() {
  let remote = new new_window_proxy.mojom.NewWindowProxyRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'new_window_proxy.mojom.NewWindowProxy',
    'context');
  return remote.$;
};

// ParamsSpec for OpenUrl
new_window_proxy.mojom.NewWindowProxy_OpenUrl_ParamsSpec = {
  $: {
    structSpec: {
      name: 'new_window_proxy.mojom.NewWindowProxy.OpenUrl_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
new_window_proxy.mojom.NewWindowProxyPtr = new_window_proxy.mojom.NewWindowProxyRemote;
new_window_proxy.mojom.NewWindowProxyRequest = new_window_proxy.mojom.NewWindowProxyPendingReceiver;

