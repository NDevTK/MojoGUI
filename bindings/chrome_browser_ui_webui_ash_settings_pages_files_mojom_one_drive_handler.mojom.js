// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/settings/pages/files/mojom/one_drive_handler.mojom
// Module: ash.settings.one_drive.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.settings = ash.settings || {};
ash.settings.settings.one_drive = ash.settings.settings.one_drive || {};
ash.settings.settings.one_drive.one_drive.mojom = ash.settings.settings.one_drive.one_drive.mojom || {};


// Interface: PageHandlerFactory
ash.settings.settings.one_drive.one_drive.mojom.mojom.PageHandlerFactory = {};

ash.settings.settings.one_drive.one_drive.mojom.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.settings.one_drive.one_drive.mojom.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'ash.settings.one_drive.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.settings.one_drive.one_drive.mojom.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new ash.settings.settings.one_drive.one_drive.mojom.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.settings.one_drive.one_drive.mojom.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(page, handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.settings.one_drive.one_drive.mojom.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [page, handler]);
  }

};

ash.settings.settings.one_drive.one_drive.mojom.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new ash.settings.settings.one_drive.one_drive.mojom.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.one_drive.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreatePageHandler
ash.settings.settings.one_drive.one_drive.mojom.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.one_drive.mojom.PageHandlerFactory.CreatePageHandler_Params',
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
ash.settings.settings.one_drive.one_drive.mojom.mojom.PageHandlerFactoryPtr = ash.settings.settings.one_drive.one_drive.mojom.mojom.PageHandlerFactoryRemote;
ash.settings.settings.one_drive.one_drive.mojom.mojom.PageHandlerFactoryRequest = ash.settings.settings.one_drive.one_drive.mojom.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
ash.settings.settings.one_drive.one_drive.mojom.mojom.PageHandler = {};

ash.settings.settings.one_drive.one_drive.mojom.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.settings.one_drive.one_drive.mojom.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.settings.one_drive.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.settings.one_drive.one_drive.mojom.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new ash.settings.settings.one_drive.one_drive.mojom.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.settings.one_drive.one_drive.mojom.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getUserEmailAddress() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.settings.one_drive.one_drive.mojom.mojom.PageHandler_GetUserEmailAddress_ParamsSpec,
      ash.settings.settings.one_drive.one_drive.mojom.mojom.PageHandler_GetUserEmailAddress_ResponseParamsSpec,
      []);
  }

  connectToOneDrive() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.settings.settings.one_drive.one_drive.mojom.mojom.PageHandler_ConnectToOneDrive_ParamsSpec,
      ash.settings.settings.one_drive.one_drive.mojom.mojom.PageHandler_ConnectToOneDrive_ResponseParamsSpec,
      []);
  }

  disconnectFromOneDrive() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.settings.settings.one_drive.one_drive.mojom.mojom.PageHandler_DisconnectFromOneDrive_ParamsSpec,
      ash.settings.settings.one_drive.one_drive.mojom.mojom.PageHandler_DisconnectFromOneDrive_ResponseParamsSpec,
      []);
  }

  openOneDriveFolder() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.settings.settings.one_drive.one_drive.mojom.mojom.PageHandler_OpenOneDriveFolder_ParamsSpec,
      ash.settings.settings.one_drive.one_drive.mojom.mojom.PageHandler_OpenOneDriveFolder_ResponseParamsSpec,
      []);
  }

};

ash.settings.settings.one_drive.one_drive.mojom.mojom.PageHandler.getRemote = function() {
  let remote = new ash.settings.settings.one_drive.one_drive.mojom.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.one_drive.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for GetUserEmailAddress
ash.settings.settings.one_drive.one_drive.mojom.mojom.PageHandler_GetUserEmailAddress_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.one_drive.mojom.PageHandler.GetUserEmailAddress_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.settings.settings.one_drive.one_drive.mojom.mojom.PageHandler_GetUserEmailAddress_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.one_drive.mojom.PageHandler.GetUserEmailAddress_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'email', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ConnectToOneDrive
ash.settings.settings.one_drive.one_drive.mojom.mojom.PageHandler_ConnectToOneDrive_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.one_drive.mojom.PageHandler.ConnectToOneDrive_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.settings.settings.one_drive.one_drive.mojom.mojom.PageHandler_ConnectToOneDrive_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.one_drive.mojom.PageHandler.ConnectToOneDrive_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DisconnectFromOneDrive
ash.settings.settings.one_drive.one_drive.mojom.mojom.PageHandler_DisconnectFromOneDrive_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.one_drive.mojom.PageHandler.DisconnectFromOneDrive_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.settings.settings.one_drive.one_drive.mojom.mojom.PageHandler_DisconnectFromOneDrive_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.one_drive.mojom.PageHandler.DisconnectFromOneDrive_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OpenOneDriveFolder
ash.settings.settings.one_drive.one_drive.mojom.mojom.PageHandler_OpenOneDriveFolder_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.one_drive.mojom.PageHandler.OpenOneDriveFolder_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.settings.settings.one_drive.one_drive.mojom.mojom.PageHandler_OpenOneDriveFolder_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.one_drive.mojom.PageHandler.OpenOneDriveFolder_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.settings.settings.one_drive.one_drive.mojom.mojom.PageHandlerPtr = ash.settings.settings.one_drive.one_drive.mojom.mojom.PageHandlerRemote;
ash.settings.settings.one_drive.one_drive.mojom.mojom.PageHandlerRequest = ash.settings.settings.one_drive.one_drive.mojom.mojom.PageHandlerPendingReceiver;


// Interface: Page
ash.settings.settings.one_drive.one_drive.mojom.mojom.Page = {};

ash.settings.settings.one_drive.one_drive.mojom.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.settings.settings.one_drive.one_drive.mojom.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'ash.settings.one_drive.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.settings.settings.one_drive.one_drive.mojom.mojom.PagePendingReceiver,
      handle);
    this.$ = new ash.settings.settings.one_drive.one_drive.mojom.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.settings.settings.one_drive.one_drive.mojom.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onODFSMountOrUnmount() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.settings.settings.one_drive.one_drive.mojom.mojom.Page_OnODFSMountOrUnmount_ParamsSpec,
      null,
      []);
  }

  onAllowUserToRemoveODFSChanged(is_allowed) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.settings.settings.one_drive.one_drive.mojom.mojom.Page_OnAllowUserToRemoveODFSChanged_ParamsSpec,
      null,
      [is_allowed]);
  }

};

ash.settings.settings.one_drive.one_drive.mojom.mojom.Page.getRemote = function() {
  let remote = new ash.settings.settings.one_drive.one_drive.mojom.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.settings.one_drive.mojom.Page',
    'context');
  return remote.$;
};

// ParamsSpec for OnODFSMountOrUnmount
ash.settings.settings.one_drive.one_drive.mojom.mojom.Page_OnODFSMountOrUnmount_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.one_drive.mojom.Page.OnODFSMountOrUnmount_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnAllowUserToRemoveODFSChanged
ash.settings.settings.one_drive.one_drive.mojom.mojom.Page_OnAllowUserToRemoveODFSChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.settings.one_drive.mojom.Page.OnAllowUserToRemoveODFSChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'is_allowed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.settings.settings.one_drive.one_drive.mojom.mojom.PagePtr = ash.settings.settings.one_drive.one_drive.mojom.mojom.PageRemote;
ash.settings.settings.one_drive.one_drive.mojom.mojom.PageRequest = ash.settings.settings.one_drive.one_drive.mojom.mojom.PagePendingReceiver;

