// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/util_win/public/mojom/util_win.mojom
// Module: chrome.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};
var mojo_base = mojo_base || {};
var sandbox = sandbox || {};

chrome.mojom.SelectFileDialogTypeSpec = { $: mojo.internal.Enum() };
chrome.mojom.CertificateTypeSpec = { $: mojo.internal.Enum() };
chrome.mojom.AntiVirusProductStateSpec = { $: mojo.internal.Enum() };
chrome.mojom.ShortcutOperationSpec = { $: mojo.internal.Enum() };
chrome.mojom.FileFilterSpecSpec = { $: {} };
chrome.mojom.InspectionResultSpec = { $: {} };
chrome.mojom.AntiVirusProductSpec = { $: {} };
chrome.mojom.TpmIdentifierSpec = { $: {} };
chrome.mojom.ClsIdSpec = { $: {} };
chrome.mojom.ShortcutPropertiesSpec = { $: {} };
chrome.mojom.UtilWin = {};
chrome.mojom.UtilWin.$interfaceName = 'chrome.mojom.UtilWin';
chrome.mojom.UtilWin_IsPinnedToTaskbar_ParamsSpec = { $: {} };
chrome.mojom.UtilWin_IsPinnedToTaskbar_ResponseParamsSpec = { $: {} };
chrome.mojom.UtilWin_UnpinShortcuts_ParamsSpec = { $: {} };
chrome.mojom.UtilWin_UnpinShortcuts_ResponseParamsSpec = { $: {} };
chrome.mojom.UtilWin_CreateOrUpdateShortcuts_ParamsSpec = { $: {} };
chrome.mojom.UtilWin_CreateOrUpdateShortcuts_ResponseParamsSpec = { $: {} };
chrome.mojom.UtilWin_CallExecuteSelectFile_ParamsSpec = { $: {} };
chrome.mojom.UtilWin_CallExecuteSelectFile_ResponseParamsSpec = { $: {} };
chrome.mojom.UtilWin_InspectModule_ParamsSpec = { $: {} };
chrome.mojom.UtilWin_InspectModule_ResponseParamsSpec = { $: {} };
chrome.mojom.UtilWin_GetAntiVirusProducts_ParamsSpec = { $: {} };
chrome.mojom.UtilWin_GetAntiVirusProducts_ResponseParamsSpec = { $: {} };
chrome.mojom.UtilWin_GetTpmIdentifier_ParamsSpec = { $: {} };
chrome.mojom.UtilWin_GetTpmIdentifier_ResponseParamsSpec = { $: {} };
chrome.mojom.ProcessorMetrics = {};
chrome.mojom.ProcessorMetrics.$interfaceName = 'chrome.mojom.ProcessorMetrics';
chrome.mojom.ProcessorMetrics_RecordProcessorMetrics_ParamsSpec = { $: {} };
chrome.mojom.ProcessorMetrics_RecordProcessorMetrics_ResponseParamsSpec = { $: {} };

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
mojo.internal.Struct(
    chrome.mojom.FileFilterSpecSpec, 'chrome.mojom.FileFilterSpec', [
      mojo.internal.StructField('description', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('extension_spec', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: InspectionResult
mojo.internal.Struct(
    chrome.mojom.InspectionResultSpec, 'chrome.mojom.InspectionResult', [
      mojo.internal.StructField('location', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('basename', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('product_name', 16, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('description', 24, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('version', 32, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('certificate_type', 40, 0, chrome.mojom.CertificateTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('certificate_path', 48, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('certificate_subject', 56, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 72]]);

// Struct: AntiVirusProduct
mojo.internal.Struct(
    chrome.mojom.AntiVirusProductSpec, 'chrome.mojom.AntiVirusProduct', [
      mojo.internal.StructField('product_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('product_version', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('state', 16, 0, chrome.mojom.AntiVirusProductStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('product_name_hash', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('product_version_hash', 28, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: TpmIdentifier
mojo.internal.Struct(
    chrome.mojom.TpmIdentifierSpec, 'chrome.mojom.TpmIdentifier', [
      mojo.internal.StructField('manufacturer_version', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('manufacturer_version_info', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('tpm_specific_version', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('manufacturer_id', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ClsId
mojo.internal.Struct(
    chrome.mojom.ClsIdSpec, 'chrome.mojom.ClsId', [
      mojo.internal.StructField('bytes', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ShortcutProperties
mojo.internal.Struct(
    chrome.mojom.ShortcutPropertiesSpec, 'chrome.mojom.ShortcutProperties', [
      mojo.internal.StructField('target', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('working_dir', 8, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arguments', 16, 0, mojo_base.mojom.WStringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('description', 24, 0, mojo_base.mojom.WStringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('icon', 32, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('app_id', 40, 0, mojo_base.mojom.WStringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('toast_activator_clsid', 48, 0, chrome.mojom.ClsIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('icon_index', 56, 0, mojo.internal.Int32, -1, false, 0, undefined),
      mojo.internal.StructField('options', 60, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 72]]);

// Interface: UtilWin
mojo.internal.Struct(
    chrome.mojom.UtilWin_IsPinnedToTaskbar_ParamsSpec, 'chrome.mojom.UtilWin_IsPinnedToTaskbar_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chrome.mojom.UtilWin_IsPinnedToTaskbar_ResponseParamsSpec, 'chrome.mojom.UtilWin_IsPinnedToTaskbar_ResponseParams', [
      mojo.internal.StructField('succeeded', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_pinned_to_taskbar', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.UtilWin_UnpinShortcuts_ParamsSpec, 'chrome.mojom.UtilWin_UnpinShortcuts_Params', [
      mojo.internal.StructField('shortcut_paths', 0, 0, mojo.internal.Array(mojo_base.mojom.FilePathSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.UtilWin_UnpinShortcuts_ResponseParamsSpec, 'chrome.mojom.UtilWin_UnpinShortcuts_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chrome.mojom.UtilWin_CreateOrUpdateShortcuts_ParamsSpec, 'chrome.mojom.UtilWin_CreateOrUpdateShortcuts_Params', [
      mojo.internal.StructField('shortcut_paths', 0, 0, mojo.internal.Array(mojo_base.mojom.FilePathSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('properties', 8, 0, mojo.internal.Array(chrome.mojom.ShortcutPropertiesSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('operation', 16, 0, chrome.mojom.ShortcutOperationSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    chrome.mojom.UtilWin_CreateOrUpdateShortcuts_ResponseParamsSpec, 'chrome.mojom.UtilWin_CreateOrUpdateShortcuts_ResponseParams', [
      mojo.internal.StructField('succeeded', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.UtilWin_CallExecuteSelectFile_ParamsSpec, 'chrome.mojom.UtilWin_CallExecuteSelectFile_Params', [
      mojo.internal.StructField('type', 0, 0, chrome.mojom.SelectFileDialogTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('title', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('default_path', 16, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('filter', 24, 0, mojo.internal.Array(chrome.mojom.FileFilterSpecSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('default_extension', 32, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('owner', 40, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('file_type_index', 44, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    chrome.mojom.UtilWin_CallExecuteSelectFile_ResponseParamsSpec, 'chrome.mojom.UtilWin_CallExecuteSelectFile_ResponseParams', [
      mojo.internal.StructField('paths', 0, 0, mojo.internal.Array(mojo_base.mojom.FilePathSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('file_type_index', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chrome.mojom.UtilWin_InspectModule_ParamsSpec, 'chrome.mojom.UtilWin_InspectModule_Params', [
      mojo.internal.StructField('module_path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.UtilWin_InspectModule_ResponseParamsSpec, 'chrome.mojom.UtilWin_InspectModule_ResponseParams', [
      mojo.internal.StructField('inspection_result', 0, 0, chrome.mojom.InspectionResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.UtilWin_GetAntiVirusProducts_ParamsSpec, 'chrome.mojom.UtilWin_GetAntiVirusProducts_Params', [
      mojo.internal.StructField('report_full_names', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.UtilWin_GetAntiVirusProducts_ResponseParamsSpec, 'chrome.mojom.UtilWin_GetAntiVirusProducts_ResponseParams', [
      mojo.internal.StructField('av_products', 0, 0, mojo.internal.Array(chrome.mojom.AntiVirusProductSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.UtilWin_GetTpmIdentifier_ParamsSpec, 'chrome.mojom.UtilWin_GetTpmIdentifier_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chrome.mojom.UtilWin_GetTpmIdentifier_ResponseParamsSpec, 'chrome.mojom.UtilWin_GetTpmIdentifier_ResponseParams', [
      mojo.internal.StructField('tpm_identifier', 0, 0, chrome.mojom.TpmIdentifierSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

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
  isPinnedToTaskbar() {
    return this.$.isPinnedToTaskbar();
  }
  unpinShortcuts(shortcut_paths) {
    return this.$.unpinShortcuts(shortcut_paths);
  }
  createOrUpdateShortcuts(shortcut_paths, properties, operation) {
    return this.$.createOrUpdateShortcuts(shortcut_paths, properties, operation);
  }
  callExecuteSelectFile(type, owner, title, default_path, filter, file_type_index, default_extension) {
    return this.$.callExecuteSelectFile(type, owner, title, default_path, filter, file_type_index, default_extension);
  }
  inspectModule(module_path) {
    return this.$.inspectModule(module_path);
  }
  getAntiVirusProducts(report_full_names) {
    return this.$.getAntiVirusProducts(report_full_names);
  }
  getTpmIdentifier() {
    return this.$.getTpmIdentifier();
  }
};

chrome.mojom.UtilWinRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('UtilWin', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  isPinnedToTaskbar() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chrome.mojom.UtilWin_IsPinnedToTaskbar_ParamsSpec,
      chrome.mojom.UtilWin_IsPinnedToTaskbar_ResponseParamsSpec,
      [],
      false);
  }

  unpinShortcuts(shortcut_paths) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      chrome.mojom.UtilWin_UnpinShortcuts_ParamsSpec,
      chrome.mojom.UtilWin_UnpinShortcuts_ResponseParamsSpec,
      [shortcut_paths],
      false);
  }

  createOrUpdateShortcuts(shortcut_paths, properties, operation) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      chrome.mojom.UtilWin_CreateOrUpdateShortcuts_ParamsSpec,
      chrome.mojom.UtilWin_CreateOrUpdateShortcuts_ResponseParamsSpec,
      [shortcut_paths, properties, operation],
      false);
  }

  callExecuteSelectFile(type, owner, title, default_path, filter, file_type_index, default_extension) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      chrome.mojom.UtilWin_CallExecuteSelectFile_ParamsSpec,
      chrome.mojom.UtilWin_CallExecuteSelectFile_ResponseParamsSpec,
      [type, owner, title, default_path, filter, file_type_index, default_extension],
      false);
  }

  inspectModule(module_path) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      chrome.mojom.UtilWin_InspectModule_ParamsSpec,
      chrome.mojom.UtilWin_InspectModule_ResponseParamsSpec,
      [module_path],
      false);
  }

  getAntiVirusProducts(report_full_names) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      chrome.mojom.UtilWin_GetAntiVirusProducts_ParamsSpec,
      chrome.mojom.UtilWin_GetAntiVirusProducts_ResponseParamsSpec,
      [report_full_names],
      false);
  }

  getTpmIdentifier() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      chrome.mojom.UtilWin_GetTpmIdentifier_ParamsSpec,
      chrome.mojom.UtilWin_GetTpmIdentifier_ResponseParamsSpec,
      [],
      false);
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

chrome.mojom.UtilWinReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('UtilWin', [
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
             decoder.decodeStructInline(chrome.mojom.UtilWin_IsPinnedToTaskbar_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.UtilWin_UnpinShortcuts_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.UtilWin_CreateOrUpdateShortcuts_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.UtilWin_CallExecuteSelectFile_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.UtilWin_InspectModule_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.UtilWin_GetAntiVirusProducts_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.UtilWin_GetTpmIdentifier_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.UtilWin_IsPinnedToTaskbar_ParamsSpec.$.structSpec);
          const result = this.impl.isPinnedToTaskbar();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chrome.mojom.UtilWin_IsPinnedToTaskbar_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.UtilWin_UnpinShortcuts_ParamsSpec.$.structSpec);
          const result = this.impl.unpinShortcuts(params.shortcut_paths);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chrome.mojom.UtilWin_UnpinShortcuts_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.UtilWin_CreateOrUpdateShortcuts_ParamsSpec.$.structSpec);
          const result = this.impl.createOrUpdateShortcuts(params.shortcut_paths, params.properties, params.operation);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chrome.mojom.UtilWin_CreateOrUpdateShortcuts_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.UtilWin_CallExecuteSelectFile_ParamsSpec.$.structSpec);
          const result = this.impl.callExecuteSelectFile(params.type, params.owner, params.title, params.default_path, params.filter, params.file_type_index, params.default_extension);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chrome.mojom.UtilWin_CallExecuteSelectFile_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.UtilWin_InspectModule_ParamsSpec.$.structSpec);
          const result = this.impl.inspectModule(params.module_path);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chrome.mojom.UtilWin_InspectModule_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.UtilWin_GetAntiVirusProducts_ParamsSpec.$.structSpec);
          const result = this.impl.getAntiVirusProducts(params.report_full_names);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chrome.mojom.UtilWin_GetAntiVirusProducts_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.UtilWin_GetTpmIdentifier_ParamsSpec.$.structSpec);
          const result = this.impl.getTpmIdentifier();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chrome.mojom.UtilWin_GetTpmIdentifier_ResponseParamsSpec);
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

chrome.mojom.UtilWinReceiver = chrome.mojom.UtilWinReceiver;

chrome.mojom.UtilWinPtr = chrome.mojom.UtilWinRemote;
chrome.mojom.UtilWinRequest = chrome.mojom.UtilWinPendingReceiver;


// Interface: ProcessorMetrics
mojo.internal.Struct(
    chrome.mojom.ProcessorMetrics_RecordProcessorMetrics_ParamsSpec, 'chrome.mojom.ProcessorMetrics_RecordProcessorMetrics_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chrome.mojom.ProcessorMetrics_RecordProcessorMetrics_ResponseParamsSpec, 'chrome.mojom.ProcessorMetrics_RecordProcessorMetrics_ResponseParams', [
    ],
    [[0, 8]]);

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
  recordProcessorMetrics() {
    return this.$.recordProcessorMetrics();
  }
};

chrome.mojom.ProcessorMetricsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ProcessorMetrics', [
      { explicit: null },
    ]);
  }

  recordProcessorMetrics() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chrome.mojom.ProcessorMetrics_RecordProcessorMetrics_ParamsSpec,
      chrome.mojom.ProcessorMetrics_RecordProcessorMetrics_ResponseParamsSpec,
      [],
      false);
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

chrome.mojom.ProcessorMetricsReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ProcessorMetrics', [
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
             decoder.decodeStructInline(chrome.mojom.ProcessorMetrics_RecordProcessorMetrics_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.ProcessorMetrics_RecordProcessorMetrics_ParamsSpec.$.structSpec);
          const result = this.impl.recordProcessorMetrics();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chrome.mojom.ProcessorMetrics_RecordProcessorMetrics_ResponseParamsSpec);
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

chrome.mojom.ProcessorMetricsReceiver = chrome.mojom.ProcessorMetricsReceiver;

chrome.mojom.ProcessorMetricsPtr = chrome.mojom.ProcessorMetricsRemote;
chrome.mojom.ProcessorMetricsRequest = chrome.mojom.ProcessorMetricsPendingReceiver;

