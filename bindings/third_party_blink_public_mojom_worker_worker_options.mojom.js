// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/worker/worker_options.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var services = services || {};
var blink = blink || {};

blink.mojom.WorkerOptionsSpec = { $: {} };

// Struct: WorkerOptions
mojo.internal.Struct(
    blink.mojom.WorkerOptionsSpec, 'blink.mojom.WorkerOptions', [
      mojo.internal.StructField('type', 0, 0, blink.mojom.ScriptTypeSpec, 0, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, 0, false, 0, undefined),
    ],
    [[0, 24]]);
