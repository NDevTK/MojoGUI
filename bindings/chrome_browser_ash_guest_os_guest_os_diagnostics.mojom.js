// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ash/guest_os/guest_os_diagnostics.mojom
// Module: guest_os.mojom

'use strict';

// Module namespace
var guest_os = guest_os || {};
guest_os.mojom = guest_os.mojom || {};


// Enum: Status
guest_os.mojom.Status = {
  kPass: 0,
  kFail: 1,
  kNotApplicable: 2,
};

// Struct: DiagnosticMessage
guest_os.mojom.DiagnosticMessageSpec = {
  $: {
    structSpec: {
      name: 'guest_os.mojom.DiagnosticMessage',
      packedSize: 24,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'learn_more_link', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DiagnosticEntry
guest_os.mojom.DiagnosticEntrySpec = {
  $: {
    structSpec: {
      name: 'guest_os.mojom.DiagnosticEntry',
      packedSize: 16,
      fields: [
        { name: 'kPass', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Diagnostics
guest_os.mojom.DiagnosticsSpec = {
  $: {
    structSpec: {
      name: 'guest_os.mojom.Diagnostics',
      packedSize: 24,
      fields: [
        { name: 'entries', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'top_error', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
