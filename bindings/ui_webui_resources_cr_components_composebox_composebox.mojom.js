// Auto-generated MojoJS binding
// Source: chromium_src/ui/webui/resources/cr_components/composebox/composebox.mojom
// Module: composebox.mojom

'use strict';

// Module namespace
var composebox = composebox || {};
composebox.mojom = composebox.mojom || {};


// Interface: PageHandlerFactory
composebox.mojom.PageHandlerFactory = {};

composebox.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

composebox.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'composebox.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      composebox.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new composebox.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

composebox.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, handler, searchbox_page, searchbox_handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      composebox.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      null,
      [page, handler, searchbox_page, searchbox_handler],
      undefined,
      undefined
    );
  }

};

composebox.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new composebox.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'composebox.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreatePageHandler
composebox.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'composebox.mojom.PageHandlerFactory.CreatePageHandler_Params',
      packedSize: 40,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'handler', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'searchbox_page', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'searchbox_handler', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Legacy compatibility
composebox.mojom.PageHandlerFactoryPtr = composebox.mojom.PageHandlerFactoryRemote;
composebox.mojom.PageHandlerFactoryRequest = composebox.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
composebox.mojom.PageHandler = {};

composebox.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

composebox.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'composebox.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      composebox.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new composebox.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

composebox.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  focusChanged(focused) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      composebox.mojom.PageHandler_FocusChanged_ParamsSpec,
      null,
      null,
      [focused],
      undefined,
      undefined
    );
  }

  setDeepSearchMode(enabled) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      composebox.mojom.PageHandler_SetDeepSearchMode_ParamsSpec,
      null,
      null,
      [enabled],
      undefined,
      undefined
    );
  }

  setCreateImageMode(enabled, image_present) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      composebox.mojom.PageHandler_SetCreateImageMode_ParamsSpec,
      null,
      null,
      [enabled, image_present],
      undefined,
      undefined
    );
  }

  handleLensButtonClick() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      composebox.mojom.PageHandler_HandleLensButtonClick_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  handleFileUpload(is_image) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      composebox.mojom.PageHandler_HandleFileUpload_ParamsSpec,
      null,
      null,
      [is_image],
      undefined,
      undefined
    );
  }

  navigateUrl(url) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      composebox.mojom.PageHandler_NavigateUrl_ParamsSpec,
      null,
      null,
      [url],
      undefined,
      undefined
    );
  }

};

composebox.mojom.PageHandler.getRemote = function() {
  let remote = new composebox.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'composebox.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for FocusChanged
composebox.mojom.PageHandler_FocusChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'composebox.mojom.PageHandler.FocusChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'focused', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetDeepSearchMode
composebox.mojom.PageHandler_SetDeepSearchMode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'composebox.mojom.PageHandler.SetDeepSearchMode_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetCreateImageMode
composebox.mojom.PageHandler_SetCreateImageMode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'composebox.mojom.PageHandler.SetCreateImageMode_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'image_present', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for HandleLensButtonClick
composebox.mojom.PageHandler_HandleLensButtonClick_ParamsSpec = {
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
composebox.mojom.PageHandler_HandleFileUpload_ParamsSpec = {
  $: {
    structSpec: {
      name: 'composebox.mojom.PageHandler.HandleFileUpload_Params',
      packedSize: 16,
      fields: [
        { name: 'is_image', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for NavigateUrl
composebox.mojom.PageHandler_NavigateUrl_ParamsSpec = {
  $: {
    structSpec: {
      name: 'composebox.mojom.PageHandler.NavigateUrl_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
composebox.mojom.PageHandlerPtr = composebox.mojom.PageHandlerRemote;
composebox.mojom.PageHandlerRequest = composebox.mojom.PageHandlerPendingReceiver;


// Interface: Page
composebox.mojom.Page = {};

composebox.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

composebox.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'composebox.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      composebox.mojom.PagePendingReceiver,
      handle);
    this.$ = new composebox.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

composebox.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

composebox.mojom.Page.getRemote = function() {
  let remote = new composebox.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'composebox.mojom.Page',
    'context');
  return remote.$;
};

// Legacy compatibility
composebox.mojom.PagePtr = composebox.mojom.PageRemote;
composebox.mojom.PageRequest = composebox.mojom.PagePendingReceiver;

