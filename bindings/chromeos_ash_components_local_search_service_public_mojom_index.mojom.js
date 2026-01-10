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
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.local_search_service.mojom.Index_GetSize_ParamsSpec.$.decode(message.payload);
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
          const params = ash.local_search_service.mojom.Index_AddOrUpdate_ParamsSpec.$.decode(message.payload);
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
          const params = ash.local_search_service.mojom.Index_Delete_ParamsSpec.$.decode(message.payload);
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
          const params = ash.local_search_service.mojom.Index_UpdateDocuments_ParamsSpec.$.decode(message.payload);
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
          const params = ash.local_search_service.mojom.Index_Find_ParamsSpec.$.decode(message.payload);
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
          const params = ash.local_search_service.mojom.Index_ClearIndex_ParamsSpec.$.decode(message.payload);
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
          const params = ash.local_search_service.mojom.Index_SetSearchParams_ParamsSpec.$.decode(message.payload);
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
    });
  }
};

ash.local_search_service.mojom.IndexReceiver = ash.local_search_service.mojom.IndexReceiver;

ash.local_search_service.mojom.IndexPtr = ash.local_search_service.mojom.IndexRemote;
ash.local_search_service.mojom.IndexRequest = ash.local_search_service.mojom.IndexPendingReceiver;

