// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/components/cdm_factory_daemon/mojom/cdm_storage.mojom
// Module: chromeos.cdm.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.cdm = chromeos.cdm || {};
chromeos.cdm.mojom = chromeos.cdm.mojom || {};

chromeos.cdm.mojom.CdmStorage = {};
chromeos.cdm.mojom.CdmStorage.$interfaceName = 'chromeos.cdm.mojom.CdmStorage';
chromeos.cdm.mojom.CdmStorage_Read_ParamsSpec = { $: {} };
chromeos.cdm.mojom.CdmStorage_Read_ResponseParamsSpec = { $: {} };
chromeos.cdm.mojom.CdmStorage_Write_ParamsSpec = { $: {} };
chromeos.cdm.mojom.CdmStorage_Write_ResponseParamsSpec = { $: {} };
chromeos.cdm.mojom.CdmStorage_Exists_ParamsSpec = { $: {} };
chromeos.cdm.mojom.CdmStorage_Exists_ResponseParamsSpec = { $: {} };
chromeos.cdm.mojom.CdmStorage_GetSize_ParamsSpec = { $: {} };
chromeos.cdm.mojom.CdmStorage_GetSize_ResponseParamsSpec = { $: {} };
chromeos.cdm.mojom.CdmStorage_Remove_ParamsSpec = { $: {} };
chromeos.cdm.mojom.CdmStorage_Remove_ResponseParamsSpec = { $: {} };

// Interface: CdmStorage
mojo.internal.Struct(
    chromeos.cdm.mojom.CdmStorage_Read_ParamsSpec, 'chromeos.cdm.mojom.CdmStorage_Read_Params', [
      mojo.internal.StructField('file_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.CdmStorage_Read_ResponseParamsSpec, 'chromeos.cdm.mojom.CdmStorage_Read_ResponseParams', [
      mojo.internal.StructField('data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.CdmStorage_Write_ParamsSpec, 'chromeos.cdm.mojom.CdmStorage_Write_Params', [
      mojo.internal.StructField('file_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.CdmStorage_Write_ResponseParamsSpec, 'chromeos.cdm.mojom.CdmStorage_Write_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.CdmStorage_Exists_ParamsSpec, 'chromeos.cdm.mojom.CdmStorage_Exists_Params', [
      mojo.internal.StructField('file_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.CdmStorage_Exists_ResponseParamsSpec, 'chromeos.cdm.mojom.CdmStorage_Exists_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.CdmStorage_GetSize_ParamsSpec, 'chromeos.cdm.mojom.CdmStorage_GetSize_Params', [
      mojo.internal.StructField('file_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.CdmStorage_GetSize_ResponseParamsSpec, 'chromeos.cdm.mojom.CdmStorage_GetSize_ResponseParams', [
      mojo.internal.StructField('size', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.CdmStorage_Remove_ParamsSpec, 'chromeos.cdm.mojom.CdmStorage_Remove_Params', [
      mojo.internal.StructField('file_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.CdmStorage_Remove_ResponseParamsSpec, 'chromeos.cdm.mojom.CdmStorage_Remove_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

chromeos.cdm.mojom.CdmStoragePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.cdm.mojom.CdmStorageRemote = class {
  static get $interfaceName() {
    return 'chromeos.cdm.mojom.CdmStorage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.cdm.mojom.CdmStoragePendingReceiver,
      handle);
    this.$ = new chromeos.cdm.mojom.CdmStorageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.cdm.mojom.CdmStorageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  read(file_name) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.cdm.mojom.CdmStorage_Read_ParamsSpec,
      chromeos.cdm.mojom.CdmStorage_Read_ResponseParamsSpec,
      [file_name],
      false);
  }

  write(file_name, data) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.cdm.mojom.CdmStorage_Write_ParamsSpec,
      chromeos.cdm.mojom.CdmStorage_Write_ResponseParamsSpec,
      [file_name, data],
      false);
  }

  exists(file_name) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromeos.cdm.mojom.CdmStorage_Exists_ParamsSpec,
      chromeos.cdm.mojom.CdmStorage_Exists_ResponseParamsSpec,
      [file_name],
      false);
  }

  getSize(file_name) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromeos.cdm.mojom.CdmStorage_GetSize_ParamsSpec,
      chromeos.cdm.mojom.CdmStorage_GetSize_ResponseParamsSpec,
      [file_name],
      false);
  }

  remove(file_name) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      chromeos.cdm.mojom.CdmStorage_Remove_ParamsSpec,
      chromeos.cdm.mojom.CdmStorage_Remove_ResponseParamsSpec,
      [file_name],
      false);
  }

};

chromeos.cdm.mojom.CdmStorage.getRemote = function() {
  let remote = new chromeos.cdm.mojom.CdmStorageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.cdm.mojom.CdmStorage',
    'context');
  return remote.$;
};

chromeos.cdm.mojom.CdmStorageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
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
        
        // Try Method 0: Read
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromeos.cdm.mojom.CdmStorage_Read_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Read (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: Write
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromeos.cdm.mojom.CdmStorage_Write_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Write (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: Exists
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromeos.cdm.mojom.CdmStorage_Exists_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Exists (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 3: GetSize
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromeos.cdm.mojom.CdmStorage_GetSize_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetSize (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 4: Remove
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromeos.cdm.mojom.CdmStorage_Remove_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Remove (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
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
          const params = decoder.decodeStruct(chromeos.cdm.mojom.CdmStorage_Read_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.read');
          const result = this.impl.read(params.file_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.cdm.mojom.CdmStorage_Read_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.cdm.mojom.CdmStorage_Write_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.write');
          const result = this.impl.write(params.file_name, params.data);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.cdm.mojom.CdmStorage_Write_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.cdm.mojom.CdmStorage_Exists_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.exists');
          const result = this.impl.exists(params.file_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.cdm.mojom.CdmStorage_Exists_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.cdm.mojom.CdmStorage_GetSize_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getSize');
          const result = this.impl.getSize(params.file_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.cdm.mojom.CdmStorage_GetSize_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.cdm.mojom.CdmStorage_Remove_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.remove');
          const result = this.impl.remove(params.file_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.cdm.mojom.CdmStorage_Remove_ResponseParamsSpec);
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

chromeos.cdm.mojom.CdmStorageReceiver = chromeos.cdm.mojom.CdmStorageReceiver;

chromeos.cdm.mojom.CdmStoragePtr = chromeos.cdm.mojom.CdmStorageRemote;
chromeos.cdm.mojom.CdmStorageRequest = chromeos.cdm.mojom.CdmStoragePendingReceiver;

