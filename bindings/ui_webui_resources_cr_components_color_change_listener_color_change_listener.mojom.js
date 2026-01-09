// Auto-generated MojoJS binding
// Source: chromium_src/ui/webui/resources/cr_components/color_change_listener/color_change_listener.mojom
// Module: color_change_listener.mojom

'use strict';

// Module namespace
var color_change_listener = color_change_listener || {};
color_change_listener.mojom = color_change_listener.mojom || {};


// Interface: PageHandler
color_change_listener.mojom.PageHandler = {};

color_change_listener.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

color_change_listener.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'color_change_listener.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      color_change_listener.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new color_change_listener.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

color_change_listener.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setPage(page) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      color_change_listener.mojom.PageHandler_SetPage_ParamsSpec,
      null,
      [page]);
  }

};

color_change_listener.mojom.PageHandler.getRemote = function() {
  let remote = new color_change_listener.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'color_change_listener.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for SetPage
color_change_listener.mojom.PageHandler_SetPage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'color_change_listener.mojom.PageHandler.SetPage_Params',
      packedSize: 16,
      fields: [
        { name: 'page', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
color_change_listener.mojom.PageHandlerPtr = color_change_listener.mojom.PageHandlerRemote;
color_change_listener.mojom.PageHandlerRequest = color_change_listener.mojom.PageHandlerPendingReceiver;


// Interface: Page
color_change_listener.mojom.Page = {};

color_change_listener.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

color_change_listener.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'color_change_listener.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      color_change_listener.mojom.PagePendingReceiver,
      handle);
    this.$ = new color_change_listener.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

color_change_listener.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onColorProviderChanged() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      color_change_listener.mojom.Page_OnColorProviderChanged_ParamsSpec,
      null,
      []);
  }

};

color_change_listener.mojom.Page.getRemote = function() {
  let remote = new color_change_listener.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'color_change_listener.mojom.Page',
    'context');
  return remote.$;
};

// ParamsSpec for OnColorProviderChanged
color_change_listener.mojom.Page_OnColorProviderChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'color_change_listener.mojom.Page.OnColorProviderChanged_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
color_change_listener.mojom.PagePtr = color_change_listener.mojom.PageRemote;
color_change_listener.mojom.PageRequest = color_change_listener.mojom.PagePendingReceiver;

