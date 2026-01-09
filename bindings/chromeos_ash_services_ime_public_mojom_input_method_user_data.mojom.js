// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/ime/public/mojom/input_method_user_data.mojom
// Module: ash.ime.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.ime = ash.ime || {};
ash.ime.mojom = ash.ime.mojom || {};


// Interface: InputMethodUserDataService
ash.ime.mojom.InputMethodUserDataService = {};

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
      ash.ime.mojom.InputMethodUserDataService_FetchJapaneseDictionary_ParamsSpec.$,
      ash.ime.mojom.InputMethodUserDataService_FetchJapaneseDictionary_ResponseParamsSpec.$,
      []);
  }

  addJapaneseDictionaryEntry(dict_id, entry) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.ime.mojom.InputMethodUserDataService_AddJapaneseDictionaryEntry_ParamsSpec.$,
      ash.ime.mojom.InputMethodUserDataService_AddJapaneseDictionaryEntry_ResponseParamsSpec.$,
      [dict_id, entry]);
  }

  editJapaneseDictionaryEntry(dict_id, entry_index, entry) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.ime.mojom.InputMethodUserDataService_EditJapaneseDictionaryEntry_ParamsSpec.$,
      ash.ime.mojom.InputMethodUserDataService_EditJapaneseDictionaryEntry_ResponseParamsSpec.$,
      [dict_id, entry_index, entry]);
  }

  deleteJapaneseDictionaryEntry(dict_id, entry_index) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.ime.mojom.InputMethodUserDataService_DeleteJapaneseDictionaryEntry_ParamsSpec.$,
      ash.ime.mojom.InputMethodUserDataService_DeleteJapaneseDictionaryEntry_ResponseParamsSpec.$,
      [dict_id, entry_index]);
  }

  createJapaneseDictionary(dictionary_name) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.ime.mojom.InputMethodUserDataService_CreateJapaneseDictionary_ParamsSpec.$,
      ash.ime.mojom.InputMethodUserDataService_CreateJapaneseDictionary_ResponseParamsSpec.$,
      [dictionary_name]);
  }

  renameJapaneseDictionary(dict_id, dictionary_name) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.ime.mojom.InputMethodUserDataService_RenameJapaneseDictionary_ParamsSpec.$,
      ash.ime.mojom.InputMethodUserDataService_RenameJapaneseDictionary_ResponseParamsSpec.$,
      [dict_id, dictionary_name]);
  }

  deleteJapaneseDictionary(dict_id) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.ime.mojom.InputMethodUserDataService_DeleteJapaneseDictionary_ParamsSpec.$,
      ash.ime.mojom.InputMethodUserDataService_DeleteJapaneseDictionary_ResponseParamsSpec.$,
      [dict_id]);
  }

  exportJapaneseDictionary(dict_id) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.ime.mojom.InputMethodUserDataService_ExportJapaneseDictionary_ParamsSpec.$,
      ash.ime.mojom.InputMethodUserDataService_ExportJapaneseDictionary_ResponseParamsSpec.$,
      [dict_id]);
  }

  importJapaneseDictionary(dict_id, tsv_data) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.ime.mojom.InputMethodUserDataService_ImportJapaneseDictionary_ParamsSpec.$,
      ash.ime.mojom.InputMethodUserDataService_ImportJapaneseDictionary_ResponseParamsSpec.$,
      [dict_id, tsv_data]);
  }

  clearJapanesePersonalizationData(clear_conversion_history, clear_suggestion_history) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      ash.ime.mojom.InputMethodUserDataService_ClearJapanesePersonalizationData_ParamsSpec.$,
      ash.ime.mojom.InputMethodUserDataService_ClearJapanesePersonalizationData_ResponseParamsSpec.$,
      [clear_conversion_history, clear_suggestion_history]);
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

// ParamsSpec for FetchJapaneseDictionary
ash.ime.mojom.InputMethodUserDataService_FetchJapaneseDictionary_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputMethodUserDataService.FetchJapaneseDictionary_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.ime.mojom.InputMethodUserDataService_FetchJapaneseDictionary_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputMethodUserDataService.FetchJapaneseDictionary_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AddJapaneseDictionaryEntry
ash.ime.mojom.InputMethodUserDataService_AddJapaneseDictionaryEntry_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputMethodUserDataService.AddJapaneseDictionaryEntry_Params',
      packedSize: 24,
      fields: [
        { name: 'dict_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'entry', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.ime.mojom.InputMethodUserDataService_AddJapaneseDictionaryEntry_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputMethodUserDataService.AddJapaneseDictionaryEntry_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for EditJapaneseDictionaryEntry
ash.ime.mojom.InputMethodUserDataService_EditJapaneseDictionaryEntry_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputMethodUserDataService.EditJapaneseDictionaryEntry_Params',
      packedSize: 32,
      fields: [
        { name: 'dict_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'entry_index', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'entry', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.ime.mojom.InputMethodUserDataService_EditJapaneseDictionaryEntry_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputMethodUserDataService.EditJapaneseDictionaryEntry_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DeleteJapaneseDictionaryEntry
ash.ime.mojom.InputMethodUserDataService_DeleteJapaneseDictionaryEntry_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputMethodUserDataService.DeleteJapaneseDictionaryEntry_Params',
      packedSize: 24,
      fields: [
        { name: 'dict_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'entry_index', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.ime.mojom.InputMethodUserDataService_DeleteJapaneseDictionaryEntry_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputMethodUserDataService.DeleteJapaneseDictionaryEntry_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CreateJapaneseDictionary
ash.ime.mojom.InputMethodUserDataService_CreateJapaneseDictionary_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputMethodUserDataService.CreateJapaneseDictionary_Params',
      packedSize: 16,
      fields: [
        { name: 'dictionary_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.ime.mojom.InputMethodUserDataService_CreateJapaneseDictionary_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputMethodUserDataService.CreateJapaneseDictionary_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RenameJapaneseDictionary
ash.ime.mojom.InputMethodUserDataService_RenameJapaneseDictionary_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputMethodUserDataService.RenameJapaneseDictionary_Params',
      packedSize: 24,
      fields: [
        { name: 'dict_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'dictionary_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.ime.mojom.InputMethodUserDataService_RenameJapaneseDictionary_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputMethodUserDataService.RenameJapaneseDictionary_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DeleteJapaneseDictionary
ash.ime.mojom.InputMethodUserDataService_DeleteJapaneseDictionary_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputMethodUserDataService.DeleteJapaneseDictionary_Params',
      packedSize: 16,
      fields: [
        { name: 'dict_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.ime.mojom.InputMethodUserDataService_DeleteJapaneseDictionary_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputMethodUserDataService.DeleteJapaneseDictionary_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ExportJapaneseDictionary
ash.ime.mojom.InputMethodUserDataService_ExportJapaneseDictionary_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputMethodUserDataService.ExportJapaneseDictionary_Params',
      packedSize: 16,
      fields: [
        { name: 'dict_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.ime.mojom.InputMethodUserDataService_ExportJapaneseDictionary_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputMethodUserDataService.ExportJapaneseDictionary_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ImportJapaneseDictionary
ash.ime.mojom.InputMethodUserDataService_ImportJapaneseDictionary_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputMethodUserDataService.ImportJapaneseDictionary_Params',
      packedSize: 24,
      fields: [
        { name: 'dict_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'tsv_data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.ime.mojom.InputMethodUserDataService_ImportJapaneseDictionary_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputMethodUserDataService.ImportJapaneseDictionary_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ClearJapanesePersonalizationData
ash.ime.mojom.InputMethodUserDataService_ClearJapanesePersonalizationData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputMethodUserDataService.ClearJapanesePersonalizationData_Params',
      packedSize: 24,
      fields: [
        { name: 'clear_conversion_history', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'clear_suggestion_history', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.ime.mojom.InputMethodUserDataService_ClearJapanesePersonalizationData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.InputMethodUserDataService.ClearJapanesePersonalizationData_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.ime.mojom.InputMethodUserDataServicePtr = ash.ime.mojom.InputMethodUserDataServiceRemote;
ash.ime.mojom.InputMethodUserDataServiceRequest = ash.ime.mojom.InputMethodUserDataServicePendingReceiver;

