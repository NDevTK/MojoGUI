// Auto-generated MojoJS binding
 // Source: chromium_src/chromeos/crosapi/mojom/document_scan.mojom
 // Module: crosapi.mojom

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
 

 mojo.internal.bindings.crosapi = mojo.internal.bindings.crosapi || {};
mojo.internal.bindings.crosapi.mojom = mojo.internal.bindings.crosapi.mojom || {};

mojo.internal.bindings.crosapi.mojom.ScanFailureModeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.ScannerOperationResultSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.ConnectionTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.OptionTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.OptionUnitSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.OptionConstraintTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.OptionConfigurabilitySpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.OptionValueSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.OptionConstraintRestrictionSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.ScannerInfoSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.ScannerEnumFilterSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.IntRangeSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.FixedRangeSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.OptionConstraintSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.ScannerOptionSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.GetScannerListResponseSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.OpenScannerResponseSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.CloseScannerResponseSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.StartScanOptionsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.StartPreparedScanResponseSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.ReadScanDataResponseSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.OptionSettingSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.OptionGroupSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.SetOptionResultSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.SetOptionsResponseSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.GetOptionGroupsResponseSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.CancelScanResponseSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DocumentScan = {};
mojo.internal.bindings.crosapi.mojom.DocumentScanSpec = { $ : {} };
mojo.internal.bindings.crosapi.mojom.DocumentScan.$interfaceName = 'crosapi.mojom.DocumentScan';
mojo.internal.bindings.crosapi.mojom.DocumentScan_OpenScanner_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DocumentScan_OpenScanner_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DocumentScan_CloseScanner_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DocumentScan_CloseScanner_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DocumentScan_StartPreparedScan_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DocumentScan_StartPreparedScan_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DocumentScan_ReadScanData_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DocumentScan_ReadScanData_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DocumentScan_SetOptions_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DocumentScan_SetOptions_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DocumentScan_GetOptionGroups_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DocumentScan_GetOptionGroups_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DocumentScan_CancelScan_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DocumentScan_CancelScan_ResponseParamsSpec = { $: {} };

// Enum: ScanFailureMode
mojo.internal.bindings.crosapi.mojom.ScanFailureMode = {
  kNoFailure: 0,
  kUnknown: 1,
  kDeviceBusy: 2,
  kAdfJammed: 3,
  kAdfEmpty: 4,
  kFlatbedOpen: 5,
  kIoError: 6,
};

// Enum: ScannerOperationResult
mojo.internal.bindings.crosapi.mojom.ScannerOperationResult = {
  kUnknown: 0,
  kSuccess: 1,
  kUnsupported: 2,
  kCancelled: 3,
  kDeviceBusy: 4,
  kInvalid: 5,
  kWrongType: 6,
  kEndOfData: 7,
  kAdfJammed: 8,
  kAdfEmpty: 9,
  kCoverOpen: 10,
  kIoError: 11,
  kAccessDenied: 12,
  kNoMemory: 13,
  kDeviceUnreachable: 14,
  kDeviceMissing: 15,
  kInternalError: 16,
};

// Enum: ConnectionType
mojo.internal.bindings.crosapi.mojom.ConnectionType = {
  kUnspecified: 0,
  kUsb: 1,
  kNetwork: 2,
};

// Enum: OptionType
mojo.internal.bindings.crosapi.mojom.OptionType = {
  kUnknown: 0,
  kBool: 1,
  kInt: 2,
  kFixed: 3,
  kString: 4,
  kButton: 5,
  kGroup: 6,
};

// Enum: OptionUnit
mojo.internal.bindings.crosapi.mojom.OptionUnit = {
  kUnitless: 0,
  kPixel: 1,
  kBit: 2,
  kMm: 3,
  kDpi: 4,
  kPercent: 5,
  kMicrosecond: 6,
};

// Enum: OptionConstraintType
mojo.internal.bindings.crosapi.mojom.OptionConstraintType = {
  kNone: 0,
  kIntRange: 1,
  kFixedRange: 2,
  kIntList: 3,
  kFixedList: 4,
  kStringList: 5,
};

// Enum: OptionConfigurability
mojo.internal.bindings.crosapi.mojom.OptionConfigurability = {
  kNotConfigurable: 0,
  kSoftwareConfigurable: 1,
  kHardwareConfigurable: 2,
};

// Union: OptionValue
mojo.internal.Union(
    mojo.internal.bindings.crosapi.mojom.OptionValueSpec, 'crosapi.mojom.OptionValue', {
      'arg_bool_value': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'arg_int_value': {
        'ordinal': 1,
        'type': mojo.internal.Int32,
        'nullable': false,
      },
      'arg_int_list': {
        'ordinal': 2,
        'type': mojo.internal.Array(mojo.internal.Int32, false),
        'nullable': false,
      },
      'arg_fixed_value': {
        'ordinal': 3,
        'type': mojo.internal.Double,
        'nullable': false,
      },
      'arg_fixed_list': {
        'ordinal': 4,
        'type': mojo.internal.Array(mojo.internal.Double, false),
        'nullable': false,
      },
      'arg_string_value': {
        'ordinal': 5,
        'type': mojo.internal.String,
        'nullable': false,
      },
    });

// Union: OptionConstraintRestriction
mojo.internal.Union(
    mojo.internal.bindings.crosapi.mojom.OptionConstraintRestrictionSpec, 'crosapi.mojom.OptionConstraintRestriction', {
      'arg_int_range': {
        'ordinal': 0,
        'type': mojo.internal.bindings.crosapi.mojom.IntRangeSpec.$,
        'nullable': false,
      },
      'arg_fixed_range': {
        'ordinal': 1,
        'type': mojo.internal.bindings.crosapi.mojom.FixedRangeSpec.$,
        'nullable': false,
      },
      'arg_valid_int': {
        'ordinal': 2,
        'type': mojo.internal.Array(mojo.internal.Int32, false),
        'nullable': false,
      },
      'arg_valid_fixed': {
        'ordinal': 3,
        'type': mojo.internal.Array(mojo.internal.Double, false),
        'nullable': false,
      },
      'arg_valid_string': {
        'ordinal': 4,
        'type': mojo.internal.Array(mojo.internal.String, false),
        'nullable': false,
      },
    });

// Struct: ScannerInfo
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.ScannerInfoSpec, 'crosapi.mojom.ScannerInfo', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_display_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_manufacturer', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_model', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_device_uuid', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_connection_type', 40, 0, mojo.internal.bindings.crosapi.mojom.ConnectionTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_image_formats', 48, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_kUnspecified', 56, 0, mojo.internal.Pointer, 0, false, 0, undefined),
      mojo.internal.StructField('arg_val', 64, 0, mojo.internal.Pointer, 1, false, 0, undefined),
      mojo.internal.StructField('arg_val', 72, 0, mojo.internal.Pointer, 2, false, 0, undefined),
      mojo.internal.StructField('arg_secure', 80, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 96]]);

// Struct: ScannerEnumFilter
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.ScannerEnumFilterSpec, 'crosapi.mojom.ScannerEnumFilter', [
      mojo.internal.StructField('arg_local', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_secure', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: IntRange
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.IntRangeSpec, 'crosapi.mojom.IntRange', [
      mojo.internal.StructField('arg_min', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_max', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_quant', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: FixedRange
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.FixedRangeSpec, 'crosapi.mojom.FixedRange', [
      mojo.internal.StructField('arg_min', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_max', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_quant', 16, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: OptionConstraint
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.OptionConstraintSpec, 'crosapi.mojom.OptionConstraint', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.bindings.crosapi.mojom.OptionConstraintTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_restriction', 8, 0, mojo.internal.bindings.crosapi.mojom.OptionConstraintRestrictionSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ScannerOption
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.ScannerOptionSpec, 'crosapi.mojom.ScannerOption', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_title', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_description', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_type', 24, 0, mojo.internal.bindings.crosapi.mojom.OptionTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_unit', 32, 0, mojo.internal.bindings.crosapi.mojom.OptionUnitSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_value', 40, 0, mojo.internal.bindings.crosapi.mojom.OptionValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_constraint', 48, 0, mojo.internal.bindings.crosapi.mojom.OptionConstraintSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_configurability', 56, 0, mojo.internal.bindings.crosapi.mojom.OptionConfigurabilitySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_isDetectable', 64, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_isAutoSettable', 64, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_isEmulated', 64, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_isActive', 64, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_isAdvanced', 64, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_isInternal', 64, 5, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 80]]);

// Struct: GetScannerListResponse
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.GetScannerListResponseSpec, 'crosapi.mojom.GetScannerListResponse', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.crosapi.mojom.ScannerOperationResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_scanners', 8, 0, mojo.internal.Array(mojo.internal.bindings.crosapi.mojom.ScannerInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: OpenScannerResponse
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.OpenScannerResponseSpec, 'crosapi.mojom.OpenScannerResponse', [
      mojo.internal.StructField('arg_scanner_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_result', 8, 0, mojo.internal.bindings.crosapi.mojom.ScannerOperationResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_scanner_handle', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_options', 24, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.bindings.crosapi.mojom.ScannerOptionSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: CloseScannerResponse
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.CloseScannerResponseSpec, 'crosapi.mojom.CloseScannerResponse', [
      mojo.internal.StructField('arg_scanner_handle', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_result', 8, 0, mojo.internal.bindings.crosapi.mojom.ScannerOperationResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: StartScanOptions
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.StartScanOptionsSpec, 'crosapi.mojom.StartScanOptions', [
      mojo.internal.StructField('arg_format', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_max_read_size_$value', 8, 0, mojo.internal.Uint32, 0, false, 1, { isPrimary: false, linkedValueFieldName: 'arg_max_read_size_$flag', originalFieldName: 'arg_max_read_size' }),
      mojo.internal.StructField('arg_max_read_size_$flag', 12, 0, mojo.internal.Bool, false, false, 1, { isPrimary: true, linkedValueFieldName: 'arg_max_read_size_$value', originalFieldName: 'arg_max_read_size' }),
    ],
    [[0, 16], [1, 24]]);

// Struct: StartPreparedScanResponse
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.StartPreparedScanResponseSpec, 'crosapi.mojom.StartPreparedScanResponse', [
      mojo.internal.StructField('arg_scanner_handle', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_result', 8, 0, mojo.internal.bindings.crosapi.mojom.ScannerOperationResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_job_handle', 16, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ReadScanDataResponse
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.ReadScanDataResponseSpec, 'crosapi.mojom.ReadScanDataResponse', [
      mojo.internal.StructField('arg_job_handle', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_result', 8, 0, mojo.internal.bindings.crosapi.mojom.ScannerOperationResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_data', 16, 0, mojo.internal.Array(mojo.internal.Int8, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_estimated_completion_$value', 24, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_estimated_completion_$flag', originalFieldName: 'arg_estimated_completion' }),
      mojo.internal.StructField('arg_estimated_completion_$flag', 28, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_estimated_completion_$value', originalFieldName: 'arg_estimated_completion' }),
    ],
    [[0, 40]]);

// Struct: OptionSetting
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.OptionSettingSpec, 'crosapi.mojom.OptionSetting', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_type', 8, 0, mojo.internal.bindings.crosapi.mojom.OptionTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_value', 16, 0, mojo.internal.bindings.crosapi.mojom.OptionValueSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: OptionGroup
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.OptionGroupSpec, 'crosapi.mojom.OptionGroup', [
      mojo.internal.StructField('arg_title', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_members', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SetOptionResult
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.SetOptionResultSpec, 'crosapi.mojom.SetOptionResult', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_result', 8, 0, mojo.internal.bindings.crosapi.mojom.ScannerOperationResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SetOptionsResponse
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.SetOptionsResponseSpec, 'crosapi.mojom.SetOptionsResponse', [
      mojo.internal.StructField('arg_scanner_handle', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_results', 8, 0, mojo.internal.Array(mojo.internal.bindings.crosapi.mojom.SetOptionResultSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_options', 16, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.bindings.crosapi.mojom.ScannerOptionSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: GetOptionGroupsResponse
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.GetOptionGroupsResponseSpec, 'crosapi.mojom.GetOptionGroupsResponse', [
      mojo.internal.StructField('arg_scanner_handle', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_result', 8, 0, mojo.internal.bindings.crosapi.mojom.ScannerOperationResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_groups', 16, 0, mojo.internal.Array(mojo.internal.bindings.crosapi.mojom.OptionGroupSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: CancelScanResponse
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.CancelScanResponseSpec, 'crosapi.mojom.CancelScanResponse', [
      mojo.internal.StructField('arg_job_handle', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_result', 8, 0, mojo.internal.bindings.crosapi.mojom.ScannerOperationResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: DocumentScan
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DocumentScan_OpenScanner_ParamsSpec, 'crosapi.mojom.DocumentScan_OpenScanner_Params', [
      mojo.internal.StructField('arg_client_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_scanner_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DocumentScan_OpenScanner_ResponseParamsSpec, 'crosapi.mojom.DocumentScan_OpenScanner_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.crosapi.mojom.OpenScannerResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DocumentScan_CloseScanner_ParamsSpec, 'crosapi.mojom.DocumentScan_CloseScanner_Params', [
      mojo.internal.StructField('arg_scanner_handle', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DocumentScan_CloseScanner_ResponseParamsSpec, 'crosapi.mojom.DocumentScan_CloseScanner_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.crosapi.mojom.CloseScannerResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DocumentScan_StartPreparedScan_ParamsSpec, 'crosapi.mojom.DocumentScan_StartPreparedScan_Params', [
      mojo.internal.StructField('arg_scanner_handle', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_options', 8, 0, mojo.internal.bindings.crosapi.mojom.StartScanOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DocumentScan_StartPreparedScan_ResponseParamsSpec, 'crosapi.mojom.DocumentScan_StartPreparedScan_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.crosapi.mojom.StartPreparedScanResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DocumentScan_ReadScanData_ParamsSpec, 'crosapi.mojom.DocumentScan_ReadScanData_Params', [
      mojo.internal.StructField('arg_job_handle', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DocumentScan_ReadScanData_ResponseParamsSpec, 'crosapi.mojom.DocumentScan_ReadScanData_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.crosapi.mojom.ReadScanDataResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DocumentScan_SetOptions_ParamsSpec, 'crosapi.mojom.DocumentScan_SetOptions_Params', [
      mojo.internal.StructField('arg_scanner_handle', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_options', 8, 0, mojo.internal.Array(mojo.internal.bindings.crosapi.mojom.OptionSettingSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DocumentScan_SetOptions_ResponseParamsSpec, 'crosapi.mojom.DocumentScan_SetOptions_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.crosapi.mojom.SetOptionsResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DocumentScan_GetOptionGroups_ParamsSpec, 'crosapi.mojom.DocumentScan_GetOptionGroups_Params', [
      mojo.internal.StructField('arg_scanner_handle', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DocumentScan_GetOptionGroups_ResponseParamsSpec, 'crosapi.mojom.DocumentScan_GetOptionGroups_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.crosapi.mojom.GetOptionGroupsResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DocumentScan_CancelScan_ParamsSpec, 'crosapi.mojom.DocumentScan_CancelScan_Params', [
      mojo.internal.StructField('arg_job_handle', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DocumentScan_CancelScan_ResponseParamsSpec, 'crosapi.mojom.DocumentScan_CancelScan_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.crosapi.mojom.CancelScanResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.crosapi.mojom.DocumentScanPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.crosapi.mojom.DocumentScanRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.DocumentScan';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.crosapi.mojom.DocumentScanPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.crosapi.mojom.DocumentScanRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  openScanner(arg_client_id, arg_scanner_id) {
    return this.$.openScanner(arg_client_id, arg_scanner_id);
  }
  closeScanner(arg_scanner_handle) {
    return this.$.closeScanner(arg_scanner_handle);
  }
  startPreparedScan(arg_scanner_handle, arg_options) {
    return this.$.startPreparedScan(arg_scanner_handle, arg_options);
  }
  readScanData(arg_job_handle) {
    return this.$.readScanData(arg_job_handle);
  }
  setOptions(arg_scanner_handle, arg_options) {
    return this.$.setOptions(arg_scanner_handle, arg_options);
  }
  getOptionGroups(arg_scanner_handle) {
    return this.$.getOptionGroups(arg_scanner_handle);
  }
  cancelScan(arg_job_handle) {
    return this.$.cancelScan(arg_job_handle);
  }
};

mojo.internal.bindings.crosapi.mojom.DocumentScanRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('crosapi.mojom.DocumentScan', [
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 8 },
      { explicit: 9 },
    ]);
  }

  openScanner(arg_client_id, arg_scanner_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.crosapi.mojom.DocumentScan_OpenScanner_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.DocumentScan_OpenScanner_ResponseParamsSpec,
      [arg_client_id, arg_scanner_id],
      false);
  }

  closeScanner(arg_scanner_handle) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.crosapi.mojom.DocumentScan_CloseScanner_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.DocumentScan_CloseScanner_ResponseParamsSpec,
      [arg_scanner_handle],
      false);
  }

  startPreparedScan(arg_scanner_handle, arg_options) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.crosapi.mojom.DocumentScan_StartPreparedScan_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.DocumentScan_StartPreparedScan_ResponseParamsSpec,
      [arg_scanner_handle, arg_options],
      false);
  }

  readScanData(arg_job_handle) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.crosapi.mojom.DocumentScan_ReadScanData_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.DocumentScan_ReadScanData_ResponseParamsSpec,
      [arg_job_handle],
      false);
  }

  setOptions(arg_scanner_handle, arg_options) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.crosapi.mojom.DocumentScan_SetOptions_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.DocumentScan_SetOptions_ResponseParamsSpec,
      [arg_scanner_handle, arg_options],
      false);
  }

  getOptionGroups(arg_scanner_handle) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.crosapi.mojom.DocumentScan_GetOptionGroups_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.DocumentScan_GetOptionGroups_ResponseParamsSpec,
      [arg_scanner_handle],
      false);
  }

  cancelScan(arg_job_handle) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.crosapi.mojom.DocumentScan_CancelScan_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.DocumentScan_CancelScan_ResponseParamsSpec,
      [arg_job_handle],
      false);
  }

};

mojo.internal.bindings.crosapi.mojom.DocumentScan.getRemote = function() {
  let remote = new mojo.internal.bindings.crosapi.mojom.DocumentScanRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.DocumentScan',
    'context');
  return remote.$;
};

mojo.internal.bindings.crosapi.mojom.DocumentScanReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('crosapi.mojom.DocumentScan', [
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 8 },
      { explicit: 9 },
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
        
        // Try Method 0: OpenScanner
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DocumentScan_OpenScanner_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenScanner (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: CloseScanner
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DocumentScan_CloseScanner_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CloseScanner (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: StartPreparedScan
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DocumentScan_StartPreparedScan_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartPreparedScan (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: ReadScanData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DocumentScan_ReadScanData_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReadScanData (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SetOptions
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DocumentScan_SetOptions_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetOptions (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: GetOptionGroups
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DocumentScan_GetOptionGroups_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetOptionGroups (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: CancelScan
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DocumentScan_CancelScan_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CancelScan (6)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DocumentScan_OpenScanner_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openScanner');
          const result = this.impl.openScanner(params.arg_client_id, params.arg_scanner_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.DocumentScan_OpenScanner_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] OpenScanner FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DocumentScan_CloseScanner_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.closeScanner');
          const result = this.impl.closeScanner(params.arg_scanner_handle);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.DocumentScan_CloseScanner_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CloseScanner FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DocumentScan_StartPreparedScan_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startPreparedScan');
          const result = this.impl.startPreparedScan(params.arg_scanner_handle, params.arg_options);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.DocumentScan_StartPreparedScan_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] StartPreparedScan FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DocumentScan_ReadScanData_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.readScanData');
          const result = this.impl.readScanData(params.arg_job_handle);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.DocumentScan_ReadScanData_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ReadScanData FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DocumentScan_SetOptions_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setOptions');
          const result = this.impl.setOptions(params.arg_scanner_handle, params.arg_options);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.DocumentScan_SetOptions_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetOptions FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DocumentScan_GetOptionGroups_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getOptionGroups');
          const result = this.impl.getOptionGroups(params.arg_scanner_handle);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.DocumentScan_GetOptionGroups_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetOptionGroups FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.DocumentScan_CancelScan_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.cancelScan');
          const result = this.impl.cancelScan(params.arg_job_handle);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.DocumentScan_CancelScan_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CancelScan FAILED:', e));
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

mojo.internal.bindings.crosapi.mojom.DocumentScanReceiver = mojo.internal.bindings.crosapi.mojom.DocumentScanReceiver;

mojo.internal.bindings.crosapi.mojom.DocumentScanPtr = mojo.internal.bindings.crosapi.mojom.DocumentScanRemote;
mojo.internal.bindings.crosapi.mojom.DocumentScanRequest = mojo.internal.bindings.crosapi.mojom.DocumentScanPendingReceiver;

