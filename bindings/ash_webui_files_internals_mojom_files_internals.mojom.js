// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/files_internals/mojom/files_internals.mojom
// Module: ash.mojom.files_internals

'use strict';

// Module namespace
var ash = ash || {};
ash.mojom = ash.mojom || {};
ash.mojom.files_internals = ash.mojom.files_internals || {};


// Interface: PageHandler
ash.mojom.files_internals.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.mojom.files_internals.PageHandler';
  }

  getSmbfsEnableVerboseLogging() {
    // Method: GetSmbfsEnableVerboseLogging
    return new Promise((resolve) => {
      // Call: GetSmbfsEnableVerboseLogging()
      resolve({});
    });
  }

  setSmbfsEnableVerboseLogging(enabled) {
    // Method: SetSmbfsEnableVerboseLogging
    // Call: SetSmbfsEnableVerboseLogging(enabled)
  }

  getOfficeFileHandlers() {
    // Method: GetOfficeFileHandlers
    return new Promise((resolve) => {
      // Call: GetOfficeFileHandlers()
      resolve({});
    });
  }

  clearOfficeFileHandlers() {
    // Method: ClearOfficeFileHandlers
    // Call: ClearOfficeFileHandlers()
  }

  getMoveConfirmationShownForDrive() {
    // Method: GetMoveConfirmationShownForDrive
    return new Promise((resolve) => {
      // Call: GetMoveConfirmationShownForDrive()
      resolve({});
    });
  }

  getMoveConfirmationShownForOneDrive() {
    // Method: GetMoveConfirmationShownForOneDrive
    return new Promise((resolve) => {
      // Call: GetMoveConfirmationShownForOneDrive()
      resolve({});
    });
  }

  getMoveConfirmationShownForLocalToDrive() {
    // Method: GetMoveConfirmationShownForLocalToDrive
    return new Promise((resolve) => {
      // Call: GetMoveConfirmationShownForLocalToDrive()
      resolve({});
    });
  }

  getMoveConfirmationShownForLocalToOneDrive() {
    // Method: GetMoveConfirmationShownForLocalToOneDrive
    return new Promise((resolve) => {
      // Call: GetMoveConfirmationShownForLocalToOneDrive()
      resolve({});
    });
  }

  getMoveConfirmationShownForCloudToDrive() {
    // Method: GetMoveConfirmationShownForCloudToDrive
    return new Promise((resolve) => {
      // Call: GetMoveConfirmationShownForCloudToDrive()
      resolve({});
    });
  }

  getMoveConfirmationShownForCloudToOneDrive() {
    // Method: GetMoveConfirmationShownForCloudToOneDrive
    return new Promise((resolve) => {
      // Call: GetMoveConfirmationShownForCloudToOneDrive()
      resolve({});
    });
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

};

ash.mojom.files_internals.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
