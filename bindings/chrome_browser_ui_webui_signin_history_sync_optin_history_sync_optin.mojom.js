// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/signin/history_sync_optin/history_sync_optin.mojom
// Module: history_sync_optin.mojom

'use strict';

// Module namespace
var history_sync_optin = history_sync_optin || {};
history_sync_optin.mojom = history_sync_optin.mojom || {};


// Enum: LaunchContext
history_sync_optin.mojom.LaunchContext = {
  kWindow: 0,
  kModal: 1,
};

// Enum: ScreenMode
history_sync_optin.mojom.ScreenMode = {
  kPending: 0,
  kRestricted: 1,
  kUnrestricted: 2,
  kDeadlined: 3,
};

// Struct: AccountInfo
history_sync_optin.mojom.AccountInfoSpec = {
  $: {
    structSpec: {
      name: 'history_sync_optin.mojom.AccountInfo',
      packedSize: 16,
      fields: [
        { name: 'account_image_src', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: PageHandlerFactory
history_sync_optin.mojom.PageHandlerFactory = {};

history_sync_optin.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

history_sync_optin.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'history_sync_optin.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      history_sync_optin.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new history_sync_optin.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

history_sync_optin.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createHistorySyncOptinHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      history_sync_optin.mojom.PageHandlerFactory_CreateHistorySyncOptinHandler_ParamsSpec,
      null,
      [page, handler]);
  }

};

history_sync_optin.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new history_sync_optin.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'history_sync_optin.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreateHistorySyncOptinHandler
history_sync_optin.mojom.PageHandlerFactory_CreateHistorySyncOptinHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history_sync_optin.mojom.PageHandlerFactory.CreateHistorySyncOptinHandler_Params',
      packedSize: 16,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'handler', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
history_sync_optin.mojom.PageHandlerFactoryPtr = history_sync_optin.mojom.PageHandlerFactoryRemote;
history_sync_optin.mojom.PageHandlerFactoryRequest = history_sync_optin.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
history_sync_optin.mojom.PageHandler = {};

history_sync_optin.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

history_sync_optin.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'history_sync_optin.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      history_sync_optin.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new history_sync_optin.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

history_sync_optin.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  accept() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      history_sync_optin.mojom.PageHandler_Accept_ParamsSpec,
      null,
      []);
  }

  reject() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      history_sync_optin.mojom.PageHandler_Reject_ParamsSpec,
      null,
      []);
  }

  requestAccountInfo() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      history_sync_optin.mojom.PageHandler_RequestAccountInfo_ParamsSpec,
      null,
      []);
  }

  updateDialogHeight(height) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      history_sync_optin.mojom.PageHandler_UpdateDialogHeight_ParamsSpec,
      null,
      [height]);
  }

};

history_sync_optin.mojom.PageHandler.getRemote = function() {
  let remote = new history_sync_optin.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'history_sync_optin.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for Accept
history_sync_optin.mojom.PageHandler_Accept_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history_sync_optin.mojom.PageHandler.Accept_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Reject
history_sync_optin.mojom.PageHandler_Reject_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history_sync_optin.mojom.PageHandler.Reject_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RequestAccountInfo
history_sync_optin.mojom.PageHandler_RequestAccountInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history_sync_optin.mojom.PageHandler.RequestAccountInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UpdateDialogHeight
history_sync_optin.mojom.PageHandler_UpdateDialogHeight_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history_sync_optin.mojom.PageHandler.UpdateDialogHeight_Params',
      packedSize: 16,
      fields: [
        { name: 'height', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
history_sync_optin.mojom.PageHandlerPtr = history_sync_optin.mojom.PageHandlerRemote;
history_sync_optin.mojom.PageHandlerRequest = history_sync_optin.mojom.PageHandlerPendingReceiver;


// Interface: Page
history_sync_optin.mojom.Page = {};

history_sync_optin.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

history_sync_optin.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'history_sync_optin.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      history_sync_optin.mojom.PagePendingReceiver,
      handle);
    this.$ = new history_sync_optin.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

history_sync_optin.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  sendAccountInfo(account_info) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      history_sync_optin.mojom.Page_SendAccountInfo_ParamsSpec,
      null,
      [account_info]);
  }

  sendScreenMode(screen_mode) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      history_sync_optin.mojom.Page_SendScreenMode_ParamsSpec,
      null,
      [screen_mode]);
  }

};

history_sync_optin.mojom.Page.getRemote = function() {
  let remote = new history_sync_optin.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'history_sync_optin.mojom.Page',
    'context');
  return remote.$;
};

// ParamsSpec for SendAccountInfo
history_sync_optin.mojom.Page_SendAccountInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history_sync_optin.mojom.Page.SendAccountInfo_Params',
      packedSize: 16,
      fields: [
        { name: 'account_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SendScreenMode
history_sync_optin.mojom.Page_SendScreenMode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'history_sync_optin.mojom.Page.SendScreenMode_Params',
      packedSize: 16,
      fields: [
        { name: 'screen_mode', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
history_sync_optin.mojom.PagePtr = history_sync_optin.mojom.PageRemote;
history_sync_optin.mojom.PageRequest = history_sync_optin.mojom.PagePendingReceiver;

