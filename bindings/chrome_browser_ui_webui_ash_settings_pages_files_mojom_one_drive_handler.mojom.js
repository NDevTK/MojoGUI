// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/settings/pages/files/mojom/one_drive_handler.mojom
// Module: ash.settings.one_drive.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.settings = ash.settings || {};
ash.settings.one_drive = ash.settings.one_drive || {};
ash.settings.one_drive.mojom = ash.settings.one_drive.mojom || {};


// Interface: PageHandlerFactory
ash.settings.one_drive.mojom.PageHandlerFactory = {};

ash.settings.one_drive.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.one_drive.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'ash.settings.one_drive.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.one_drive.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new ash.settings.one_drive.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.one_drive.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.one_drive.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$,
      null,
      [page, handler]);
  }

};

ash.settings.one_drive.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new ash.settings.one_drive.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.one_drive.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreatePageHandler
ash.settings.one_drive.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.one_drive.mojom.PageHandlerFactory.CreatePageHandler_Params',
      packedSize: 24,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'handler', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.settings.one_drive.mojom.PageHandlerFactoryPtr = ash.settings.one_drive.mojom.PageHandlerFactoryRemote;
ash.settings.one_drive.mojom.PageHandlerFactoryRequest = ash.settings.one_drive.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
ash.settings.one_drive.mojom.PageHandler = {};

ash.settings.one_drive.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.one_drive.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.settings.one_drive.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.one_drive.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new ash.settings.one_drive.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.one_drive.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getUserEmailAddress() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.one_drive.mojom.PageHandler_GetUserEmailAddress_ParamsSpec.$,
      ash.settings.one_drive.mojom.PageHandler_GetUserEmailAddress_ResponseParamsSpec.$,
      []);
  }

  connectToOneDrive() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.settings.one_drive.mojom.PageHandler_ConnectToOneDrive_ParamsSpec.$,
      ash.settings.one_drive.mojom.PageHandler_ConnectToOneDrive_ResponseParamsSpec.$,
      []);
  }

  disconnectFromOneDrive() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.settings.one_drive.mojom.PageHandler_DisconnectFromOneDrive_ParamsSpec.$,
      ash.settings.one_drive.mojom.PageHandler_DisconnectFromOneDrive_ResponseParamsSpec.$,
      []);
  }

  openOneDriveFolder() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.settings.one_drive.mojom.PageHandler_OpenOneDriveFolder_ParamsSpec.$,
      ash.settings.one_drive.mojom.PageHandler_OpenOneDriveFolder_ResponseParamsSpec.$,
      []);
  }

};

ash.settings.one_drive.mojom.PageHandler.getRemote = function() {
  let remote = new ash.settings.one_drive.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.one_drive.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for GetUserEmailAddress
ash.settings.one_drive.mojom.PageHandler_GetUserEmailAddress_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.one_drive.mojom.PageHandler.GetUserEmailAddress_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.settings.one_drive.mojom.PageHandler_GetUserEmailAddress_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.one_drive.mojom.PageHandler.GetUserEmailAddress_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'email', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ConnectToOneDrive
ash.settings.one_drive.mojom.PageHandler_ConnectToOneDrive_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.one_drive.mojom.PageHandler.ConnectToOneDrive_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.settings.one_drive.mojom.PageHandler_ConnectToOneDrive_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.one_drive.mojom.PageHandler.ConnectToOneDrive_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DisconnectFromOneDrive
ash.settings.one_drive.mojom.PageHandler_DisconnectFromOneDrive_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.one_drive.mojom.PageHandler.DisconnectFromOneDrive_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.settings.one_drive.mojom.PageHandler_DisconnectFromOneDrive_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.one_drive.mojom.PageHandler.DisconnectFromOneDrive_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OpenOneDriveFolder
ash.settings.one_drive.mojom.PageHandler_OpenOneDriveFolder_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.one_drive.mojom.PageHandler.OpenOneDriveFolder_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.settings.one_drive.mojom.PageHandler_OpenOneDriveFolder_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.one_drive.mojom.PageHandler.OpenOneDriveFolder_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.settings.one_drive.mojom.PageHandlerPtr = ash.settings.one_drive.mojom.PageHandlerRemote;
ash.settings.one_drive.mojom.PageHandlerRequest = ash.settings.one_drive.mojom.PageHandlerPendingReceiver;


// Interface: Page
ash.settings.one_drive.mojom.Page = {};

ash.settings.one_drive.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.one_drive.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'ash.settings.one_drive.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.one_drive.mojom.PagePendingReceiver,
      handle);
    this.$ = new ash.settings.one_drive.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.one_drive.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onODFSMountOrUnmount() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.one_drive.mojom.Page_OnODFSMountOrUnmount_ParamsSpec.$,
      null,
      []);
  }

  onAllowUserToRemoveODFSChanged(is_allowed) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.settings.one_drive.mojom.Page_OnAllowUserToRemoveODFSChanged_ParamsSpec.$,
      null,
      [is_allowed]);
  }

};

ash.settings.one_drive.mojom.Page.getRemote = function() {
  let remote = new ash.settings.one_drive.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.one_drive.mojom.Page',
    'context');
  return remote.$;
};

// ParamsSpec for OnODFSMountOrUnmount
ash.settings.one_drive.mojom.Page_OnODFSMountOrUnmount_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.one_drive.mojom.Page.OnODFSMountOrUnmount_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnAllowUserToRemoveODFSChanged
ash.settings.one_drive.mojom.Page_OnAllowUserToRemoveODFSChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.one_drive.mojom.Page.OnAllowUserToRemoveODFSChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'is_allowed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.settings.one_drive.mojom.PagePtr = ash.settings.one_drive.mojom.PageRemote;
ash.settings.one_drive.mojom.PageRequest = ash.settings.one_drive.mojom.PagePendingReceiver;

