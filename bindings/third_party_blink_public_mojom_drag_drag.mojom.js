// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/drag/drag.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Union: DragItem
blink.mojom.DragItemSpec = { $: mojo.internal.Union(
    'blink.mojom.DragItem', {
      'string': {
        'ordinal': 0,
        'type': blink.mojom.DragItemStringSpec,
      }},
      'file': {
        'ordinal': 1,
        'type': blink.mojom.DataTransferFileSpec,
      }},
      'binary': {
        'ordinal': 2,
        'type': blink.mojom.DragItemBinarySpec,
      }},
      'file_system_file': {
        'ordinal': 3,
        'type': blink.mojom.DragItemFileSystemFileSpec,
      }},
    })
};

// Struct: AllowedDragOperations
blink.mojom.AllowedDragOperationsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AllowedDragOperations',
      packedSize: 16,
      fields: [
        { name: 'allow_copy', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'allow_link', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'allow_move', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'string_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'string_data', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.BigString16Spec, nullable: false, minVersion: 0 },
        { name: 'title', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true, minVersion: 0 },
        { name: 'base_url', packedOffset: 24, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: DragItemBinary
blink.mojom.DragItemBinarySpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DragItemBinary',
      packedSize: 56,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.BigBufferSpec, nullable: false, minVersion: 0 },
        { name: 'is_image_accessible', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'source_url', packedOffset: 24, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'filename_extension', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
        { name: 'content_disposition', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
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
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'size', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'file_system_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'serialized_blob', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.SerializedBlobSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
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
        { name: 'items', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.DragItemSpec, false), nullable: false, minVersion: 0 },
        { name: 'file_system_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'force_default_action', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
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
        { name: 'location', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.PointSpec, nullable: false, minVersion: 0 },
        { name: 'source', packedOffset: 8, packedBitOffset: 0, type: ui.mojom.DragEventSourceSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
