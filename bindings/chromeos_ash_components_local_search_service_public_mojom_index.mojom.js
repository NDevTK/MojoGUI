// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/components/local_search_service/public/mojom/index.mojom
// Module: ash.local_search_service.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.local_search_service = ash.local_search_service || {};
ash.local_search_service.mojom = ash.local_search_service.mojom || {};
var mojo_base = mojo_base || {};

ash.local_search_service.mojom.Index = {};
ash.local_search_service.mojom.Index.$interfaceName = 'ash.local_search_service.mojom.Index';
ash.local_search_service.mojom.Index_GetSize_ParamsSpec = { $: {} };
ash.local_search_service.mojom.Index_GetSize_ResponseParamsSpec = { $: {} };
ash.local_search_service.mojom.Index_AddOrUpdate_ParamsSpec = { $: {} };
ash.local_search_service.mojom.Index_AddOrUpdate_ResponseParamsSpec = { $: {} };
ash.local_search_service.mojom.Index_Delete_ParamsSpec = { $: {} };
ash.local_search_service.mojom.Index_Delete_ResponseParamsSpec = { $: {} };
ash.local_search_service.mojom.Index_UpdateDocuments_ParamsSpec = { $: {} };
ash.local_search_service.mojom.Index_UpdateDocuments_ResponseParamsSpec = { $: {} };
ash.local_search_service.mojom.Index_Find_ParamsSpec = { $: {} };
ash.local_search_service.mojom.Index_Find_ResponseParamsSpec = { $: {} };
ash.local_search_service.mojom.Index_ClearIndex_ParamsSpec = { $: {} };
ash.local_search_service.mojom.Index_ClearIndex_ResponseParamsSpec = { $: {} };
ash.local_search_service.mojom.Index_SetSearchParams_ParamsSpec = { $: {} };
ash.local_search_service.mojom.Index_SetSearchParams_ResponseParamsSpec = { $: {} };

// Interface: Index
mojo.internal.Struct(
    ash.local_search_service.mojom.Index_GetSize_ParamsSpec, 'ash.local_search_service.mojom.Index_GetSize_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.local_search_service.mojom.Index_GetSize_ResponseParamsSpec, 'ash.local_search_service.mojom.Index_GetSize_ResponseParams', [
      mojo.internal.StructField('num_items', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.local_search_service.mojom.Index_AddOrUpdate_ParamsSpec, 'ash.local_search_service.mojom.Index_AddOrUpdate_Params', [
      mojo.internal.StructField('data', 0, 0, mojo.internal.Array(ash.local_search_service.mojom.DataSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.local_search_service.mojom.Index_AddOrUpdate_ResponseParamsSpec, 'ash.local_search_service.mojom.Index_AddOrUpdate_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.local_search_service.mojom.Index_Delete_ParamsSpec, 'ash.local_search_service.mojom.Index_Delete_Params', [
      mojo.internal.StructField('ids', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.local_search_service.mojom.Index_Delete_ResponseParamsSpec, 'ash.local_search_service.mojom.Index_Delete_ResponseParams', [
      mojo.internal.StructField('num_deleted', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.local_search_service.mojom.Index_UpdateDocuments_ParamsSpec, 'ash.local_search_service.mojom.Index_UpdateDocuments_Params', [
      mojo.internal.StructField('data', 0, 0, mojo.internal.Array(ash.local_search_service.mojom.DataSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.local_search_service.mojom.Index_UpdateDocuments_ResponseParamsSpec, 'ash.local_search_service.mojom.Index_UpdateDocuments_ResponseParams', [
      mojo.internal.StructField('num_deleted', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.local_search_service.mojom.Index_Find_ParamsSpec, 'ash.local_search_service.mojom.Index_Find_Params', [
      mojo.internal.StructField('query', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('max_results', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.local_search_service.mojom.Index_Find_ResponseParamsSpec, 'ash.local_search_service.mojom.Index_Find_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, ash.local_search_service.mojom.ResponseStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('results', 8, 0, mojo.internal.Array(ash.local_search_service.mojom.ResultSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.local_search_service.mojom.Index_ClearIndex_ParamsSpec, 'ash.local_search_service.mojom.Index_ClearIndex_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.local_search_service.mojom.Index_ClearIndex_ResponseParamsSpec, 'ash.local_search_service.mojom.Index_ClearIndex_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.local_search_service.mojom.Index_SetSearchParams_ParamsSpec, 'ash.local_search_service.mojom.Index_SetSearchParams_Params', [
      mojo.internal.StructField('search_params', 0, 0, ash.local_search_service.mojom.SearchParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.local_search_service.mojom.Index_SetSearchParams_ResponseParamsSpec, 'ash.local_search_service.mojom.Index_SetSearchParams_ResponseParams', [
    ],
    [[0, 8]]);

ash.local_search_service.mojom.IndexPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.local_search_service.mojom.IndexRemote = class {
  static get $interfaceName() {
    return 'ash.local_search_service.mojom.Index';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.local_search_service.mojom.IndexPendingReceiver,
      handle);
    this.$ = new ash.local_search_service.mojom.IndexRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.local_search_service.mojom.IndexRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getSize() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.local_search_service.mojom.Index_GetSize_ParamsSpec,
      ash.local_search_service.mojom.Index_GetSize_ResponseParamsSpec,
      [],
      false);
  }

  addOrUpdate(data) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.local_search_service.mojom.Index_AddOrUpdate_ParamsSpec,
      ash.local_search_service.mojom.Index_AddOrUpdate_ResponseParamsSpec,
      [data],
      false);
  }

  delete(ids) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.local_search_service.mojom.Index_Delete_ParamsSpec,
      ash.local_search_service.mojom.Index_Delete_ResponseParamsSpec,
      [ids],
      false);
  }

  updateDocuments(data) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.local_search_service.mojom.Index_UpdateDocuments_ParamsSpec,
      ash.local_search_service.mojom.Index_UpdateDocuments_ResponseParamsSpec,
      [data],
      false);
  }

  find(query, max_results) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.local_search_service.mojom.Index_Find_ParamsSpec,
      ash.local_search_service.mojom.Index_Find_ResponseParamsSpec,
      [query, max_results],
      false);
  }

  clearIndex() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.local_search_service.mojom.Index_ClearIndex_ParamsSpec,
      ash.local_search_service.mojom.Index_ClearIndex_ResponseParamsSpec,
      [],
      false);
  }

  setSearchParams(search_params) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.local_search_service.mojom.Index_SetSearchParams_ParamsSpec,
      ash.local_search_service.mojom.Index_SetSearchParams_ResponseParamsSpec,
      [search_params],
      false);
  }

};

ash.local_search_service.mojom.Index.getRemote = function() {
  let remote = new ash.local_search_service.mojom.IndexRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.local_search_service.mojom.Index',
    'context');
  return remote.$;
};

ash.local_search_service.mojom.IndexReceiver = class {
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
        
        // Try Method 0: GetSize
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.local_search_service.mojom.Index_GetSize_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetSize (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: AddOrUpdate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.local_search_service.mojom.Index_AddOrUpdate_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddOrUpdate (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: Delete
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.local_search_service.mojom.Index_Delete_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Delete (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 3: UpdateDocuments
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.local_search_service.mojom.Index_UpdateDocuments_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateDocuments (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 4: Find
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.local_search_service.mojom.Index_Find_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Find (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 5: ClearIndex
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.local_search_service.mojom.Index_ClearIndex_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ClearIndex (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 6: SetSearchParams
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.local_search_service.mojom.Index_SetSearchParams_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetSearchParams (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
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
          const params = decoder.decodeStruct(ash.local_search_service.mojom.Index_GetSize_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getSize');
          const result = this.impl.getSize();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.local_search_service.mojom.Index_GetSize_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.local_search_service.mojom.Index_AddOrUpdate_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.addOrUpdate');
          const result = this.impl.addOrUpdate(params.data);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.local_search_service.mojom.Index_AddOrUpdate_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.local_search_service.mojom.Index_Delete_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.delete');
          const result = this.impl.delete(params.ids);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.local_search_service.mojom.Index_Delete_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.local_search_service.mojom.Index_UpdateDocuments_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.updateDocuments');
          const result = this.impl.updateDocuments(params.data);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.local_search_service.mojom.Index_UpdateDocuments_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.local_search_service.mojom.Index_Find_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.find');
          const result = this.impl.find(params.query, params.max_results);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.local_search_service.mojom.Index_Find_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.local_search_service.mojom.Index_ClearIndex_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.clearIndex');
          const result = this.impl.clearIndex();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.local_search_service.mojom.Index_ClearIndex_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.local_search_service.mojom.Index_SetSearchParams_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setSearchParams');
          const result = this.impl.setSearchParams(params.search_params);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.local_search_service.mojom.Index_SetSearchParams_ResponseParamsSpec);
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

ash.local_search_service.mojom.IndexReceiver = ash.local_search_service.mojom.IndexReceiver;

ash.local_search_service.mojom.IndexPtr = ash.local_search_service.mojom.IndexRemote;
ash.local_search_service.mojom.IndexRequest = ash.local_search_service.mojom.IndexPendingReceiver;

