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

// Struct: DialogTask
ash.cloud_upload.mojom.DialogTask = class {
  constructor(values = {}) {
    this.icon_url = values.icon_url !== undefined ? values.icon_url : 0;
  }
};

// Struct: OneDriveSetupDialogArgs
ash.cloud_upload.mojom.OneDriveSetupDialogArgs = class {
  constructor(values = {}) {
    this.set_office_as_default_handler = values.set_office_as_default_handler !== undefined ? values.set_office_as_default_handler : false;
  }
};

// Struct: MoveConfirmationOneDriveDialogArgs
ash.cloud_upload.mojom.MoveConfirmationOneDriveDialogArgs = class {
  constructor(values = {}) {
    this.operation_type = values.operation_type !== undefined ? values.operation_type : null;
  }
};

// Struct: MoveConfirmationGoogleDriveDialogArgs
ash.cloud_upload.mojom.MoveConfirmationGoogleDriveDialogArgs = class {
  constructor(values = {}) {
    this.operation_type = values.operation_type !== undefined ? values.operation_type : null;
  }
};

// Struct: ConnectToOneDriveDialogArgs
ash.cloud_upload.mojom.ConnectToOneDriveDialogArgs = class {
  constructor(values = {}) {
  }
};

// Struct: FileHandlerDialogArgs
ash.cloud_upload.mojom.FileHandlerDialogArgs = class {
  constructor(values = {}) {
    this.show_microsoft_office_task = values.show_microsoft_office_task !== undefined ? values.show_microsoft_office_task : false;
  }
};

// Struct: DialogArgs
ash.cloud_upload.mojom.DialogArgs = class {
  constructor(values = {}) {
    this.dialog_specific_args = values.dialog_specific_args !== undefined ? values.dialog_specific_args : "";
  }
};

// Interface: PageHandlerFactory
ash.cloud_upload.mojom.PageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.cloud_upload.mojom.PageHandlerFactory';
  }

  createPageHandler(handler) {
    // Method: CreatePageHandler
    // Call: CreatePageHandler(handler)
  }

};

ash.cloud_upload.mojom.PageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PageHandler
ash.cloud_upload.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.cloud_upload.mojom.PageHandler';
  }

  getDialogArgs() {
    // Method: GetDialogArgs
    return new Promise((resolve) => {
      // Call: GetDialogArgs()
      resolve({});
    });
  }

  isOfficeWebAppInstalled() {
    // Method: IsOfficeWebAppInstalled
    return new Promise((resolve) => {
      // Call: IsOfficeWebAppInstalled()
      resolve({});
    });
  }

  installOfficeWebApp() {
    // Method: InstallOfficeWebApp
    return new Promise((resolve) => {
      // Call: InstallOfficeWebApp()
      resolve({});
    });
  }

  isODFSMounted() {
    // Method: IsODFSMounted
    return new Promise((resolve) => {
      // Call: IsODFSMounted()
      resolve({});
    });
  }

  signInToOneDrive() {
    // Method: SignInToOneDrive
    return new Promise((resolve) => {
      // Call: SignInToOneDrive()
      resolve({});
    });
  }

  respondWithUserActionAndClose(response) {
    // Method: RespondWithUserActionAndClose
    // Call: RespondWithUserActionAndClose(response)
  }

  respondWithLocalTaskAndClose(task_position) {
    // Method: RespondWithLocalTaskAndClose
    // Call: RespondWithLocalTaskAndClose(task_position)
  }

  setOfficeAsDefaultHandler() {
    // Method: SetOfficeAsDefaultHandler
    // Call: SetOfficeAsDefaultHandler()
  }

  getAlwaysMoveOfficeFilesToDrive() {
    // Method: GetAlwaysMoveOfficeFilesToDrive
    return new Promise((resolve) => {
      // Call: GetAlwaysMoveOfficeFilesToDrive()
      resolve({});
    });
  }

  setAlwaysMoveOfficeFilesToDrive(always_move) {
    // Method: SetAlwaysMoveOfficeFilesToDrive
    // Call: SetAlwaysMoveOfficeFilesToDrive(always_move)
  }

  getAlwaysMoveOfficeFilesToOneDrive() {
    // Method: GetAlwaysMoveOfficeFilesToOneDrive
    return new Promise((resolve) => {
      // Call: GetAlwaysMoveOfficeFilesToOneDrive()
      resolve({});
    });
  }

  setAlwaysMoveOfficeFilesToOneDrive(always_move) {
    // Method: SetAlwaysMoveOfficeFilesToOneDrive
    // Call: SetAlwaysMoveOfficeFilesToOneDrive(always_move)
  }

  getOfficeMoveConfirmationShownForDrive() {
    // Method: GetOfficeMoveConfirmationShownForDrive
    return new Promise((resolve) => {
      // Call: GetOfficeMoveConfirmationShownForDrive()
      resolve({});
    });
  }

  getOfficeMoveConfirmationShownForOneDrive() {
    // Method: GetOfficeMoveConfirmationShownForOneDrive
    return new Promise((resolve) => {
      // Call: GetOfficeMoveConfirmationShownForOneDrive()
      resolve({});
    });
  }

  recordCancel(page) {
    // Method: RecordCancel
    // Call: RecordCancel(page)
  }

};

ash.cloud_upload.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
