// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/local_printer.mojom
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

        // Allow forcing version from external script
        if (window.mojoVersion) { v = window.mojoVersion; }
        
        const p = v.split('.');
        const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
        console.log('[MojoScrambler] Derived Salt:', JSON.stringify(salt));
        
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
var mojo_base = mojo_base || {};
var printing = printing || {};
var gfx = gfx || {};
var url = url || {};

crosapi.mojom.ReasonSpec = { $: mojo.internal.Enum() };
crosapi.mojom.SeveritySpec = { $: mojo.internal.Enum() };
crosapi.mojom.DuplexTypeSpec = { $: mojo.internal.Enum() };
crosapi.mojom.QualityTypeSpec = { $: mojo.internal.Enum() };
crosapi.mojom.DuplexModeSpec = { $: mojo.internal.Enum() };
crosapi.mojom.SourceSpec = { $: mojo.internal.Enum() };
crosapi.mojom.ServerPrintersFetchingModeSpec = { $: mojo.internal.Enum() };
crosapi.mojom.BackgroundGraphicsModeRestrictionSpec = { $: mojo.internal.Enum() };
crosapi.mojom.OptionalBoolSpec = { $: mojo.internal.Enum() };
crosapi.mojom.PrintJobStatusSpec = { $: mojo.internal.Enum() };
crosapi.mojom.PrintJobSourceSpec = { $: mojo.internal.Enum() };
crosapi.mojom.GetOAuthAccessTokenResultSpec = { $: {} };
crosapi.mojom.LocalDestinationInfoSpec = { $: {} };
crosapi.mojom.PrinterStatusSpec = { $: {} };
crosapi.mojom.StatusReasonSpec = { $: {} };
crosapi.mojom.SizeSpec = { $: {} };
crosapi.mojom.DpiSpec = { $: {} };
crosapi.mojom.SizeOptionSpec = { $: {} };
crosapi.mojom.StringOptionSpec = { $: {} };
crosapi.mojom.DuplexOptionSpec = { $: {} };
crosapi.mojom.BoolOptionSpec = { $: {} };
crosapi.mojom.DpiOptionSpec = { $: {} };
crosapi.mojom.QualityOptionSpec = { $: {} };
crosapi.mojom.ManagedPrintOptionsSpec = { $: {} };
crosapi.mojom.PrintJobSpec = { $: {} };
crosapi.mojom.PrintServersConfigSpec = { $: {} };
crosapi.mojom.PrintServerSpec = { $: {} };
crosapi.mojom.CapabilitiesResponseSpec = { $: {} };
crosapi.mojom.PoliciesSpec = { $: {} };
crosapi.mojom.PrintJobUpdateSpec = { $: {} };
crosapi.mojom.OAuthNotNeededSpec = { $: {} };
crosapi.mojom.OAuthErrorSpec = { $: {} };
crosapi.mojom.OAuthAccessTokenSpec = { $: {} };
crosapi.mojom.PrintServerObserver = {};
crosapi.mojom.PrintServerObserver.$interfaceName = 'crosapi.mojom.PrintServerObserver';
crosapi.mojom.PrintServerObserver_OnPrintServersChanged_ParamsSpec = { $: {} };
crosapi.mojom.PrintServerObserver_OnServerPrintersChanged_ParamsSpec = { $: {} };
crosapi.mojom.PrintJobObserver = {};
crosapi.mojom.PrintJobObserver.$interfaceName = 'crosapi.mojom.PrintJobObserver';
crosapi.mojom.PrintJobObserver_OnPrintJobUpdateDeprecated_ParamsSpec = { $: {} };
crosapi.mojom.PrintJobObserver_OnPrintJobUpdate_ParamsSpec = { $: {} };
crosapi.mojom.LocalPrintersObserver = {};
crosapi.mojom.LocalPrintersObserver.$interfaceName = 'crosapi.mojom.LocalPrintersObserver';
crosapi.mojom.LocalPrintersObserver_OnLocalPrintersUpdated_ParamsSpec = { $: {} };
crosapi.mojom.LocalPrinter = {};
crosapi.mojom.LocalPrinter.$interfaceName = 'crosapi.mojom.LocalPrinter';
crosapi.mojom.LocalPrinter_GetPrinters_ParamsSpec = { $: {} };
crosapi.mojom.LocalPrinter_GetPrinters_ResponseParamsSpec = { $: {} };
crosapi.mojom.LocalPrinter_GetCapability_ParamsSpec = { $: {} };
crosapi.mojom.LocalPrinter_GetCapability_ResponseParamsSpec = { $: {} };
crosapi.mojom.LocalPrinter_GetEulaUrl_ParamsSpec = { $: {} };
crosapi.mojom.LocalPrinter_GetEulaUrl_ResponseParamsSpec = { $: {} };
crosapi.mojom.LocalPrinter_GetStatus_ParamsSpec = { $: {} };
crosapi.mojom.LocalPrinter_GetStatus_ResponseParamsSpec = { $: {} };
crosapi.mojom.LocalPrinter_ShowSystemPrintSettings_ParamsSpec = { $: {} };
crosapi.mojom.LocalPrinter_ShowSystemPrintSettings_ResponseParamsSpec = { $: {} };
crosapi.mojom.LocalPrinter_CreatePrintJob_ParamsSpec = { $: {} };
crosapi.mojom.LocalPrinter_CreatePrintJob_ResponseParamsSpec = { $: {} };
crosapi.mojom.LocalPrinter_CancelPrintJob_ParamsSpec = { $: {} };
crosapi.mojom.LocalPrinter_CancelPrintJob_ResponseParamsSpec = { $: {} };
crosapi.mojom.LocalPrinter_GetPrintServersConfig_ParamsSpec = { $: {} };
crosapi.mojom.LocalPrinter_GetPrintServersConfig_ResponseParamsSpec = { $: {} };
crosapi.mojom.LocalPrinter_ChoosePrintServers_ParamsSpec = { $: {} };
crosapi.mojom.LocalPrinter_ChoosePrintServers_ResponseParamsSpec = { $: {} };
crosapi.mojom.LocalPrinter_AddPrintServerObserver_ParamsSpec = { $: {} };
crosapi.mojom.LocalPrinter_AddPrintServerObserver_ResponseParamsSpec = { $: {} };
crosapi.mojom.LocalPrinter_GetPolicies_ParamsSpec = { $: {} };
crosapi.mojom.LocalPrinter_GetPolicies_ResponseParamsSpec = { $: {} };
crosapi.mojom.LocalPrinter_GetUsernamePerPolicy_ParamsSpec = { $: {} };
crosapi.mojom.LocalPrinter_GetUsernamePerPolicy_ResponseParamsSpec = { $: {} };
crosapi.mojom.LocalPrinter_GetPrinterTypeDenyList_ParamsSpec = { $: {} };
crosapi.mojom.LocalPrinter_GetPrinterTypeDenyList_ResponseParamsSpec = { $: {} };
crosapi.mojom.LocalPrinter_AddPrintJobObserver_ParamsSpec = { $: {} };
crosapi.mojom.LocalPrinter_AddPrintJobObserver_ResponseParamsSpec = { $: {} };
crosapi.mojom.LocalPrinter_GetOAuthAccessToken_ParamsSpec = { $: {} };
crosapi.mojom.LocalPrinter_GetOAuthAccessToken_ResponseParamsSpec = { $: {} };
crosapi.mojom.LocalPrinter_GetIppClientInfo_ParamsSpec = { $: {} };
crosapi.mojom.LocalPrinter_GetIppClientInfo_ResponseParamsSpec = { $: {} };
crosapi.mojom.LocalPrinter_AddLocalPrintersObserver_ParamsSpec = { $: {} };
crosapi.mojom.LocalPrinter_AddLocalPrintersObserver_ResponseParamsSpec = { $: {} };

// Enum: Reason
crosapi.mojom.Reason = {
  kUnknownReason: 0,
  kDeviceError: 1,
  kDoorOpen: 2,
  kLowOnInk: 3,
  kLowOnPaper: 4,
  kNoError: 5,
  kOutOfInk: 6,
  kOutOfPaper: 7,
  kOutputAreaAlmostFull: 8,
  kOutputFull: 9,
  kPaperJam: 10,
  kPaused: 11,
  kPrinterQueueFull: 12,
  kPrinterUnreachable: 13,
  kStopped: 14,
  kTrayMissing: 15,
  MinVersion: 15,
};

// Enum: Severity
crosapi.mojom.Severity = {
  kUnknownSeverity: 0,
  kReport: 1,
  kWarning: 2,
  kError: 3,
};

// Enum: DuplexType
crosapi.mojom.DuplexType = {
  kUnknownDuplex: 0,
  kOneSided: 1,
  kShortEdge: 2,
  kLongEdge: 3,
};

// Enum: QualityType
crosapi.mojom.QualityType = {
  kUnknownQuality: 0,
  kDraft: 1,
  kNormal: 2,
  kHigh: 3,
};

// Enum: DuplexMode
crosapi.mojom.DuplexMode = {
  kSimplex: 0,
  kLongEdge: 1,
  kShortEdge: 2,
};

// Enum: Source
crosapi.mojom.Source = {
  kUnknown: -1,
  kPrintPreview: 0,
  kArc: 1,
  kExtension: 2,
  kPrintPreviewIncognito: 3,
  MinVersion: 3,
};

// Enum: ServerPrintersFetchingMode
crosapi.mojom.ServerPrintersFetchingMode = {
  kStandard: 0,
  kSingleServerOnly: 1,
};

// Enum: BackgroundGraphicsModeRestriction
crosapi.mojom.BackgroundGraphicsModeRestriction = {
  kUnset: 0,
  kEnabled: 1,
  kDisabled: 2,
};

// Enum: OptionalBool
crosapi.mojom.OptionalBool = {
  kUnset: 0,
  kFalse: 1,
  kTrue: 2,
};

// Enum: PrintJobStatus
crosapi.mojom.PrintJobStatus = {
  kUnknown: 0,
  kCreated: 1,
  kStarted: 2,
  kUpdated: 3,
  kSuspended: 4,
  kResumed: 5,
  kDone: 6,
  kError: 7,
  kCancelled: 8,
};

// Enum: PrintJobSource
crosapi.mojom.PrintJobSource = {
  kAny: 0,
  kExtension: 1,
  MinVersion: 1,
};

// Union: GetOAuthAccessTokenResult
mojo.internal.Union(
    crosapi.mojom.GetOAuthAccessTokenResultSpec, 'crosapi.mojom.GetOAuthAccessTokenResult', {
      'none': {
        'ordinal': 0,
        'type': crosapi.mojom.OAuthNotNeededSpec.$,
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': crosapi.mojom.OAuthErrorSpec.$,
        'nullable': false,
      },
      'token': {
        'ordinal': 2,
        'type': crosapi.mojom.OAuthAccessTokenSpec.$,
        'nullable': false,
      },
    });

// Struct: LocalDestinationInfo
mojo.internal.Struct(
    crosapi.mojom.LocalDestinationInfoSpec, 'crosapi.mojom.LocalDestinationInfo', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('description', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('configured_via_policy', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('uri', 32, 0, mojo.internal.String, null, true, 3, undefined),
      mojo.internal.StructField('printer_status', 40, 0, crosapi.mojom.PrinterStatusSpec.$, null, true, 4, undefined),
      mojo.internal.StructField('managed_print_options', 48, 0, crosapi.mojom.ManagedPrintOptionsSpec.$, null, true, 5, undefined),
    ],
    [[0, 40], [3, 48], [4, 56], [5, 64]]);

// Struct: PrinterStatus
mojo.internal.Struct(
    crosapi.mojom.PrinterStatusSpec, 'crosapi.mojom.PrinterStatus', [
      mojo.internal.StructField('printer_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('timestamp', 8, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('status_reasons', 16, 0, mojo.internal.Array(crosapi.mojom.StatusReasonSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: StatusReason
mojo.internal.Struct(
    crosapi.mojom.StatusReasonSpec, 'crosapi.mojom.StatusReason', [
      mojo.internal.StructField('reason', 0, 0, crosapi.mojom.ReasonSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('severity', 8, 0, crosapi.mojom.SeveritySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('kUnknownReason', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: Size
mojo.internal.Struct(
    crosapi.mojom.SizeSpec, 'crosapi.mojom.Size', [
      mojo.internal.StructField('width', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('height', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: Dpi
mojo.internal.Struct(
    crosapi.mojom.DpiSpec, 'crosapi.mojom.Dpi', [
      mojo.internal.StructField('horizontal', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('vertical', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SizeOption
mojo.internal.Struct(
    crosapi.mojom.SizeOptionSpec, 'crosapi.mojom.SizeOption', [
      mojo.internal.StructField('default_value', 0, 0, crosapi.mojom.SizeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('allowed_values', 8, 0, mojo.internal.Array(crosapi.mojom.SizeSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: StringOption
mojo.internal.Struct(
    crosapi.mojom.StringOptionSpec, 'crosapi.mojom.StringOption', [
      mojo.internal.StructField('default_value', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('allowed_values', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: DuplexOption
mojo.internal.Struct(
    crosapi.mojom.DuplexOptionSpec, 'crosapi.mojom.DuplexOption', [
      mojo.internal.StructField('default_value', 0, 0, crosapi.mojom.DuplexTypeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('allowed_values', 8, 0, mojo.internal.Array(crosapi.mojom.DuplexTypeSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BoolOption
mojo.internal.Struct(
    crosapi.mojom.BoolOptionSpec, 'crosapi.mojom.BoolOption', [
      mojo.internal.StructField('allowed_values', 0, 0, mojo.internal.Array(mojo.internal.Bool, false), null, true, 0, undefined),
      mojo.internal.StructField('default_value_$flag', 8, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'default_value_$value', originalFieldName: 'default_value' }),
      mojo.internal.StructField('default_value_$value', 8, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'default_value_$flag', originalFieldName: 'default_value' }),
    ],
    [[0, 24]]);

// Struct: DpiOption
mojo.internal.Struct(
    crosapi.mojom.DpiOptionSpec, 'crosapi.mojom.DpiOption', [
      mojo.internal.StructField('default_value', 0, 0, crosapi.mojom.DpiSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('allowed_values', 8, 0, mojo.internal.Array(crosapi.mojom.DpiSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: QualityOption
mojo.internal.Struct(
    crosapi.mojom.QualityOptionSpec, 'crosapi.mojom.QualityOption', [
      mojo.internal.StructField('default_value', 0, 0, crosapi.mojom.QualityTypeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('allowed_values', 8, 0, mojo.internal.Array(crosapi.mojom.QualityTypeSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ManagedPrintOptions
mojo.internal.Struct(
    crosapi.mojom.ManagedPrintOptionsSpec, 'crosapi.mojom.ManagedPrintOptions', [
      mojo.internal.StructField('media_size', 0, 0, crosapi.mojom.SizeOptionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('media_type', 8, 0, crosapi.mojom.StringOptionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('duplex', 16, 0, crosapi.mojom.DuplexOptionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('color', 24, 0, crosapi.mojom.BoolOptionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('dpi', 32, 0, crosapi.mojom.DpiOptionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('quality', 40, 0, crosapi.mojom.QualityOptionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('print_as_image', 48, 0, crosapi.mojom.BoolOptionSpec.$, null, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: PrintJob
mojo.internal.Struct(
    crosapi.mojom.PrintJobSpec, 'crosapi.mojom.PrintJob', [
      mojo.internal.StructField('device_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('title', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('source', 16, 0, crosapi.mojom.SourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('source_id', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('color_mode', 32, 0, printing.mojom.ColorModelSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('duplex_mode', 40, 0, crosapi.mojom.DuplexModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('media_size', 48, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('media_vendor_id', 56, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('kSimplex', 64, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('job_id', 72, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('page_count', 76, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('copies', 80, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 96]]);

// Struct: PrintServersConfig
mojo.internal.Struct(
    crosapi.mojom.PrintServersConfigSpec, 'crosapi.mojom.PrintServersConfig', [
      mojo.internal.StructField('fetching_mode', 0, 0, crosapi.mojom.ServerPrintersFetchingModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('print_servers', 8, 0, mojo.internal.Array(crosapi.mojom.PrintServerSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('kStandard', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: PrintServer
mojo.internal.Struct(
    crosapi.mojom.PrintServerSpec, 'crosapi.mojom.PrintServer', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('name', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: CapabilitiesResponse
mojo.internal.Struct(
    crosapi.mojom.CapabilitiesResponseSpec, 'crosapi.mojom.CapabilitiesResponse', [
      mojo.internal.StructField('basic_info', 0, 0, crosapi.mojom.LocalDestinationInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('capabilities', 8, 0, printing.mojom.PrinterSemanticCapsAndDefaultsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('default_color_mode_deprecated', 16, 0, printing.mojom.ColorModeRestrictionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('default_duplex_mode_deprecated', 24, 0, printing.mojom.DuplexModeRestrictionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('default_pin_mode_deprecated', 32, 0, printing.mojom.PinModeRestrictionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('allowed_color_modes_deprecated', 40, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('allowed_duplex_modes_deprecated', 44, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('allowed_pin_modes_deprecated_version_0', 48, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('has_secure_protocol', 52, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allowed_pin_modes_deprecated_version_1', 56, 0, printing.mojom.PinModeRestrictionSpec.$, null, false, 1, undefined),
    ],
    [[0, 64], [1, 72]]);

// Struct: Policies
mojo.internal.Struct(
    crosapi.mojom.PoliciesSpec, 'crosapi.mojom.Policies', [
      mojo.internal.StructField('print_header_footer_allowed', 0, 0, crosapi.mojom.OptionalBoolSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('print_header_footer_default', 8, 0, crosapi.mojom.OptionalBoolSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('allowed_background_graphics_modes', 16, 0, crosapi.mojom.BackgroundGraphicsModeRestrictionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('background_graphics_default', 24, 0, crosapi.mojom.BackgroundGraphicsModeRestrictionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('paper_size_default', 32, 0, gfx.mojom.SizeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('kUnset', 40, 0, mojo.internal.Pointer, 0, false, 0, undefined),
      mojo.internal.StructField('max_sheets_allowed', 48, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('max_sheets_allowed_has_value', 52, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allowed_pin_modes', 56, 0, printing.mojom.PinModeRestrictionSpec.$, null, false, 1, undefined),
      mojo.internal.StructField('default_color_mode', 64, 0, printing.mojom.ColorModeRestrictionSpec.$, null, false, 1, undefined),
      mojo.internal.StructField('default_duplex_mode', 72, 0, printing.mojom.DuplexModeRestrictionSpec.$, null, false, 1, undefined),
      mojo.internal.StructField('default_pin_mode', 80, 0, printing.mojom.PinModeRestrictionSpec.$, null, false, 1, undefined),
      mojo.internal.StructField('allowed_color_modes', 88, 0, mojo.internal.Uint32, 0, false, 1, undefined),
      mojo.internal.StructField('allowed_duplex_modes', 92, 0, mojo.internal.Uint32, 0, false, 1, undefined),
      mojo.internal.StructField('default_print_pdf_as_image', 96, 0, crosapi.mojom.OptionalBoolSpec.$, null, false, 2, undefined),
    ],
    [[0, 64], [1, 104], [2, 112]]);

// Struct: PrintJobUpdate
mojo.internal.Struct(
    crosapi.mojom.PrintJobUpdateSpec, 'crosapi.mojom.PrintJobUpdate', [
      mojo.internal.StructField('status', 0, 0, crosapi.mojom.PrintJobStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('pages_printed', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: OAuthNotNeeded
mojo.internal.Struct(
    crosapi.mojom.OAuthNotNeededSpec, 'crosapi.mojom.OAuthNotNeeded', [
    ],
    [[0, 8]]);

// Struct: OAuthError
mojo.internal.Struct(
    crosapi.mojom.OAuthErrorSpec, 'crosapi.mojom.OAuthError', [
    ],
    [[0, 8]]);

// Struct: OAuthAccessToken
mojo.internal.Struct(
    crosapi.mojom.OAuthAccessTokenSpec, 'crosapi.mojom.OAuthAccessToken', [
      mojo.internal.StructField('token', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: PrintServerObserver
mojo.internal.Struct(
    crosapi.mojom.PrintServerObserver_OnPrintServersChanged_ParamsSpec, 'crosapi.mojom.PrintServerObserver_OnPrintServersChanged_Params', [
      mojo.internal.StructField('config', 0, 0, crosapi.mojom.PrintServersConfigSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.PrintServerObserver_OnServerPrintersChanged_ParamsSpec, 'crosapi.mojom.PrintServerObserver_OnServerPrintersChanged_Params', [
    ],
    [[0, 8]]);

crosapi.mojom.PrintServerObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.PrintServerObserverRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.PrintServerObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.PrintServerObserverPendingReceiver,
      handle);
    this.$ = new crosapi.mojom.PrintServerObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.PrintServerObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PrintServerObserver', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
  }

  onPrintServersChanged(config) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      crosapi.mojom.PrintServerObserver_OnPrintServersChanged_ParamsSpec,
      null,
      [config],
      false);
  }

  onServerPrintersChanged() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      crosapi.mojom.PrintServerObserver_OnServerPrintersChanged_ParamsSpec,
      null,
      [],
      false);
  }

};

crosapi.mojom.PrintServerObserver.getRemote = function() {
  let remote = new crosapi.mojom.PrintServerObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.PrintServerObserver',
    'context');
  return remote.$;
};

crosapi.mojom.PrintServerObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PrintServerObserver', [
      { explicit: 0 },
      { explicit: 1 },
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
        
        // Try Method 0: OnPrintServersChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.PrintServerObserver_OnPrintServersChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPrintServersChanged (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnServerPrintersChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.PrintServerObserver_OnServerPrintersChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnServerPrintersChanged (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
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
          const params = decoder.decodeStructInline(crosapi.mojom.PrintServerObserver_OnPrintServersChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPrintServersChanged');
          const result = this.impl.onPrintServersChanged(params.config);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.PrintServerObserver_OnServerPrintersChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onServerPrintersChanged');
          const result = this.impl.onServerPrintersChanged();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

crosapi.mojom.PrintServerObserverReceiver = crosapi.mojom.PrintServerObserverReceiver;

crosapi.mojom.PrintServerObserverPtr = crosapi.mojom.PrintServerObserverRemote;
crosapi.mojom.PrintServerObserverRequest = crosapi.mojom.PrintServerObserverPendingReceiver;


// Interface: PrintJobObserver
mojo.internal.Struct(
    crosapi.mojom.PrintJobObserver_OnPrintJobUpdateDeprecated_ParamsSpec, 'crosapi.mojom.PrintJobObserver_OnPrintJobUpdateDeprecated_Params', [
      mojo.internal.StructField('printer_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('status', 8, 0, crosapi.mojom.PrintJobStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('job_id', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    crosapi.mojom.PrintJobObserver_OnPrintJobUpdate_ParamsSpec, 'crosapi.mojom.PrintJobObserver_OnPrintJobUpdate_Params', [
      mojo.internal.StructField('printer_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('update', 8, 0, crosapi.mojom.PrintJobUpdateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('job_id', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

crosapi.mojom.PrintJobObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.PrintJobObserverRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.PrintJobObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.PrintJobObserverPendingReceiver,
      handle);
    this.$ = new crosapi.mojom.PrintJobObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.PrintJobObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PrintJobObserver', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
  }

  onPrintJobUpdateDeprecated(printer_id, job_id, status) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      crosapi.mojom.PrintJobObserver_OnPrintJobUpdateDeprecated_ParamsSpec,
      null,
      [printer_id, job_id, status],
      false);
  }

  onPrintJobUpdate(printer_id, job_id, update) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      crosapi.mojom.PrintJobObserver_OnPrintJobUpdate_ParamsSpec,
      null,
      [printer_id, job_id, update],
      false);
  }

};

crosapi.mojom.PrintJobObserver.getRemote = function() {
  let remote = new crosapi.mojom.PrintJobObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.PrintJobObserver',
    'context');
  return remote.$;
};

crosapi.mojom.PrintJobObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PrintJobObserver', [
      { explicit: 0 },
      { explicit: 1 },
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
        
        // Try Method 0: OnPrintJobUpdateDeprecated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.PrintJobObserver_OnPrintJobUpdateDeprecated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPrintJobUpdateDeprecated (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnPrintJobUpdate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.PrintJobObserver_OnPrintJobUpdate_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPrintJobUpdate (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
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
          const params = decoder.decodeStructInline(crosapi.mojom.PrintJobObserver_OnPrintJobUpdateDeprecated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPrintJobUpdateDeprecated');
          const result = this.impl.onPrintJobUpdateDeprecated(params.printer_id, params.job_id, params.status);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.PrintJobObserver_OnPrintJobUpdate_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPrintJobUpdate');
          const result = this.impl.onPrintJobUpdate(params.printer_id, params.job_id, params.update);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

crosapi.mojom.PrintJobObserverReceiver = crosapi.mojom.PrintJobObserverReceiver;

crosapi.mojom.PrintJobObserverPtr = crosapi.mojom.PrintJobObserverRemote;
crosapi.mojom.PrintJobObserverRequest = crosapi.mojom.PrintJobObserverPendingReceiver;


// Interface: LocalPrintersObserver
mojo.internal.Struct(
    crosapi.mojom.LocalPrintersObserver_OnLocalPrintersUpdated_ParamsSpec, 'crosapi.mojom.LocalPrintersObserver_OnLocalPrintersUpdated_Params', [
      mojo.internal.StructField('printers', 0, 0, mojo.internal.Array(crosapi.mojom.LocalDestinationInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

crosapi.mojom.LocalPrintersObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.LocalPrintersObserverRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.LocalPrintersObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.LocalPrintersObserverPendingReceiver,
      handle);
    this.$ = new crosapi.mojom.LocalPrintersObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.LocalPrintersObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('LocalPrintersObserver', [
      { explicit: 0 },
    ]);
  }

  onLocalPrintersUpdated(printers) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      crosapi.mojom.LocalPrintersObserver_OnLocalPrintersUpdated_ParamsSpec,
      null,
      [printers],
      false);
  }

};

crosapi.mojom.LocalPrintersObserver.getRemote = function() {
  let remote = new crosapi.mojom.LocalPrintersObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.LocalPrintersObserver',
    'context');
  return remote.$;
};

crosapi.mojom.LocalPrintersObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('LocalPrintersObserver', [
      { explicit: 0 },
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
        
        // Try Method 0: OnLocalPrintersUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.LocalPrintersObserver_OnLocalPrintersUpdated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnLocalPrintersUpdated (0)');
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
          const params = decoder.decodeStructInline(crosapi.mojom.LocalPrintersObserver_OnLocalPrintersUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onLocalPrintersUpdated');
          const result = this.impl.onLocalPrintersUpdated(params.printers);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

crosapi.mojom.LocalPrintersObserverReceiver = crosapi.mojom.LocalPrintersObserverReceiver;

crosapi.mojom.LocalPrintersObserverPtr = crosapi.mojom.LocalPrintersObserverRemote;
crosapi.mojom.LocalPrintersObserverRequest = crosapi.mojom.LocalPrintersObserverPendingReceiver;


// Interface: LocalPrinter
mojo.internal.Struct(
    crosapi.mojom.LocalPrinter_GetPrinters_ParamsSpec, 'crosapi.mojom.LocalPrinter_GetPrinters_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.LocalPrinter_GetPrinters_ResponseParamsSpec, 'crosapi.mojom.LocalPrinter_GetPrinters_ResponseParams', [
      mojo.internal.StructField('printers', 0, 0, mojo.internal.Array(crosapi.mojom.LocalDestinationInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.LocalPrinter_GetCapability_ParamsSpec, 'crosapi.mojom.LocalPrinter_GetCapability_Params', [
      mojo.internal.StructField('printer_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.LocalPrinter_GetCapability_ResponseParamsSpec, 'crosapi.mojom.LocalPrinter_GetCapability_ResponseParams', [
      mojo.internal.StructField('capabilities', 0, 0, crosapi.mojom.CapabilitiesResponseSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.LocalPrinter_GetEulaUrl_ParamsSpec, 'crosapi.mojom.LocalPrinter_GetEulaUrl_Params', [
      mojo.internal.StructField('printer_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.LocalPrinter_GetEulaUrl_ResponseParamsSpec, 'crosapi.mojom.LocalPrinter_GetEulaUrl_ResponseParams', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.LocalPrinter_GetStatus_ParamsSpec, 'crosapi.mojom.LocalPrinter_GetStatus_Params', [
      mojo.internal.StructField('printer_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.LocalPrinter_GetStatus_ResponseParamsSpec, 'crosapi.mojom.LocalPrinter_GetStatus_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, crosapi.mojom.PrinterStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.LocalPrinter_ShowSystemPrintSettings_ParamsSpec, 'crosapi.mojom.LocalPrinter_ShowSystemPrintSettings_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.LocalPrinter_ShowSystemPrintSettings_ResponseParamsSpec, 'crosapi.mojom.LocalPrinter_ShowSystemPrintSettings_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.LocalPrinter_CreatePrintJob_ParamsSpec, 'crosapi.mojom.LocalPrinter_CreatePrintJob_Params', [
      mojo.internal.StructField('job', 0, 0, crosapi.mojom.PrintJobSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.LocalPrinter_CreatePrintJob_ResponseParamsSpec, 'crosapi.mojom.LocalPrinter_CreatePrintJob_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.LocalPrinter_CancelPrintJob_ParamsSpec, 'crosapi.mojom.LocalPrinter_CancelPrintJob_Params', [
      mojo.internal.StructField('printer_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('job_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    crosapi.mojom.LocalPrinter_CancelPrintJob_ResponseParamsSpec, 'crosapi.mojom.LocalPrinter_CancelPrintJob_ResponseParams', [
      mojo.internal.StructField('attempted', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.LocalPrinter_GetPrintServersConfig_ParamsSpec, 'crosapi.mojom.LocalPrinter_GetPrintServersConfig_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.LocalPrinter_GetPrintServersConfig_ResponseParamsSpec, 'crosapi.mojom.LocalPrinter_GetPrintServersConfig_ResponseParams', [
      mojo.internal.StructField('config', 0, 0, crosapi.mojom.PrintServersConfigSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.LocalPrinter_ChoosePrintServers_ParamsSpec, 'crosapi.mojom.LocalPrinter_ChoosePrintServers_Params', [
      mojo.internal.StructField('print_server_ids', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.LocalPrinter_ChoosePrintServers_ResponseParamsSpec, 'crosapi.mojom.LocalPrinter_ChoosePrintServers_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.LocalPrinter_AddPrintServerObserver_ParamsSpec, 'crosapi.mojom.LocalPrinter_AddPrintServerObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(crosapi.mojom.PrintServerObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.LocalPrinter_AddPrintServerObserver_ResponseParamsSpec, 'crosapi.mojom.LocalPrinter_AddPrintServerObserver_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.LocalPrinter_GetPolicies_ParamsSpec, 'crosapi.mojom.LocalPrinter_GetPolicies_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.LocalPrinter_GetPolicies_ResponseParamsSpec, 'crosapi.mojom.LocalPrinter_GetPolicies_ResponseParams', [
      mojo.internal.StructField('policies', 0, 0, crosapi.mojom.PoliciesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.LocalPrinter_GetUsernamePerPolicy_ParamsSpec, 'crosapi.mojom.LocalPrinter_GetUsernamePerPolicy_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.LocalPrinter_GetUsernamePerPolicy_ResponseParamsSpec, 'crosapi.mojom.LocalPrinter_GetUsernamePerPolicy_ResponseParams', [
      mojo.internal.StructField('username', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.LocalPrinter_GetPrinterTypeDenyList_ParamsSpec, 'crosapi.mojom.LocalPrinter_GetPrinterTypeDenyList_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.LocalPrinter_GetPrinterTypeDenyList_ResponseParamsSpec, 'crosapi.mojom.LocalPrinter_GetPrinterTypeDenyList_ResponseParams', [
      mojo.internal.StructField('deny_list', 0, 0, mojo.internal.Array(printing.mojom.PrinterTypeSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.LocalPrinter_AddPrintJobObserver_ParamsSpec, 'crosapi.mojom.LocalPrinter_AddPrintJobObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(crosapi.mojom.PrintJobObserverSpec), null, false, 0, undefined),
      mojo.internal.StructField('source', 8, 0, crosapi.mojom.PrintJobSourceSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    crosapi.mojom.LocalPrinter_AddPrintJobObserver_ResponseParamsSpec, 'crosapi.mojom.LocalPrinter_AddPrintJobObserver_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    crosapi.mojom.LocalPrinter_GetOAuthAccessToken_ParamsSpec, 'crosapi.mojom.LocalPrinter_GetOAuthAccessToken_Params', [
      mojo.internal.StructField('printer_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.LocalPrinter_GetOAuthAccessToken_ResponseParamsSpec, 'crosapi.mojom.LocalPrinter_GetOAuthAccessToken_ResponseParams', [
      mojo.internal.StructField('oauth_result', 0, 0, crosapi.mojom.GetOAuthAccessTokenResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.LocalPrinter_GetIppClientInfo_ParamsSpec, 'crosapi.mojom.LocalPrinter_GetIppClientInfo_Params', [
      mojo.internal.StructField('printer_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.LocalPrinter_GetIppClientInfo_ResponseParamsSpec, 'crosapi.mojom.LocalPrinter_GetIppClientInfo_ResponseParams', [
      mojo.internal.StructField('settings', 0, 0, mojo.internal.Array(printing.mojom.IppClientInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.LocalPrinter_AddLocalPrintersObserver_ParamsSpec, 'crosapi.mojom.LocalPrinter_AddLocalPrintersObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(crosapi.mojom.LocalPrintersObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.LocalPrinter_AddLocalPrintersObserver_ResponseParamsSpec, 'crosapi.mojom.LocalPrinter_AddLocalPrintersObserver_ResponseParams', [
      mojo.internal.StructField('printers', 0, 0, mojo.internal.Array(crosapi.mojom.LocalDestinationInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

crosapi.mojom.LocalPrinterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.LocalPrinterRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.LocalPrinter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.LocalPrinterPendingReceiver,
      handle);
    this.$ = new crosapi.mojom.LocalPrinterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.LocalPrinterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('LocalPrinter', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 12 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 8 },
      { explicit: 9 },
      { explicit: 10 },
      { explicit: 11 },
      { explicit: 13 },
      { explicit: 14 },
      { explicit: 15 },
      { explicit: 16 },
    ]);
  }

  getPrinters() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      crosapi.mojom.LocalPrinter_GetPrinters_ParamsSpec,
      crosapi.mojom.LocalPrinter_GetPrinters_ResponseParamsSpec,
      [],
      false);
  }

  getCapability(printer_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      crosapi.mojom.LocalPrinter_GetCapability_ParamsSpec,
      crosapi.mojom.LocalPrinter_GetCapability_ResponseParamsSpec,
      [printer_id],
      false);
  }

  getEulaUrl(printer_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      crosapi.mojom.LocalPrinter_GetEulaUrl_ParamsSpec,
      crosapi.mojom.LocalPrinter_GetEulaUrl_ResponseParamsSpec,
      [printer_id],
      false);
  }

  getStatus(printer_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      crosapi.mojom.LocalPrinter_GetStatus_ParamsSpec,
      crosapi.mojom.LocalPrinter_GetStatus_ResponseParamsSpec,
      [printer_id],
      false);
  }

  showSystemPrintSettings() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      crosapi.mojom.LocalPrinter_ShowSystemPrintSettings_ParamsSpec,
      crosapi.mojom.LocalPrinter_ShowSystemPrintSettings_ResponseParamsSpec,
      [],
      false);
  }

  createPrintJob(job) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      crosapi.mojom.LocalPrinter_CreatePrintJob_ParamsSpec,
      crosapi.mojom.LocalPrinter_CreatePrintJob_ResponseParamsSpec,
      [job],
      false);
  }

  cancelPrintJob(printer_id, job_id) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      crosapi.mojom.LocalPrinter_CancelPrintJob_ParamsSpec,
      crosapi.mojom.LocalPrinter_CancelPrintJob_ResponseParamsSpec,
      [printer_id, job_id],
      false);
  }

  getPrintServersConfig() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      crosapi.mojom.LocalPrinter_GetPrintServersConfig_ParamsSpec,
      crosapi.mojom.LocalPrinter_GetPrintServersConfig_ResponseParamsSpec,
      [],
      false);
  }

  choosePrintServers(print_server_ids) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      crosapi.mojom.LocalPrinter_ChoosePrintServers_ParamsSpec,
      crosapi.mojom.LocalPrinter_ChoosePrintServers_ResponseParamsSpec,
      [print_server_ids],
      false);
  }

  addPrintServerObserver(observer) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      crosapi.mojom.LocalPrinter_AddPrintServerObserver_ParamsSpec,
      crosapi.mojom.LocalPrinter_AddPrintServerObserver_ResponseParamsSpec,
      [observer],
      false);
  }

  getPolicies() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      crosapi.mojom.LocalPrinter_GetPolicies_ParamsSpec,
      crosapi.mojom.LocalPrinter_GetPolicies_ResponseParamsSpec,
      [],
      false);
  }

  getUsernamePerPolicy() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      crosapi.mojom.LocalPrinter_GetUsernamePerPolicy_ParamsSpec,
      crosapi.mojom.LocalPrinter_GetUsernamePerPolicy_ResponseParamsSpec,
      [],
      false);
  }

  getPrinterTypeDenyList() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      crosapi.mojom.LocalPrinter_GetPrinterTypeDenyList_ParamsSpec,
      crosapi.mojom.LocalPrinter_GetPrinterTypeDenyList_ResponseParamsSpec,
      [],
      false);
  }

  addPrintJobObserver(observer, source) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      crosapi.mojom.LocalPrinter_AddPrintJobObserver_ParamsSpec,
      crosapi.mojom.LocalPrinter_AddPrintJobObserver_ResponseParamsSpec,
      [observer, source],
      false);
  }

  getOAuthAccessToken(printer_id) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      crosapi.mojom.LocalPrinter_GetOAuthAccessToken_ParamsSpec,
      crosapi.mojom.LocalPrinter_GetOAuthAccessToken_ResponseParamsSpec,
      [printer_id],
      false);
  }

  getIppClientInfo(printer_id) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      crosapi.mojom.LocalPrinter_GetIppClientInfo_ParamsSpec,
      crosapi.mojom.LocalPrinter_GetIppClientInfo_ResponseParamsSpec,
      [printer_id],
      false);
  }

  addLocalPrintersObserver(observer) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      crosapi.mojom.LocalPrinter_AddLocalPrintersObserver_ParamsSpec,
      crosapi.mojom.LocalPrinter_AddLocalPrintersObserver_ResponseParamsSpec,
      [observer],
      false);
  }

};

crosapi.mojom.LocalPrinter.getRemote = function() {
  let remote = new crosapi.mojom.LocalPrinterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.LocalPrinter',
    'context');
  return remote.$;
};

crosapi.mojom.LocalPrinterReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('LocalPrinter', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 12 },
      { explicit: 6 },
      { explicit: 7 },
      { explicit: 8 },
      { explicit: 9 },
      { explicit: 10 },
      { explicit: 11 },
      { explicit: 13 },
      { explicit: 14 },
      { explicit: 15 },
      { explicit: 16 },
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
        
        // Try Method 0: GetPrinters
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.LocalPrinter_GetPrinters_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetPrinters (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetCapability
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.LocalPrinter_GetCapability_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetCapability (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: GetEulaUrl
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.LocalPrinter_GetEulaUrl_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetEulaUrl (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: GetStatus
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.LocalPrinter_GetStatus_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetStatus (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: ShowSystemPrintSettings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.LocalPrinter_ShowSystemPrintSettings_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowSystemPrintSettings (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: CreatePrintJob
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.LocalPrinter_CreatePrintJob_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreatePrintJob (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: CancelPrintJob
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.LocalPrinter_CancelPrintJob_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CancelPrintJob (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: GetPrintServersConfig
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.LocalPrinter_GetPrintServersConfig_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetPrintServersConfig (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: ChoosePrintServers
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.LocalPrinter_ChoosePrintServers_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ChoosePrintServers (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: AddPrintServerObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.LocalPrinter_AddPrintServerObserver_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddPrintServerObserver (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: GetPolicies
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.LocalPrinter_GetPolicies_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetPolicies (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: GetUsernamePerPolicy
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.LocalPrinter_GetUsernamePerPolicy_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetUsernamePerPolicy (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: GetPrinterTypeDenyList
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.LocalPrinter_GetPrinterTypeDenyList_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetPrinterTypeDenyList (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: AddPrintJobObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.LocalPrinter_AddPrintJobObserver_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddPrintJobObserver (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: GetOAuthAccessToken
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.LocalPrinter_GetOAuthAccessToken_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetOAuthAccessToken (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: GetIppClientInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.LocalPrinter_GetIppClientInfo_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetIppClientInfo (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: AddLocalPrintersObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.LocalPrinter_AddLocalPrintersObserver_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddLocalPrintersObserver (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
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
          const params = decoder.decodeStructInline(crosapi.mojom.LocalPrinter_GetPrinters_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getPrinters');
          const result = this.impl.getPrinters();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.LocalPrinter_GetPrinters_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.LocalPrinter_GetCapability_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getCapability');
          const result = this.impl.getCapability(params.printer_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.LocalPrinter_GetCapability_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.LocalPrinter_GetEulaUrl_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getEulaUrl');
          const result = this.impl.getEulaUrl(params.printer_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.LocalPrinter_GetEulaUrl_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.LocalPrinter_GetStatus_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getStatus');
          const result = this.impl.getStatus(params.printer_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.LocalPrinter_GetStatus_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.LocalPrinter_ShowSystemPrintSettings_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showSystemPrintSettings');
          const result = this.impl.showSystemPrintSettings();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.LocalPrinter_ShowSystemPrintSettings_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.LocalPrinter_CreatePrintJob_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createPrintJob');
          const result = this.impl.createPrintJob(params.job);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.LocalPrinter_CreatePrintJob_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.LocalPrinter_CancelPrintJob_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.cancelPrintJob');
          const result = this.impl.cancelPrintJob(params.printer_id, params.job_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.LocalPrinter_CancelPrintJob_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.LocalPrinter_GetPrintServersConfig_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getPrintServersConfig');
          const result = this.impl.getPrintServersConfig();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.LocalPrinter_GetPrintServersConfig_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.LocalPrinter_ChoosePrintServers_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.choosePrintServers');
          const result = this.impl.choosePrintServers(params.print_server_ids);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.LocalPrinter_ChoosePrintServers_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.LocalPrinter_AddPrintServerObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addPrintServerObserver');
          const result = this.impl.addPrintServerObserver(params.observer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.LocalPrinter_AddPrintServerObserver_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.LocalPrinter_GetPolicies_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getPolicies');
          const result = this.impl.getPolicies();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.LocalPrinter_GetPolicies_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.LocalPrinter_GetUsernamePerPolicy_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getUsernamePerPolicy');
          const result = this.impl.getUsernamePerPolicy();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.LocalPrinter_GetUsernamePerPolicy_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.LocalPrinter_GetPrinterTypeDenyList_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getPrinterTypeDenyList');
          const result = this.impl.getPrinterTypeDenyList();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.LocalPrinter_GetPrinterTypeDenyList_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.LocalPrinter_AddPrintJobObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addPrintJobObserver');
          const result = this.impl.addPrintJobObserver(params.observer, params.source);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.LocalPrinter_AddPrintJobObserver_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.LocalPrinter_GetOAuthAccessToken_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getOAuthAccessToken');
          const result = this.impl.getOAuthAccessToken(params.printer_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.LocalPrinter_GetOAuthAccessToken_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.LocalPrinter_GetIppClientInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getIppClientInfo');
          const result = this.impl.getIppClientInfo(params.printer_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.LocalPrinter_GetIppClientInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.LocalPrinter_AddLocalPrintersObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addLocalPrintersObserver');
          const result = this.impl.addLocalPrintersObserver(params.observer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, crosapi.mojom.LocalPrinter_AddLocalPrintersObserver_ResponseParamsSpec);
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

crosapi.mojom.LocalPrinterReceiver = crosapi.mojom.LocalPrinterReceiver;

crosapi.mojom.LocalPrinterPtr = crosapi.mojom.LocalPrinterRemote;
crosapi.mojom.LocalPrinterRequest = crosapi.mojom.LocalPrinterPendingReceiver;

