// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/ime/public/mojom/input_method_user_data.mojom
// Module: ash.ime.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.ime = ash.ime || {};
ash.ime.mojom = ash.ime.mojom || {};
var mojo_base = mojo_base || {};

ash.ime.mojom.JapaneseDictionaryResponseSpec = { $: {} };
ash.ime.mojom.StatusSpec = { $: {} };
ash.ime.mojom.InputMethodUserDataService = {};
ash.ime.mojom.InputMethodUserDataService.$interfaceName = 'ash.ime.mojom.InputMethodUserDataService';
ash.ime.mojom.InputMethodUserDataService_FetchJapaneseDictionary_ParamsSpec = { $: {} };
ash.ime.mojom.InputMethodUserDataService_FetchJapaneseDictionary_ResponseParamsSpec = { $: {} };
ash.ime.mojom.InputMethodUserDataService_AddJapaneseDictionaryEntry_ParamsSpec = { $: {} };
ash.ime.mojom.InputMethodUserDataService_AddJapaneseDictionaryEntry_ResponseParamsSpec = { $: {} };
ash.ime.mojom.InputMethodUserDataService_EditJapaneseDictionaryEntry_ParamsSpec = { $: {} };
ash.ime.mojom.InputMethodUserDataService_EditJapaneseDictionaryEntry_ResponseParamsSpec = { $: {} };
ash.ime.mojom.InputMethodUserDataService_DeleteJapaneseDictionaryEntry_ParamsSpec = { $: {} };
ash.ime.mojom.InputMethodUserDataService_DeleteJapaneseDictionaryEntry_ResponseParamsSpec = { $: {} };
ash.ime.mojom.InputMethodUserDataService_CreateJapaneseDictionary_ParamsSpec = { $: {} };
ash.ime.mojom.InputMethodUserDataService_CreateJapaneseDictionary_ResponseParamsSpec = { $: {} };
ash.ime.mojom.InputMethodUserDataService_RenameJapaneseDictionary_ParamsSpec = { $: {} };
ash.ime.mojom.InputMethodUserDataService_RenameJapaneseDictionary_ResponseParamsSpec = { $: {} };
ash.ime.mojom.InputMethodUserDataService_DeleteJapaneseDictionary_ParamsSpec = { $: {} };
ash.ime.mojom.InputMethodUserDataService_DeleteJapaneseDictionary_ResponseParamsSpec = { $: {} };
ash.ime.mojom.InputMethodUserDataService_ExportJapaneseDictionary_ParamsSpec = { $: {} };
ash.ime.mojom.InputMethodUserDataService_ExportJapaneseDictionary_ResponseParamsSpec = { $: {} };
ash.ime.mojom.InputMethodUserDataService_ImportJapaneseDictionary_ParamsSpec = { $: {} };
ash.ime.mojom.InputMethodUserDataService_ImportJapaneseDictionary_ResponseParamsSpec = { $: {} };
ash.ime.mojom.InputMethodUserDataService_ClearJapanesePersonalizationData_ParamsSpec = { $: {} };
ash.ime.mojom.InputMethodUserDataService_ClearJapanesePersonalizationData_ResponseParamsSpec = { $: {} };

// Union: JapaneseDictionaryResponse
mojo.internal.Union(
    ash.ime.mojom.JapaneseDictionaryResponseSpec, 'ash.ime.mojom.JapaneseDictionaryResponse', {
      'error_reason': {
        'ordinal': 0,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'dictionaries': {
        'ordinal': 1,
        'type': mojo.internal.Array(ash.ime.mojom.JapaneseDictionarySpec.$, false),
        'nullable': false,
      },
    });

// Struct: Status
mojo.internal.Struct(
    ash.ime.mojom.StatusSpec, 'ash.ime.mojom.Status', [
      mojo.internal.StructField('reason', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: InputMethodUserDataService
mojo.internal.Struct(
    ash.ime.mojom.InputMethodUserDataService_FetchJapaneseDictionary_ParamsSpec, 'ash.ime.mojom.InputMethodUserDataService_FetchJapaneseDictionary_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.ime.mojom.InputMethodUserDataService_FetchJapaneseDictionary_ResponseParamsSpec, 'ash.ime.mojom.InputMethodUserDataService_FetchJapaneseDictionary_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, ash.ime.mojom.JapaneseDictionaryResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.ime.mojom.InputMethodUserDataService_AddJapaneseDictionaryEntry_ParamsSpec, 'ash.ime.mojom.InputMethodUserDataService_AddJapaneseDictionaryEntry_Params', [
      mojo.internal.StructField('dict_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('entry', 8, 0, ash.ime.mojom.JapaneseDictionaryEntrySpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.ime.mojom.InputMethodUserDataService_AddJapaneseDictionaryEntry_ResponseParamsSpec, 'ash.ime.mojom.InputMethodUserDataService_AddJapaneseDictionaryEntry_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, ash.ime.mojom.StatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.ime.mojom.InputMethodUserDataService_EditJapaneseDictionaryEntry_ParamsSpec, 'ash.ime.mojom.InputMethodUserDataService_EditJapaneseDictionaryEntry_Params', [
      mojo.internal.StructField('dict_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('entry', 8, 0, ash.ime.mojom.JapaneseDictionaryEntrySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('entry_index', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    ash.ime.mojom.InputMethodUserDataService_EditJapaneseDictionaryEntry_ResponseParamsSpec, 'ash.ime.mojom.InputMethodUserDataService_EditJapaneseDictionaryEntry_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, ash.ime.mojom.StatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.ime.mojom.InputMethodUserDataService_DeleteJapaneseDictionaryEntry_ParamsSpec, 'ash.ime.mojom.InputMethodUserDataService_DeleteJapaneseDictionaryEntry_Params', [
      mojo.internal.StructField('dict_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('entry_index', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.ime.mojom.InputMethodUserDataService_DeleteJapaneseDictionaryEntry_ResponseParamsSpec, 'ash.ime.mojom.InputMethodUserDataService_DeleteJapaneseDictionaryEntry_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, ash.ime.mojom.StatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.ime.mojom.InputMethodUserDataService_CreateJapaneseDictionary_ParamsSpec, 'ash.ime.mojom.InputMethodUserDataService_CreateJapaneseDictionary_Params', [
      mojo.internal.StructField('dictionary_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.ime.mojom.InputMethodUserDataService_CreateJapaneseDictionary_ResponseParamsSpec, 'ash.ime.mojom.InputMethodUserDataService_CreateJapaneseDictionary_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, ash.ime.mojom.StatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.ime.mojom.InputMethodUserDataService_RenameJapaneseDictionary_ParamsSpec, 'ash.ime.mojom.InputMethodUserDataService_RenameJapaneseDictionary_Params', [
      mojo.internal.StructField('dict_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('dictionary_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.ime.mojom.InputMethodUserDataService_RenameJapaneseDictionary_ResponseParamsSpec, 'ash.ime.mojom.InputMethodUserDataService_RenameJapaneseDictionary_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, ash.ime.mojom.StatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.ime.mojom.InputMethodUserDataService_DeleteJapaneseDictionary_ParamsSpec, 'ash.ime.mojom.InputMethodUserDataService_DeleteJapaneseDictionary_Params', [
      mojo.internal.StructField('dict_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.ime.mojom.InputMethodUserDataService_DeleteJapaneseDictionary_ResponseParamsSpec, 'ash.ime.mojom.InputMethodUserDataService_DeleteJapaneseDictionary_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, ash.ime.mojom.StatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.ime.mojom.InputMethodUserDataService_ExportJapaneseDictionary_ParamsSpec, 'ash.ime.mojom.InputMethodUserDataService_ExportJapaneseDictionary_Params', [
      mojo.internal.StructField('dict_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.ime.mojom.InputMethodUserDataService_ExportJapaneseDictionary_ResponseParamsSpec, 'ash.ime.mojom.InputMethodUserDataService_ExportJapaneseDictionary_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo_base.mojom.BigStringSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.ime.mojom.InputMethodUserDataService_ImportJapaneseDictionary_ParamsSpec, 'ash.ime.mojom.InputMethodUserDataService_ImportJapaneseDictionary_Params', [
      mojo.internal.StructField('dict_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('tsv_data', 8, 0, mojo_base.mojom.BigStringSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.ime.mojom.InputMethodUserDataService_ImportJapaneseDictionary_ResponseParamsSpec, 'ash.ime.mojom.InputMethodUserDataService_ImportJapaneseDictionary_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, ash.ime.mojom.StatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.ime.mojom.InputMethodUserDataService_ClearJapanesePersonalizationData_ParamsSpec, 'ash.ime.mojom.InputMethodUserDataService_ClearJapanesePersonalizationData_Params', [
      mojo.internal.StructField('clear_conversion_history', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('clear_suggestion_history', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.ime.mojom.InputMethodUserDataService_ClearJapanesePersonalizationData_ResponseParamsSpec, 'ash.ime.mojom.InputMethodUserDataService_ClearJapanesePersonalizationData_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, ash.ime.mojom.StatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.ime.mojom.InputMethodUserDataServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.ime.mojom.InputMethodUserDataServiceRemote = class {
  static get $interfaceName() {
    return 'ash.ime.mojom.InputMethodUserDataService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.ime.mojom.InputMethodUserDataServicePendingReceiver,
      handle);
    this.$ = new ash.ime.mojom.InputMethodUserDataServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.ime.mojom.InputMethodUserDataServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  fetchJapaneseDictionary() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.ime.mojom.InputMethodUserDataService_FetchJapaneseDictionary_ParamsSpec,
      ash.ime.mojom.InputMethodUserDataService_FetchJapaneseDictionary_ResponseParamsSpec,
      [],
      false);
  }

  addJapaneseDictionaryEntry(dict_id, entry) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.ime.mojom.InputMethodUserDataService_AddJapaneseDictionaryEntry_ParamsSpec,
      ash.ime.mojom.InputMethodUserDataService_AddJapaneseDictionaryEntry_ResponseParamsSpec,
      [dict_id, entry],
      false);
  }

  editJapaneseDictionaryEntry(dict_id, entry_index, entry) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.ime.mojom.InputMethodUserDataService_EditJapaneseDictionaryEntry_ParamsSpec,
      ash.ime.mojom.InputMethodUserDataService_EditJapaneseDictionaryEntry_ResponseParamsSpec,
      [dict_id, entry_index, entry],
      false);
  }

  deleteJapaneseDictionaryEntry(dict_id, entry_index) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.ime.mojom.InputMethodUserDataService_DeleteJapaneseDictionaryEntry_ParamsSpec,
      ash.ime.mojom.InputMethodUserDataService_DeleteJapaneseDictionaryEntry_ResponseParamsSpec,
      [dict_id, entry_index],
      false);
  }

  createJapaneseDictionary(dictionary_name) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.ime.mojom.InputMethodUserDataService_CreateJapaneseDictionary_ParamsSpec,
      ash.ime.mojom.InputMethodUserDataService_CreateJapaneseDictionary_ResponseParamsSpec,
      [dictionary_name],
      false);
  }

  renameJapaneseDictionary(dict_id, dictionary_name) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.ime.mojom.InputMethodUserDataService_RenameJapaneseDictionary_ParamsSpec,
      ash.ime.mojom.InputMethodUserDataService_RenameJapaneseDictionary_ResponseParamsSpec,
      [dict_id, dictionary_name],
      false);
  }

  deleteJapaneseDictionary(dict_id) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.ime.mojom.InputMethodUserDataService_DeleteJapaneseDictionary_ParamsSpec,
      ash.ime.mojom.InputMethodUserDataService_DeleteJapaneseDictionary_ResponseParamsSpec,
      [dict_id],
      false);
  }

  exportJapaneseDictionary(dict_id) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.ime.mojom.InputMethodUserDataService_ExportJapaneseDictionary_ParamsSpec,
      ash.ime.mojom.InputMethodUserDataService_ExportJapaneseDictionary_ResponseParamsSpec,
      [dict_id],
      false);
  }

  importJapaneseDictionary(dict_id, tsv_data) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.ime.mojom.InputMethodUserDataService_ImportJapaneseDictionary_ParamsSpec,
      ash.ime.mojom.InputMethodUserDataService_ImportJapaneseDictionary_ResponseParamsSpec,
      [dict_id, tsv_data],
      false);
  }

  clearJapanesePersonalizationData(clear_conversion_history, clear_suggestion_history) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      ash.ime.mojom.InputMethodUserDataService_ClearJapanesePersonalizationData_ParamsSpec,
      ash.ime.mojom.InputMethodUserDataService_ClearJapanesePersonalizationData_ResponseParamsSpec,
      [clear_conversion_history, clear_suggestion_history],
      false);
  }

};

ash.ime.mojom.InputMethodUserDataService.getRemote = function() {
  let remote = new ash.ime.mojom.InputMethodUserDataServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.ime.mojom.InputMethodUserDataService',
    'context');
  return remote.$;
};

ash.ime.mojom.InputMethodUserDataServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.ime.mojom.InputMethodUserDataService_FetchJapaneseDictionary_ParamsSpec.$.decode(message.payload);
          const result = this.impl.fetchJapaneseDictionary();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.ime.mojom.InputMethodUserDataService_FetchJapaneseDictionary_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = ash.ime.mojom.InputMethodUserDataService_AddJapaneseDictionaryEntry_ParamsSpec.$.decode(message.payload);
          const result = this.impl.addJapaneseDictionaryEntry(params.dict_id, params.entry);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.ime.mojom.InputMethodUserDataService_AddJapaneseDictionaryEntry_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const params = ash.ime.mojom.InputMethodUserDataService_EditJapaneseDictionaryEntry_ParamsSpec.$.decode(message.payload);
          const result = this.impl.editJapaneseDictionaryEntry(params.dict_id, params.entry_index, params.entry);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.ime.mojom.InputMethodUserDataService_EditJapaneseDictionaryEntry_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const params = ash.ime.mojom.InputMethodUserDataService_DeleteJapaneseDictionaryEntry_ParamsSpec.$.decode(message.payload);
          const result = this.impl.deleteJapaneseDictionaryEntry(params.dict_id, params.entry_index);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.ime.mojom.InputMethodUserDataService_DeleteJapaneseDictionaryEntry_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const params = ash.ime.mojom.InputMethodUserDataService_CreateJapaneseDictionary_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createJapaneseDictionary(params.dictionary_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.ime.mojom.InputMethodUserDataService_CreateJapaneseDictionary_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const params = ash.ime.mojom.InputMethodUserDataService_RenameJapaneseDictionary_ParamsSpec.$.decode(message.payload);
          const result = this.impl.renameJapaneseDictionary(params.dict_id, params.dictionary_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.ime.mojom.InputMethodUserDataService_RenameJapaneseDictionary_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const params = ash.ime.mojom.InputMethodUserDataService_DeleteJapaneseDictionary_ParamsSpec.$.decode(message.payload);
          const result = this.impl.deleteJapaneseDictionary(params.dict_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.ime.mojom.InputMethodUserDataService_DeleteJapaneseDictionary_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const params = ash.ime.mojom.InputMethodUserDataService_ExportJapaneseDictionary_ParamsSpec.$.decode(message.payload);
          const result = this.impl.exportJapaneseDictionary(params.dict_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.ime.mojom.InputMethodUserDataService_ExportJapaneseDictionary_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const params = ash.ime.mojom.InputMethodUserDataService_ImportJapaneseDictionary_ParamsSpec.$.decode(message.payload);
          const result = this.impl.importJapaneseDictionary(params.dict_id, params.tsv_data);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.ime.mojom.InputMethodUserDataService_ImportJapaneseDictionary_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const params = ash.ime.mojom.InputMethodUserDataService_ClearJapanesePersonalizationData_ParamsSpec.$.decode(message.payload);
          const result = this.impl.clearJapanesePersonalizationData(params.clear_conversion_history, params.clear_suggestion_history);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.ime.mojom.InputMethodUserDataService_ClearJapanesePersonalizationData_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    });
  }
};

ash.ime.mojom.InputMethodUserDataServiceReceiver = ash.ime.mojom.InputMethodUserDataServiceReceiver;

ash.ime.mojom.InputMethodUserDataServicePtr = ash.ime.mojom.InputMethodUserDataServiceRemote;
ash.ime.mojom.InputMethodUserDataServiceRequest = ash.ime.mojom.InputMethodUserDataServicePendingReceiver;

