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
        { name: 'allow_move', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'base_url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
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
      packedSize: 16,
      fields: [
        { name: 'content_disposition', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
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
      packedSize: 16,
      fields: [
        { name: 'serialized_blob', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
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
      packedSize: 8,
      fields: [
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
      packedSize: 16,
      fields: [
        { name: 'source', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
