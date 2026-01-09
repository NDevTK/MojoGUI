// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/drag/drag.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: AllowedDragOperations
blink.mojom.AllowedDragOperationsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AllowedDragOperations',
      packedSize: 16,
      fields: [
        { name: 'allow_copy', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'allow_link', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'allow_move', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DragItemString
blink.mojom.DragItemStringSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DragItemString',
      packedSize: 40,
      fields: [
        { name: 'string_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'string_data', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.BigString16Spec, nullable: false },
        { name: 'title', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true },
        { name: 'base_url', packedOffset: 24, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DragItemBinary
blink.mojom.DragItemBinarySpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DragItemBinary',
      packedSize: 48,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.BigBufferSpec, nullable: false },
        { name: 'source_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'filename_extension', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false },
        { name: 'content_disposition', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'is_image_accessible', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DragItemFileSystemFile
blink.mojom.DragItemFileSystemFileSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DragItemFileSystemFile',
      packedSize: 40,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'size', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'file_system_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'serialized_blob', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.SerializedBlobSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DragData
blink.mojom.DragDataSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DragData',
      packedSize: 32,
      fields: [
        { name: 'items', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'file_system_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'force_default_action', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DragEventSourceInfo
blink.mojom.DragEventSourceInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DragEventSourceInfo',
      packedSize: 24,
      fields: [
        { name: 'location', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.PointSpec, nullable: false },
        { name: 'source', packedOffset: 8, packedBitOffset: 0, type: ui.mojom.DragEventSourceSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
