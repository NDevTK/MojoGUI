// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/ime/public/mojom/input_method_user_data.mojom
// Module: ash.ime.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
  fetchJapaneseDictionary() {
    return this.$.fetchJapaneseDictionary();
  }
  addJapaneseDictionaryEntry(dict_id, entry) {
    return this.$.addJapaneseDictionaryEntry(dict_id, entry);
  }
  editJapaneseDictionaryEntry(dict_id, entry_index, entry) {
    return this.$.editJapaneseDictionaryEntry(dict_id, entry_index, entry);
  }
  deleteJapaneseDictionaryEntry(dict_id, entry_index) {
    return this.$.deleteJapaneseDictionaryEntry(dict_id, entry_index);
  }
  createJapaneseDictionary(dictionary_name) {
    return this.$.createJapaneseDictionary(dictionary_name);
  }
  renameJapaneseDictionary(dict_id, dictionary_name) {
    return this.$.renameJapaneseDictionary(dict_id, dictionary_name);
  }
  deleteJapaneseDictionary(dict_id) {
    return this.$.deleteJapaneseDictionary(dict_id);
  }
  exportJapaneseDictionary(dict_id) {
    return this.$.exportJapaneseDictionary(dict_id);
  }
  importJapaneseDictionary(dict_id, tsv_data) {
    return this.$.importJapaneseDictionary(dict_id, tsv_data);
  }
  clearJapanesePersonalizationData(clear_conversion_history, clear_suggestion_history) {
    return this.$.clearJapanesePersonalizationData(clear_conversion_history, clear_suggestion_history);
  }
};

ash.ime.mojom.InputMethodUserDataServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('InputMethodUserDataService', [
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

  fetchJapaneseDictionary() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.ime.mojom.InputMethodUserDataService_FetchJapaneseDictionary_ParamsSpec,
      ash.ime.mojom.InputMethodUserDataService_FetchJapaneseDictionary_ResponseParamsSpec,
      [],
      false);
  }

  addJapaneseDictionaryEntry(dict_id, entry) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.ime.mojom.InputMethodUserDataService_AddJapaneseDictionaryEntry_ParamsSpec,
      ash.ime.mojom.InputMethodUserDataService_AddJapaneseDictionaryEntry_ResponseParamsSpec,
      [dict_id, entry],
      false);
  }

  editJapaneseDictionaryEntry(dict_id, entry_index, entry) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.ime.mojom.InputMethodUserDataService_EditJapaneseDictionaryEntry_ParamsSpec,
      ash.ime.mojom.InputMethodUserDataService_EditJapaneseDictionaryEntry_ResponseParamsSpec,
      [dict_id, entry_index, entry],
      false);
  }

  deleteJapaneseDictionaryEntry(dict_id, entry_index) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.ime.mojom.InputMethodUserDataService_DeleteJapaneseDictionaryEntry_ParamsSpec,
      ash.ime.mojom.InputMethodUserDataService_DeleteJapaneseDictionaryEntry_ResponseParamsSpec,
      [dict_id, entry_index],
      false);
  }

  createJapaneseDictionary(dictionary_name) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      ash.ime.mojom.InputMethodUserDataService_CreateJapaneseDictionary_ParamsSpec,
      ash.ime.mojom.InputMethodUserDataService_CreateJapaneseDictionary_ResponseParamsSpec,
      [dictionary_name],
      false);
  }

  renameJapaneseDictionary(dict_id, dictionary_name) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      ash.ime.mojom.InputMethodUserDataService_RenameJapaneseDictionary_ParamsSpec,
      ash.ime.mojom.InputMethodUserDataService_RenameJapaneseDictionary_ResponseParamsSpec,
      [dict_id, dictionary_name],
      false);
  }

  deleteJapaneseDictionary(dict_id) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      ash.ime.mojom.InputMethodUserDataService_DeleteJapaneseDictionary_ParamsSpec,
      ash.ime.mojom.InputMethodUserDataService_DeleteJapaneseDictionary_ResponseParamsSpec,
      [dict_id],
      false);
  }

  exportJapaneseDictionary(dict_id) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      ash.ime.mojom.InputMethodUserDataService_ExportJapaneseDictionary_ParamsSpec,
      ash.ime.mojom.InputMethodUserDataService_ExportJapaneseDictionary_ResponseParamsSpec,
      [dict_id],
      false);
  }

  importJapaneseDictionary(dict_id, tsv_data) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      ash.ime.mojom.InputMethodUserDataService_ImportJapaneseDictionary_ParamsSpec,
      ash.ime.mojom.InputMethodUserDataService_ImportJapaneseDictionary_ResponseParamsSpec,
      [dict_id, tsv_data],
      false);
  }

  clearJapanesePersonalizationData(clear_conversion_history, clear_suggestion_history) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('InputMethodUserDataService', [
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.ime.mojom.InputMethodUserDataService_FetchJapaneseDictionary_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.ime.mojom.InputMethodUserDataService_AddJapaneseDictionaryEntry_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.ime.mojom.InputMethodUserDataService_EditJapaneseDictionaryEntry_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.ime.mojom.InputMethodUserDataService_DeleteJapaneseDictionaryEntry_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.ime.mojom.InputMethodUserDataService_CreateJapaneseDictionary_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.ime.mojom.InputMethodUserDataService_RenameJapaneseDictionary_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.ime.mojom.InputMethodUserDataService_DeleteJapaneseDictionary_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.ime.mojom.InputMethodUserDataService_ExportJapaneseDictionary_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.ime.mojom.InputMethodUserDataService_ImportJapaneseDictionary_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.ime.mojom.InputMethodUserDataService_ClearJapanesePersonalizationData_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.ime.mojom.InputMethodUserDataService_FetchJapaneseDictionary_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.ime.mojom.InputMethodUserDataService_AddJapaneseDictionaryEntry_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.ime.mojom.InputMethodUserDataService_EditJapaneseDictionaryEntry_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.ime.mojom.InputMethodUserDataService_DeleteJapaneseDictionaryEntry_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.ime.mojom.InputMethodUserDataService_CreateJapaneseDictionary_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.ime.mojom.InputMethodUserDataService_RenameJapaneseDictionary_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.ime.mojom.InputMethodUserDataService_DeleteJapaneseDictionary_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.ime.mojom.InputMethodUserDataService_ExportJapaneseDictionary_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.ime.mojom.InputMethodUserDataService_ImportJapaneseDictionary_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.ime.mojom.InputMethodUserDataService_ClearJapanesePersonalizationData_ParamsSpec.$.structSpec);
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
      } catch (err) {}
    });
  }
};

ash.ime.mojom.InputMethodUserDataServiceReceiver = ash.ime.mojom.InputMethodUserDataServiceReceiver;

ash.ime.mojom.InputMethodUserDataServicePtr = ash.ime.mojom.InputMethodUserDataServiceRemote;
ash.ime.mojom.InputMethodUserDataServiceRequest = ash.ime.mojom.InputMethodUserDataServicePendingReceiver;

