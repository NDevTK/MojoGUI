// Auto-generated MojoJS binding
 // Source: chromium_src/chrome/services/util_win/public/mojom/util_win.mojom
 // Module: chrome.mojom

 'use strict';
 (function() {
   const SHA256 = (s) => {
     const K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xD5A79147, 0x06CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585,0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2];
     const h = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
     const m = new TextEncoder().encode(s);
     const l = m.length;
     const b = new Uint32Array(((l + 8) >> 6) + 1 << 4);
     for (let i = 0; i < l; i++) b[i >> 2] |= m[i] << (24 - (i & 3) * 8);
     b[l >> 2] |= 0x80 << (24 - (l & 3) * 8);
     b[b.length - 1] = l * 8;
     for (let i = 0; i < b.length; i += 16) {
       let [a1, b1, c1, d1, e1, f1, g1, h1] = h;
       const w = new Uint32Array(64);
       for (let j = 0; j < 64; j++) {
         if (j < 16) w[j] = b[i + j];
         else {
           const s0 = ((w[j-15]>>>7)|(w[j-15]<<25))^((w[j-15]>>>18)|(w[j-15]<<14))^(w[j-15]>>>3);
           const s1 = ((w[j-2]>>>17)|(w[j-2]<<15))^((w[j-2]>>>19)|(w[j-2]<<13))^(w[j-2]>>>10);
           w[j] = (w[j-16]+s0+w[j-7]+s1)|0;
         }
         const t1 = (h1 + (((e1>>>6)|(e1<<26))^((e1>>>11)|(e1<<21))^((e1>>>25)|(e1<<7))) + ((e1&f1)^((~e1)&g1)) + K[j] + w[j])|0;
         const t2 = ((((a1>>>2)|(a1<<30))^((a1>>>13)|(a1<<19))^((a1>>>22)|(a1<<10))) + ((a1&b1)^(a1&c1)^(b1&c1)))|0;
         h1 = g1; g1 = f1; f1 = e1; e1 = (d1 + t1) | 0; d1 = c1; c1 = b1; b1 = a1; a1 = (t1 + t2) | 0;
       }
       h[0] = (h[0] + a1) | 0; h[1] = (h[1] + b1) | 0; h[2] = (h[2] + c1) | 0; h[3] = (h[3] + d1) | 0;
       h[4] = (h[4] + e1) | 0; h[5] = (h[5] + f1) | 0; h[6] = (h[6] + g1) | 0; h[7] = (h[7] + h1) | 0;
     }
     return h[0];
   };
   window.mojoScrambler = window.mojoScrambler || {
     getOrdinals: (ifaceName, methodSpecs) => {
       const params = new URLSearchParams(window.location.search);
       const forceNoScramble = params.get('scramble') === '0' || window.mojoNoScramble;
       
       const seen = new Set();
       methodSpecs.forEach(ms => { if (ms.explicit !== null) seen.add(ms.explicit); });
       let i = 0;
       return methodSpecs.map((ms, idx) => {
         if (ms.explicit !== null) return ms.explicit;
         if (forceNoScramble) return idx;

         const versionStr = window.mojoVersion || '120.0.0.0';
         const p = versionStr.split('.');
         const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
         
         const shortName = ifaceName.split('.').pop();
         while (true) {
           i++;
           const h0 = SHA256(salt + shortName + i);
           const ord = (((h0 & 0xFF) << 24) | ((h0 & 0xFF00) << 8) | ((h0 & 0xFF0000) >> 8) | (h0 >>> 24)) & 0x7fffffff;
           if (!seen.has(ord)) {
             seen.add(ord);
             return ord;
           }
         }
       });
     }
   };
 })();

 // Module namespace
 var mojo = mojo || {};
 mojo.internal = mojo.internal || {};
 mojo.internal.bindings = mojo.internal.bindings || {};
 

 mojo.internal.bindings.chrome = mojo.internal.bindings.chrome || {};
mojo.internal.bindings.chrome.mojom = mojo.internal.bindings.chrome.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.sandbox = mojo.internal.bindings.sandbox || {};

mojo.internal.bindings.chrome.mojom.SelectFileDialogTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.chrome.mojom.CertificateTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.chrome.mojom.AntiVirusProductStateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.chrome.mojom.ShortcutOperationSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.chrome.mojom.FileFilterSpecSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.InspectionResultSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.AntiVirusProductSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.TpmIdentifierSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.ClsIdSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.ShortcutPropertiesSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.UtilWin = {};
mojo.internal.bindings.chrome.mojom.UtilWinSpec = { $ : {} };
mojo.internal.bindings.chrome.mojom.UtilWin.$interfaceName = 'chrome.mojom.UtilWin';
mojo.internal.bindings.chrome.mojom.UtilWin_IsPinnedToTaskbar_ParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.UtilWin_IsPinnedToTaskbar_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.UtilWin_UnpinShortcuts_ParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.UtilWin_UnpinShortcuts_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.UtilWin_CreateOrUpdateShortcuts_ParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.UtilWin_CreateOrUpdateShortcuts_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.UtilWin_CallExecuteSelectFile_ParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.UtilWin_CallExecuteSelectFile_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.UtilWin_InspectModule_ParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.UtilWin_InspectModule_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.UtilWin_GetAntiVirusProducts_ParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.UtilWin_GetAntiVirusProducts_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.UtilWin_GetTpmIdentifier_ParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.UtilWin_GetTpmIdentifier_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.ProcessorMetrics = {};
mojo.internal.bindings.chrome.mojom.ProcessorMetricsSpec = { $ : {} };
mojo.internal.bindings.chrome.mojom.ProcessorMetrics.$interfaceName = 'chrome.mojom.ProcessorMetrics';
mojo.internal.bindings.chrome.mojom.ProcessorMetrics_RecordProcessorMetrics_ParamsSpec = { $: {} };
mojo.internal.bindings.chrome.mojom.ProcessorMetrics_RecordProcessorMetrics_ResponseParamsSpec = { $: {} };

// Enum: SelectFileDialogType
mojo.internal.bindings.chrome.mojom.SelectFileDialogType = {
  kNone: 0,
  kFolder: 1,
  kUploadFolder: 2,
  kExistingFolder: 3,
  kSaveAsFile: 4,
  kOpenFile: 5,
  kOpenMultiFile: 6,
};

// Enum: CertificateType
mojo.internal.bindings.chrome.mojom.CertificateType = {
  kNoCertificate: 0,
  kCertificateInFile: 1,
  kCertificateInCatalog: 2,
};

// Enum: AntiVirusProductState
mojo.internal.bindings.chrome.mojom.AntiVirusProductState = {
  kOn: 0,
  kOff: 1,
  kSnoozed: 2,
  kExpired: 3,
};

// Enum: ShortcutOperation
mojo.internal.bindings.chrome.mojom.ShortcutOperation = {
  kCreateAlways: 0,
  kReplaceExisting: 1,
  kUpdateExisting: 2,
};

// Struct: FileFilterSpec
mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.FileFilterSpecSpec, 'chrome.mojom.FileFilterSpec', [
      mojo.internal.StructField('arg_description', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_extension_spec', 8, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: InspectionResult
mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.InspectionResultSpec, 'chrome.mojom.InspectionResult', [
      mojo.internal.StructField('arg_location', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_basename', 8, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_product_name', 16, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_description', 24, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_version', 32, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_certificate_type', 40, 0, mojo.internal.bindings.chrome.mojom.CertificateTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_certificate_path', 48, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_certificate_subject', 56, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 72]]);

// Struct: AntiVirusProduct
mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.AntiVirusProductSpec, 'chrome.mojom.AntiVirusProduct', [
      mojo.internal.StructField('arg_product_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_product_version', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_state', 16, 0, mojo.internal.bindings.chrome.mojom.AntiVirusProductStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_product_name_hash', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_product_version_hash', 28, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: TpmIdentifier
mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.TpmIdentifierSpec, 'chrome.mojom.TpmIdentifier', [
      mojo.internal.StructField('arg_manufacturer_version', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_manufacturer_version_info', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_tpm_specific_version', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_manufacturer_id', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ClsId
mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.ClsIdSpec, 'chrome.mojom.ClsId', [
      mojo.internal.StructField('arg_bytes', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ShortcutProperties
mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.ShortcutPropertiesSpec, 'chrome.mojom.ShortcutProperties', [
      mojo.internal.StructField('arg_target', 0, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_working_dir', 8, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_arguments', 16, 0, mojo.internal.bindings.mojo_base.mojom.WStringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_description', 24, 0, mojo.internal.bindings.mojo_base.mojom.WStringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_icon', 32, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_app_id', 40, 0, mojo.internal.bindings.mojo_base.mojom.WStringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_toast_activator_clsid', 48, 0, mojo.internal.bindings.chrome.mojom.ClsIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_icon_index', 56, 0, mojo.internal.Int32, -1, false, 0, undefined),
      mojo.internal.StructField('arg_options', 60, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 72]]);

// Interface: UtilWin
mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.UtilWin_IsPinnedToTaskbar_ParamsSpec, 'chrome.mojom.UtilWin_IsPinnedToTaskbar_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.UtilWin_IsPinnedToTaskbar_ResponseParamsSpec, 'chrome.mojom.UtilWin_IsPinnedToTaskbar_ResponseParams', [
      mojo.internal.StructField('arg_succeeded', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_pinned_to_taskbar', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.UtilWin_UnpinShortcuts_ParamsSpec, 'chrome.mojom.UtilWin_UnpinShortcuts_Params', [
      mojo.internal.StructField('arg_shortcut_paths', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.UtilWin_UnpinShortcuts_ResponseParamsSpec, 'chrome.mojom.UtilWin_UnpinShortcuts_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.UtilWin_CreateOrUpdateShortcuts_ParamsSpec, 'chrome.mojom.UtilWin_CreateOrUpdateShortcuts_Params', [
      mojo.internal.StructField('arg_shortcut_paths', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_properties', 8, 0, mojo.internal.Array(mojo.internal.bindings.chrome.mojom.ShortcutPropertiesSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_operation', 16, 0, mojo.internal.bindings.chrome.mojom.ShortcutOperationSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.UtilWin_CreateOrUpdateShortcuts_ResponseParamsSpec, 'chrome.mojom.UtilWin_CreateOrUpdateShortcuts_ResponseParams', [
      mojo.internal.StructField('arg_succeeded', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.UtilWin_CallExecuteSelectFile_ParamsSpec, 'chrome.mojom.UtilWin_CallExecuteSelectFile_Params', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.bindings.chrome.mojom.SelectFileDialogTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_title', 8, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_default_path', 16, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_filter', 24, 0, mojo.internal.Array(mojo.internal.bindings.chrome.mojom.FileFilterSpecSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_default_extension', 32, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_owner', 40, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_file_type_index', 44, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.UtilWin_CallExecuteSelectFile_ResponseParamsSpec, 'chrome.mojom.UtilWin_CallExecuteSelectFile_ResponseParams', [
      mojo.internal.StructField('arg_paths', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_file_type_index', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.UtilWin_InspectModule_ParamsSpec, 'chrome.mojom.UtilWin_InspectModule_Params', [
      mojo.internal.StructField('arg_module_path', 0, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.UtilWin_InspectModule_ResponseParamsSpec, 'chrome.mojom.UtilWin_InspectModule_ResponseParams', [
      mojo.internal.StructField('arg_inspection_result', 0, 0, mojo.internal.bindings.chrome.mojom.InspectionResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.UtilWin_GetAntiVirusProducts_ParamsSpec, 'chrome.mojom.UtilWin_GetAntiVirusProducts_Params', [
      mojo.internal.StructField('arg_report_full_names', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.UtilWin_GetAntiVirusProducts_ResponseParamsSpec, 'chrome.mojom.UtilWin_GetAntiVirusProducts_ResponseParams', [
      mojo.internal.StructField('arg_av_products', 0, 0, mojo.internal.Array(mojo.internal.bindings.chrome.mojom.AntiVirusProductSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.UtilWin_GetTpmIdentifier_ParamsSpec, 'chrome.mojom.UtilWin_GetTpmIdentifier_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.UtilWin_GetTpmIdentifier_ResponseParamsSpec, 'chrome.mojom.UtilWin_GetTpmIdentifier_ResponseParams', [
      mojo.internal.StructField('arg_tpm_identifier', 0, 0, mojo.internal.bindings.chrome.mojom.TpmIdentifierSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.chrome.mojom.UtilWinPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.chrome.mojom.UtilWinRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.UtilWin';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.chrome.mojom.UtilWinPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.chrome.mojom.UtilWinRemoteCallHandler(this.proxy);
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
  unpinShortcuts(arg_shortcut_paths) {
    return this.$.unpinShortcuts(arg_shortcut_paths);
  }
  createOrUpdateShortcuts(arg_shortcut_paths, arg_properties, arg_operation) {
    return this.$.createOrUpdateShortcuts(arg_shortcut_paths, arg_properties, arg_operation);
  }
  callExecuteSelectFile(arg_type, arg_owner, arg_title, arg_default_path, arg_filter, arg_file_type_index, arg_default_extension) {
    return this.$.callExecuteSelectFile(arg_type, arg_owner, arg_title, arg_default_path, arg_filter, arg_file_type_index, arg_default_extension);
  }
  inspectModule(arg_module_path) {
    return this.$.inspectModule(arg_module_path);
  }
  getAntiVirusProducts(arg_report_full_names) {
    return this.$.getAntiVirusProducts(arg_report_full_names);
  }
  getTpmIdentifier() {
    return this.$.getTpmIdentifier();
  }
};

mojo.internal.bindings.chrome.mojom.UtilWinRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('chrome.mojom.UtilWin', [
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
      mojo.internal.bindings.chrome.mojom.UtilWin_IsPinnedToTaskbar_ParamsSpec,
      mojo.internal.bindings.chrome.mojom.UtilWin_IsPinnedToTaskbar_ResponseParamsSpec,
      [],
      false);
  }

  unpinShortcuts(arg_shortcut_paths) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.chrome.mojom.UtilWin_UnpinShortcuts_ParamsSpec,
      mojo.internal.bindings.chrome.mojom.UtilWin_UnpinShortcuts_ResponseParamsSpec,
      [arg_shortcut_paths],
      false);
  }

  createOrUpdateShortcuts(arg_shortcut_paths, arg_properties, arg_operation) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.chrome.mojom.UtilWin_CreateOrUpdateShortcuts_ParamsSpec,
      mojo.internal.bindings.chrome.mojom.UtilWin_CreateOrUpdateShortcuts_ResponseParamsSpec,
      [arg_shortcut_paths, arg_properties, arg_operation],
      false);
  }

  callExecuteSelectFile(arg_type, arg_owner, arg_title, arg_default_path, arg_filter, arg_file_type_index, arg_default_extension) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.chrome.mojom.UtilWin_CallExecuteSelectFile_ParamsSpec,
      mojo.internal.bindings.chrome.mojom.UtilWin_CallExecuteSelectFile_ResponseParamsSpec,
      [arg_type, arg_owner, arg_title, arg_default_path, arg_filter, arg_file_type_index, arg_default_extension],
      false);
  }

  inspectModule(arg_module_path) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.chrome.mojom.UtilWin_InspectModule_ParamsSpec,
      mojo.internal.bindings.chrome.mojom.UtilWin_InspectModule_ResponseParamsSpec,
      [arg_module_path],
      false);
  }

  getAntiVirusProducts(arg_report_full_names) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.chrome.mojom.UtilWin_GetAntiVirusProducts_ParamsSpec,
      mojo.internal.bindings.chrome.mojom.UtilWin_GetAntiVirusProducts_ResponseParamsSpec,
      [arg_report_full_names],
      false);
  }

  getTpmIdentifier() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.chrome.mojom.UtilWin_GetTpmIdentifier_ParamsSpec,
      mojo.internal.bindings.chrome.mojom.UtilWin_GetTpmIdentifier_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.chrome.mojom.UtilWin.getRemote = function() {
  let remote = new mojo.internal.bindings.chrome.mojom.UtilWinRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.UtilWin',
    'context');
  return remote.$;
};

mojo.internal.bindings.chrome.mojom.UtilWinReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('chrome.mojom.UtilWin', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: IsPinnedToTaskbar
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.UtilWin_IsPinnedToTaskbar_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsPinnedToTaskbar (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: UnpinShortcuts
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.UtilWin_UnpinShortcuts_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UnpinShortcuts (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: CreateOrUpdateShortcuts
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.UtilWin_CreateOrUpdateShortcuts_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateOrUpdateShortcuts (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: CallExecuteSelectFile
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.UtilWin_CallExecuteSelectFile_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CallExecuteSelectFile (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: InspectModule
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.UtilWin_InspectModule_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InspectModule (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: GetAntiVirusProducts
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.UtilWin_GetAntiVirusProducts_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAntiVirusProducts (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: GetTpmIdentifier
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.UtilWin_GetTpmIdentifier_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetTpmIdentifier (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.UtilWin_IsPinnedToTaskbar_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.isPinnedToTaskbar');
          const result = this.impl.isPinnedToTaskbar();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chrome.mojom.UtilWin_IsPinnedToTaskbar_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] IsPinnedToTaskbar FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.UtilWin_UnpinShortcuts_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.unpinShortcuts');
          const result = this.impl.unpinShortcuts(params.arg_shortcut_paths);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chrome.mojom.UtilWin_UnpinShortcuts_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] UnpinShortcuts FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.UtilWin_CreateOrUpdateShortcuts_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createOrUpdateShortcuts');
          const result = this.impl.createOrUpdateShortcuts(params.arg_shortcut_paths, params.arg_properties, params.arg_operation);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chrome.mojom.UtilWin_CreateOrUpdateShortcuts_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CreateOrUpdateShortcuts FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.UtilWin_CallExecuteSelectFile_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.callExecuteSelectFile');
          const result = this.impl.callExecuteSelectFile(params.arg_type, params.arg_owner, params.arg_title, params.arg_default_path, params.arg_filter, params.arg_file_type_index, params.arg_default_extension);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chrome.mojom.UtilWin_CallExecuteSelectFile_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CallExecuteSelectFile FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.UtilWin_InspectModule_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.inspectModule');
          const result = this.impl.inspectModule(params.arg_module_path);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chrome.mojom.UtilWin_InspectModule_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] InspectModule FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.UtilWin_GetAntiVirusProducts_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getAntiVirusProducts');
          const result = this.impl.getAntiVirusProducts(params.arg_report_full_names);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chrome.mojom.UtilWin_GetAntiVirusProducts_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetAntiVirusProducts FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.UtilWin_GetTpmIdentifier_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getTpmIdentifier');
          const result = this.impl.getTpmIdentifier();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chrome.mojom.UtilWin_GetTpmIdentifier_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetTpmIdentifier FAILED:', e));
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.chrome.mojom.UtilWinReceiver = mojo.internal.bindings.chrome.mojom.UtilWinReceiver;

mojo.internal.bindings.chrome.mojom.UtilWinPtr = mojo.internal.bindings.chrome.mojom.UtilWinRemote;
mojo.internal.bindings.chrome.mojom.UtilWinRequest = mojo.internal.bindings.chrome.mojom.UtilWinPendingReceiver;


// Interface: ProcessorMetrics
mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.ProcessorMetrics_RecordProcessorMetrics_ParamsSpec, 'chrome.mojom.ProcessorMetrics_RecordProcessorMetrics_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.chrome.mojom.ProcessorMetrics_RecordProcessorMetrics_ResponseParamsSpec, 'chrome.mojom.ProcessorMetrics_RecordProcessorMetrics_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.bindings.chrome.mojom.ProcessorMetricsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.chrome.mojom.ProcessorMetricsRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.ProcessorMetrics';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.chrome.mojom.ProcessorMetricsPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.chrome.mojom.ProcessorMetricsRemoteCallHandler(this.proxy);
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

mojo.internal.bindings.chrome.mojom.ProcessorMetricsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('chrome.mojom.ProcessorMetrics', [
      { explicit: null },
    ]);
  }

  recordProcessorMetrics() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.chrome.mojom.ProcessorMetrics_RecordProcessorMetrics_ParamsSpec,
      mojo.internal.bindings.chrome.mojom.ProcessorMetrics_RecordProcessorMetrics_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.chrome.mojom.ProcessorMetrics.getRemote = function() {
  let remote = new mojo.internal.bindings.chrome.mojom.ProcessorMetricsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.ProcessorMetrics',
    'context');
  return remote.$;
};

mojo.internal.bindings.chrome.mojom.ProcessorMetricsReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('chrome.mojom.ProcessorMetrics', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: RecordProcessorMetrics
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.ProcessorMetrics_RecordProcessorMetrics_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordProcessorMetrics (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.chrome.mojom.ProcessorMetrics_RecordProcessorMetrics_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.recordProcessorMetrics');
          const result = this.impl.recordProcessorMetrics();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.chrome.mojom.ProcessorMetrics_RecordProcessorMetrics_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RecordProcessorMetrics FAILED:', e));
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.chrome.mojom.ProcessorMetricsReceiver = mojo.internal.bindings.chrome.mojom.ProcessorMetricsReceiver;

mojo.internal.bindings.chrome.mojom.ProcessorMetricsPtr = mojo.internal.bindings.chrome.mojom.ProcessorMetricsRemote;
mojo.internal.bindings.chrome.mojom.ProcessorMetricsRequest = mojo.internal.bindings.chrome.mojom.ProcessorMetricsPendingReceiver;

