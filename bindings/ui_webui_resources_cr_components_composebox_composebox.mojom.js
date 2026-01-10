// Auto-generated MojoJS binding
// Source: chromium_src/ui/webui/resources/cr_components/composebox/composebox.mojom
// Module: composebox.mojom

'use strict';

// Module namespace
var composebox = composebox || {};
composebox.mojom = composebox.mojom || {};
var url = url || {};


// Interface: PageHandlerFactory
composebox.mojom.mojom.PageHandlerFactory = {};

composebox.mojom.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

composebox.mojom.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'composebox.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      composebox.mojom.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new composebox.mojom.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

composebox.mojom.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, handler, searchbox_page, searchbox_handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      composebox.mojom.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler, searchbox_page, searchbox_handler]);
  }

};

composebox.mojom.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new composebox.mojom.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'composebox.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreatePageHandler
composebox.mojom.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'composebox.mojom.PageHandlerFactory.CreatePageHandler_Params',
      packedSize: 24,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'handler', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'searchbox_page', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'searchbox_handler', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
composebox.mojom.mojom.PageHandlerFactoryPtr = composebox.mojom.mojom.PageHandlerFactoryRemote;
composebox.mojom.mojom.PageHandlerFactoryRequest = composebox.mojom.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
composebox.mojom.mojom.PageHandler = {};

composebox.mojom.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

composebox.mojom.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'composebox.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      composebox.mojom.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new composebox.mojom.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

composebox.mojom.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  focusChanged(focused) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      composebox.mojom.mojom.PageHandler_FocusChanged_ParamsSpec,
      null,
      [focused]);
  }

  setDeepSearchMode(enabled) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      composebox.mojom.mojom.PageHandler_SetDeepSearchMode_ParamsSpec,
      null,
      [enabled]);
  }

  setCreateImageMode(enabled, image_present) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      composebox.mojom.mojom.PageHandler_SetCreateImageMode_ParamsSpec,
      null,
      [enabled, image_present]);
  }

  handleLensButtonClick() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      composebox.mojom.mojom.PageHandler_HandleLensButtonClick_ParamsSpec,
      null,
      []);
  }

  handleFileUpload(is_image) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      composebox.mojom.mojom.PageHandler_HandleFileUpload_ParamsSpec,
      null,
      [is_image]);
  }

  navigateUrl(url) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      composebox.mojom.mojom.PageHandler_NavigateUrl_ParamsSpec,
      null,
      [url]);
  }

};

composebox.mojom.mojom.PageHandler.getRemote = function() {
  let remote = new composebox.mojom.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'composebox.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for FocusChanged
composebox.mojom.mojom.PageHandler_FocusChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'composebox.mojom.PageHandler.FocusChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'focused', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetDeepSearchMode
composebox.mojom.mojom.PageHandler_SetDeepSearchMode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'composebox.mojom.PageHandler.SetDeepSearchMode_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetCreateImageMode
composebox.mojom.mojom.PageHandler_SetCreateImageMode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'composebox.mojom.PageHandler.SetCreateImageMode_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'image_present', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for HandleLensButtonClick
composebox.mojom.mojom.PageHandler_HandleLensButtonClick_ParamsSpec = {
  $: {
    structSpec: {
      name: 'composebox.mojom.PageHandler.HandleLensButtonClick_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for HandleFileUpload
composebox.mojom.mojom.PageHandler_HandleFileUpload_ParamsSpec = {
  $: {
    structSpec: {
      name: 'composebox.mojom.PageHandler.HandleFileUpload_Params',
      packedSize: 16,
      fields: [
        { name: 'is_image', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for NavigateUrl
composebox.mojom.mojom.PageHandler_NavigateUrl_ParamsSpec = {
  $: {
    structSpec: {
      name: 'composebox.mojom.PageHandler.NavigateUrl_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
composebox.mojom.mojom.PageHandlerPtr = composebox.mojom.mojom.PageHandlerRemote;
composebox.mojom.mojom.PageHandlerRequest = composebox.mojom.mojom.PageHandlerPendingReceiver;


// Interface: Page
composebox.mojom.mojom.Page = {};

composebox.mojom.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

composebox.mojom.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'composebox.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      composebox.mojom.mojom.PagePendingReceiver,
      handle);
    this.$ = new composebox.mojom.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

composebox.mojom.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

composebox.mojom.mojom.Page.getRemote = function() {
  let remote = new composebox.mojom.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'composebox.mojom.Page',
    'context');
  return remote.$;
};

// Legacy compatibility
composebox.mojom.mojom.PagePtr = composebox.mojom.mojom.PageRemote;
composebox.mojom.mojom.PageRequest = composebox.mojom.mojom.PagePendingReceiver;

