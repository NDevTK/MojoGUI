// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ash/guest_os/guest_os_diagnostics.mojom
// Module: guest_os.mojom

'use strict';

// Module namespace
var guest_os = guest_os || {};
guest_os.mojom = guest_os.mojom || {};
var url = url || {};

guest_os.mojom.StatusSpec = { $: mojo.internal.Enum() };
guest_os.mojom.DiagnosticMessageSpec = { $: {} };
guest_os.mojom.DiagnosticEntrySpec = { $: {} };
guest_os.mojom.DiagnosticsSpec = { $: {} };

// Enum: Status
guest_os.mojom.Status = {
  kPass: 0,
  kFail: 1,
  kNotApplicable: 2,
};

// Struct: DiagnosticMessage
mojo.internal.Struct(
    guest_os.mojom.DiagnosticMessageSpec, 'guest_os.mojom.DiagnosticMessage', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('learn_more_link', 8, 0, url.mojom.UrlSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: DiagnosticEntry
mojo.internal.Struct(
    guest_os.mojom.DiagnosticEntrySpec, 'guest_os.mojom.DiagnosticEntry', [
      mojo.internal.StructField('kPass', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: Diagnostics
mojo.internal.Struct(
    guest_os.mojom.DiagnosticsSpec, 'guest_os.mojom.Diagnostics', [
      mojo.internal.StructField('entries', 0, 0, mojo.internal.Array(guest_os.mojom.DiagnosticEntrySpec, false), null, false, 0, undefined),
      mojo.internal.StructField('top_error', 8, 0, guest_os.mojom.DiagnosticMessageSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);
