// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/mojom/stack_frame.mojom
// Module: extensions.mojom

'use strict';

// Module namespace
var extensions = extensions || {};
extensions.mojom = extensions.mojom || {};


// Struct: StackFrame
extensions.mojom.StackFrameSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.StackFrame',
      packedSize: 32,
      fields: [
        { name: 'line_number', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'column_number', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'source', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false },
        { name: 'function', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
