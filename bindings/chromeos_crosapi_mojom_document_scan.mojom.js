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

        const ua = navigator.userAgent;
        const m = ua.match(/Chrome\/([\d.]+)/);
        const v = m ? m[1] : "145.0.7625.0";
        const p = v.split('.');
        const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
        
        while (true) {
          i++;
          const h0 = SHA256(salt + ifaceName.split('.').pop() + i);
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
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};

crosapi.mojom.ScanFailureModeSpec = { $: mojo.internal.Enum() };
crosapi.mojom.ScannerOperationResultSpec = { $: mojo.internal.Enum() };
crosapi.mojom.ConnectionTypeSpec = { $: mojo.internal.Enum() };
crosapi.mojom.OptionTypeSpec = { $: mojo.internal.Enum() };
crosapi.mojom.OptionUnitSpec = { $: mojo.internal.Enum() };
crosapi.mojom.OptionConstraintTypeSpec = { $: mojo.internal.Enum() };
crosapi.mojom.OptionConfigurabilitySpec = { $: mojo.internal.Enum() };
crosapi.mojom.OptionValueSpec = { $: {} };
crosapi.mojom.OptionConstraintRestrictionSpec = { $: {} };
crosapi.mojom.ScannerInfoSpec = { $: {} };
crosapi.mojom.ScannerEnumFilterSpec = { $: {} };
crosapi.mojom.IntRangeSpec = { $: {} };
crosapi.mojom.FixedRangeSpec = { $: {} };
crosapi.mojom.OptionConstraintSpec = { $: {} };
crosapi.mojom.ScannerOptionSpec = { $: {} };
crosapi.mojom.GetScannerListResponseSpec = { $: {} };
crosapi.mojom.OpenScannerResponseSpec = { $: {} };
crosapi.mojom.CloseScannerResponseSpec = { $: {} };
crosapi.mojom.StartScanOptionsSpec = { $: {} };
crosapi.mojom.StartPreparedScanResponseSpec = { $: {} };
crosapi.mojom.ReadScanDataResponseSpec = { $: {} };
crosapi.mojom.OptionSettingSpec = { $: {} };
crosapi.mojom.OptionGroupSpec = { $: {} };
crosapi.mojom.SetOptionResultSpec = { $: {} };
crosapi.mojom.SetOptionsResponseSpec = { $: {} };
crosapi.mojom.GetOptionGroupsResponseSpec = { $: {} };
crosapi.mojom.CancelScanResponseSpec = { $: {} };
crosapi.mojom.DocumentScan = {};
crosapi.mojom.DocumentScan.$interfaceName = 'crosapi.mojom.DocumentScan';
crosapi.mojom.DocumentScan_OpenScanner_ParamsSpec = { $: {} };
crosapi.mojom.DocumentScan_OpenScanner_ResponseParamsSpec = { $: {} };
crosapi.mojom.DocumentScan_CloseScanner_ParamsSpec = { $: {} };
crosapi.mojom.DocumentScan_CloseScanner_ResponseParamsSpec = { $: {} };
crosapi.mojom.DocumentScan_StartPreparedScan_ParamsSpec = { $: {} };
crosapi.mojom.DocumentScan_StartPreparedScan_ResponseParamsSpec = { $: {} };
crosapi.mojom.DocumentScan_ReadScanData_ParamsSpec = { $: {} };
crosapi.mojom.DocumentScan_ReadScanData_ResponseParamsSpec = { $: {} };
crosapi.mojom.DocumentScan_SetOptions_ParamsSpec = { $: {} };
crosapi.mojom.DocumentScan_SetOptions_ResponseParamsSpec = { $: {} };
crosapi.mojom.DocumentScan_GetOptionGroups_ParamsSpec = { $: {} };
crosapi.mojom.DocumentScan_GetOptionGroups_ResponseParamsSpec = { $: {} };
crosapi.mojom.DocumentScan_CancelScan_ParamsSpec = { $: {} };
crosapi.mojom.DocumentScan_CancelScan_ResponseParamsSpec = { $: {} };

// Enum: ScanFailureMode
crosapi.mojom.ScanFailureMode = {
  kNoFailure: 0,
  kUnknown: 1,
  kDeviceBusy: 2,
  kAdfJammed: 3,
  kAdfEmpty: 4,
  kFlatbedOpen: 5,
  kIoError: 6,
};

// Enum: ScannerOperationResult
crosapi.mojom.ScannerOperationResult = {
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
crosapi.mojom.ConnectionType = {
  kUnspecified: 0,
  kUsb: 1,
  kNetwork: 2,
};

// Enum: OptionType
crosapi.mojom.OptionType = {
  kUnknown: 0,
  kBool: 1,
  kInt: 2,
  kFixed: 3,
  kString: 4,
  kButton: 5,
  kGroup: 6,
};

// Enum: OptionUnit
crosapi.mojom.OptionUnit = {
  kUnitless: 0,
  kPixel: 1,
  kBit: 2,
  kMm: 3,
  kDpi: 4,
  kPercent: 5,
  kMicrosecond: 6,
};

// Enum: OptionConstraintType
crosapi.mojom.OptionConstraintType = {
  kNone: 0,
  kIntRange: 1,
  kFixedRange: 2,
  kIntList: 3,
  kFixedList: 4,
  kStringList: 5,
};

// Enum: OptionConfigurability
crosapi.mojom.OptionConfigurability = {
  kNotConfigurable: 0,
  kSoftwareConfigurable: 1,
  kHardwareConfigurable: 2,
};

// Union: OptionValue
mojo.internal.Union(
    crosapi.mojom.OptionValueSpec, 'crosapi.mojom.OptionValue', {
      'bool_value': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'int_value': {
        'ordinal': 1,
        'type': mojo.internal.Int32,
        'nullable': false,
      },
      'int_list': {
        'ordinal': 2,
        'type': mojo.internal.Array(mojo.internal.Int32, false),
        'nullable': false,
      },
      'fixed_value': {
        'ordinal': 3,
        'type': mojo.internal.Double,
        'nullable': false,
      },
      'fixed_list': {
        'ordinal': 4,
        'type': mojo.internal.Array(mojo.internal.Double, false),
        'nullable': false,
      },
      'string_value': {
        'ordinal': 5,
        'type': mojo.internal.String,
        'nullable': false,
      },
    });

// Union: OptionConstraintRestriction
mojo.internal.Union(
    crosapi.mojom.OptionConstraintRestrictionSpec, 'crosapi.mojom.OptionConstraintRestriction', {
      'int_range': {
        'ordinal': 0,
        'type': crosapi.mojom.IntRangeSpec.$,
        'nullable': false,
      },
      'fixed_range': {
        'ordinal': 1,
        'type': crosapi.mojom.FixedRangeSpec.$,
        'nullable': false,
      },
      'valid_int': {
        'ordinal': 2,
        'type': mojo.internal.Array(mojo.internal.Int32, false),
        'nullable': false,
      },
      'valid_fixed': {
        'ordinal': 3,
        'type': mojo.internal.Array(mojo.internal.Double, false),
        'nullable': false,
      },
      'valid_string': {
        'ordinal': 4,
        'type': mojo.internal.Array(mojo.internal.String, false),
        'nullable': false,
      },
    });

// Struct: ScannerInfo
mojo.internal.Struct(
    crosapi.mojom.ScannerInfoSpec, 'crosapi.mojom.ScannerInfo', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('display_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('manufacturer', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('model', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('device_uuid', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('connection_type', 40, 0, crosapi.mojom.ConnectionTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('image_formats', 48, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('kUnspecified', 56, 0, mojo.internal.Pointer, 0, false, 0, undefined),
      mojo.internal.StructField('secure', 64, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 80]]);

// Struct: ScannerEnumFilter
mojo.internal.Struct(
    crosapi.mojom.ScannerEnumFilterSpec, 'crosapi.mojom.ScannerEnumFilter', [
      mojo.internal.StructField('local', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('secure', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: IntRange
mojo.internal.Struct(
    crosapi.mojom.IntRangeSpec, 'crosapi.mojom.IntRange', [
      mojo.internal.StructField('min', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('max', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('quant', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: FixedRange
mojo.internal.Struct(
    crosapi.mojom.FixedRangeSpec, 'crosapi.mojom.FixedRange', [
      mojo.internal.StructField('min', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('max', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('quant', 16, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: OptionConstraint
mojo.internal.Struct(
    crosapi.mojom.OptionConstraintSpec, 'crosapi.mojom.OptionConstraint', [
      mojo.internal.StructField('type', 0, 0, crosapi.mojom.OptionConstraintTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('restriction', 8, 0, crosapi.mojom.OptionConstraintRestrictionSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ScannerOption
mojo.internal.Struct(
    crosapi.mojom.ScannerOptionSpec, 'crosapi.mojom.ScannerOption', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('title', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('description', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('type', 24, 0, crosapi.mojom.OptionTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('unit', 32, 0, crosapi.mojom.OptionUnitSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('value', 40, 0, crosapi.mojom.OptionValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('constraint', 48, 0, crosapi.mojom.OptionConstraintSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('configurability', 56, 0, crosapi.mojom.OptionConfigurabilitySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('isDetectable', 64, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('isAutoSettable', 64, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('isEmulated', 64, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('isActive', 64, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('isAdvanced', 64, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('isInternal', 64, 5, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 80]]);

// Struct: GetScannerListResponse
mojo.internal.Struct(
    crosapi.mojom.GetScannerListResponseSpec, 'crosapi.mojom.GetScannerListResponse', [
      mojo.internal.StructField('result', 0, 0, crosapi.mojom.ScannerOperationResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('scanners', 8, 0, mojo.internal.Array(crosapi.mojom.ScannerInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: OpenScannerResponse
mojo.internal.Struct(
    crosapi.mojom.OpenScannerResponseSpec, 'crosapi.mojom.OpenScannerResponse', [
      mojo.internal.StructField('scanner_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('result', 8, 0, crosapi.mojom.ScannerOperationResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('scanner_handle', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('options', 24, 0, mojo.internal.Map(mojo.internal.String, crosapi.mojom.ScannerOptionSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: CloseScannerResponse
mojo.internal.Struct(
    crosapi.mojom.CloseScannerResponseSpec, 'crosapi.mojom.CloseScannerResponse', [
      mojo.internal.StructField('scanner_handle', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('result', 8, 0, crosapi.mojom.ScannerOperationResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: StartScanOptions
mojo.internal.Struct(
    crosapi.mojom.StartScanOptionsSpec, 'crosapi.mojom.StartScanOptions', [
      mojo.internal.StructField('format', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('max_read_size_$value', 8, 0, mojo.internal.Uint32, 0, false, 1, { isPrimary: false, linkedValueFieldName: 'max_read_size_$flag', originalFieldName: 'max_read_size' }),
      mojo.internal.StructField('max_read_size_$flag', 12, 0, mojo.internal.Bool, false, false, 1, { isPrimary: true, linkedValueFieldName: 'max_read_size_$value', originalFieldName: 'max_read_size' }),
    ],
    [[0, 16], [1, 24]]);

// Struct: StartPreparedScanResponse
mojo.internal.Struct(
    crosapi.mojom.StartPreparedScanResponseSpec, 'crosapi.mojom.StartPreparedScanResponse', [
      mojo.internal.StructField('scanner_handle', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('result', 8, 0, crosapi.mojom.ScannerOperationResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('job_handle', 16, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ReadScanDataResponse
mojo.internal.Struct(
    crosapi.mojom.ReadScanDataResponseSpec, 'crosapi.mojom.ReadScanDataResponse', [
      mojo.internal.StructField('job_handle', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('result', 8, 0, crosapi.mojom.ScannerOperationResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('data', 16, 0, mojo.internal.Array(mojo.internal.Int8, false), null, true, 0, undefined),
      mojo.internal.StructField('estimated_completion_$value', 24, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'estimated_completion_$flag', originalFieldName: 'estimated_completion' }),
      mojo.internal.StructField('estimated_completion_$flag', 28, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'estimated_completion_$value', originalFieldName: 'estimated_completion' }),
    ],
    [[0, 40]]);

// Struct: OptionSetting
mojo.internal.Struct(
    crosapi.mojom.OptionSettingSpec, 'crosapi.mojom.OptionSetting', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('type', 8, 0, crosapi.mojom.OptionTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('value', 16, 0, crosapi.mojom.OptionValueSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: OptionGroup
mojo.internal.Struct(
    crosapi.mojom.OptionGroupSpec, 'crosapi.mojom.OptionGroup', [
      mojo.internal.StructField('title', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('members', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SetOptionResult
mojo.internal.Struct(
    crosapi.mojom.SetOptionResultSpec, 'crosapi.mojom.SetOptionResult', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('result', 8, 0, crosapi.mojom.ScannerOperationResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SetOptionsResponse
mojo.internal.Struct(
    crosapi.mojom.SetOptionsResponseSpec, 'crosapi.mojom.SetOptionsResponse', [
      mojo.internal.StructField('scanner_handle', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('results', 8, 0, mojo.internal.Array(crosapi.mojom.SetOptionResultSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('options', 16, 0, mojo.internal.Map(mojo.internal.String, crosapi.mojom.ScannerOptionSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: GetOptionGroupsResponse
mojo.internal.Struct(
    crosapi.mojom.GetOptionGroupsResponseSpec, 'crosapi.mojom.GetOptionGroupsResponse', [
      mojo.internal.StructField('scanner_handle', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('result', 8, 0, crosapi.mojom.ScannerOperationResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('groups', 16, 0, mojo.internal.Array(crosapi.mojom.OptionGroupSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: CancelScanResponse
mojo.internal.Struct(
    crosapi.mojom.CancelScanResponseSpec, 'crosapi.mojom.CancelScanResponse', [
      mojo.internal.StructField('job_handle', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('result', 8, 0, crosapi.mojom.ScannerOperationResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: DocumentScan
mojo.internal.Struct(
    crosapi.mojom.DocumentScan_OpenScanner_ParamsSpec, 'crosapi.mojom.DocumentScan_OpenScanner_Params', [
      mojo.internal.StructField('client_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('scanner_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    crosapi.mojom.DocumentScan_OpenScanner_ResponseParamsSpec, 'crosapi.mojom.DocumentScan_OpenScanner_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, crosapi.mojom.OpenScannerResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DocumentScan_CloseScanner_ParamsSpec, 'crosapi.mojom.DocumentScan_CloseScanner_Params', [
      mojo.internal.StructField('scanner_handle', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DocumentScan_CloseScanner_ResponseParamsSpec, 'crosapi.mojom.DocumentScan_CloseScanner_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, crosapi.mojom.CloseScannerResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DocumentScan_StartPreparedScan_ParamsSpec, 'crosapi.mojom.DocumentScan_StartPreparedScan_Params', [
      mojo.internal.StructField('scanner_handle', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('options', 8, 0, crosapi.mojom.StartScanOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    crosapi.mojom.DocumentScan_StartPreparedScan_ResponseParamsSpec, 'crosapi.mojom.DocumentScan_StartPreparedScan_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, crosapi.mojom.StartPreparedScanResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DocumentScan_ReadScanData_ParamsSpec, 'crosapi.mojom.DocumentScan_ReadScanData_Params', [
      mojo.internal.StructField('job_handle', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DocumentScan_ReadScanData_ResponseParamsSpec, 'crosapi.mojom.DocumentScan_ReadScanData_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, crosapi.mojom.ReadScanDataResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DocumentScan_SetOptions_ParamsSpec, 'crosapi.mojom.DocumentScan_SetOptions_Params', [
      mojo.internal.StructField('scanner_handle', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('options', 8, 0, mojo.internal.Array(crosapi.mojom.OptionSettingSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    crosapi.mojom.DocumentScan_SetOptions_ResponseParamsSpec, 'crosapi.mojom.DocumentScan_SetOptions_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, crosapi.mojom.SetOptionsResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DocumentScan_GetOptionGroups_ParamsSpec, 'crosapi.mojom.DocumentScan_GetOptionGroups_Params', [
      mojo.internal.StructField('scanner_handle', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DocumentScan_GetOptionGroups_ResponseParamsSpec, 'crosapi.mojom.DocumentScan_GetOptionGroups_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, crosapi.mojom.GetOptionGroupsResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DocumentScan_CancelScan_ParamsSpec, 'crosapi.mojom.DocumentScan_CancelScan_Params', [
      mojo.internal.StructField('job_handle', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.DocumentScan_CancelScan_ResponseParamsSpec, 'crosapi.mojom.DocumentScan_CancelScan_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, crosapi.mojom.CancelScanResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

crosapi.mojom.DocumentScanPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.DocumentScanRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.DocumentScan';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.DocumentScanPendingReceiver,
      handle);
    this.$ = new crosapi.mojom.DocumentScanRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.DocumentScanRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DocumentScan', [
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 8 },
      { explicit: 9 },
    ]);
  }

  openScanner(client_id, scanner_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      crosapi.mojom.DocumentScan_OpenScanner_ParamsSpec,
      crosapi.mojom.DocumentScan_OpenScanner_ResponseParamsSpec,
      [client_id, scanner_id],
      false);
  }

  closeScanner(scanner_handle) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      crosapi.mojom.DocumentScan_CloseScanner_ParamsSpec,
      crosapi.mojom.DocumentScan_CloseScanner_ResponseParamsSpec,
      [scanner_handle],
      false);
  }

  startPreparedScan(scanner_handle, options) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      crosapi.mojom.DocumentScan_StartPreparedScan_ParamsSpec,
      crosapi.mojom.DocumentScan_StartPreparedScan_ResponseParamsSpec,
      [scanner_handle, options],
      false);
  }

  readScanData(job_handle) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      crosapi.mojom.DocumentScan_ReadScanData_ParamsSpec,
      crosapi.mojom.DocumentScan_ReadScanData_ResponseParamsSpec,
      [job_handle],
      false);
  }

  setOptions(scanner_handle, options) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      crosapi.mojom.DocumentScan_SetOptions_ParamsSpec,
      crosapi.mojom.DocumentScan_SetOptions_ResponseParamsSpec,
      [scanner_handle, options],
      false);
  }

  getOptionGroups(scanner_handle) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      crosapi.mojom.DocumentScan_GetOptionGroups_ParamsSpec,
      crosapi.mojom.DocumentScan_GetOptionGroups_ResponseParamsSpec,
      [scanner_handle],
      false);
  }

  cancelScan(job_handle) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      crosapi.mojom.DocumentScan_CancelScan_ParamsSpec,
      crosapi.mojom.DocumentScan_CancelScan_ResponseParamsSpec,
      [job_handle],
      false);
  }

};

crosapi.mojom.DocumentScan.getRemote = function() {
  let remote = new crosapi.mojom.DocumentScanRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.DocumentScan',
    'context');
  return remote.$;
};

crosapi.mojom.DocumentScanReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DocumentScan', [
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
             decoder.decodeStructInline(crosapi.mojom.DocumentScan_OpenScanner_ParamsSpec);
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
             decoder.decodeStructInline(crosapi.mojom.DocumentScan_CloseScanner_ParamsSpec);
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
             decoder.decodeStructInline(crosapi.mojom.DocumentScan_StartPreparedScan_ParamsSpec);
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
             decoder.decodeStructInline(crosapi.mojom.DocumentScan_ReadScanData_ParamsSpec);
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
             decoder.decodeStructInline(crosapi.mojom.DocumentScan_SetOptions_ParamsSpec);
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
             decoder.decodeStructInline(crosapi.mojom.DocumentScan_GetOptionGroups_ParamsSpec);
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
             decoder.decodeStructInline(crosapi.mojom.DocumentScan_CancelScan_ParamsSpec);
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
          const params = decoder.decodeStructInline(crosapi.mojom.DocumentScan_OpenScanner_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.openScanner');
          const result = this.impl.openScanner(params.client_id, params.scanner_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.DocumentScan_OpenScanner_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.DocumentScan_CloseScanner_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.closeScanner');
          const result = this.impl.closeScanner(params.scanner_handle);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.DocumentScan_CloseScanner_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.DocumentScan_StartPreparedScan_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.startPreparedScan');
          const result = this.impl.startPreparedScan(params.scanner_handle, params.options);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.DocumentScan_StartPreparedScan_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.DocumentScan_ReadScanData_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.readScanData');
          const result = this.impl.readScanData(params.job_handle);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.DocumentScan_ReadScanData_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.DocumentScan_SetOptions_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.setOptions');
          const result = this.impl.setOptions(params.scanner_handle, params.options);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.DocumentScan_SetOptions_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.DocumentScan_GetOptionGroups_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.getOptionGroups');
          const result = this.impl.getOptionGroups(params.scanner_handle);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.DocumentScan_GetOptionGroups_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.DocumentScan_CancelScan_ParamsSpec);
          console.log('[GeneratedReceiver] Calling impl.cancelScan');
          const result = this.impl.cancelScan(params.job_handle);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.DocumentScan_CancelScan_ResponseParamsSpec);
               responder(response);
            });
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

crosapi.mojom.DocumentScanReceiver = crosapi.mojom.DocumentScanReceiver;

crosapi.mojom.DocumentScanPtr = crosapi.mojom.DocumentScanRemote;
crosapi.mojom.DocumentScanRequest = crosapi.mojom.DocumentScanPendingReceiver;

