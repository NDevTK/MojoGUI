// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/signin/signout_confirmation/signout_confirmation.mojom
// Module: signout_confirmation.mojom

'use strict';

// Module namespace
var signout_confirmation = signout_confirmation || {};
signout_confirmation.mojom = signout_confirmation.mojom || {};


// Interface: PageHandlerFactory
signout_confirmation.mojom.PageHandlerFactory = {};

signout_confirmation.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

signout_confirmation.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'signout_confirmation.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      signout_confirmation.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new signout_confirmation.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

signout_confirmation.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createSignoutConfirmationHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      signout_confirmation.mojom.PageHandlerFactory_CreateSignoutConfirmationHandler_ParamsSpec,
      null,
      null,
      [page, handler],
      undefined,
      undefined
    );
  }

};

signout_confirmation.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new signout_confirmation.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'signout_confirmation.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreateSignoutConfirmationHandler
signout_confirmation.mojom.PageHandlerFactory_CreateSignoutConfirmationHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'signout_confirmation.mojom.PageHandlerFactory.CreateSignoutConfirmationHandler_Params',
      packedSize: 24,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'handler', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
signout_confirmation.mojom.PageHandlerFactoryPtr = signout_confirmation.mojom.PageHandlerFactoryRemote;
signout_confirmation.mojom.PageHandlerFactoryRequest = signout_confirmation.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
signout_confirmation.mojom.PageHandler = {};

signout_confirmation.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

signout_confirmation.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'signout_confirmation.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      signout_confirmation.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new signout_confirmation.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

signout_confirmation.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  updateViewHeight(height) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      signout_confirmation.mojom.PageHandler_UpdateViewHeight_ParamsSpec,
      null,
      null,
      [height],
      undefined,
      undefined
    );
  }

  accept(uninstall_account_extensions) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      signout_confirmation.mojom.PageHandler_Accept_ParamsSpec,
      null,
      null,
      [uninstall_account_extensions],
      undefined,
      undefined
    );
  }

  cancel(uninstall_account_extensions) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      signout_confirmation.mojom.PageHandler_Cancel_ParamsSpec,
      null,
      null,
      [uninstall_account_extensions],
      undefined,
      undefined
    );
  }

  performReauth() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      signout_confirmation.mojom.PageHandler_PerformReauth_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  close() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      signout_confirmation.mojom.PageHandler_Close_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

};

signout_confirmation.mojom.PageHandler.getRemote = function() {
  let remote = new signout_confirmation.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'signout_confirmation.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for UpdateViewHeight
signout_confirmation.mojom.PageHandler_UpdateViewHeight_ParamsSpec = {
  $: {
    structSpec: {
      name: 'signout_confirmation.mojom.PageHandler.UpdateViewHeight_Params',
      packedSize: 16,
      fields: [
        { name: 'height', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Accept
signout_confirmation.mojom.PageHandler_Accept_ParamsSpec = {
  $: {
    structSpec: {
      name: 'signout_confirmation.mojom.PageHandler.Accept_Params',
      packedSize: 16,
      fields: [
        { name: 'uninstall_account_extensions', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Cancel
signout_confirmation.mojom.PageHandler_Cancel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'signout_confirmation.mojom.PageHandler.Cancel_Params',
      packedSize: 16,
      fields: [
        { name: 'uninstall_account_extensions', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for PerformReauth
signout_confirmation.mojom.PageHandler_PerformReauth_ParamsSpec = {
  $: {
    structSpec: {
      name: 'signout_confirmation.mojom.PageHandler.PerformReauth_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for Close
signout_confirmation.mojom.PageHandler_Close_ParamsSpec = {
  $: {
    structSpec: {
      name: 'signout_confirmation.mojom.PageHandler.Close_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
signout_confirmation.mojom.PageHandlerPtr = signout_confirmation.mojom.PageHandlerRemote;
signout_confirmation.mojom.PageHandlerRequest = signout_confirmation.mojom.PageHandlerPendingReceiver;


// Interface: Page
signout_confirmation.mojom.Page = {};

signout_confirmation.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

signout_confirmation.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'signout_confirmation.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      signout_confirmation.mojom.PagePendingReceiver,
      handle);
    this.$ = new signout_confirmation.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

signout_confirmation.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  sendSignoutConfirmationData(data) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      signout_confirmation.mojom.Page_SendSignoutConfirmationData_ParamsSpec,
      null,
      null,
      [data],
      undefined,
      undefined
    );
  }

};

signout_confirmation.mojom.Page.getRemote = function() {
  let remote = new signout_confirmation.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'signout_confirmation.mojom.Page',
    'context');
  return remote.$;
};

// ParamsSpec for SendSignoutConfirmationData
signout_confirmation.mojom.Page_SendSignoutConfirmationData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'signout_confirmation.mojom.Page.SendSignoutConfirmationData_Params',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
signout_confirmation.mojom.PagePtr = signout_confirmation.mojom.PageRemote;
signout_confirmation.mojom.PageRequest = signout_confirmation.mojom.PagePendingReceiver;

