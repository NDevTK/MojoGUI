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

         const p = window.mojoVersion.split('.');
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
 var mojo = mojo || {};
 mojo.internal = mojo.internal || {};
 mojo.internal.bindings = mojo.internal.bindings || {};
 

 mojo.internal.bindings.crosapi = mojo.internal.bindings.crosapi || {};
mojo.internal.bindings.crosapi.mojom = mojo.internal.bindings.crosapi.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.printing = mojo.internal.bindings.printing || {};
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.crosapi.mojom.ReasonSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.SeveritySpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.DuplexTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.QualityTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.DuplexModeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.SourceSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.ServerPrintersFetchingModeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.BackgroundGraphicsModeRestrictionSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.OptionalBoolSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.PrintJobStatusSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.PrintJobSourceSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.crosapi.mojom.GetOAuthAccessTokenResultSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.LocalDestinationInfoSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.PrinterStatusSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.StatusReasonSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.SizeSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DpiSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.SizeOptionSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.StringOptionSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DuplexOptionSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.BoolOptionSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.DpiOptionSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.QualityOptionSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.ManagedPrintOptionsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.PrintJobSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.PrintServersConfigSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.PrintServerSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.CapabilitiesResponseSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.PoliciesSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.PrintJobUpdateSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.OAuthNotNeededSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.OAuthErrorSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.OAuthAccessTokenSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.PrintServerObserver = {};
mojo.internal.bindings.crosapi.mojom.PrintServerObserver.$interfaceName = 'crosapi.mojom.PrintServerObserver';
mojo.internal.bindings.crosapi.mojom.PrintServerObserver_OnPrintServersChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.PrintServerObserver_OnServerPrintersChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.PrintJobObserver = {};
mojo.internal.bindings.crosapi.mojom.PrintJobObserver.$interfaceName = 'crosapi.mojom.PrintJobObserver';
mojo.internal.bindings.crosapi.mojom.PrintJobObserver_OnPrintJobUpdateDeprecated_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.PrintJobObserver_OnPrintJobUpdate_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.LocalPrintersObserver = {};
mojo.internal.bindings.crosapi.mojom.LocalPrintersObserver.$interfaceName = 'crosapi.mojom.LocalPrintersObserver';
mojo.internal.bindings.crosapi.mojom.LocalPrintersObserver_OnLocalPrintersUpdated_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.LocalPrinter = {};
mojo.internal.bindings.crosapi.mojom.LocalPrinter.$interfaceName = 'crosapi.mojom.LocalPrinter';
mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetPrinters_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetPrinters_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetCapability_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetCapability_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetEulaUrl_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetEulaUrl_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetStatus_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetStatus_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.LocalPrinter_ShowSystemPrintSettings_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.LocalPrinter_ShowSystemPrintSettings_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.LocalPrinter_CreatePrintJob_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.LocalPrinter_CreatePrintJob_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.LocalPrinter_CancelPrintJob_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.LocalPrinter_CancelPrintJob_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetPrintServersConfig_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetPrintServersConfig_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.LocalPrinter_ChoosePrintServers_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.LocalPrinter_ChoosePrintServers_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.LocalPrinter_AddPrintServerObserver_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.LocalPrinter_AddPrintServerObserver_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetPolicies_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetPolicies_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetUsernamePerPolicy_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetUsernamePerPolicy_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetPrinterTypeDenyList_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetPrinterTypeDenyList_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.LocalPrinter_AddPrintJobObserver_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.LocalPrinter_AddPrintJobObserver_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetOAuthAccessToken_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetOAuthAccessToken_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetIppClientInfo_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetIppClientInfo_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.LocalPrinter_AddLocalPrintersObserver_ParamsSpec = { $: {} };
mojo.internal.bindings.crosapi.mojom.LocalPrinter_AddLocalPrintersObserver_ResponseParamsSpec = { $: {} };

// Enum: Reason
mojo.internal.bindings.crosapi.mojom.Reason = {
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
mojo.internal.bindings.crosapi.mojom.Severity = {
  kUnknownSeverity: 0,
  kReport: 1,
  kWarning: 2,
  kError: 3,
};

// Enum: DuplexType
mojo.internal.bindings.crosapi.mojom.DuplexType = {
  kUnknownDuplex: 0,
  kOneSided: 1,
  kShortEdge: 2,
  kLongEdge: 3,
};

// Enum: QualityType
mojo.internal.bindings.crosapi.mojom.QualityType = {
  kUnknownQuality: 0,
  kDraft: 1,
  kNormal: 2,
  kHigh: 3,
};

// Enum: DuplexMode
mojo.internal.bindings.crosapi.mojom.DuplexMode = {
  kSimplex: 0,
  kLongEdge: 1,
  kShortEdge: 2,
};

// Enum: Source
mojo.internal.bindings.crosapi.mojom.Source = {
  kUnknown: -1,
  kPrintPreview: 0,
  kArc: 1,
  kExtension: 2,
  kPrintPreviewIncognito: 3,
  MinVersion: 3,
};

// Enum: ServerPrintersFetchingMode
mojo.internal.bindings.crosapi.mojom.ServerPrintersFetchingMode = {
  kStandard: 0,
  kSingleServerOnly: 1,
};

// Enum: BackgroundGraphicsModeRestriction
mojo.internal.bindings.crosapi.mojom.BackgroundGraphicsModeRestriction = {
  kUnset: 0,
  kEnabled: 1,
  kDisabled: 2,
};

// Enum: OptionalBool
mojo.internal.bindings.crosapi.mojom.OptionalBool = {
  kUnset: 0,
  kFalse: 1,
  kTrue: 2,
};

// Enum: PrintJobStatus
mojo.internal.bindings.crosapi.mojom.PrintJobStatus = {
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
mojo.internal.bindings.crosapi.mojom.PrintJobSource = {
  kAny: 0,
  kExtension: 1,
  MinVersion: 1,
};

// Union: GetOAuthAccessTokenResult
mojo.internal.Union(
    mojo.internal.bindings.crosapi.mojom.GetOAuthAccessTokenResultSpec, 'crosapi.mojom.GetOAuthAccessTokenResult', {
      'arg_none': {
        'ordinal': 0,
        'type': mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.OAuthNotNeededSpec.$,
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.OAuthErrorSpec.$,
        'nullable': false,
      },
      'arg_token': {
        'ordinal': 2,
        'type': mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.OAuthAccessTokenSpec.$,
        'nullable': false,
      },
    });

// Struct: LocalDestinationInfo
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.LocalDestinationInfoSpec, 'crosapi.mojom.LocalDestinationInfo', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_description', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_configured_via_policy', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_uri', 32, 0, mojo.internal.String, null, true, 3, undefined),
      mojo.internal.StructField('arg_printer_status', 40, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.PrinterStatusSpec.$, null, true, 4, undefined),
      mojo.internal.StructField('arg_managed_print_options', 48, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.ManagedPrintOptionsSpec.$, null, true, 5, undefined),
    ],
    [[0, 40], [3, 48], [4, 56], [5, 64]]);

// Struct: PrinterStatus
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.PrinterStatusSpec, 'crosapi.mojom.PrinterStatus', [
      mojo.internal.StructField('arg_printer_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_timestamp', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_status_reasons', 16, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.StatusReasonSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: StatusReason
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.StatusReasonSpec, 'crosapi.mojom.StatusReason', [
      mojo.internal.StructField('arg_reason', 0, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.ReasonSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_severity', 8, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.SeveritySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_kUnknownReason', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 24, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 32, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 40, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 48, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 56, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 64, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 72, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 80, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 88, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 96, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 104, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 112, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 120, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 128, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 136, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 144, 0, mojo.internal.Pointer, null, false, 1, undefined),
    ],
    [[0, 152], [1, 160]]);

// Struct: Size
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.SizeSpec, 'crosapi.mojom.Size', [
      mojo.internal.StructField('arg_width', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_height', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: Dpi
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DpiSpec, 'crosapi.mojom.Dpi', [
      mojo.internal.StructField('arg_horizontal', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_vertical', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SizeOption
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.SizeOptionSpec, 'crosapi.mojom.SizeOption', [
      mojo.internal.StructField('arg_default_value', 0, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.SizeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_allowed_values', 8, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.SizeSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: StringOption
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.StringOptionSpec, 'crosapi.mojom.StringOption', [
      mojo.internal.StructField('arg_default_value', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_allowed_values', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: DuplexOption
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DuplexOptionSpec, 'crosapi.mojom.DuplexOption', [
      mojo.internal.StructField('arg_default_value', 0, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.DuplexTypeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_allowed_values', 8, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.DuplexTypeSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BoolOption
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.BoolOptionSpec, 'crosapi.mojom.BoolOption', [
      mojo.internal.StructField('arg_allowed_values', 0, 0, mojo.internal.Array(mojo.internal.Bool, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_default_value_$flag', 8, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_default_value_$value', originalFieldName: 'arg_default_value' }),
      mojo.internal.StructField('arg_default_value_$value', 8, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_default_value_$flag', originalFieldName: 'arg_default_value' }),
    ],
    [[0, 24]]);

// Struct: DpiOption
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.DpiOptionSpec, 'crosapi.mojom.DpiOption', [
      mojo.internal.StructField('arg_default_value', 0, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.DpiSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_allowed_values', 8, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.DpiSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: QualityOption
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.QualityOptionSpec, 'crosapi.mojom.QualityOption', [
      mojo.internal.StructField('arg_default_value', 0, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.QualityTypeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_allowed_values', 8, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.QualityTypeSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ManagedPrintOptions
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.ManagedPrintOptionsSpec, 'crosapi.mojom.ManagedPrintOptions', [
      mojo.internal.StructField('arg_media_size', 0, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.SizeOptionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_media_type', 8, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.StringOptionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_duplex', 16, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.DuplexOptionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_color', 24, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.BoolOptionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_dpi', 32, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.DpiOptionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_quality', 40, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.QualityOptionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_print_as_image', 48, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.BoolOptionSpec.$, null, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: PrintJob
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.PrintJobSpec, 'crosapi.mojom.PrintJob', [
      mojo.internal.StructField('arg_device_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_title', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_source', 16, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.SourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_source_id', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_color_mode', 32, 0, mojo.internal.bindings.printing.mojom.ColorModelSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_duplex_mode', 40, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.DuplexModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_media_size', 48, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_media_vendor_id', 56, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_kSimplex', 64, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 72, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 80, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_job_id', 88, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_page_count', 92, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_copies', 96, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 112]]);

// Struct: PrintServersConfig
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.PrintServersConfigSpec, 'crosapi.mojom.PrintServersConfig', [
      mojo.internal.StructField('arg_fetching_mode', 0, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.ServerPrintersFetchingModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_print_servers', 8, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.PrintServerSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_kStandard', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('arg_val', 24, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: PrintServer
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.PrintServerSpec, 'crosapi.mojom.PrintServer', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: CapabilitiesResponse
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.CapabilitiesResponseSpec, 'crosapi.mojom.CapabilitiesResponse', [
      mojo.internal.StructField('arg_basic_info', 0, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.LocalDestinationInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_capabilities', 8, 0, mojo.internal.bindings.printing.mojom.PrinterSemanticCapsAndDefaultsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_default_color_mode_deprecated', 16, 0, mojo.internal.bindings.printing.mojom.ColorModeRestrictionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_default_duplex_mode_deprecated', 24, 0, mojo.internal.bindings.printing.mojom.DuplexModeRestrictionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_default_pin_mode_deprecated', 32, 0, mojo.internal.bindings.printing.mojom.PinModeRestrictionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_allowed_color_modes_deprecated', 40, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_allowed_duplex_modes_deprecated', 44, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_allowed_pin_modes_deprecated_version_0', 48, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_has_secure_protocol', 52, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_allowed_pin_modes_deprecated_version_1', 56, 0, mojo.internal.bindings.printing.mojom.PinModeRestrictionSpec.$, null, false, 1, undefined),
    ],
    [[0, 64], [1, 72]]);

// Struct: Policies
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.PoliciesSpec, 'crosapi.mojom.Policies', [
      mojo.internal.StructField('arg_print_header_footer_allowed', 0, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.OptionalBoolSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_print_header_footer_default', 8, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.OptionalBoolSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_allowed_background_graphics_modes', 16, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.BackgroundGraphicsModeRestrictionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_background_graphics_default', 24, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.BackgroundGraphicsModeRestrictionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_paper_size_default', 32, 0, mojo.internal.bindings.gfx.mojom.SizeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_kUnset', 40, 0, mojo.internal.Pointer, 0, false, 0, undefined),
      mojo.internal.StructField('arg_val', 48, 0, mojo.internal.Pointer, 1, false, 0, undefined),
      mojo.internal.StructField('arg_val', 56, 0, mojo.internal.Pointer, 2, false, 0, undefined),
      mojo.internal.StructField('arg_max_sheets_allowed', 64, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_max_sheets_allowed_has_value', 68, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_allowed_pin_modes', 72, 0, mojo.internal.bindings.printing.mojom.PinModeRestrictionSpec.$, null, false, 1, undefined),
      mojo.internal.StructField('arg_default_color_mode', 80, 0, mojo.internal.bindings.printing.mojom.ColorModeRestrictionSpec.$, null, false, 1, undefined),
      mojo.internal.StructField('arg_default_duplex_mode', 88, 0, mojo.internal.bindings.printing.mojom.DuplexModeRestrictionSpec.$, null, false, 1, undefined),
      mojo.internal.StructField('arg_default_pin_mode', 96, 0, mojo.internal.bindings.printing.mojom.PinModeRestrictionSpec.$, null, false, 1, undefined),
      mojo.internal.StructField('arg_allowed_color_modes', 104, 0, mojo.internal.Uint32, 0, false, 1, undefined),
      mojo.internal.StructField('arg_allowed_duplex_modes', 108, 0, mojo.internal.Uint32, 0, false, 1, undefined),
      mojo.internal.StructField('arg_default_print_pdf_as_image', 112, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.OptionalBoolSpec.$, null, false, 2, undefined),
    ],
    [[0, 80], [1, 120], [2, 128]]);

// Struct: PrintJobUpdate
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.PrintJobUpdateSpec, 'crosapi.mojom.PrintJobUpdate', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.PrintJobStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_pages_printed', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: OAuthNotNeeded
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.OAuthNotNeededSpec, 'crosapi.mojom.OAuthNotNeeded', [
    ],
    [[0, 8]]);

// Struct: OAuthError
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.OAuthErrorSpec, 'crosapi.mojom.OAuthError', [
    ],
    [[0, 8]]);

// Struct: OAuthAccessToken
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.OAuthAccessTokenSpec, 'crosapi.mojom.OAuthAccessToken', [
      mojo.internal.StructField('arg_token', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: PrintServerObserver
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.PrintServerObserver_OnPrintServersChanged_ParamsSpec, 'crosapi.mojom.PrintServerObserver_OnPrintServersChanged_Params', [
      mojo.internal.StructField('arg_config', 0, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.PrintServersConfigSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.PrintServerObserver_OnServerPrintersChanged_ParamsSpec, 'crosapi.mojom.PrintServerObserver_OnServerPrintersChanged_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.crosapi.mojom.PrintServerObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.crosapi.mojom.PrintServerObserverRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.PrintServerObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.crosapi.mojom.PrintServerObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.crosapi.mojom.PrintServerObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onPrintServersChanged(arg_config) {
    return this.$.onPrintServersChanged(arg_config);
  }
  onServerPrintersChanged() {
    return this.$.onServerPrintersChanged();
  }
};

mojo.internal.bindings.crosapi.mojom.PrintServerObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PrintServerObserver', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
  }

  onPrintServersChanged(arg_config) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.crosapi.mojom.PrintServerObserver_OnPrintServersChanged_ParamsSpec,
      null,
      [arg_config],
      false);
  }

  onServerPrintersChanged() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.crosapi.mojom.PrintServerObserver_OnServerPrintersChanged_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.crosapi.mojom.PrintServerObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.crosapi.mojom.PrintServerObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.PrintServerObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.crosapi.mojom.PrintServerObserverReceiver = class {
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
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.PrintServerObserver_OnPrintServersChanged_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.PrintServerObserver_OnServerPrintersChanged_ParamsSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.PrintServerObserver_OnPrintServersChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPrintServersChanged');
          const result = this.impl.onPrintServersChanged(params.arg_config);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.PrintServerObserver_OnServerPrintersChanged_ParamsSpec.$.structSpec);
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

mojo.internal.bindings.crosapi.mojom.PrintServerObserverReceiver = mojo.internal.bindings.crosapi.mojom.PrintServerObserverReceiver;

mojo.internal.bindings.crosapi.mojom.PrintServerObserverPtr = mojo.internal.bindings.crosapi.mojom.PrintServerObserverRemote;
mojo.internal.bindings.crosapi.mojom.PrintServerObserverRequest = mojo.internal.bindings.crosapi.mojom.PrintServerObserverPendingReceiver;


// Interface: PrintJobObserver
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.PrintJobObserver_OnPrintJobUpdateDeprecated_ParamsSpec, 'crosapi.mojom.PrintJobObserver_OnPrintJobUpdateDeprecated_Params', [
      mojo.internal.StructField('arg_printer_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_status', 8, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.PrintJobStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_job_id', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.PrintJobObserver_OnPrintJobUpdate_ParamsSpec, 'crosapi.mojom.PrintJobObserver_OnPrintJobUpdate_Params', [
      mojo.internal.StructField('arg_printer_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_update', 8, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.PrintJobUpdateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_job_id', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.bindings.crosapi.mojom.PrintJobObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.crosapi.mojom.PrintJobObserverRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.PrintJobObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.crosapi.mojom.PrintJobObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.crosapi.mojom.PrintJobObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onPrintJobUpdateDeprecated(arg_printer_id, arg_job_id, arg_status) {
    return this.$.onPrintJobUpdateDeprecated(arg_printer_id, arg_job_id, arg_status);
  }
  onPrintJobUpdate(arg_printer_id, arg_job_id, arg_update) {
    return this.$.onPrintJobUpdate(arg_printer_id, arg_job_id, arg_update);
  }
};

mojo.internal.bindings.crosapi.mojom.PrintJobObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PrintJobObserver', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
  }

  onPrintJobUpdateDeprecated(arg_printer_id, arg_job_id, arg_status) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.crosapi.mojom.PrintJobObserver_OnPrintJobUpdateDeprecated_ParamsSpec,
      null,
      [arg_printer_id, arg_job_id, arg_status],
      false);
  }

  onPrintJobUpdate(arg_printer_id, arg_job_id, arg_update) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.crosapi.mojom.PrintJobObserver_OnPrintJobUpdate_ParamsSpec,
      null,
      [arg_printer_id, arg_job_id, arg_update],
      false);
  }

};

mojo.internal.bindings.crosapi.mojom.PrintJobObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.crosapi.mojom.PrintJobObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.PrintJobObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.crosapi.mojom.PrintJobObserverReceiver = class {
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
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.PrintJobObserver_OnPrintJobUpdateDeprecated_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.PrintJobObserver_OnPrintJobUpdate_ParamsSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.PrintJobObserver_OnPrintJobUpdateDeprecated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPrintJobUpdateDeprecated');
          const result = this.impl.onPrintJobUpdateDeprecated(params.arg_printer_id, params.arg_job_id, params.arg_status);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.PrintJobObserver_OnPrintJobUpdate_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPrintJobUpdate');
          const result = this.impl.onPrintJobUpdate(params.arg_printer_id, params.arg_job_id, params.arg_update);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.crosapi.mojom.PrintJobObserverReceiver = mojo.internal.bindings.crosapi.mojom.PrintJobObserverReceiver;

mojo.internal.bindings.crosapi.mojom.PrintJobObserverPtr = mojo.internal.bindings.crosapi.mojom.PrintJobObserverRemote;
mojo.internal.bindings.crosapi.mojom.PrintJobObserverRequest = mojo.internal.bindings.crosapi.mojom.PrintJobObserverPendingReceiver;


// Interface: LocalPrintersObserver
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.LocalPrintersObserver_OnLocalPrintersUpdated_ParamsSpec, 'crosapi.mojom.LocalPrintersObserver_OnLocalPrintersUpdated_Params', [
      mojo.internal.StructField('arg_printers', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.LocalDestinationInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.crosapi.mojom.LocalPrintersObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.crosapi.mojom.LocalPrintersObserverRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.LocalPrintersObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.crosapi.mojom.LocalPrintersObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.crosapi.mojom.LocalPrintersObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onLocalPrintersUpdated(arg_printers) {
    return this.$.onLocalPrintersUpdated(arg_printers);
  }
};

mojo.internal.bindings.crosapi.mojom.LocalPrintersObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('LocalPrintersObserver', [
      { explicit: 0 },
    ]);
  }

  onLocalPrintersUpdated(arg_printers) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.crosapi.mojom.LocalPrintersObserver_OnLocalPrintersUpdated_ParamsSpec,
      null,
      [arg_printers],
      false);
  }

};

mojo.internal.bindings.crosapi.mojom.LocalPrintersObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.crosapi.mojom.LocalPrintersObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.LocalPrintersObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.crosapi.mojom.LocalPrintersObserverReceiver = class {
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
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.LocalPrintersObserver_OnLocalPrintersUpdated_ParamsSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.LocalPrintersObserver_OnLocalPrintersUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onLocalPrintersUpdated');
          const result = this.impl.onLocalPrintersUpdated(params.arg_printers);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.crosapi.mojom.LocalPrintersObserverReceiver = mojo.internal.bindings.crosapi.mojom.LocalPrintersObserverReceiver;

mojo.internal.bindings.crosapi.mojom.LocalPrintersObserverPtr = mojo.internal.bindings.crosapi.mojom.LocalPrintersObserverRemote;
mojo.internal.bindings.crosapi.mojom.LocalPrintersObserverRequest = mojo.internal.bindings.crosapi.mojom.LocalPrintersObserverPendingReceiver;


// Interface: LocalPrinter
mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetPrinters_ParamsSpec, 'crosapi.mojom.LocalPrinter_GetPrinters_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetPrinters_ResponseParamsSpec, 'crosapi.mojom.LocalPrinter_GetPrinters_ResponseParams', [
      mojo.internal.StructField('arg_printers', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.LocalDestinationInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetCapability_ParamsSpec, 'crosapi.mojom.LocalPrinter_GetCapability_Params', [
      mojo.internal.StructField('arg_printer_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetCapability_ResponseParamsSpec, 'crosapi.mojom.LocalPrinter_GetCapability_ResponseParams', [
      mojo.internal.StructField('arg_capabilities', 0, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.CapabilitiesResponseSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetEulaUrl_ParamsSpec, 'crosapi.mojom.LocalPrinter_GetEulaUrl_Params', [
      mojo.internal.StructField('arg_printer_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetEulaUrl_ResponseParamsSpec, 'crosapi.mojom.LocalPrinter_GetEulaUrl_ResponseParams', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetStatus_ParamsSpec, 'crosapi.mojom.LocalPrinter_GetStatus_Params', [
      mojo.internal.StructField('arg_printer_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetStatus_ResponseParamsSpec, 'crosapi.mojom.LocalPrinter_GetStatus_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.PrinterStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.LocalPrinter_ShowSystemPrintSettings_ParamsSpec, 'crosapi.mojom.LocalPrinter_ShowSystemPrintSettings_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.LocalPrinter_ShowSystemPrintSettings_ResponseParamsSpec, 'crosapi.mojom.LocalPrinter_ShowSystemPrintSettings_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.LocalPrinter_CreatePrintJob_ParamsSpec, 'crosapi.mojom.LocalPrinter_CreatePrintJob_Params', [
      mojo.internal.StructField('arg_job', 0, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.PrintJobSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.LocalPrinter_CreatePrintJob_ResponseParamsSpec, 'crosapi.mojom.LocalPrinter_CreatePrintJob_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.LocalPrinter_CancelPrintJob_ParamsSpec, 'crosapi.mojom.LocalPrinter_CancelPrintJob_Params', [
      mojo.internal.StructField('arg_printer_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_job_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.LocalPrinter_CancelPrintJob_ResponseParamsSpec, 'crosapi.mojom.LocalPrinter_CancelPrintJob_ResponseParams', [
      mojo.internal.StructField('arg_attempted', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetPrintServersConfig_ParamsSpec, 'crosapi.mojom.LocalPrinter_GetPrintServersConfig_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetPrintServersConfig_ResponseParamsSpec, 'crosapi.mojom.LocalPrinter_GetPrintServersConfig_ResponseParams', [
      mojo.internal.StructField('arg_config', 0, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.PrintServersConfigSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.LocalPrinter_ChoosePrintServers_ParamsSpec, 'crosapi.mojom.LocalPrinter_ChoosePrintServers_Params', [
      mojo.internal.StructField('arg_print_server_ids', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.LocalPrinter_ChoosePrintServers_ResponseParamsSpec, 'crosapi.mojom.LocalPrinter_ChoosePrintServers_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.LocalPrinter_AddPrintServerObserver_ParamsSpec, 'crosapi.mojom.LocalPrinter_AddPrintServerObserver_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.crosapi.mojom.PrintServerObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.LocalPrinter_AddPrintServerObserver_ResponseParamsSpec, 'crosapi.mojom.LocalPrinter_AddPrintServerObserver_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetPolicies_ParamsSpec, 'crosapi.mojom.LocalPrinter_GetPolicies_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetPolicies_ResponseParamsSpec, 'crosapi.mojom.LocalPrinter_GetPolicies_ResponseParams', [
      mojo.internal.StructField('arg_policies', 0, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.PoliciesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetUsernamePerPolicy_ParamsSpec, 'crosapi.mojom.LocalPrinter_GetUsernamePerPolicy_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetUsernamePerPolicy_ResponseParamsSpec, 'crosapi.mojom.LocalPrinter_GetUsernamePerPolicy_ResponseParams', [
      mojo.internal.StructField('arg_username', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetPrinterTypeDenyList_ParamsSpec, 'crosapi.mojom.LocalPrinter_GetPrinterTypeDenyList_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetPrinterTypeDenyList_ResponseParamsSpec, 'crosapi.mojom.LocalPrinter_GetPrinterTypeDenyList_ResponseParams', [
      mojo.internal.StructField('arg_deny_list', 0, 0, mojo.internal.Array(mojo.internal.bindings.printing.mojom.PrinterTypeSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.LocalPrinter_AddPrintJobObserver_ParamsSpec, 'crosapi.mojom.LocalPrinter_AddPrintJobObserver_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.crosapi.mojom.PrintJobObserverSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_source', 8, 0, mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.PrintJobSourceSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.LocalPrinter_AddPrintJobObserver_ResponseParamsSpec, 'crosapi.mojom.LocalPrinter_AddPrintJobObserver_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetOAuthAccessToken_ParamsSpec, 'crosapi.mojom.LocalPrinter_GetOAuthAccessToken_Params', [
      mojo.internal.StructField('arg_printer_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetOAuthAccessToken_ResponseParamsSpec, 'crosapi.mojom.LocalPrinter_GetOAuthAccessToken_ResponseParams', [
      mojo.internal.StructField('arg_oauth_result', 0, 0, mojo.internal.bindings.crosapi.mojom.GetOAuthAccessTokenResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetIppClientInfo_ParamsSpec, 'crosapi.mojom.LocalPrinter_GetIppClientInfo_Params', [
      mojo.internal.StructField('arg_printer_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetIppClientInfo_ResponseParamsSpec, 'crosapi.mojom.LocalPrinter_GetIppClientInfo_ResponseParams', [
      mojo.internal.StructField('arg_settings', 0, 0, mojo.internal.Array(mojo.internal.bindings.printing.mojom.IppClientInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.LocalPrinter_AddLocalPrintersObserver_ParamsSpec, 'crosapi.mojom.LocalPrinter_AddLocalPrintersObserver_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.crosapi.mojom.LocalPrintersObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.crosapi.mojom.LocalPrinter_AddLocalPrintersObserver_ResponseParamsSpec, 'crosapi.mojom.LocalPrinter_AddLocalPrintersObserver_ResponseParams', [
      mojo.internal.StructField('arg_printers', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo.internal.bindings.crosapi.mojom.LocalDestinationInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.crosapi.mojom.LocalPrinterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.crosapi.mojom.LocalPrinterRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.LocalPrinter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.crosapi.mojom.LocalPrinterPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.crosapi.mojom.LocalPrinterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getPrinters() {
    return this.$.getPrinters();
  }
  getCapability(arg_printer_id) {
    return this.$.getCapability(arg_printer_id);
  }
  getEulaUrl(arg_printer_id) {
    return this.$.getEulaUrl(arg_printer_id);
  }
  getStatus(arg_printer_id) {
    return this.$.getStatus(arg_printer_id);
  }
  showSystemPrintSettings() {
    return this.$.showSystemPrintSettings();
  }
  createPrintJob(arg_job) {
    return this.$.createPrintJob(arg_job);
  }
  cancelPrintJob(arg_printer_id, arg_job_id) {
    return this.$.cancelPrintJob(arg_printer_id, arg_job_id);
  }
  getPrintServersConfig() {
    return this.$.getPrintServersConfig();
  }
  choosePrintServers(arg_print_server_ids) {
    return this.$.choosePrintServers(arg_print_server_ids);
  }
  addPrintServerObserver(arg_observer) {
    return this.$.addPrintServerObserver(arg_observer);
  }
  getPolicies() {
    return this.$.getPolicies();
  }
  getUsernamePerPolicy() {
    return this.$.getUsernamePerPolicy();
  }
  getPrinterTypeDenyList() {
    return this.$.getPrinterTypeDenyList();
  }
  addPrintJobObserver(arg_observer, arg_source) {
    return this.$.addPrintJobObserver(arg_observer, arg_source);
  }
  getOAuthAccessToken(arg_printer_id) {
    return this.$.getOAuthAccessToken(arg_printer_id);
  }
  getIppClientInfo(arg_printer_id) {
    return this.$.getIppClientInfo(arg_printer_id);
  }
  addLocalPrintersObserver(arg_observer) {
    return this.$.addLocalPrintersObserver(arg_observer);
  }
};

mojo.internal.bindings.crosapi.mojom.LocalPrinterRemoteCallHandler = class {
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
      mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetPrinters_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetPrinters_ResponseParamsSpec,
      [],
      false);
  }

  getCapability(arg_printer_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetCapability_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetCapability_ResponseParamsSpec,
      [arg_printer_id],
      false);
  }

  getEulaUrl(arg_printer_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetEulaUrl_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetEulaUrl_ResponseParamsSpec,
      [arg_printer_id],
      false);
  }

  getStatus(arg_printer_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetStatus_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetStatus_ResponseParamsSpec,
      [arg_printer_id],
      false);
  }

  showSystemPrintSettings() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.crosapi.mojom.LocalPrinter_ShowSystemPrintSettings_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.LocalPrinter_ShowSystemPrintSettings_ResponseParamsSpec,
      [],
      false);
  }

  createPrintJob(arg_job) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.crosapi.mojom.LocalPrinter_CreatePrintJob_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.LocalPrinter_CreatePrintJob_ResponseParamsSpec,
      [arg_job],
      false);
  }

  cancelPrintJob(arg_printer_id, arg_job_id) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.crosapi.mojom.LocalPrinter_CancelPrintJob_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.LocalPrinter_CancelPrintJob_ResponseParamsSpec,
      [arg_printer_id, arg_job_id],
      false);
  }

  getPrintServersConfig() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetPrintServersConfig_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetPrintServersConfig_ResponseParamsSpec,
      [],
      false);
  }

  choosePrintServers(arg_print_server_ids) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.crosapi.mojom.LocalPrinter_ChoosePrintServers_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.LocalPrinter_ChoosePrintServers_ResponseParamsSpec,
      [arg_print_server_ids],
      false);
  }

  addPrintServerObserver(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.crosapi.mojom.LocalPrinter_AddPrintServerObserver_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.LocalPrinter_AddPrintServerObserver_ResponseParamsSpec,
      [arg_observer],
      false);
  }

  getPolicies() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetPolicies_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetPolicies_ResponseParamsSpec,
      [],
      false);
  }

  getUsernamePerPolicy() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetUsernamePerPolicy_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetUsernamePerPolicy_ResponseParamsSpec,
      [],
      false);
  }

  getPrinterTypeDenyList() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetPrinterTypeDenyList_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetPrinterTypeDenyList_ResponseParamsSpec,
      [],
      false);
  }

  addPrintJobObserver(arg_observer, arg_source) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.crosapi.mojom.LocalPrinter_AddPrintJobObserver_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.LocalPrinter_AddPrintJobObserver_ResponseParamsSpec,
      [arg_observer, arg_source],
      false);
  }

  getOAuthAccessToken(arg_printer_id) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetOAuthAccessToken_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetOAuthAccessToken_ResponseParamsSpec,
      [arg_printer_id],
      false);
  }

  getIppClientInfo(arg_printer_id) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetIppClientInfo_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetIppClientInfo_ResponseParamsSpec,
      [arg_printer_id],
      false);
  }

  addLocalPrintersObserver(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.crosapi.mojom.LocalPrinter_AddLocalPrintersObserver_ParamsSpec,
      mojo.internal.bindings.crosapi.mojom.LocalPrinter_AddLocalPrintersObserver_ResponseParamsSpec,
      [arg_observer],
      false);
  }

};

mojo.internal.bindings.crosapi.mojom.LocalPrinter.getRemote = function() {
  let remote = new mojo.internal.bindings.crosapi.mojom.LocalPrinterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.LocalPrinter',
    'context');
  return remote.$;
};

mojo.internal.bindings.crosapi.mojom.LocalPrinterReceiver = class {
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
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetPrinters_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetCapability_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetEulaUrl_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetStatus_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.LocalPrinter_ShowSystemPrintSettings_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.LocalPrinter_CreatePrintJob_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.LocalPrinter_CancelPrintJob_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetPrintServersConfig_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.LocalPrinter_ChoosePrintServers_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.LocalPrinter_AddPrintServerObserver_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetPolicies_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetUsernamePerPolicy_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetPrinterTypeDenyList_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.LocalPrinter_AddPrintJobObserver_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetOAuthAccessToken_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetIppClientInfo_ParamsSpec);
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
             decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.LocalPrinter_AddLocalPrintersObserver_ParamsSpec);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetPrinters_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getPrinters');
          const result = this.impl.getPrinters();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetPrinters_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetPrinters FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetCapability_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getCapability');
          const result = this.impl.getCapability(params.arg_printer_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetCapability_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetCapability FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetEulaUrl_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getEulaUrl');
          const result = this.impl.getEulaUrl(params.arg_printer_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetEulaUrl_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetEulaUrl FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetStatus_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getStatus');
          const result = this.impl.getStatus(params.arg_printer_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetStatus_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetStatus FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.LocalPrinter_ShowSystemPrintSettings_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showSystemPrintSettings');
          const result = this.impl.showSystemPrintSettings();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.LocalPrinter_ShowSystemPrintSettings_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ShowSystemPrintSettings FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.LocalPrinter_CreatePrintJob_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createPrintJob');
          const result = this.impl.createPrintJob(params.arg_job);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.LocalPrinter_CreatePrintJob_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CreatePrintJob FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.LocalPrinter_CancelPrintJob_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.cancelPrintJob');
          const result = this.impl.cancelPrintJob(params.arg_printer_id, params.arg_job_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.LocalPrinter_CancelPrintJob_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CancelPrintJob FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetPrintServersConfig_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getPrintServersConfig');
          const result = this.impl.getPrintServersConfig();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetPrintServersConfig_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetPrintServersConfig FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.LocalPrinter_ChoosePrintServers_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.choosePrintServers');
          const result = this.impl.choosePrintServers(params.arg_print_server_ids);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.LocalPrinter_ChoosePrintServers_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ChoosePrintServers FAILED:', e));
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.LocalPrinter_AddPrintServerObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addPrintServerObserver');
          const result = this.impl.addPrintServerObserver(params.arg_observer);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.LocalPrinter_AddPrintServerObserver_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] AddPrintServerObserver FAILED:', e));
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetPolicies_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getPolicies');
          const result = this.impl.getPolicies();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetPolicies_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetPolicies FAILED:', e));
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetUsernamePerPolicy_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getUsernamePerPolicy');
          const result = this.impl.getUsernamePerPolicy();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetUsernamePerPolicy_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetUsernamePerPolicy FAILED:', e));
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetPrinterTypeDenyList_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getPrinterTypeDenyList');
          const result = this.impl.getPrinterTypeDenyList();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetPrinterTypeDenyList_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetPrinterTypeDenyList FAILED:', e));
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.LocalPrinter_AddPrintJobObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addPrintJobObserver');
          const result = this.impl.addPrintJobObserver(params.arg_observer, params.arg_source);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.LocalPrinter_AddPrintJobObserver_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] AddPrintJobObserver FAILED:', e));
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetOAuthAccessToken_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getOAuthAccessToken');
          const result = this.impl.getOAuthAccessToken(params.arg_printer_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetOAuthAccessToken_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetOAuthAccessToken FAILED:', e));
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetIppClientInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getIppClientInfo');
          const result = this.impl.getIppClientInfo(params.arg_printer_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.LocalPrinter_GetIppClientInfo_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetIppClientInfo FAILED:', e));
          }
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.crosapi.mojom.LocalPrinter_AddLocalPrintersObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addLocalPrintersObserver');
          const result = this.impl.addLocalPrintersObserver(params.arg_observer);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.crosapi.mojom.LocalPrinter_AddLocalPrintersObserver_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] AddLocalPrintersObserver FAILED:', e));
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

mojo.internal.bindings.crosapi.mojom.LocalPrinterReceiver = mojo.internal.bindings.crosapi.mojom.LocalPrinterReceiver;

mojo.internal.bindings.crosapi.mojom.LocalPrinterPtr = mojo.internal.bindings.crosapi.mojom.LocalPrinterRemote;
mojo.internal.bindings.crosapi.mojom.LocalPrinterRequest = mojo.internal.bindings.crosapi.mojom.LocalPrinterPendingReceiver;

