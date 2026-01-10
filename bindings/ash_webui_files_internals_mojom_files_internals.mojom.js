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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
    this.ordinalMap.set(9, 9); // Default ordinal 9 -> Index 9
    this.ordinalMap.set(10, 10); // Default ordinal 10 -> Index 10
    this.ordinalMap.set(11, 11); // Default ordinal 11 -> Index 11
    this.ordinalMap.set(12, 12); // Default ordinal 12 -> Index 12
    this.ordinalMap.set(13, 13); // Default ordinal 13 -> Index 13
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.mojom.files_internals.PageHandler_GetSmbfsEnableVerboseLogging_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.getSmbfsEnableVerboseLogging');
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
          const params = decoder.decodeStruct(ash.mojom.files_internals.PageHandler_SetSmbfsEnableVerboseLogging_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setSmbfsEnableVerboseLogging');
          const result = this.impl.setSmbfsEnableVerboseLogging(params.enabled);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.mojom.files_internals.PageHandler_GetOfficeFileHandlers_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.getOfficeFileHandlers');
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
          const params = decoder.decodeStruct(ash.mojom.files_internals.PageHandler_ClearOfficeFileHandlers_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.clearOfficeFileHandlers');
          const result = this.impl.clearOfficeFileHandlers();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForDrive_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.getMoveConfirmationShownForDrive');
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
          const params = decoder.decodeStruct(ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForOneDrive_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.getMoveConfirmationShownForOneDrive');
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
          const params = decoder.decodeStruct(ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForLocalToDrive_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.getMoveConfirmationShownForLocalToDrive');
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
          const params = decoder.decodeStruct(ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForLocalToOneDrive_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.getMoveConfirmationShownForLocalToOneDrive');
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
          const params = decoder.decodeStruct(ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForCloudToDrive_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.getMoveConfirmationShownForCloudToDrive');
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
          const params = decoder.decodeStruct(ash.mojom.files_internals.PageHandler_GetMoveConfirmationShownForCloudToOneDrive_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.getMoveConfirmationShownForCloudToOneDrive');
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
          const params = decoder.decodeStruct(ash.mojom.files_internals.PageHandler_GetAlwaysMoveOfficeFilesToDrive_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.getAlwaysMoveOfficeFilesToDrive');
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
          const params = decoder.decodeStruct(ash.mojom.files_internals.PageHandler_SetAlwaysMoveOfficeFilesToDrive_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setAlwaysMoveOfficeFilesToDrive');
          const result = this.impl.setAlwaysMoveOfficeFilesToDrive(params.always_move);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.mojom.files_internals.PageHandler_GetAlwaysMoveOfficeFilesToOneDrive_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.getAlwaysMoveOfficeFilesToOneDrive');
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
          const params = decoder.decodeStruct(ash.mojom.files_internals.PageHandler_SetAlwaysMoveOfficeFilesToOneDrive_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setAlwaysMoveOfficeFilesToOneDrive');
          const result = this.impl.setAlwaysMoveOfficeFilesToOneDrive(params.always_move);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.mojom.files_internals.PageHandlerReceiver = ash.mojom.files_internals.PageHandlerReceiver;

ash.mojom.files_internals.PageHandlerPtr = ash.mojom.files_internals.PageHandlerRemote;
ash.mojom.files_internals.PageHandlerRequest = ash.mojom.files_internals.PageHandlerPendingReceiver;

