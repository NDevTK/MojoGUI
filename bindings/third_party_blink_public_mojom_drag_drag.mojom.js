// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/drag/drag.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var services = services || {};
var ui = ui || {};
var ui = ui || {};
var gfx = gfx || {};
var url = url || {};
var blink = blink || {};
var blink = blink || {};

blink.mojom.DragItemSpec = { $: {} };
blink.mojom.AllowedDragOperationsSpec = { $: {} };
blink.mojom.DragItemStringSpec = { $: {} };
blink.mojom.DragItemBinarySpec = { $: {} };
blink.mojom.DragItemFileSystemFileSpec = { $: {} };
blink.mojom.DragDataSpec = { $: {} };
blink.mojom.DragEventSourceInfoSpec = { $: {} };

// Union: DragItem
mojo.internal.Union(
    blink.mojom.DragItemSpec, 'blink.mojom.DragItem', {
      'string': {
        'ordinal': 0,
        'type': blink.mojom.DragItemStringSpec,
        'nullable': false,
      },
      'file': {
        'ordinal': 1,
        'type': blink.mojom.DataTransferFileSpec,
        'nullable': false,
      },
      'binary': {
        'ordinal': 2,
        'type': blink.mojom.DragItemBinarySpec,
        'nullable': false,
      },
      'file_system_file': {
        'ordinal': 3,
        'type': blink.mojom.DragItemFileSystemFileSpec,
        'nullable': false,
      },
    });

// Struct: AllowedDragOperations
mojo.internal.Struct(
    blink.mojom.AllowedDragOperationsSpec, 'blink.mojom.AllowedDragOperations', [
      mojo.internal.StructField('allow_copy', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_link', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('allow_move', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: DragItemString
mojo.internal.Struct(
    blink.mojom.DragItemStringSpec, 'blink.mojom.DragItemString', [
      mojo.internal.StructField('string_type', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('string_data', 8, 0, mojo_base.mojom.BigString16Spec, null, false, 0, undefined),
      mojo.internal.StructField('title', 16, 0, mojo_base.mojom.String16Spec, null, true, 0, undefined),
      mojo.internal.StructField('base_url', 24, 0, url.mojom.UrlSpec, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: DragItemBinary
mojo.internal.Struct(
    blink.mojom.DragItemBinarySpec, 'blink.mojom.DragItemBinary', [
      mojo.internal.StructField('data', 0, 0, mojo_base.mojom.BigBufferSpec, null, false, 0, undefined),
      mojo.internal.StructField('is_image_accessible', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('source_url', 24, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('filename_extension', 32, 0, mojo_base.mojom.FilePathSpec, null, false, 0, undefined),
      mojo.internal.StructField('content_disposition', 40, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 56]]);

// Struct: DragItemFileSystemFile
mojo.internal.Struct(
    blink.mojom.DragItemFileSystemFileSpec, 'blink.mojom.DragItemFileSystemFile', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('size', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('file_system_id', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('serialized_blob', 24, 0, blink.mojom.SerializedBlobSpec, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: DragData
mojo.internal.Struct(
    blink.mojom.DragDataSpec, 'blink.mojom.DragData', [
      mojo.internal.StructField('items', 0, 0, mojo.internal.Array(blink.mojom.DragItemSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('file_system_id', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('force_default_action', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: DragEventSourceInfo
mojo.internal.Struct(
    blink.mojom.DragEventSourceInfoSpec, 'blink.mojom.DragEventSourceInfo', [
      mojo.internal.StructField('location', 0, 0, gfx.mojom.PointSpec, null, false, 0, undefined),
      mojo.internal.StructField('source', 8, 0, ui.mojom.DragEventSourceSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);
