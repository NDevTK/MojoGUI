// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/components/trash_service/public/mojom/trash_service.mojom
// Module: ash.trash_service.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.trash_service = ash.trash_service || {};
ash.trash_service.mojom = ash.trash_service.mojom || {};
var mojo_base = mojo_base || {};
var sandbox = sandbox || {};

ash.trash_service.mojom.TrashService = {};
ash.trash_service.mojom.TrashService.$interfaceName = 'ash.trash_service.mojom.TrashService';
ash.trash_service.mojom.TrashService_ParseTrashInfoFile_ParamsSpec = { $: {} };
ash.trash_service.mojom.TrashService_ParseTrashInfoFile_ResponseParamsSpec = { $: {} };

// Interface: TrashService
mojo.internal.Struct(
    ash.trash_service.mojom.TrashService_ParseTrashInfoFile_ParamsSpec, 'ash.trash_service.mojom.TrashService_ParseTrashInfoFile_Params', [
      mojo.internal.StructField('trash_info_file', 0, 0, mojo_base.mojom.ReadOnlyFileSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.trash_service.mojom.TrashService_ParseTrashInfoFile_ResponseParamsSpec, 'ash.trash_service.mojom.TrashService_ParseTrashInfoFile_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, mojo_base.mojom.FileErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('restore_path', 8, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('deletion_date', 16, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

ash.trash_service.mojom.TrashServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.trash_service.mojom.TrashServiceRemote = class {
  static get $interfaceName() {
    return 'ash.trash_service.mojom.TrashService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.trash_service.mojom.TrashServicePendingReceiver,
      handle);
    this.$ = new ash.trash_service.mojom.TrashServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.trash_service.mojom.TrashServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  parseTrashInfoFile(trash_info_file) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.trash_service.mojom.TrashService_ParseTrashInfoFile_ParamsSpec,
      ash.trash_service.mojom.TrashService_ParseTrashInfoFile_ResponseParamsSpec,
      [trash_info_file],
      false);
  }

};

ash.trash_service.mojom.TrashService.getRemote = function() {
  let remote = new ash.trash_service.mojom.TrashServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.trash_service.mojom.TrashService',
    'context');
  return remote.$;
};

ash.trash_service.mojom.TrashServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: ParseTrashInfoFile
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.trash_service.mojom.TrashService_ParseTrashInfoFile_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ParseTrashInfoFile (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
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
          const params = decoder.decodeStruct(ash.trash_service.mojom.TrashService_ParseTrashInfoFile_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.parseTrashInfoFile');
          const result = this.impl.parseTrashInfoFile(params.trash_info_file);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.trash_service.mojom.TrashService_ParseTrashInfoFile_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.trash_service.mojom.TrashServiceReceiver = ash.trash_service.mojom.TrashServiceReceiver;

ash.trash_service.mojom.TrashServicePtr = ash.trash_service.mojom.TrashServiceRemote;
ash.trash_service.mojom.TrashServiceRequest = ash.trash_service.mojom.TrashServicePendingReceiver;

