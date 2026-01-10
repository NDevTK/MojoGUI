// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/util_win/public/mojom/util_win.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};


// Enum: SelectFileDialogType
chrome.mojom.SelectFileDialogType = {
  kNone: 0,
  kFolder: 1,
  kUploadFolder: 2,
  kExistingFolder: 3,
  kSaveAsFile: 4,
  kOpenFile: 5,
  kOpenMultiFile: 6,
};
chrome.mojom.SelectFileDialogTypeSpec = { $: mojo.internal.Enum() };

// Enum: CertificateType
chrome.mojom.CertificateType = {
  kNoCertificate: 0,
  kCertificateInFile: 1,
  kCertificateInCatalog: 2,
};
chrome.mojom.CertificateTypeSpec = { $: mojo.internal.Enum() };

// Enum: AntiVirusProductState
chrome.mojom.AntiVirusProductState = {
  kOn: 0,
  kOff: 1,
  kSnoozed: 2,
  kExpired: 3,
};
chrome.mojom.AntiVirusProductStateSpec = { $: mojo.internal.Enum() };

// Enum: ShortcutOperation
chrome.mojom.ShortcutOperation = {
  kCreateAlways: 0,
  kReplaceExisting: 1,
  kUpdateExisting: 2,
};
chrome.mojom.ShortcutOperationSpec = { $: mojo.internal.Enum() };

// Struct: FileFilterSpec
chrome.mojom.FileFilterSpecSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.FileFilterSpec',
      packedSize: 24,
      fields: [
        { name: 'description', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'extension_spec', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: InspectionResult
chrome.mojom.InspectionResultSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.InspectionResult',
      packedSize: 72,
      fields: [
        { name: 'location', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'basename', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'product_name', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'description', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'version', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'certificate_type', packedOffset: 40, packedBitOffset: 0, type: chrome.mojom.CertificateTypeSpec, nullable: false, minVersion: 0 },
        { name: 'certificate_path', packedOffset: 48, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
        { name: 'certificate_subject', packedOffset: 56, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 72}]
    }
  }
};

// Struct: AntiVirusProduct
chrome.mojom.AntiVirusProductSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.AntiVirusProduct',
      packedSize: 40,
      fields: [
        { name: 'product_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'product_name_hash', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'product_version', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'product_version_hash', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'state', packedOffset: 24, packedBitOffset: 0, type: chrome.mojom.AntiVirusProductStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: TpmIdentifier
chrome.mojom.TpmIdentifierSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.TpmIdentifier',
      packedSize: 40,
      fields: [
        { name: 'manufacturer_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'manufacturer_version', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'manufacturer_version_info', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'tpm_specific_version', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: ClsId
chrome.mojom.ClsIdSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ClsId',
      packedSize: 16,
      fields: [
        { name: 'bytes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Pointer, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: ShortcutProperties
chrome.mojom.ShortcutPropertiesSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ShortcutProperties',
      packedSize: 72,
      fields: [
        { name: 'target', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
        { name: 'working_dir', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
        { name: 'arguments', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.WStringSpec, nullable: false, minVersion: 0 },
        { name: 'description', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.WStringSpec, nullable: false, minVersion: 0 },
        { name: 'icon', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
        { name: 'icon_index', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'app_id', packedOffset: 48, packedBitOffset: 0, type: mojo_base.mojom.WStringSpec, nullable: false, minVersion: 0 },
        { name: 'toast_activator_clsid', packedOffset: 56, packedBitOffset: 0, type: chrome.mojom.ClsIdSpec, nullable: false, minVersion: 0 },
        { name: 'options', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 72}]
    }
  }
};

// Interface: UtilWin
chrome.mojom.UtilWin = {};

chrome.mojom.UtilWinPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome.mojom.UtilWinRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.UtilWin';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome.mojom.UtilWinPendingReceiver,
      handle);
    this.$ = new chrome.mojom.UtilWinRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chrome.mojom.UtilWinRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  isPinnedToTaskbar() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chrome.mojom.UtilWin_IsPinnedToTaskbar_ParamsSpec,
      chrome.mojom.UtilWin_IsPinnedToTaskbar_ResponseParamsSpec,
      []);
  }

  unpinShortcuts(shortcut_paths) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chrome.mojom.UtilWin_UnpinShortcuts_ParamsSpec,
      null,
      [shortcut_paths]);
  }

  createOrUpdateShortcuts(shortcut_paths, properties, operation) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chrome.mojom.UtilWin_CreateOrUpdateShortcuts_ParamsSpec,
      chrome.mojom.UtilWin_CreateOrUpdateShortcuts_ResponseParamsSpec,
      [shortcut_paths, properties, operation]);
  }

  callExecuteSelectFile(type, owner, title, default_path, filter, file_type_index, default_extension) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chrome.mojom.UtilWin_CallExecuteSelectFile_ParamsSpec,
      chrome.mojom.UtilWin_CallExecuteSelectFile_ResponseParamsSpec,
      [type, owner, title, default_path, filter, file_type_index, default_extension]);
  }

  inspectModule(module_path) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      chrome.mojom.UtilWin_InspectModule_ParamsSpec,
      chrome.mojom.UtilWin_InspectModule_ResponseParamsSpec,
      [module_path]);
  }

  getAntiVirusProducts(report_full_names) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      chrome.mojom.UtilWin_GetAntiVirusProducts_ParamsSpec,
      chrome.mojom.UtilWin_GetAntiVirusProducts_ResponseParamsSpec,
      [report_full_names]);
  }

  getTpmIdentifier() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      chrome.mojom.UtilWin_GetTpmIdentifier_ParamsSpec,
      chrome.mojom.UtilWin_GetTpmIdentifier_ResponseParamsSpec,
      []);
  }

};

chrome.mojom.UtilWin.getRemote = function() {
  let remote = new chrome.mojom.UtilWinRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.UtilWin',
    'context');
  return remote.$;
};

// ParamsSpec for IsPinnedToTaskbar
chrome.mojom.UtilWin_IsPinnedToTaskbar_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.UtilWin.IsPinnedToTaskbar_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

chrome.mojom.UtilWin_IsPinnedToTaskbar_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'succeeded', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_pinned_to_taskbar', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UnpinShortcuts
chrome.mojom.UtilWin_UnpinShortcuts_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.UtilWin.UnpinShortcuts_Params',
      packedSize: 16,
      fields: [
        { name: 'shortcut_paths', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo_base.mojom.FilePathSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CreateOrUpdateShortcuts
chrome.mojom.UtilWin_CreateOrUpdateShortcuts_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.UtilWin.CreateOrUpdateShortcuts_Params',
      packedSize: 32,
      fields: [
        { name: 'shortcut_paths', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo_base.mojom.FilePathSpec, false), nullable: false, minVersion: 0 },
        { name: 'properties', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(chrome.mojom.ShortcutPropertiesSpec, false), nullable: false, minVersion: 0 },
        { name: 'operation', packedOffset: 16, packedBitOffset: 0, type: chrome.mojom.ShortcutOperationSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

chrome.mojom.UtilWin_CreateOrUpdateShortcuts_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'succeeded', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CallExecuteSelectFile
chrome.mojom.UtilWin_CallExecuteSelectFile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.UtilWin.CallExecuteSelectFile_Params',
      packedSize: 56,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: chrome.mojom.SelectFileDialogTypeSpec, nullable: false, minVersion: 0 },
        { name: 'owner', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'title', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'default_path', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
        { name: 'filter', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(chrome.mojom.FileFilterSpecSpec, false), nullable: false, minVersion: 0 },
        { name: 'file_type_index', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'default_extension', packedOffset: 40, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

chrome.mojom.UtilWin_CallExecuteSelectFile_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'paths', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo_base.mojom.FilePathSpec, false), nullable: false, minVersion: 0 },
        { name: 'file_type_index', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for InspectModule
chrome.mojom.UtilWin_InspectModule_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.UtilWin.InspectModule_Params',
      packedSize: 16,
      fields: [
        { name: 'module_path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

chrome.mojom.UtilWin_InspectModule_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'inspection_result', packedOffset: 0, packedBitOffset: 0, type: chrome.mojom.InspectionResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetAntiVirusProducts
chrome.mojom.UtilWin_GetAntiVirusProducts_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.UtilWin.GetAntiVirusProducts_Params',
      packedSize: 16,
      fields: [
        { name: 'report_full_names', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

chrome.mojom.UtilWin_GetAntiVirusProducts_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'av_products', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(chrome.mojom.AntiVirusProductSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetTpmIdentifier
chrome.mojom.UtilWin_GetTpmIdentifier_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.UtilWin.GetTpmIdentifier_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

chrome.mojom.UtilWin_GetTpmIdentifier_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'tpm_identifier', packedOffset: 0, packedBitOffset: 0, type: chrome.mojom.TpmIdentifierSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chrome.mojom.UtilWinPtr = chrome.mojom.UtilWinRemote;
chrome.mojom.UtilWinRequest = chrome.mojom.UtilWinPendingReceiver;


// Interface: ProcessorMetrics
chrome.mojom.ProcessorMetrics = {};

chrome.mojom.ProcessorMetricsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome.mojom.ProcessorMetricsRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.ProcessorMetrics';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome.mojom.ProcessorMetricsPendingReceiver,
      handle);
    this.$ = new chrome.mojom.ProcessorMetricsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chrome.mojom.ProcessorMetricsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  recordProcessorMetrics() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chrome.mojom.ProcessorMetrics_RecordProcessorMetrics_ParamsSpec,
      null,
      []);
  }

};

chrome.mojom.ProcessorMetrics.getRemote = function() {
  let remote = new chrome.mojom.ProcessorMetricsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.ProcessorMetrics',
    'context');
  return remote.$;
};

// ParamsSpec for RecordProcessorMetrics
chrome.mojom.ProcessorMetrics_RecordProcessorMetrics_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ProcessorMetrics.RecordProcessorMetrics_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
chrome.mojom.ProcessorMetricsPtr = chrome.mojom.ProcessorMetricsRemote;
chrome.mojom.ProcessorMetricsRequest = chrome.mojom.ProcessorMetricsPendingReceiver;

