// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/tab_strip_internals/tab_strip_internals.mojom
// Module: tab_strip_internals.mojom

'use strict';

// Module namespace
var tab_strip_internals = tab_strip_internals || {};
tab_strip_internals.mojom = tab_strip_internals.mojom || {};


// Enum: Type
tab_strip_internals.mojom.Type = {
  kTab: 0,
  kCollection: 1,
  kWindow: 2,
  kTabRestoreTab: 3,
  kTabRestoreGroup: 4,
  kTabRestoreWindow: 5,
};

// Enum: Layout
tab_strip_internals.mojom.Layout = {
  kVertical: 0,
  kHorizontal: 1,
};

// Interface: PageHandlerFactory
tab_strip_internals.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

tab_strip_internals.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'tab_strip_internals.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      tab_strip_internals.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new tab_strip_internals.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

tab_strip_internals.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      tab_strip_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$,
      null,
      [page, handler]);
  }

};

tab_strip_internals.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new tab_strip_internals.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'tab_strip_internals.mojom.PageHandlerFactory',
    'context');
  return remote.$;
}};

// ParamsSpec for CreatePageHandler
tab_strip_internals.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_strip_internals.mojom.PageHandlerFactory.CreatePageHandler_Params',
      packedSize: 24,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'handler', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
tab_strip_internals.mojom.PageHandlerFactoryPtr = tab_strip_internals.mojom.PageHandlerFactoryRemote;
tab_strip_internals.mojom.PageHandlerFactoryRequest = tab_strip_internals.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
tab_strip_internals.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

tab_strip_internals.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'tab_strip_internals.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      tab_strip_internals.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new tab_strip_internals.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

tab_strip_internals.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getTabStripData() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      tab_strip_internals.mojom.PageHandler_GetTabStripData_ParamsSpec.$,
      tab_strip_internals.mojom.PageHandler_GetTabStripData_ResponseParamsSpec.$,
      []);
  }

};

tab_strip_internals.mojom.PageHandler.getRemote = function() {
  let remote = new tab_strip_internals.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'tab_strip_internals.mojom.PageHandler',
    'context');
  return remote.$;
}};

// ParamsSpec for GetTabStripData
tab_strip_internals.mojom.PageHandler_GetTabStripData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_strip_internals.mojom.PageHandler.GetTabStripData_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

tab_strip_internals.mojom.PageHandler_GetTabStripData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_strip_internals.mojom.PageHandler.GetTabStripData_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
tab_strip_internals.mojom.PageHandlerPtr = tab_strip_internals.mojom.PageHandlerRemote;
tab_strip_internals.mojom.PageHandlerRequest = tab_strip_internals.mojom.PageHandlerPendingReceiver;


// Interface: Page
tab_strip_internals.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

tab_strip_internals.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'tab_strip_internals.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      tab_strip_internals.mojom.PagePendingReceiver,
      handle);
    this.$ = new tab_strip_internals.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

tab_strip_internals.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onTabStripUpdated(data) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      tab_strip_internals.mojom.Page_OnTabStripUpdated_ParamsSpec.$,
      null,
      [data]);
  }

};

tab_strip_internals.mojom.Page.getRemote = function() {
  let remote = new tab_strip_internals.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'tab_strip_internals.mojom.Page',
    'context');
  return remote.$;
}};

// ParamsSpec for OnTabStripUpdated
tab_strip_internals.mojom.Page_OnTabStripUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tab_strip_internals.mojom.Page.OnTabStripUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
tab_strip_internals.mojom.PagePtr = tab_strip_internals.mojom.PageRemote;
tab_strip_internals.mojom.PageRequest = tab_strip_internals.mojom.PagePendingReceiver;

