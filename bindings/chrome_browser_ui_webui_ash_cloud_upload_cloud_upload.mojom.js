// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/cloud_upload/cloud_upload.mojom
// Module: ash.cloud_upload.mojom

// Module namespace
var ash = ash || {};
ash.cloud_upload = ash.cloud_upload || {};
ash.cloud_upload.mojom = ash.cloud_upload.mojom || {};

ash.cloud_upload.mojom.UserActionSpec = { $: mojo.internal.Enum() };
ash.cloud_upload.mojom.MetricsRecordedSetupPageSpec = { $: mojo.internal.Enum() };
ash.cloud_upload.mojom.OperationTypeSpec = { $: mojo.internal.Enum() };
ash.cloud_upload.mojom.DialogSpecificArgsSpec = { $: {} };
ash.cloud_upload.mojom.DialogTaskSpec = { $: {} };
ash.cloud_upload.mojom.OneDriveSetupDialogArgsSpec = { $: {} };
ash.cloud_upload.mojom.MoveConfirmationOneDriveDialogArgsSpec = { $: {} };
ash.cloud_upload.mojom.MoveConfirmationGoogleDriveDialogArgsSpec = { $: {} };
ash.cloud_upload.mojom.ConnectToOneDriveDialogArgsSpec = { $: {} };
ash.cloud_upload.mojom.FileHandlerDialogArgsSpec = { $: {} };
ash.cloud_upload.mojom.DialogArgsSpec = { $: {} };
ash.cloud_upload.mojom.PageHandlerFactory = {};
ash.cloud_upload.mojom.PageHandlerFactory.$interfaceName = 'ash.cloud_upload.mojom.PageHandlerFactory';
ash.cloud_upload.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
ash.cloud_upload.mojom.PageHandler = {};
ash.cloud_upload.mojom.PageHandler.$interfaceName = 'ash.cloud_upload.mojom.PageHandler';
ash.cloud_upload.mojom.PageHandler_GetDialogArgs_ParamsSpec = { $: {} };
ash.cloud_upload.mojom.PageHandler_GetDialogArgs_ResponseParamsSpec = { $: {} };
ash.cloud_upload.mojom.PageHandler_IsOfficeWebAppInstalled_ParamsSpec = { $: {} };
ash.cloud_upload.mojom.PageHandler_IsOfficeWebAppInstalled_ResponseParamsSpec = { $: {} };
ash.cloud_upload.mojom.PageHandler_InstallOfficeWebApp_ParamsSpec = { $: {} };
ash.cloud_upload.mojom.PageHandler_InstallOfficeWebApp_ResponseParamsSpec = { $: {} };
ash.cloud_upload.mojom.PageHandler_IsODFSMounted_ParamsSpec = { $: {} };
ash.cloud_upload.mojom.PageHandler_IsODFSMounted_ResponseParamsSpec = { $: {} };
ash.cloud_upload.mojom.PageHandler_SignInToOneDrive_ParamsSpec = { $: {} };
ash.cloud_upload.mojom.PageHandler_SignInToOneDrive_ResponseParamsSpec = { $: {} };
ash.cloud_upload.mojom.PageHandler_RespondWithUserActionAndClose_ParamsSpec = { $: {} };
ash.cloud_upload.mojom.PageHandler_RespondWithLocalTaskAndClose_ParamsSpec = { $: {} };
ash.cloud_upload.mojom.PageHandler_SetOfficeAsDefaultHandler_ParamsSpec = { $: {} };
ash.cloud_upload.mojom.PageHandler_GetAlwaysMoveOfficeFilesToDrive_ParamsSpec = { $: {} };
ash.cloud_upload.mojom.PageHandler_GetAlwaysMoveOfficeFilesToDrive_ResponseParamsSpec = { $: {} };
ash.cloud_upload.mojom.PageHandler_SetAlwaysMoveOfficeFilesToDrive_ParamsSpec = { $: {} };
ash.cloud_upload.mojom.PageHandler_GetAlwaysMoveOfficeFilesToOneDrive_ParamsSpec = { $: {} };
ash.cloud_upload.mojom.PageHandler_GetAlwaysMoveOfficeFilesToOneDrive_ResponseParamsSpec = { $: {} };
ash.cloud_upload.mojom.PageHandler_SetAlwaysMoveOfficeFilesToOneDrive_ParamsSpec = { $: {} };
ash.cloud_upload.mojom.PageHandler_GetOfficeMoveConfirmationShownForDrive_ParamsSpec = { $: {} };
ash.cloud_upload.mojom.PageHandler_GetOfficeMoveConfirmationShownForDrive_ResponseParamsSpec = { $: {} };
ash.cloud_upload.mojom.PageHandler_GetOfficeMoveConfirmationShownForOneDrive_ParamsSpec = { $: {} };
ash.cloud_upload.mojom.PageHandler_GetOfficeMoveConfirmationShownForOneDrive_ResponseParamsSpec = { $: {} };
ash.cloud_upload.mojom.PageHandler_RecordCancel_ParamsSpec = { $: {} };

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

// Union: DialogSpecificArgs
mojo.internal.Union(
    ash.cloud_upload.mojom.DialogSpecificArgsSpec, 'ash.cloud_upload.mojom.DialogSpecificArgs', {
      'file_handler_dialog_args': {
        'ordinal': 0,
        'type': ash.cloud_upload.mojom.FileHandlerDialogArgsSpec.$,
        'nullable': false,
      },
      'one_drive_setup_dialog_args': {
        'ordinal': 1,
        'type': ash.cloud_upload.mojom.OneDriveSetupDialogArgsSpec.$,
        'nullable': false,
      },
      'move_confirmation_one_drive_dialog_args': {
        'ordinal': 2,
        'type': ash.cloud_upload.mojom.MoveConfirmationOneDriveDialogArgsSpec.$,
        'nullable': false,
      },
      'move_confirmation_google_drive_dialog_args': {
        'ordinal': 3,
        'type': ash.cloud_upload.mojom.MoveConfirmationGoogleDriveDialogArgsSpec.$,
        'nullable': false,
      },
      'connect_to_one_drive_dialog_args': {
        'ordinal': 4,
        'type': ash.cloud_upload.mojom.ConnectToOneDriveDialogArgsSpec.$,
        'nullable': false,
      },
    });

// Struct: DialogTask
mojo.internal.Struct(
    ash.cloud_upload.mojom.DialogTaskSpec, 'ash.cloud_upload.mojom.DialogTask', [
      mojo.internal.StructField('title', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('app_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('icon_url', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('position', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: OneDriveSetupDialogArgs
mojo.internal.Struct(
    ash.cloud_upload.mojom.OneDriveSetupDialogArgsSpec, 'ash.cloud_upload.mojom.OneDriveSetupDialogArgs', [
      mojo.internal.StructField('set_office_as_default_handler', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: MoveConfirmationOneDriveDialogArgs
mojo.internal.Struct(
    ash.cloud_upload.mojom.MoveConfirmationOneDriveDialogArgsSpec, 'ash.cloud_upload.mojom.MoveConfirmationOneDriveDialogArgs', [
      mojo.internal.StructField('operation_type', 0, 0, ash.cloud_upload.mojom.OperationTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: MoveConfirmationGoogleDriveDialogArgs
mojo.internal.Struct(
    ash.cloud_upload.mojom.MoveConfirmationGoogleDriveDialogArgsSpec, 'ash.cloud_upload.mojom.MoveConfirmationGoogleDriveDialogArgs', [
      mojo.internal.StructField('operation_type', 0, 0, ash.cloud_upload.mojom.OperationTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ConnectToOneDriveDialogArgs
mojo.internal.Struct(
    ash.cloud_upload.mojom.ConnectToOneDriveDialogArgsSpec, 'ash.cloud_upload.mojom.ConnectToOneDriveDialogArgs', [
    ],
    [[0, 8]]);

// Struct: FileHandlerDialogArgs
mojo.internal.Struct(
    ash.cloud_upload.mojom.FileHandlerDialogArgsSpec, 'ash.cloud_upload.mojom.FileHandlerDialogArgs', [
      mojo.internal.StructField('local_tasks', 0, 0, mojo.internal.Array(ash.cloud_upload.mojom.DialogTaskSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('show_google_workspace_task', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('show_microsoft_office_task', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: DialogArgs
mojo.internal.Struct(
    ash.cloud_upload.mojom.DialogArgsSpec, 'ash.cloud_upload.mojom.DialogArgs', [
      mojo.internal.StructField('file_names', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('dialog_specific_args', 8, 0, ash.cloud_upload.mojom.DialogSpecificArgsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: PageHandlerFactory
mojo.internal.Struct(
    ash.cloud_upload.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'ash.cloud_upload.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('handler', 0, 0, mojo.internal.InterfaceRequest(ash.cloud_upload.mojom.PageHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
  createPageHandler(handler) {
    return this.$.createPageHandler(handler);
  }
};

ash.cloud_upload.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createPageHandler(handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.cloud_upload.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      null,
      [handler],
      false);
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

ash.cloud_upload.mojom.PageHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PageHandlerFactory', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cloud_upload.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cloud_upload.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
          const result = this.impl.createPageHandler(params.handler);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.cloud_upload.mojom.PageHandlerFactoryReceiver = ash.cloud_upload.mojom.PageHandlerFactoryReceiver;

ash.cloud_upload.mojom.PageHandlerFactoryPtr = ash.cloud_upload.mojom.PageHandlerFactoryRemote;
ash.cloud_upload.mojom.PageHandlerFactoryRequest = ash.cloud_upload.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.Struct(
    ash.cloud_upload.mojom.PageHandler_GetDialogArgs_ParamsSpec, 'ash.cloud_upload.mojom.PageHandler_GetDialogArgs_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cloud_upload.mojom.PageHandler_GetDialogArgs_ResponseParamsSpec, 'ash.cloud_upload.mojom.PageHandler_GetDialogArgs_ResponseParams', [
      mojo.internal.StructField('args', 0, 0, ash.cloud_upload.mojom.DialogArgsSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cloud_upload.mojom.PageHandler_IsOfficeWebAppInstalled_ParamsSpec, 'ash.cloud_upload.mojom.PageHandler_IsOfficeWebAppInstalled_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cloud_upload.mojom.PageHandler_IsOfficeWebAppInstalled_ResponseParamsSpec, 'ash.cloud_upload.mojom.PageHandler_IsOfficeWebAppInstalled_ResponseParams', [
      mojo.internal.StructField('installed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cloud_upload.mojom.PageHandler_InstallOfficeWebApp_ParamsSpec, 'ash.cloud_upload.mojom.PageHandler_InstallOfficeWebApp_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cloud_upload.mojom.PageHandler_InstallOfficeWebApp_ResponseParamsSpec, 'ash.cloud_upload.mojom.PageHandler_InstallOfficeWebApp_ResponseParams', [
      mojo.internal.StructField('installed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cloud_upload.mojom.PageHandler_IsODFSMounted_ParamsSpec, 'ash.cloud_upload.mojom.PageHandler_IsODFSMounted_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cloud_upload.mojom.PageHandler_IsODFSMounted_ResponseParamsSpec, 'ash.cloud_upload.mojom.PageHandler_IsODFSMounted_ResponseParams', [
      mojo.internal.StructField('mounted', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cloud_upload.mojom.PageHandler_SignInToOneDrive_ParamsSpec, 'ash.cloud_upload.mojom.PageHandler_SignInToOneDrive_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cloud_upload.mojom.PageHandler_SignInToOneDrive_ResponseParamsSpec, 'ash.cloud_upload.mojom.PageHandler_SignInToOneDrive_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cloud_upload.mojom.PageHandler_RespondWithUserActionAndClose_ParamsSpec, 'ash.cloud_upload.mojom.PageHandler_RespondWithUserActionAndClose_Params', [
      mojo.internal.StructField('response', 0, 0, ash.cloud_upload.mojom.UserActionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cloud_upload.mojom.PageHandler_RespondWithLocalTaskAndClose_ParamsSpec, 'ash.cloud_upload.mojom.PageHandler_RespondWithLocalTaskAndClose_Params', [
      mojo.internal.StructField('task_position', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cloud_upload.mojom.PageHandler_SetOfficeAsDefaultHandler_ParamsSpec, 'ash.cloud_upload.mojom.PageHandler_SetOfficeAsDefaultHandler_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cloud_upload.mojom.PageHandler_GetAlwaysMoveOfficeFilesToDrive_ParamsSpec, 'ash.cloud_upload.mojom.PageHandler_GetAlwaysMoveOfficeFilesToDrive_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cloud_upload.mojom.PageHandler_GetAlwaysMoveOfficeFilesToDrive_ResponseParamsSpec, 'ash.cloud_upload.mojom.PageHandler_GetAlwaysMoveOfficeFilesToDrive_ResponseParams', [
      mojo.internal.StructField('always_move', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cloud_upload.mojom.PageHandler_SetAlwaysMoveOfficeFilesToDrive_ParamsSpec, 'ash.cloud_upload.mojom.PageHandler_SetAlwaysMoveOfficeFilesToDrive_Params', [
      mojo.internal.StructField('always_move', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cloud_upload.mojom.PageHandler_GetAlwaysMoveOfficeFilesToOneDrive_ParamsSpec, 'ash.cloud_upload.mojom.PageHandler_GetAlwaysMoveOfficeFilesToOneDrive_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cloud_upload.mojom.PageHandler_GetAlwaysMoveOfficeFilesToOneDrive_ResponseParamsSpec, 'ash.cloud_upload.mojom.PageHandler_GetAlwaysMoveOfficeFilesToOneDrive_ResponseParams', [
      mojo.internal.StructField('always_move', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cloud_upload.mojom.PageHandler_SetAlwaysMoveOfficeFilesToOneDrive_ParamsSpec, 'ash.cloud_upload.mojom.PageHandler_SetAlwaysMoveOfficeFilesToOneDrive_Params', [
      mojo.internal.StructField('always_move', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cloud_upload.mojom.PageHandler_GetOfficeMoveConfirmationShownForDrive_ParamsSpec, 'ash.cloud_upload.mojom.PageHandler_GetOfficeMoveConfirmationShownForDrive_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cloud_upload.mojom.PageHandler_GetOfficeMoveConfirmationShownForDrive_ResponseParamsSpec, 'ash.cloud_upload.mojom.PageHandler_GetOfficeMoveConfirmationShownForDrive_ResponseParams', [
      mojo.internal.StructField('move_confirmation_shown', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cloud_upload.mojom.PageHandler_GetOfficeMoveConfirmationShownForOneDrive_ParamsSpec, 'ash.cloud_upload.mojom.PageHandler_GetOfficeMoveConfirmationShownForOneDrive_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cloud_upload.mojom.PageHandler_GetOfficeMoveConfirmationShownForOneDrive_ResponseParamsSpec, 'ash.cloud_upload.mojom.PageHandler_GetOfficeMoveConfirmationShownForOneDrive_ResponseParams', [
      mojo.internal.StructField('move_confirmation_shown', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cloud_upload.mojom.PageHandler_RecordCancel_ParamsSpec, 'ash.cloud_upload.mojom.PageHandler_RecordCancel_Params', [
      mojo.internal.StructField('page', 0, 0, ash.cloud_upload.mojom.MetricsRecordedSetupPageSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
  getDialogArgs() {
    return this.$.getDialogArgs();
  }
  isOfficeWebAppInstalled() {
    return this.$.isOfficeWebAppInstalled();
  }
  installOfficeWebApp() {
    return this.$.installOfficeWebApp();
  }
  isODFSMounted() {
    return this.$.isODFSMounted();
  }
  signInToOneDrive() {
    return this.$.signInToOneDrive();
  }
  respondWithUserActionAndClose(response) {
    return this.$.respondWithUserActionAndClose(response);
  }
  respondWithLocalTaskAndClose(task_position) {
    return this.$.respondWithLocalTaskAndClose(task_position);
  }
  setOfficeAsDefaultHandler() {
    return this.$.setOfficeAsDefaultHandler();
  }
  getAlwaysMoveOfficeFilesToDrive() {
    return this.$.getAlwaysMoveOfficeFilesToDrive();
  }
  setAlwaysMoveOfficeFilesToDrive(always_move) {
    return this.$.setAlwaysMoveOfficeFilesToDrive(always_move);
  }
  getAlwaysMoveOfficeFilesToOneDrive() {
    return this.$.getAlwaysMoveOfficeFilesToOneDrive();
  }
  setAlwaysMoveOfficeFilesToOneDrive(always_move) {
    return this.$.setAlwaysMoveOfficeFilesToOneDrive(always_move);
  }
  getOfficeMoveConfirmationShownForDrive() {
    return this.$.getOfficeMoveConfirmationShownForDrive();
  }
  getOfficeMoveConfirmationShownForOneDrive() {
    return this.$.getOfficeMoveConfirmationShownForOneDrive();
  }
  recordCancel(page) {
    return this.$.recordCancel(page);
  }
};

ash.cloud_upload.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getDialogArgs() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.cloud_upload.mojom.PageHandler_GetDialogArgs_ParamsSpec,
      ash.cloud_upload.mojom.PageHandler_GetDialogArgs_ResponseParamsSpec,
      [],
      false);
  }

  isOfficeWebAppInstalled() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.cloud_upload.mojom.PageHandler_IsOfficeWebAppInstalled_ParamsSpec,
      ash.cloud_upload.mojom.PageHandler_IsOfficeWebAppInstalled_ResponseParamsSpec,
      [],
      false);
  }

  installOfficeWebApp() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.cloud_upload.mojom.PageHandler_InstallOfficeWebApp_ParamsSpec,
      ash.cloud_upload.mojom.PageHandler_InstallOfficeWebApp_ResponseParamsSpec,
      [],
      false);
  }

  isODFSMounted() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.cloud_upload.mojom.PageHandler_IsODFSMounted_ParamsSpec,
      ash.cloud_upload.mojom.PageHandler_IsODFSMounted_ResponseParamsSpec,
      [],
      false);
  }

  signInToOneDrive() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      ash.cloud_upload.mojom.PageHandler_SignInToOneDrive_ParamsSpec,
      ash.cloud_upload.mojom.PageHandler_SignInToOneDrive_ResponseParamsSpec,
      [],
      false);
  }

  respondWithUserActionAndClose(response) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      ash.cloud_upload.mojom.PageHandler_RespondWithUserActionAndClose_ParamsSpec,
      null,
      [response],
      false);
  }

  respondWithLocalTaskAndClose(task_position) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      ash.cloud_upload.mojom.PageHandler_RespondWithLocalTaskAndClose_ParamsSpec,
      null,
      [task_position],
      false);
  }

  setOfficeAsDefaultHandler() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      ash.cloud_upload.mojom.PageHandler_SetOfficeAsDefaultHandler_ParamsSpec,
      null,
      [],
      false);
  }

  getAlwaysMoveOfficeFilesToDrive() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      ash.cloud_upload.mojom.PageHandler_GetAlwaysMoveOfficeFilesToDrive_ParamsSpec,
      ash.cloud_upload.mojom.PageHandler_GetAlwaysMoveOfficeFilesToDrive_ResponseParamsSpec,
      [],
      false);
  }

  setAlwaysMoveOfficeFilesToDrive(always_move) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      ash.cloud_upload.mojom.PageHandler_SetAlwaysMoveOfficeFilesToDrive_ParamsSpec,
      null,
      [always_move],
      false);
  }

  getAlwaysMoveOfficeFilesToOneDrive() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      ash.cloud_upload.mojom.PageHandler_GetAlwaysMoveOfficeFilesToOneDrive_ParamsSpec,
      ash.cloud_upload.mojom.PageHandler_GetAlwaysMoveOfficeFilesToOneDrive_ResponseParamsSpec,
      [],
      false);
  }

  setAlwaysMoveOfficeFilesToOneDrive(always_move) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      ash.cloud_upload.mojom.PageHandler_SetAlwaysMoveOfficeFilesToOneDrive_ParamsSpec,
      null,
      [always_move],
      false);
  }

  getOfficeMoveConfirmationShownForDrive() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      ash.cloud_upload.mojom.PageHandler_GetOfficeMoveConfirmationShownForDrive_ParamsSpec,
      ash.cloud_upload.mojom.PageHandler_GetOfficeMoveConfirmationShownForDrive_ResponseParamsSpec,
      [],
      false);
  }

  getOfficeMoveConfirmationShownForOneDrive() {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      ash.cloud_upload.mojom.PageHandler_GetOfficeMoveConfirmationShownForOneDrive_ParamsSpec,
      ash.cloud_upload.mojom.PageHandler_GetOfficeMoveConfirmationShownForOneDrive_ResponseParamsSpec,
      [],
      false);
  }

  recordCancel(page) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      ash.cloud_upload.mojom.PageHandler_RecordCancel_ParamsSpec,
      null,
      [page],
      false);
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

ash.cloud_upload.mojom.PageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cloud_upload.mojom.PageHandler_GetDialogArgs_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cloud_upload.mojom.PageHandler_IsOfficeWebAppInstalled_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cloud_upload.mojom.PageHandler_InstallOfficeWebApp_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cloud_upload.mojom.PageHandler_IsODFSMounted_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cloud_upload.mojom.PageHandler_SignInToOneDrive_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cloud_upload.mojom.PageHandler_RespondWithUserActionAndClose_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cloud_upload.mojom.PageHandler_RespondWithLocalTaskAndClose_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cloud_upload.mojom.PageHandler_SetOfficeAsDefaultHandler_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cloud_upload.mojom.PageHandler_GetAlwaysMoveOfficeFilesToDrive_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cloud_upload.mojom.PageHandler_SetAlwaysMoveOfficeFilesToDrive_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cloud_upload.mojom.PageHandler_GetAlwaysMoveOfficeFilesToOneDrive_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cloud_upload.mojom.PageHandler_SetAlwaysMoveOfficeFilesToOneDrive_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cloud_upload.mojom.PageHandler_GetOfficeMoveConfirmationShownForDrive_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cloud_upload.mojom.PageHandler_GetOfficeMoveConfirmationShownForOneDrive_ParamsSpec);
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cloud_upload.mojom.PageHandler_RecordCancel_ParamsSpec);
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cloud_upload.mojom.PageHandler_GetDialogArgs_ParamsSpec.$.structSpec);
          const result = this.impl.getDialogArgs();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cloud_upload.mojom.PageHandler_GetDialogArgs_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cloud_upload.mojom.PageHandler_IsOfficeWebAppInstalled_ParamsSpec.$.structSpec);
          const result = this.impl.isOfficeWebAppInstalled();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cloud_upload.mojom.PageHandler_IsOfficeWebAppInstalled_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cloud_upload.mojom.PageHandler_InstallOfficeWebApp_ParamsSpec.$.structSpec);
          const result = this.impl.installOfficeWebApp();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cloud_upload.mojom.PageHandler_InstallOfficeWebApp_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cloud_upload.mojom.PageHandler_IsODFSMounted_ParamsSpec.$.structSpec);
          const result = this.impl.isODFSMounted();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cloud_upload.mojom.PageHandler_IsODFSMounted_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cloud_upload.mojom.PageHandler_SignInToOneDrive_ParamsSpec.$.structSpec);
          const result = this.impl.signInToOneDrive();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cloud_upload.mojom.PageHandler_SignInToOneDrive_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cloud_upload.mojom.PageHandler_RespondWithUserActionAndClose_ParamsSpec.$.structSpec);
          const result = this.impl.respondWithUserActionAndClose(params.response);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cloud_upload.mojom.PageHandler_RespondWithLocalTaskAndClose_ParamsSpec.$.structSpec);
          const result = this.impl.respondWithLocalTaskAndClose(params.task_position);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cloud_upload.mojom.PageHandler_SetOfficeAsDefaultHandler_ParamsSpec.$.structSpec);
          const result = this.impl.setOfficeAsDefaultHandler();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cloud_upload.mojom.PageHandler_GetAlwaysMoveOfficeFilesToDrive_ParamsSpec.$.structSpec);
          const result = this.impl.getAlwaysMoveOfficeFilesToDrive();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cloud_upload.mojom.PageHandler_GetAlwaysMoveOfficeFilesToDrive_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cloud_upload.mojom.PageHandler_SetAlwaysMoveOfficeFilesToDrive_ParamsSpec.$.structSpec);
          const result = this.impl.setAlwaysMoveOfficeFilesToDrive(params.always_move);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cloud_upload.mojom.PageHandler_GetAlwaysMoveOfficeFilesToOneDrive_ParamsSpec.$.structSpec);
          const result = this.impl.getAlwaysMoveOfficeFilesToOneDrive();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cloud_upload.mojom.PageHandler_GetAlwaysMoveOfficeFilesToOneDrive_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cloud_upload.mojom.PageHandler_SetAlwaysMoveOfficeFilesToOneDrive_ParamsSpec.$.structSpec);
          const result = this.impl.setAlwaysMoveOfficeFilesToOneDrive(params.always_move);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cloud_upload.mojom.PageHandler_GetOfficeMoveConfirmationShownForDrive_ParamsSpec.$.structSpec);
          const result = this.impl.getOfficeMoveConfirmationShownForDrive();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cloud_upload.mojom.PageHandler_GetOfficeMoveConfirmationShownForDrive_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cloud_upload.mojom.PageHandler_GetOfficeMoveConfirmationShownForOneDrive_ParamsSpec.$.structSpec);
          const result = this.impl.getOfficeMoveConfirmationShownForOneDrive();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cloud_upload.mojom.PageHandler_GetOfficeMoveConfirmationShownForOneDrive_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cloud_upload.mojom.PageHandler_RecordCancel_ParamsSpec.$.structSpec);
          const result = this.impl.recordCancel(params.page);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.cloud_upload.mojom.PageHandlerReceiver = ash.cloud_upload.mojom.PageHandlerReceiver;

ash.cloud_upload.mojom.PageHandlerPtr = ash.cloud_upload.mojom.PageHandlerRemote;
ash.cloud_upload.mojom.PageHandlerRequest = ash.cloud_upload.mojom.PageHandlerPendingReceiver;

