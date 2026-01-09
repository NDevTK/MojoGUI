// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/ime/public/mojom/input_method_user_data.mojom
// Module: ash.ime.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.ime = ash.ime || {};
ash.ime.mojom = ash.ime.mojom || {};


// Struct: Status
ash.ime.mojom.Status = class {
  constructor(values = {}) {
    this.reason = values.reason !== undefined ? values.reason : false;
  }
};

// Interface: InputMethodUserDataService
ash.ime.mojom.InputMethodUserDataServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.ime.mojom.InputMethodUserDataService';
  }

  fetchJapaneseDictionary() {
    // Method: FetchJapaneseDictionary
    return new Promise((resolve) => {
      // Call: FetchJapaneseDictionary()
      resolve({});
    });
  }

  addJapaneseDictionaryEntry(dict_id, entry) {
    // Method: AddJapaneseDictionaryEntry
    return new Promise((resolve) => {
      // Call: AddJapaneseDictionaryEntry(dict_id, entry)
      resolve({});
    });
  }

  editJapaneseDictionaryEntry(dict_id, entry_index, entry) {
    // Method: EditJapaneseDictionaryEntry
    return new Promise((resolve) => {
      // Call: EditJapaneseDictionaryEntry(dict_id, entry_index, entry)
      resolve({});
    });
  }

  deleteJapaneseDictionaryEntry(dict_id, entry_index) {
    // Method: DeleteJapaneseDictionaryEntry
    return new Promise((resolve) => {
      // Call: DeleteJapaneseDictionaryEntry(dict_id, entry_index)
      resolve({});
    });
  }

  createJapaneseDictionary(dictionary_name) {
    // Method: CreateJapaneseDictionary
    return new Promise((resolve) => {
      // Call: CreateJapaneseDictionary(dictionary_name)
      resolve({});
    });
  }

  renameJapaneseDictionary(dict_id, dictionary_name) {
    // Method: RenameJapaneseDictionary
    return new Promise((resolve) => {
      // Call: RenameJapaneseDictionary(dict_id, dictionary_name)
      resolve({});
    });
  }

  deleteJapaneseDictionary(dict_id) {
    // Method: DeleteJapaneseDictionary
    return new Promise((resolve) => {
      // Call: DeleteJapaneseDictionary(dict_id)
      resolve({});
    });
  }

  exportJapaneseDictionary(dict_id) {
    // Method: ExportJapaneseDictionary
    return new Promise((resolve) => {
      // Call: ExportJapaneseDictionary(dict_id)
      resolve({});
    });
  }

  importJapaneseDictionary(dict_id, tsv_data) {
    // Method: ImportJapaneseDictionary
    return new Promise((resolve) => {
      // Call: ImportJapaneseDictionary(dict_id, tsv_data)
      resolve({});
    });
  }

  clearJapanesePersonalizationData(clear_conversion_history, clear_suggestion_history) {
    // Method: ClearJapanesePersonalizationData
    return new Promise((resolve) => {
      // Call: ClearJapanesePersonalizationData(clear_conversion_history, clear_suggestion_history)
      resolve({});
    });
  }

};

ash.ime.mojom.InputMethodUserDataServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
