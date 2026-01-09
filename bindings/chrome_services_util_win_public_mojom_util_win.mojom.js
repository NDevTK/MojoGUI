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

// Enum: CertificateType
chrome.mojom.CertificateType = {
  kNoCertificate: 0,
  kCertificateInFile: 1,
  kCertificateInCatalog: 2,
};

// Enum: AntiVirusProductState
chrome.mojom.AntiVirusProductState = {
  kOn: 0,
  kOff: 1,
  kSnoozed: 2,
  kExpired: 3,
};

// Enum: ShortcutOperation
chrome.mojom.ShortcutOperation = {
  kCreateAlways: 0,
  kReplaceExisting: 1,
  kUpdateExisting: 2,
};

// Struct: FileFilterSpec
chrome.mojom.FileFilterSpecSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.FileFilterSpec',
      packedSize: 16,
      fields: [
        { name: 'extension_spec', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: InspectionResult
chrome.mojom.InspectionResultSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.InspectionResult',
      packedSize: 16,
      fields: [
        { name: 'certificate_subject', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AntiVirusProduct
chrome.mojom.AntiVirusProductSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.AntiVirusProduct',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TpmIdentifier
chrome.mojom.TpmIdentifierSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.TpmIdentifier',
      packedSize: 16,
      fields: [
        { name: 'tpm_specific_version', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'bytes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ShortcutProperties
chrome.mojom.ShortcutPropertiesSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ShortcutProperties',
      packedSize: 16,
      fields: [
        { name: 'options', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
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
      versions: [{version: 0}]
    }
  }
};

chrome.mojom.UtilWin_IsPinnedToTaskbar_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.UtilWin.IsPinnedToTaskbar_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'succeeded', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'is_pinned_to_taskbar', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'shortcut_paths', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'shortcut_paths', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'properties', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'operation', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

chrome.mojom.UtilWin_CreateOrUpdateShortcuts_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.UtilWin.CreateOrUpdateShortcuts_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'succeeded', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CallExecuteSelectFile
chrome.mojom.UtilWin_CallExecuteSelectFile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.UtilWin.CallExecuteSelectFile_Params',
      packedSize: 64,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'owner', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'title', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'default_path', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'filter', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'file_type_index', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'default_extension', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

chrome.mojom.UtilWin_CallExecuteSelectFile_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.UtilWin.CallExecuteSelectFile_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'paths', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'file_type_index', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'module_path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

chrome.mojom.UtilWin_InspectModule_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.UtilWin.InspectModule_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'inspection_result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'report_full_names', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

chrome.mojom.UtilWin_GetAntiVirusProducts_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.UtilWin.GetAntiVirusProducts_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'av_products', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
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
      versions: [{version: 0}]
    }
  }
};

chrome.mojom.UtilWin_GetTpmIdentifier_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.UtilWin.GetTpmIdentifier_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'tpm_identifier', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
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
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
chrome.mojom.ProcessorMetricsPtr = chrome.mojom.ProcessorMetricsRemote;
chrome.mojom.ProcessorMetricsRequest = chrome.mojom.ProcessorMetricsPendingReceiver;

