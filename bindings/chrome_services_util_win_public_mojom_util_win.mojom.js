// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/util_win/public/mojom/util_win.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};


// Enum: SelectFileDialogType
chrome.mojom.SelectFileDialogType = {
};

// Enum: CertificateType
chrome.mojom.CertificateType = {
};

// Enum: AntiVirusProductState
chrome.mojom.AntiVirusProductState = {
};

// Enum: ShortcutOperation
chrome.mojom.ShortcutOperation = {
};

// Struct: FileFilterSpec
chrome.mojom.FileFilterSpec = class {
  constructor(values = {}) {
    this.extension_spec = values.extension_spec !== undefined ? values.extension_spec : "";
  }
};

// Struct: InspectionResult
chrome.mojom.InspectionResult = class {
  constructor(values = {}) {
    this.description = values.description !== undefined ? values.description : "";
    this.certificate_subject = values.certificate_subject !== undefined ? values.certificate_subject : "";
  }
};

// Struct: AntiVirusProduct
chrome.mojom.AntiVirusProduct = class {
  constructor(values = {}) {
    this.state = values.state !== undefined ? values.state : 0;
  }
};

// Struct: TpmIdentifier
chrome.mojom.TpmIdentifier = class {
  constructor(values = {}) {
    this.manufacturer_id = values.manufacturer_id !== undefined ? values.manufacturer_id : 0;
    this.manufacturer_version = values.manufacturer_version !== undefined ? values.manufacturer_version : "";
    this.the = values.the !== undefined ? values.the : null;
    this.manufacturer_version_info = values.manufacturer_version_info !== undefined ? values.manufacturer_version_info : "";
    this.tpm_specific_version = values.tpm_specific_version !== undefined ? values.tpm_specific_version : "";
  }
};

// Struct: ClsId
chrome.mojom.ClsId = class {
  constructor(values = {}) {
    this.bytes = values.bytes !== undefined ? values.bytes : 0;
  }
};

// Struct: ShortcutProperties
chrome.mojom.ShortcutProperties = class {
  constructor(values = {}) {
    this.toast_activator_clsid = values.toast_activator_clsid !== undefined ? values.toast_activator_clsid : 0;
    this.options = values.options !== undefined ? values.options : 0;
  }
};

// Interface: UtilWin
chrome.mojom.UtilWinPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chrome.mojom.UtilWin';
  }

  isPinnedToTaskbar() {
    // Method: IsPinnedToTaskbar
    return new Promise((resolve) => {
      // Call: IsPinnedToTaskbar()
      resolve({});
    });
  }

  unpinShortcuts(shortcut_paths) {
    // Method: UnpinShortcuts
    // Call: UnpinShortcuts(shortcut_paths)
  }

  createOrUpdateShortcuts(shortcut_paths, properties, operation) {
    // Method: CreateOrUpdateShortcuts
    return new Promise((resolve) => {
      // Call: CreateOrUpdateShortcuts(shortcut_paths, properties, operation)
      resolve({});
    });
  }

  callExecuteSelectFile(type, owner, title, default_path, filter, file_type_index, default_extension) {
    // Method: CallExecuteSelectFile
    return new Promise((resolve) => {
      // Call: CallExecuteSelectFile(type, owner, title, default_path, filter, file_type_index, default_extension)
      resolve({});
    });
  }

  inspectModule(module_path) {
    // Method: InspectModule
    return new Promise((resolve) => {
      // Call: InspectModule(module_path)
      resolve({});
    });
  }

  getAntiVirusProducts(report_full_names) {
    // Method: GetAntiVirusProducts
    return new Promise((resolve) => {
      // Call: GetAntiVirusProducts(report_full_names)
      resolve({});
    });
  }

  getTpmIdentifier() {
    // Method: GetTpmIdentifier
    return new Promise((resolve) => {
      // Call: GetTpmIdentifier()
      resolve({});
    });
  }

};

chrome.mojom.UtilWinRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ProcessorMetrics
chrome.mojom.ProcessorMetricsPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chrome.mojom.ProcessorMetrics';
  }

  recordProcessorMetrics() {
    // Method: RecordProcessorMetrics
    // Call: RecordProcessorMetrics()
  }

};

chrome.mojom.ProcessorMetricsRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
