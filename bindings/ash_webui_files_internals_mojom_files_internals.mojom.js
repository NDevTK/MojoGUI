// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/files_internals/mojom/files_internals.mojom
// Module: ash.mojom.files_internals

'use strict';

// Module namespace
var ash = ash || {};
ash.mojom = ash.mojom || {};
ash.mojom.files_internals = ash.mojom.files_internals || {};


// Interface: PageHandler
ash.mojom.files_internals.PageHandler = {};

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
      ash.mojom.files_internals.PageHandler_GetSmbfsEnableVerboseLogging_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  setSmbfsEnableVerboseLogging(enabled) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.mojom.files_internals.PageHandler_SetSmbfsEnableVerboseLogging_ParamsSpec,
      null,
      null,
      [enabled],
      undefined,
      undefined
    );
  }

  getOfficeFileHandlers() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.mojom.files_internals.PageHandler_GetOfficeFileHandlers_ParamsSpec,
      ash.mojom.files_internals.PageHandler_GetOfficeFileHandlers_ResponseParamsSpec,
      ash.mojom.files_internals.PageHandler_GetOfficeFileHandlers_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  clearOfficeFileHandlers() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.mojom.files_internals.PageHandler_ClearOfficeFileHandlers_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  getMoveConfirmationShownForDrive() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForDrive_ParamsSpec,
      ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForDrive_ResponseParamsSpec,
      ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForDrive_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  getMoveConfirmationShownForOneDrive() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForOneDrive_ParamsSpec,
      ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForOneDrive_ResponseParamsSpec,
      ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForOneDrive_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  getMoveConfirmationShownForLocalToDrive() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForLocalToDrive_ParamsSpec,
      ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForLocalToDrive_ResponseParamsSpec,
      ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForLocalToDrive_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  getMoveConfirmationShownForLocalToOneDrive() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForLocalToOneDrive_ParamsSpec,
      ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForLocalToOneDrive_ResponseParamsSpec,
      ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForLocalToOneDrive_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  getMoveConfirmationShownForCloudToDrive() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForCloudToDrive_ParamsSpec,
      ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForCloudToDrive_ResponseParamsSpec,
      ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForCloudToDrive_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  getMoveConfirmationShownForCloudToOneDrive() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForCloudToOneDrive_ParamsSpec,
      ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForCloudToOneDrive_ResponseParamsSpec,
      ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForCloudToOneDrive_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  getAlwaysMoveOfficeFilesToDrive() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      ash.mojom.files_internals.PageHandler_GetAlwaysMoveOfficeFilesToDrive_ParamsSpec,
      ash.mojom.files_internals.PageHandler_GetAlwaysMoveOfficeFilesToDrive_ResponseParamsSpec,
      ash.mojom.files_internals.PageHandler_GetAlwaysMoveOfficeFilesToDrive_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  setAlwaysMoveOfficeFilesToDrive(always_move) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      ash.mojom.files_internals.PageHandler_SetAlwaysMoveOfficeFilesToDrive_ParamsSpec,
      null,
      null,
      [always_move],
      undefined,
      undefined
    );
  }

  getAlwaysMoveOfficeFilesToOneDrive() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      ash.mojom.files_internals.PageHandler_GetAlwaysMoveOfficeFilesToOneDrive_ParamsSpec,
      ash.mojom.files_internals.PageHandler_GetAlwaysMoveOfficeFilesToOneDrive_ResponseParamsSpec,
      ash.mojom.files_internals.PageHandler_GetAlwaysMoveOfficeFilesToOneDrive_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  setAlwaysMoveOfficeFilesToOneDrive(always_move) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      ash.mojom.files_internals.PageHandler_SetAlwaysMoveOfficeFilesToOneDrive_ParamsSpec,
      null,
      null,
      [always_move],
      undefined,
      undefined
    );
  }

};

ash.mojom.files_internals.PageHandler.getRemote = function() {
  let remote = new ash.mojom.files_internals.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.mojom.files_internals.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for GetSmbfsEnableVerboseLogging
ash.mojom.files_internals.PageHandler_GetSmbfsEnableVerboseLogging_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.files_internals.PageHandler.GetSmbfsEnableVerboseLogging_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.mojom.files_internals.PageHandler_GetSmbfsEnableVerboseLogging_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.files_internals.PageHandler.GetSmbfsEnableVerboseLogging_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetSmbfsEnableVerboseLogging
ash.mojom.files_internals.PageHandler_SetSmbfsEnableVerboseLogging_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.files_internals.PageHandler.SetSmbfsEnableVerboseLogging_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetOfficeFileHandlers
ash.mojom.files_internals.PageHandler_GetOfficeFileHandlers_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.files_internals.PageHandler.GetOfficeFileHandlers_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.mojom.files_internals.PageHandler_GetOfficeFileHandlers_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.files_internals.PageHandler.GetOfficeFileHandlers_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'handlers', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ClearOfficeFileHandlers
ash.mojom.files_internals.PageHandler_ClearOfficeFileHandlers_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.files_internals.PageHandler.ClearOfficeFileHandlers_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for GetMoveConfirmationShownForDrive
ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForDrive_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.files_internals.PageHandler.GetMoveConfirmationShownForDrive_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForDrive_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.files_internals.PageHandler.GetMoveConfirmationShownForDrive_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'confirmation_shown', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetMoveConfirmationShownForOneDrive
ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForOneDrive_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.files_internals.PageHandler.GetMoveConfirmationShownForOneDrive_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForOneDrive_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.files_internals.PageHandler.GetMoveConfirmationShownForOneDrive_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'confirmation_shown', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetMoveConfirmationShownForLocalToDrive
ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForLocalToDrive_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.files_internals.PageHandler.GetMoveConfirmationShownForLocalToDrive_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForLocalToDrive_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.files_internals.PageHandler.GetMoveConfirmationShownForLocalToDrive_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'confirmation_shown', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetMoveConfirmationShownForLocalToOneDrive
ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForLocalToOneDrive_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.files_internals.PageHandler.GetMoveConfirmationShownForLocalToOneDrive_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForLocalToOneDrive_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.files_internals.PageHandler.GetMoveConfirmationShownForLocalToOneDrive_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'confirmation_shown', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetMoveConfirmationShownForCloudToDrive
ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForCloudToDrive_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.files_internals.PageHandler.GetMoveConfirmationShownForCloudToDrive_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForCloudToDrive_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.files_internals.PageHandler.GetMoveConfirmationShownForCloudToDrive_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'confirmation_shown', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetMoveConfirmationShownForCloudToOneDrive
ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForCloudToOneDrive_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.files_internals.PageHandler.GetMoveConfirmationShownForCloudToOneDrive_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForCloudToOneDrive_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.files_internals.PageHandler.GetMoveConfirmationShownForCloudToOneDrive_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'confirmation_shown', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetAlwaysMoveOfficeFilesToDrive
ash.mojom.files_internals.PageHandler_GetAlwaysMoveOfficeFilesToDrive_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.files_internals.PageHandler.GetAlwaysMoveOfficeFilesToDrive_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.mojom.files_internals.PageHandler_GetAlwaysMoveOfficeFilesToDrive_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.files_internals.PageHandler.GetAlwaysMoveOfficeFilesToDrive_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'always_move', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetAlwaysMoveOfficeFilesToDrive
ash.mojom.files_internals.PageHandler_SetAlwaysMoveOfficeFilesToDrive_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.files_internals.PageHandler.SetAlwaysMoveOfficeFilesToDrive_Params',
      packedSize: 16,
      fields: [
        { name: 'always_move', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetAlwaysMoveOfficeFilesToOneDrive
ash.mojom.files_internals.PageHandler_GetAlwaysMoveOfficeFilesToOneDrive_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.files_internals.PageHandler.GetAlwaysMoveOfficeFilesToOneDrive_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.mojom.files_internals.PageHandler_GetAlwaysMoveOfficeFilesToOneDrive_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.files_internals.PageHandler.GetAlwaysMoveOfficeFilesToOneDrive_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'always_move', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetAlwaysMoveOfficeFilesToOneDrive
ash.mojom.files_internals.PageHandler_SetAlwaysMoveOfficeFilesToOneDrive_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.files_internals.PageHandler.SetAlwaysMoveOfficeFilesToOneDrive_Params',
      packedSize: 16,
      fields: [
        { name: 'always_move', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.mojom.files_internals.PageHandlerPtr = ash.mojom.files_internals.PageHandlerRemote;
ash.mojom.files_internals.PageHandlerRequest = ash.mojom.files_internals.PageHandlerPendingReceiver;

