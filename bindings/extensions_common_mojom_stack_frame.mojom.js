// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/mojom/stack_frame.mojom
// Module: extensions.mojom

'use strict';

// Module namespace
var extensions = extensions || {};
extensions.mojom = extensions.mojom || {};

extensions.mojom.StackFrameSpec = { $: {} };

// Struct: StackFrame
mojo.internal.Struct(
    extensions.mojom.StackFrameSpec, 'extensions.mojom.StackFrame', [
      mojo.internal.StructField('line_number', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('column_number', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('source', 0, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('function', 8, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
    ],
    [[0, 32]]);
