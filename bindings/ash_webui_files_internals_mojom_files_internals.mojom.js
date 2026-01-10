// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/files_internals/mojom/files_internals.mojom
// Module: ash.mojom.files_internals

'use strict';

// Module namespace
var ash = ash || {};
ash.mojom = ash.mojom || {};
ash.mojom.files_internals = ash.mojom.files_internals || {};

ash.mojom.files_internals.PageHandler = {};
ash.mojom.files_internals.PageHandler.$interfaceName = 'ash.mojom.files_internals.PageHandler';
ash.mojom.files_internals.PageHandler_GetSmbfsEnableVerboseLogging_ParamsSpec = { $: {} };
ash.mojom.files_internals.PageHandler_GetSmbfsEnableVerboseLogging_ResponseParamsSpec = { $: {} };
ash.mojom.files_internals.PageHandler_SetSmbfsEnableVerboseLogging_ParamsSpec = { $: {} };
ash.mojom.files_internals.PageHandler_GetOfficeFileHandlers_ParamsSpec = { $: {} };
ash.mojom.files_internals.PageHandler_GetOfficeFileHandlers_ResponseParamsSpec = { $: {} };
ash.mojom.files_internals.PageHandler_ClearOfficeFileHandlers_ParamsSpec = { $: {} };
ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForDrive_ParamsSpec = { $: {} };
ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForDrive_ResponseParamsSpec = { $: {} };
ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForOneDrive_ParamsSpec = { $: {} };
ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForOneDrive_ResponseParamsSpec = { $: {} };
ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForLocalToDrive_ParamsSpec = { $: {} };
ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForLocalToDrive_ResponseParamsSpec = { $: {} };
ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForLocalToOneDrive_ParamsSpec = { $: {} };
ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForLocalToOneDrive_ResponseParamsSpec = { $: {} };
ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForCloudToDrive_ParamsSpec = { $: {} };
ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForCloudToDrive_ResponseParamsSpec = { $: {} };
ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForCloudToOneDrive_ParamsSpec = { $: {} };
ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForCloudToOneDrive_ResponseParamsSpec = { $: {} };
ash.mojom.files_internals.PageHandler_GetAlwaysMoveOfficeFilesToDrive_ParamsSpec = { $: {} };
ash.mojom.files_internals.PageHandler_GetAlwaysMoveOfficeFilesToDrive_ResponseParamsSpec = { $: {} };
ash.mojom.files_internals.PageHandler_SetAlwaysMoveOfficeFilesToDrive_ParamsSpec = { $: {} };
ash.mojom.files_internals.PageHandler_GetAlwaysMoveOfficeFilesToOneDrive_ParamsSpec = { $: {} };
ash.mojom.files_internals.PageHandler_GetAlwaysMoveOfficeFilesToOneDrive_ResponseParamsSpec = { $: {} };
ash.mojom.files_internals.PageHandler_SetAlwaysMoveOfficeFilesToOneDrive_ParamsSpec = { $: {} };

// Interface: PageHandler
mojo.internal.Struct(
    ash.mojom.files_internals.PageHandler_GetSmbfsEnableVerboseLogging_ParamsSpec, 'ash.mojom.files_internals.PageHandler_GetSmbfsEnableVerboseLogging_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.mojom.files_internals.PageHandler_GetSmbfsEnableVerboseLogging_ResponseParamsSpec, 'ash.mojom.files_internals.PageHandler_GetSmbfsEnableVerboseLogging_ResponseParams', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.mojom.files_internals.PageHandler_SetSmbfsEnableVerboseLogging_ParamsSpec, 'ash.mojom.files_internals.PageHandler_SetSmbfsEnableVerboseLogging_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.mojom.files_internals.PageHandler_GetOfficeFileHandlers_ParamsSpec, 'ash.mojom.files_internals.PageHandler_GetOfficeFileHandlers_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.mojom.files_internals.PageHandler_GetOfficeFileHandlers_ResponseParamsSpec, 'ash.mojom.files_internals.PageHandler_GetOfficeFileHandlers_ResponseParams', [
      mojo.internal.StructField('handlers', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.mojom.files_internals.PageHandler_ClearOfficeFileHandlers_ParamsSpec, 'ash.mojom.files_internals.PageHandler_ClearOfficeFileHandlers_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForDrive_ParamsSpec, 'ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForDrive_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForDrive_ResponseParamsSpec, 'ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForDrive_ResponseParams', [
      mojo.internal.StructField('confirmation_shown', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForOneDrive_ParamsSpec, 'ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForOneDrive_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForOneDrive_ResponseParamsSpec, 'ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForOneDrive_ResponseParams', [
      mojo.internal.StructField('confirmation_shown', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForLocalToDrive_ParamsSpec, 'ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForLocalToDrive_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForLocalToDrive_ResponseParamsSpec, 'ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForLocalToDrive_ResponseParams', [
      mojo.internal.StructField('confirmation_shown', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForLocalToOneDrive_ParamsSpec, 'ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForLocalToOneDrive_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForLocalToOneDrive_ResponseParamsSpec, 'ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForLocalToOneDrive_ResponseParams', [
      mojo.internal.StructField('confirmation_shown', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForCloudToDrive_ParamsSpec, 'ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForCloudToDrive_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForCloudToDrive_ResponseParamsSpec, 'ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForCloudToDrive_ResponseParams', [
      mojo.internal.StructField('confirmation_shown', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForCloudToOneDrive_ParamsSpec, 'ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForCloudToOneDrive_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForCloudToOneDrive_ResponseParamsSpec, 'ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForCloudToOneDrive_ResponseParams', [
      mojo.internal.StructField('confirmation_shown', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.mojom.files_internals.PageHandler_GetAlwaysMoveOfficeFilesToDrive_ParamsSpec, 'ash.mojom.files_internals.PageHandler_GetAlwaysMoveOfficeFilesToDrive_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.mojom.files_internals.PageHandler_GetAlwaysMoveOfficeFilesToDrive_ResponseParamsSpec, 'ash.mojom.files_internals.PageHandler_GetAlwaysMoveOfficeFilesToDrive_ResponseParams', [
      mojo.internal.StructField('always_move', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.mojom.files_internals.PageHandler_SetAlwaysMoveOfficeFilesToDrive_ParamsSpec, 'ash.mojom.files_internals.PageHandler_SetAlwaysMoveOfficeFilesToDrive_Params', [
      mojo.internal.StructField('always_move', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.mojom.files_internals.PageHandler_GetAlwaysMoveOfficeFilesToOneDrive_ParamsSpec, 'ash.mojom.files_internals.PageHandler_GetAlwaysMoveOfficeFilesToOneDrive_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.mojom.files_internals.PageHandler_GetAlwaysMoveOfficeFilesToOneDrive_ResponseParamsSpec, 'ash.mojom.files_internals.PageHandler_GetAlwaysMoveOfficeFilesToOneDrive_ResponseParams', [
      mojo.internal.StructField('always_move', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.mojom.files_internals.PageHandler_SetAlwaysMoveOfficeFilesToOneDrive_ParamsSpec, 'ash.mojom.files_internals.PageHandler_SetAlwaysMoveOfficeFilesToOneDrive_Params', [
      mojo.internal.StructField('always_move', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

ash.mojom.files_internals.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.mojom.files_internals.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.mojom.files_internals.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.mojom.files_internals.PageHandlerPendingReceiver,
      handle);
    this.$ = new ash.mojom.files_internals.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.mojom.files_internals.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getSmbfsEnableVerboseLogging() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.mojom.files_internals.PageHandler_GetSmbfsEnableVerboseLogging_ParamsSpec,
      ash.mojom.files_internals.PageHandler_GetSmbfsEnableVerboseLogging_ResponseParamsSpec,
      [],
      false);
  }

  setSmbfsEnableVerboseLogging(enabled) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.mojom.files_internals.PageHandler_SetSmbfsEnableVerboseLogging_ParamsSpec,
      null,
      [enabled],
      false);
  }

  getOfficeFileHandlers() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.mojom.files_internals.PageHandler_GetOfficeFileHandlers_ParamsSpec,
      ash.mojom.files_internals.PageHandler_GetOfficeFileHandlers_ResponseParamsSpec,
      [],
      false);
  }

  clearOfficeFileHandlers() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.mojom.files_internals.PageHandler_ClearOfficeFileHandlers_ParamsSpec,
      null,
      [],
      false);
  }

  getMoveConfirmationShownForDrive() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForDrive_ParamsSpec,
      ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForDrive_ResponseParamsSpec,
      [],
      false);
  }

  getMoveConfirmationShownForOneDrive() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForOneDrive_ParamsSpec,
      ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForOneDrive_ResponseParamsSpec,
      [],
      false);
  }

  getMoveConfirmationShownForLocalToDrive() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForLocalToDrive_ParamsSpec,
      ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForLocalToDrive_ResponseParamsSpec,
      [],
      false);
  }

  getMoveConfirmationShownForLocalToOneDrive() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForLocalToOneDrive_ParamsSpec,
      ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForLocalToOneDrive_ResponseParamsSpec,
      [],
      false);
  }

  getMoveConfirmationShownForCloudToDrive() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForCloudToDrive_ParamsSpec,
      ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForCloudToDrive_ResponseParamsSpec,
      [],
      false);
  }

  getMoveConfirmationShownForCloudToOneDrive() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForCloudToOneDrive_ParamsSpec,
      ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForCloudToOneDrive_ResponseParamsSpec,
      [],
      false);
  }

  getAlwaysMoveOfficeFilesToDrive() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      ash.mojom.files_internals.PageHandler_GetAlwaysMoveOfficeFilesToDrive_ParamsSpec,
      ash.mojom.files_internals.PageHandler_GetAlwaysMoveOfficeFilesToDrive_ResponseParamsSpec,
      [],
      false);
  }

  setAlwaysMoveOfficeFilesToDrive(always_move) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      ash.mojom.files_internals.PageHandler_SetAlwaysMoveOfficeFilesToDrive_ParamsSpec,
      null,
      [always_move],
      false);
  }

  getAlwaysMoveOfficeFilesToOneDrive() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      ash.mojom.files_internals.PageHandler_GetAlwaysMoveOfficeFilesToOneDrive_ParamsSpec,
      ash.mojom.files_internals.PageHandler_GetAlwaysMoveOfficeFilesToOneDrive_ResponseParamsSpec,
      [],
      false);
  }

  setAlwaysMoveOfficeFilesToOneDrive(always_move) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      ash.mojom.files_internals.PageHandler_SetAlwaysMoveOfficeFilesToOneDrive_ParamsSpec,
      null,
      [always_move],
      false);
  }

};

ash.mojom.files_internals.PageHandler.getRemote = function() {
  let remote = new ash.mojom.files_internals.PageHandlerRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'ash.mojom.files_internals.PageHandler',
    'context');
  return remote.$;
};

ash.mojom.files_internals.PageHandlerPtr = ash.mojom.files_internals.PageHandlerRemote;
ash.mojom.files_internals.PageHandlerRequest = ash.mojom.files_internals.PageHandlerPendingReceiver;

