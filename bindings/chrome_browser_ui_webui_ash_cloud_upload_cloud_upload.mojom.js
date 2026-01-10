// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/cloud_upload/cloud_upload.mojom
// Module: ash.cloud_upload.mojom

'use strict';
(function() {
  const SHA256 = (s) => {
    const K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xD5A79147, 0x06CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585,0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2];
    const h = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
    const m = new TextEncoder().encode(s);
    const l = m.length;
    const b = new Uint32Array(((l + 8) >> 6) + 1 << 4);
    for (let i = 0; i < l; i++) b[i >> 2] |= m[i] << (24 - (i & 3) * 8);
    b[l >> 2] |= 0x80 << (24 - (l & 3) * 8);
    b[b.length - 1] = l * 8;
    for (let i = 0; i < b.length; i += 16) {
      let [a1, b1, c1, d1, e1, f1, g1, h1] = h;
      const w = new Uint32Array(64);
      for (let j = 0; j < 64; j++) {
        if (j < 16) w[j] = b[i + j];
        else {
          const s0 = ((w[j-15]>>>7)|(w[j-15]<<25))^((w[j-15]>>>18)|(w[j-15]<<14))^(w[j-15]>>>3);
          const s1 = ((w[j-2]>>>17)|(w[j-2]<<15))^((w[j-2]>>>19)|(w[j-2]<<13))^(w[j-2]>>>10);
          w[j] = (w[j-16]+s0+w[j-7]+s1)|0;
        }
        const t1 = (h1 + (((e1>>>6)|(e1<<26))^((e1>>>11)|(e1<<21))^((e1>>>25)|(e1<<7))) + ((e1&f1)^((~e1)&g1)) + K[j] + w[j])|0;
        const t2 = ((((a1>>>2)|(a1<<30))^((a1>>>13)|(a1<<19))^((a1>>>22)|(a1<<10))) + ((a1&b1)^(a1&c1)^(b1&c1)))|0;
        h1 = g1; g1 = f1; f1 = e1; e1 = (d1 + t1) | 0; d1 = c1; c1 = b1; b1 = a1; a1 = (t1 + t2) | 0;
      }
      h[0] = (h[0] + a1) | 0; h[1] = (h[1] + b1) | 0; h[2] = (h[2] + c1) | 0; h[3] = (h[3] + d1) | 0;
      h[4] = (h[4] + e1) | 0; h[5] = (h[5] + f1) | 0; h[6] = (h[6] + g1) | 0; h[7] = (h[7] + h1) | 0;
    }
    return h[0];
  };
  window.mojoScrambler = window.mojoScrambler || {
    getOrdinals: (ifaceName, methodSpecs) => {
      const params = new URLSearchParams(window.location.search);
      const forceNoScramble = params.get('scramble') === '0' || window.mojoNoScramble;
      
      const seen = new Set();
      methodSpecs.forEach(ms => { if (ms.explicit !== null) seen.add(ms.explicit); });
      let i = 0;
      return methodSpecs.map((ms, idx) => {
        if (ms.explicit !== null) return ms.explicit;
        if (forceNoScramble) return idx;

        const p = window.mojoVersion.split('.');
        const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
        console.log('[MojoScrambler] Derived Salt:', JSON.stringify(salt));
        
        while (true) {
          i++;
          const h0 = SHA256(salt + ifaceName.split('.').pop() + i);
          const ord = (((h0 & 0xFF) << 24) | ((h0 & 0xFF00) << 8) | ((h0 & 0xFF0000) >> 8) | (h0 >>> 24)) & 0x7fffffff;
          if (!seen.has(ord)) {
            seen.add(ord);
            return ord;
          }
        }
      });
    }
  };
})();

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
      mojo.internal.StructField('handler', 0, 0, mojo.internal.InterfaceRequest(ash.cloud_upload.mojom.PageHandlerSpec), null, false, 0, undefined),
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
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
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
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: CreatePageHandler
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cloud_upload.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreatePageHandler (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cloud_upload.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createPageHandler');
          const result = this.impl.createPageHandler(params.handler);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
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
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
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
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: GetDialogArgs
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cloud_upload.mojom.PageHandler_GetDialogArgs_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetDialogArgs (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: IsOfficeWebAppInstalled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cloud_upload.mojom.PageHandler_IsOfficeWebAppInstalled_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsOfficeWebAppInstalled (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: InstallOfficeWebApp
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cloud_upload.mojom.PageHandler_InstallOfficeWebApp_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InstallOfficeWebApp (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: IsODFSMounted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cloud_upload.mojom.PageHandler_IsODFSMounted_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsODFSMounted (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SignInToOneDrive
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cloud_upload.mojom.PageHandler_SignInToOneDrive_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SignInToOneDrive (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: RespondWithUserActionAndClose
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cloud_upload.mojom.PageHandler_RespondWithUserActionAndClose_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RespondWithUserActionAndClose (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: RespondWithLocalTaskAndClose
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cloud_upload.mojom.PageHandler_RespondWithLocalTaskAndClose_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RespondWithLocalTaskAndClose (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: SetOfficeAsDefaultHandler
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cloud_upload.mojom.PageHandler_SetOfficeAsDefaultHandler_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetOfficeAsDefaultHandler (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: GetAlwaysMoveOfficeFilesToDrive
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cloud_upload.mojom.PageHandler_GetAlwaysMoveOfficeFilesToDrive_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAlwaysMoveOfficeFilesToDrive (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: SetAlwaysMoveOfficeFilesToDrive
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cloud_upload.mojom.PageHandler_SetAlwaysMoveOfficeFilesToDrive_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetAlwaysMoveOfficeFilesToDrive (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: GetAlwaysMoveOfficeFilesToOneDrive
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cloud_upload.mojom.PageHandler_GetAlwaysMoveOfficeFilesToOneDrive_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAlwaysMoveOfficeFilesToOneDrive (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: SetAlwaysMoveOfficeFilesToOneDrive
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cloud_upload.mojom.PageHandler_SetAlwaysMoveOfficeFilesToOneDrive_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetAlwaysMoveOfficeFilesToOneDrive (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: GetOfficeMoveConfirmationShownForDrive
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cloud_upload.mojom.PageHandler_GetOfficeMoveConfirmationShownForDrive_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetOfficeMoveConfirmationShownForDrive (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: GetOfficeMoveConfirmationShownForOneDrive
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cloud_upload.mojom.PageHandler_GetOfficeMoveConfirmationShownForOneDrive_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetOfficeMoveConfirmationShownForOneDrive (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: RecordCancel
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.cloud_upload.mojom.PageHandler_RecordCancel_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordCancel (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cloud_upload.mojom.PageHandler_GetDialogArgs_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getDialogArgs');
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
          console.log('[GeneratedReceiver] Calling impl.isOfficeWebAppInstalled');
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
          console.log('[GeneratedReceiver] Calling impl.installOfficeWebApp');
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
          console.log('[GeneratedReceiver] Calling impl.isODFSMounted');
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
          console.log('[GeneratedReceiver] Calling impl.signInToOneDrive');
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
          console.log('[GeneratedReceiver] Calling impl.respondWithUserActionAndClose');
          const result = this.impl.respondWithUserActionAndClose(params.response);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cloud_upload.mojom.PageHandler_RespondWithLocalTaskAndClose_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.respondWithLocalTaskAndClose');
          const result = this.impl.respondWithLocalTaskAndClose(params.task_position);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cloud_upload.mojom.PageHandler_SetOfficeAsDefaultHandler_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setOfficeAsDefaultHandler');
          const result = this.impl.setOfficeAsDefaultHandler();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cloud_upload.mojom.PageHandler_GetAlwaysMoveOfficeFilesToDrive_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getAlwaysMoveOfficeFilesToDrive');
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
          console.log('[GeneratedReceiver] Calling impl.setAlwaysMoveOfficeFilesToDrive');
          const result = this.impl.setAlwaysMoveOfficeFilesToDrive(params.always_move);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cloud_upload.mojom.PageHandler_GetAlwaysMoveOfficeFilesToOneDrive_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getAlwaysMoveOfficeFilesToOneDrive');
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
          console.log('[GeneratedReceiver] Calling impl.setAlwaysMoveOfficeFilesToOneDrive');
          const result = this.impl.setAlwaysMoveOfficeFilesToOneDrive(params.always_move);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.cloud_upload.mojom.PageHandler_GetOfficeMoveConfirmationShownForDrive_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getOfficeMoveConfirmationShownForDrive');
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
          console.log('[GeneratedReceiver] Calling impl.getOfficeMoveConfirmationShownForOneDrive');
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
          console.log('[GeneratedReceiver] Calling impl.recordCancel');
          const result = this.impl.recordCancel(params.page);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.cloud_upload.mojom.PageHandlerReceiver = ash.cloud_upload.mojom.PageHandlerReceiver;

ash.cloud_upload.mojom.PageHandlerPtr = ash.cloud_upload.mojom.PageHandlerRemote;
ash.cloud_upload.mojom.PageHandlerRequest = ash.cloud_upload.mojom.PageHandlerPendingReceiver;

