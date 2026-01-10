// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/signin/signout_confirmation/signout_confirmation.mojom
// Module: signout_confirmation.mojom

'use strict';

// Module namespace
var signout_confirmation = signout_confirmation || {};
signout_confirmation.mojom = signout_confirmation.mojom || {};


// Struct: ExtensionInfo
signout_confirmation.mojom.mojom.ExtensionInfoSpec = {
  $: {
    structSpec: {
      name: 'signout_confirmation.mojom.ExtensionInfo',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'icon_url', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: SignoutConfirmationData
signout_confirmation.mojom.mojom.SignoutConfirmationDataSpec = {
  $: {
    structSpec: {
      name: 'signout_confirmation.mojom.SignoutConfirmationData',
      packedSize: 64,
      fields: [
        { name: 'dialog_title', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'dialog_subtitle', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'accept_button_label', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'cancel_button_label', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'verify_button_label', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'account_extensions', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array(signout_confirmation.mojom.ExtensionInfoSpec, false), nullable: false, minVersion: 0 },
        { name: 'has_unsynced_data', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

// Interface: PageHandlerFactory
signout_confirmation.mojom.mojom.PageHandlerFactory = {};

signout_confirmation.mojom.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

signout_confirmation.mojom.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'signout_confirmation.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      signout_confirmation.mojom.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new signout_confirmation.mojom.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

signout_confirmation.mojom.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createSignoutConfirmationHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      signout_confirmation.mojom.mojom.PageHandlerFactory_CreateSignoutConfirmationHandler_ParamsSpec,
      null,
      [page, handler]);
  }

};

signout_confirmation.mojom.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new signout_confirmation.mojom.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'signout_confirmation.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreateSignoutConfirmationHandler
signout_confirmation.mojom.mojom.PageHandlerFactory_CreateSignoutConfirmationHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'signout_confirmation.mojom.PageHandlerFactory.CreateSignoutConfirmationHandler_Params',
      packedSize: 16,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'handler', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
signout_confirmation.mojom.mojom.PageHandlerFactoryPtr = signout_confirmation.mojom.mojom.PageHandlerFactoryRemote;
signout_confirmation.mojom.mojom.PageHandlerFactoryRequest = signout_confirmation.mojom.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
signout_confirmation.mojom.mojom.PageHandler = {};

signout_confirmation.mojom.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

signout_confirmation.mojom.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'signout_confirmation.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      signout_confirmation.mojom.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new signout_confirmation.mojom.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

signout_confirmation.mojom.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  updateViewHeight(height) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      signout_confirmation.mojom.mojom.PageHandler_UpdateViewHeight_ParamsSpec,
      null,
      [height]);
  }

  accept(uninstall_account_extensions) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      signout_confirmation.mojom.mojom.PageHandler_Accept_ParamsSpec,
      null,
      [uninstall_account_extensions]);
  }

  cancel(uninstall_account_extensions) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      signout_confirmation.mojom.mojom.PageHandler_Cancel_ParamsSpec,
      null,
      [uninstall_account_extensions]);
  }

  performReauth() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      signout_confirmation.mojom.mojom.PageHandler_PerformReauth_ParamsSpec,
      null,
      []);
  }

  close() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      signout_confirmation.mojom.mojom.PageHandler_Close_ParamsSpec,
      null,
      []);
  }

};

signout_confirmation.mojom.mojom.PageHandler.getRemote = function() {
  let remote = new signout_confirmation.mojom.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'signout_confirmation.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for UpdateViewHeight
signout_confirmation.mojom.mojom.PageHandler_UpdateViewHeight_ParamsSpec = {
  $: {
    structSpec: {
      name: 'signout_confirmation.mojom.PageHandler.UpdateViewHeight_Params',
      packedSize: 16,
      fields: [
        { name: 'height', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Accept
signout_confirmation.mojom.mojom.PageHandler_Accept_ParamsSpec = {
  $: {
    structSpec: {
      name: 'signout_confirmation.mojom.PageHandler.Accept_Params',
      packedSize: 16,
      fields: [
        { name: 'uninstall_account_extensions', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Cancel
signout_confirmation.mojom.mojom.PageHandler_Cancel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'signout_confirmation.mojom.PageHandler.Cancel_Params',
      packedSize: 16,
      fields: [
        { name: 'uninstall_account_extensions', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for PerformReauth
signout_confirmation.mojom.mojom.PageHandler_PerformReauth_ParamsSpec = {
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
signout_confirmation.mojom.mojom.PageHandler_Close_ParamsSpec = {
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
signout_confirmation.mojom.mojom.PageHandlerPtr = signout_confirmation.mojom.mojom.PageHandlerRemote;
signout_confirmation.mojom.mojom.PageHandlerRequest = signout_confirmation.mojom.mojom.PageHandlerPendingReceiver;


// Interface: Page
signout_confirmation.mojom.mojom.Page = {};

signout_confirmation.mojom.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

signout_confirmation.mojom.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'signout_confirmation.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      signout_confirmation.mojom.mojom.PagePendingReceiver,
      handle);
    this.$ = new signout_confirmation.mojom.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

signout_confirmation.mojom.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  sendSignoutConfirmationData(data) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      signout_confirmation.mojom.mojom.Page_SendSignoutConfirmationData_ParamsSpec,
      null,
      [data]);
  }

};

signout_confirmation.mojom.mojom.Page.getRemote = function() {
  let remote = new signout_confirmation.mojom.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'signout_confirmation.mojom.Page',
    'context');
  return remote.$;
};

// ParamsSpec for SendSignoutConfirmationData
signout_confirmation.mojom.mojom.Page_SendSignoutConfirmationData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'signout_confirmation.mojom.Page.SendSignoutConfirmationData_Params',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: signout_confirmation.mojom.SignoutConfirmationDataSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
signout_confirmation.mojom.mojom.PagePtr = signout_confirmation.mojom.mojom.PageRemote;
signout_confirmation.mojom.mojom.PageRequest = signout_confirmation.mojom.mojom.PagePendingReceiver;

