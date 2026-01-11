// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/files_internals/mojom/files_internals.mojom
// Module: ash.mojom.files_internals

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
  getSmbfsEnableVerboseLogging() {
    return this.$.getSmbfsEnableVerboseLogging();
  }
  setSmbfsEnableVerboseLogging(enabled) {
    return this.$.setSmbfsEnableVerboseLogging(enabled);
  }
  getOfficeFileHandlers() {
    return this.$.getOfficeFileHandlers();
  }
  clearOfficeFileHandlers() {
    return this.$.clearOfficeFileHandlers();
  }
  getMoveConfirmationShownForDrive() {
    return this.$.getMoveConfirmationShownForDrive();
  }
  getMoveConfirmationShownForOneDrive() {
    return this.$.getMoveConfirmationShownForOneDrive();
  }
  getMoveConfirmationShownForLocalToDrive() {
    return this.$.getMoveConfirmationShownForLocalToDrive();
  }
  getMoveConfirmationShownForLocalToOneDrive() {
    return this.$.getMoveConfirmationShownForLocalToOneDrive();
  }
  getMoveConfirmationShownForCloudToDrive() {
    return this.$.getMoveConfirmationShownForCloudToDrive();
  }
  getMoveConfirmationShownForCloudToOneDrive() {
    return this.$.getMoveConfirmationShownForCloudToOneDrive();
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
};

ash.mojom.files_internals.PageHandlerRemoteCallHandler = class {
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
    ]);
  }

  getSmbfsEnableVerboseLogging() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.mojom.files_internals.PageHandler_GetSmbfsEnableVerboseLogging_ParamsSpec,
      ash.mojom.files_internals.PageHandler_GetSmbfsEnableVerboseLogging_ResponseParamsSpec,
      [],
      false);
  }

  setSmbfsEnableVerboseLogging(enabled) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.mojom.files_internals.PageHandler_SetSmbfsEnableVerboseLogging_ParamsSpec,
      null,
      [enabled],
      false);
  }

  getOfficeFileHandlers() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.mojom.files_internals.PageHandler_GetOfficeFileHandlers_ParamsSpec,
      ash.mojom.files_internals.PageHandler_GetOfficeFileHandlers_ResponseParamsSpec,
      [],
      false);
  }

  clearOfficeFileHandlers() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.mojom.files_internals.PageHandler_ClearOfficeFileHandlers_ParamsSpec,
      null,
      [],
      false);
  }

  getMoveConfirmationShownForDrive() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForDrive_ParamsSpec,
      ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForDrive_ResponseParamsSpec,
      [],
      false);
  }

  getMoveConfirmationShownForOneDrive() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForOneDrive_ParamsSpec,
      ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForOneDrive_ResponseParamsSpec,
      [],
      false);
  }

  getMoveConfirmationShownForLocalToDrive() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForLocalToDrive_ParamsSpec,
      ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForLocalToDrive_ResponseParamsSpec,
      [],
      false);
  }

  getMoveConfirmationShownForLocalToOneDrive() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForLocalToOneDrive_ParamsSpec,
      ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForLocalToOneDrive_ResponseParamsSpec,
      [],
      false);
  }

  getMoveConfirmationShownForCloudToDrive() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForCloudToDrive_ParamsSpec,
      ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForCloudToDrive_ResponseParamsSpec,
      [],
      false);
  }

  getMoveConfirmationShownForCloudToOneDrive() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForCloudToOneDrive_ParamsSpec,
      ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForCloudToOneDrive_ResponseParamsSpec,
      [],
      false);
  }

  getAlwaysMoveOfficeFilesToDrive() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      ash.mojom.files_internals.PageHandler_GetAlwaysMoveOfficeFilesToDrive_ParamsSpec,
      ash.mojom.files_internals.PageHandler_GetAlwaysMoveOfficeFilesToDrive_ResponseParamsSpec,
      [],
      false);
  }

  setAlwaysMoveOfficeFilesToDrive(always_move) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      ash.mojom.files_internals.PageHandler_SetAlwaysMoveOfficeFilesToDrive_ParamsSpec,
      null,
      [always_move],
      false);
  }

  getAlwaysMoveOfficeFilesToOneDrive() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      ash.mojom.files_internals.PageHandler_GetAlwaysMoveOfficeFilesToOneDrive_ParamsSpec,
      ash.mojom.files_internals.PageHandler_GetAlwaysMoveOfficeFilesToOneDrive_ResponseParamsSpec,
      [],
      false);
  }

  setAlwaysMoveOfficeFilesToOneDrive(always_move) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      ash.mojom.files_internals.PageHandler_SetAlwaysMoveOfficeFilesToOneDrive_ParamsSpec,
      null,
      [always_move],
      false);
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

ash.mojom.files_internals.PageHandlerReceiver = class {
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
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.mojom.files_internals.PageHandler_GetSmbfsEnableVerboseLogging_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.mojom.files_internals.PageHandler_SetSmbfsEnableVerboseLogging_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.mojom.files_internals.PageHandler_GetOfficeFileHandlers_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.mojom.files_internals.PageHandler_ClearOfficeFileHandlers_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForDrive_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForOneDrive_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForLocalToDrive_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForLocalToOneDrive_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForCloudToDrive_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForCloudToOneDrive_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.mojom.files_internals.PageHandler_GetAlwaysMoveOfficeFilesToDrive_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.mojom.files_internals.PageHandler_SetAlwaysMoveOfficeFilesToDrive_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.mojom.files_internals.PageHandler_GetAlwaysMoveOfficeFilesToOneDrive_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.mojom.files_internals.PageHandler_SetAlwaysMoveOfficeFilesToOneDrive_ParamsSpec);
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.mojom.files_internals.PageHandler_GetSmbfsEnableVerboseLogging_ParamsSpec.$.structSpec);
          const result = this.impl.getSmbfsEnableVerboseLogging();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.mojom.files_internals.PageHandler_GetSmbfsEnableVerboseLogging_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.mojom.files_internals.PageHandler_SetSmbfsEnableVerboseLogging_ParamsSpec.$.structSpec);
          const result = this.impl.setSmbfsEnableVerboseLogging(params.enabled);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.mojom.files_internals.PageHandler_GetOfficeFileHandlers_ParamsSpec.$.structSpec);
          const result = this.impl.getOfficeFileHandlers();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.mojom.files_internals.PageHandler_GetOfficeFileHandlers_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.mojom.files_internals.PageHandler_ClearOfficeFileHandlers_ParamsSpec.$.structSpec);
          const result = this.impl.clearOfficeFileHandlers();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForDrive_ParamsSpec.$.structSpec);
          const result = this.impl.getMoveConfirmationShownForDrive();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForDrive_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForOneDrive_ParamsSpec.$.structSpec);
          const result = this.impl.getMoveConfirmationShownForOneDrive();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForOneDrive_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForLocalToDrive_ParamsSpec.$.structSpec);
          const result = this.impl.getMoveConfirmationShownForLocalToDrive();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForLocalToDrive_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForLocalToOneDrive_ParamsSpec.$.structSpec);
          const result = this.impl.getMoveConfirmationShownForLocalToOneDrive();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForLocalToOneDrive_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForCloudToDrive_ParamsSpec.$.structSpec);
          const result = this.impl.getMoveConfirmationShownForCloudToDrive();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForCloudToDrive_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForCloudToOneDrive_ParamsSpec.$.structSpec);
          const result = this.impl.getMoveConfirmationShownForCloudToOneDrive();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForCloudToOneDrive_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.mojom.files_internals.PageHandler_GetAlwaysMoveOfficeFilesToDrive_ParamsSpec.$.structSpec);
          const result = this.impl.getAlwaysMoveOfficeFilesToDrive();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.mojom.files_internals.PageHandler_GetAlwaysMoveOfficeFilesToDrive_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.mojom.files_internals.PageHandler_SetAlwaysMoveOfficeFilesToDrive_ParamsSpec.$.structSpec);
          const result = this.impl.setAlwaysMoveOfficeFilesToDrive(params.always_move);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.mojom.files_internals.PageHandler_GetAlwaysMoveOfficeFilesToOneDrive_ParamsSpec.$.structSpec);
          const result = this.impl.getAlwaysMoveOfficeFilesToOneDrive();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.mojom.files_internals.PageHandler_GetAlwaysMoveOfficeFilesToOneDrive_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.mojom.files_internals.PageHandler_SetAlwaysMoveOfficeFilesToOneDrive_ParamsSpec.$.structSpec);
          const result = this.impl.setAlwaysMoveOfficeFilesToOneDrive(params.always_move);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.mojom.files_internals.PageHandlerReceiver = ash.mojom.files_internals.PageHandlerReceiver;

ash.mojom.files_internals.PageHandlerPtr = ash.mojom.files_internals.PageHandlerRemote;
ash.mojom.files_internals.PageHandlerRequest = ash.mojom.files_internals.PageHandlerPendingReceiver;

