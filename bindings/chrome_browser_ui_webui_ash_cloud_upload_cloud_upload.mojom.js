// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/cloud_upload/cloud_upload.mojom
// Module: ash.cloud_upload.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.cloud_upload = ash.cloud_upload || {};
ash.cloud_upload.mojom = ash.cloud_upload.mojom || {};


// Enum: UserAction
ash.cloud_upload.mojom.UserAction = {
  kCancel: 0,
  kCancelGoogleDrive: 1,
  kCancelOneDrive: 2,
  kSetUpOneDrive: 3,
  kUploadToGoogleDrive: 4,
  kUploadToOneDrive: 5,
  kConfirmOrUploadToGoogleDrive: 6,
  kConfirmOrUploadToOneDrive: 7,
};

// Enum: MetricsRecordedSetupPage
ash.cloud_upload.mojom.MetricsRecordedSetupPage = {
  kFileHandlerPage: 0,
  kMoveConfirmationOneDrive: 1,
  kMoveConfirmationGoogleDrive: 2,
  kOneDriveSetupWelcome: 3,
  kOneDriveSetupPWAInstall: 4,
  kOneDriveSetupODFSMount: 5,
  kOneDriveSetupComplete: 6,
};

// Enum: OperationType
ash.cloud_upload.mojom.OperationType = {
  kMove: 0,
  kCopy: 1,
};

// Interface: PageHandlerFactory
ash.cloud_upload.mojom.PageHandlerFactory = {};

ash.cloud_upload.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.cloud_upload.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'ash.cloud_upload.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.cloud_upload.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new ash.cloud_upload.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.cloud_upload.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createPageHandler(handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.cloud_upload.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [handler]);
  }

};

ash.cloud_upload.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new ash.cloud_upload.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cloud_upload.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreatePageHandler
ash.cloud_upload.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cloud_upload.mojom.PageHandlerFactory.CreatePageHandler_Params',
      packedSize: 16,
      fields: [
        { name: 'handler', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.cloud_upload.mojom.PageHandlerFactoryPtr = ash.cloud_upload.mojom.PageHandlerFactoryRemote;
ash.cloud_upload.mojom.PageHandlerFactoryRequest = ash.cloud_upload.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
ash.cloud_upload.mojom.PageHandler = {};

ash.cloud_upload.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.cloud_upload.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.cloud_upload.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.cloud_upload.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new ash.cloud_upload.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.cloud_upload.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getDialogArgs() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.cloud_upload.mojom.PageHandler_GetDialogArgs_ParamsSpec,
      ash.cloud_upload.mojom.PageHandler_GetDialogArgs_ResponseParamsSpec,
      []);
  }

  isOfficeWebAppInstalled() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.cloud_upload.mojom.PageHandler_IsOfficeWebAppInstalled_ParamsSpec,
      ash.cloud_upload.mojom.PageHandler_IsOfficeWebAppInstalled_ResponseParamsSpec,
      []);
  }

  installOfficeWebApp() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.cloud_upload.mojom.PageHandler_InstallOfficeWebApp_ParamsSpec,
      ash.cloud_upload.mojom.PageHandler_InstallOfficeWebApp_ResponseParamsSpec,
      []);
  }

  isODFSMounted() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.cloud_upload.mojom.PageHandler_IsODFSMounted_ParamsSpec,
      ash.cloud_upload.mojom.PageHandler_IsODFSMounted_ResponseParamsSpec,
      []);
  }

  signInToOneDrive() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.cloud_upload.mojom.PageHandler_SignInToOneDrive_ParamsSpec,
      ash.cloud_upload.mojom.PageHandler_SignInToOneDrive_ResponseParamsSpec,
      []);
  }

  respondWithUserActionAndClose(response) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.cloud_upload.mojom.PageHandler_RespondWithUserActionAndClose_ParamsSpec,
      null,
      [response]);
  }

  respondWithLocalTaskAndClose(task_position) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.cloud_upload.mojom.PageHandler_RespondWithLocalTaskAndClose_ParamsSpec,
      null,
      [task_position]);
  }

  setOfficeAsDefaultHandler() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.cloud_upload.mojom.PageHandler_SetOfficeAsDefaultHandler_ParamsSpec,
      null,
      []);
  }

  getAlwaysMoveOfficeFilesToDrive() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.cloud_upload.mojom.PageHandler_GetAlwaysMoveOfficeFilesToDrive_ParamsSpec,
      ash.cloud_upload.mojom.PageHandler_GetAlwaysMoveOfficeFilesToDrive_ResponseParamsSpec,
      []);
  }

  setAlwaysMoveOfficeFilesToDrive(always_move) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      ash.cloud_upload.mojom.PageHandler_SetAlwaysMoveOfficeFilesToDrive_ParamsSpec,
      null,
      [always_move]);
  }

  getAlwaysMoveOfficeFilesToOneDrive() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      ash.cloud_upload.mojom.PageHandler_GetAlwaysMoveOfficeFilesToOneDrive_ParamsSpec,
      ash.cloud_upload.mojom.PageHandler_GetAlwaysMoveOfficeFilesToOneDrive_ResponseParamsSpec,
      []);
  }

  setAlwaysMoveOfficeFilesToOneDrive(always_move) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      ash.cloud_upload.mojom.PageHandler_SetAlwaysMoveOfficeFilesToOneDrive_ParamsSpec,
      null,
      [always_move]);
  }

  getOfficeMoveConfirmationShownForDrive() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      ash.cloud_upload.mojom.PageHandler_GetOfficeMoveConfirmationShownForDrive_ParamsSpec,
      ash.cloud_upload.mojom.PageHandler_GetOfficeMoveConfirmationShownForDrive_ResponseParamsSpec,
      []);
  }

  getOfficeMoveConfirmationShownForOneDrive() {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      ash.cloud_upload.mojom.PageHandler_GetOfficeMoveConfirmationShownForOneDrive_ParamsSpec,
      ash.cloud_upload.mojom.PageHandler_GetOfficeMoveConfirmationShownForOneDrive_ResponseParamsSpec,
      []);
  }

  recordCancel(page) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      ash.cloud_upload.mojom.PageHandler_RecordCancel_ParamsSpec,
      null,
      [page]);
  }

};

ash.cloud_upload.mojom.PageHandler.getRemote = function() {
  let remote = new ash.cloud_upload.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cloud_upload.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for GetDialogArgs
ash.cloud_upload.mojom.PageHandler_GetDialogArgs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cloud_upload.mojom.PageHandler.GetDialogArgs_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.cloud_upload.mojom.PageHandler_GetDialogArgs_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cloud_upload.mojom.PageHandler.GetDialogArgs_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'args', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for IsOfficeWebAppInstalled
ash.cloud_upload.mojom.PageHandler_IsOfficeWebAppInstalled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cloud_upload.mojom.PageHandler.IsOfficeWebAppInstalled_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.cloud_upload.mojom.PageHandler_IsOfficeWebAppInstalled_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cloud_upload.mojom.PageHandler.IsOfficeWebAppInstalled_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'installed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for InstallOfficeWebApp
ash.cloud_upload.mojom.PageHandler_InstallOfficeWebApp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cloud_upload.mojom.PageHandler.InstallOfficeWebApp_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.cloud_upload.mojom.PageHandler_InstallOfficeWebApp_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cloud_upload.mojom.PageHandler.InstallOfficeWebApp_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'installed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for IsODFSMounted
ash.cloud_upload.mojom.PageHandler_IsODFSMounted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cloud_upload.mojom.PageHandler.IsODFSMounted_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.cloud_upload.mojom.PageHandler_IsODFSMounted_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cloud_upload.mojom.PageHandler.IsODFSMounted_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'mounted', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SignInToOneDrive
ash.cloud_upload.mojom.PageHandler_SignInToOneDrive_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cloud_upload.mojom.PageHandler.SignInToOneDrive_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.cloud_upload.mojom.PageHandler_SignInToOneDrive_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cloud_upload.mojom.PageHandler.SignInToOneDrive_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RespondWithUserActionAndClose
ash.cloud_upload.mojom.PageHandler_RespondWithUserActionAndClose_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cloud_upload.mojom.PageHandler.RespondWithUserActionAndClose_Params',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RespondWithLocalTaskAndClose
ash.cloud_upload.mojom.PageHandler_RespondWithLocalTaskAndClose_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cloud_upload.mojom.PageHandler.RespondWithLocalTaskAndClose_Params',
      packedSize: 16,
      fields: [
        { name: 'task_position', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetOfficeAsDefaultHandler
ash.cloud_upload.mojom.PageHandler_SetOfficeAsDefaultHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cloud_upload.mojom.PageHandler.SetOfficeAsDefaultHandler_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetAlwaysMoveOfficeFilesToDrive
ash.cloud_upload.mojom.PageHandler_GetAlwaysMoveOfficeFilesToDrive_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cloud_upload.mojom.PageHandler.GetAlwaysMoveOfficeFilesToDrive_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.cloud_upload.mojom.PageHandler_GetAlwaysMoveOfficeFilesToDrive_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cloud_upload.mojom.PageHandler.GetAlwaysMoveOfficeFilesToDrive_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'always_move', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetAlwaysMoveOfficeFilesToDrive
ash.cloud_upload.mojom.PageHandler_SetAlwaysMoveOfficeFilesToDrive_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cloud_upload.mojom.PageHandler.SetAlwaysMoveOfficeFilesToDrive_Params',
      packedSize: 16,
      fields: [
        { name: 'always_move', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetAlwaysMoveOfficeFilesToOneDrive
ash.cloud_upload.mojom.PageHandler_GetAlwaysMoveOfficeFilesToOneDrive_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cloud_upload.mojom.PageHandler.GetAlwaysMoveOfficeFilesToOneDrive_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.cloud_upload.mojom.PageHandler_GetAlwaysMoveOfficeFilesToOneDrive_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cloud_upload.mojom.PageHandler.GetAlwaysMoveOfficeFilesToOneDrive_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'always_move', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetAlwaysMoveOfficeFilesToOneDrive
ash.cloud_upload.mojom.PageHandler_SetAlwaysMoveOfficeFilesToOneDrive_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cloud_upload.mojom.PageHandler.SetAlwaysMoveOfficeFilesToOneDrive_Params',
      packedSize: 16,
      fields: [
        { name: 'always_move', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetOfficeMoveConfirmationShownForDrive
ash.cloud_upload.mojom.PageHandler_GetOfficeMoveConfirmationShownForDrive_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cloud_upload.mojom.PageHandler.GetOfficeMoveConfirmationShownForDrive_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.cloud_upload.mojom.PageHandler_GetOfficeMoveConfirmationShownForDrive_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cloud_upload.mojom.PageHandler.GetOfficeMoveConfirmationShownForDrive_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'move_confirmation_shown', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetOfficeMoveConfirmationShownForOneDrive
ash.cloud_upload.mojom.PageHandler_GetOfficeMoveConfirmationShownForOneDrive_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cloud_upload.mojom.PageHandler.GetOfficeMoveConfirmationShownForOneDrive_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.cloud_upload.mojom.PageHandler_GetOfficeMoveConfirmationShownForOneDrive_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cloud_upload.mojom.PageHandler.GetOfficeMoveConfirmationShownForOneDrive_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'move_confirmation_shown', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RecordCancel
ash.cloud_upload.mojom.PageHandler_RecordCancel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cloud_upload.mojom.PageHandler.RecordCancel_Params',
      packedSize: 16,
      fields: [
        { name: 'page', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.cloud_upload.mojom.PageHandlerPtr = ash.cloud_upload.mojom.PageHandlerRemote;
ash.cloud_upload.mojom.PageHandlerRequest = ash.cloud_upload.mojom.PageHandlerPendingReceiver;

