// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/components/local_search_service/public/mojom/index.mojom
// Module: ash.local_search_service.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.local_search_service = ash.local_search_service || {};
ash.local_search_service.mojom = ash.local_search_service.mojom || {};


// Interface: Index
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
      ash.local_search_service.mojom.Index_GetSize_ParamsSpec.$,
      ash.local_search_service.mojom.Index_GetSize_ResponseParamsSpec.$,
      []);
  }

  addOrUpdate(data) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.local_search_service.mojom.Index_AddOrUpdate_ParamsSpec.$,
      null,
      [data]);
  }

  delete(ids) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.local_search_service.mojom.Index_Delete_ParamsSpec.$,
      ash.local_search_service.mojom.Index_Delete_ResponseParamsSpec.$,
      [ids]);
  }

  updateDocuments(data) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.local_search_service.mojom.Index_UpdateDocuments_ParamsSpec.$,
      ash.local_search_service.mojom.Index_UpdateDocuments_ResponseParamsSpec.$,
      [data]);
  }

  find(query, max_results) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.local_search_service.mojom.Index_Find_ParamsSpec.$,
      ash.local_search_service.mojom.Index_Find_ResponseParamsSpec.$,
      [query, max_results]);
  }

  clearIndex() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.local_search_service.mojom.Index_ClearIndex_ParamsSpec.$,
      null,
      []);
  }

  setSearchParams(search_params) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.local_search_service.mojom.Index_SetSearchParams_ParamsSpec.$,
      null,
      [search_params]);
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
}};

// ParamsSpec for GetSize
ash.local_search_service.mojom.Index_GetSize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.local_search_service.mojom.Index.GetSize_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

ash.local_search_service.mojom.Index_GetSize_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.local_search_service.mojom.Index.GetSize_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'num_items', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for AddOrUpdate
ash.local_search_service.mojom.Index_AddOrUpdate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.local_search_service.mojom.Index.AddOrUpdate_Params',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for Delete
ash.local_search_service.mojom.Index_Delete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.local_search_service.mojom.Index.Delete_Params',
      packedSize: 16,
      fields: [
        { name: 'ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

ash.local_search_service.mojom.Index_Delete_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.local_search_service.mojom.Index.Delete_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'num_deleted', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for UpdateDocuments
ash.local_search_service.mojom.Index_UpdateDocuments_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.local_search_service.mojom.Index.UpdateDocuments_Params',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

ash.local_search_service.mojom.Index_UpdateDocuments_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.local_search_service.mojom.Index.UpdateDocuments_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'num_deleted', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for Find
ash.local_search_service.mojom.Index_Find_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.local_search_service.mojom.Index.Find_Params',
      packedSize: 24,
      fields: [
        { name: 'query', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'max_results', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

ash.local_search_service.mojom.Index_Find_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.local_search_service.mojom.Index.Find_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'results', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for ClearIndex
ash.local_search_service.mojom.Index_ClearIndex_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.local_search_service.mojom.Index.ClearIndex_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetSearchParams
ash.local_search_service.mojom.Index_SetSearchParams_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.local_search_service.mojom.Index.SetSearchParams_Params',
      packedSize: 16,
      fields: [
        { name: 'search_params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
ash.local_search_service.mojom.IndexPtr = ash.local_search_service.mojom.IndexRemote;
ash.local_search_service.mojom.IndexRequest = ash.local_search_service.mojom.IndexPendingReceiver;

