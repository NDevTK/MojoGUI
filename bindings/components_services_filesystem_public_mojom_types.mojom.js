// Auto-generated MojoJS binding
// Source: chromium_src/components/services/filesystem/public/mojom/types.mojom
// Module: filesystem.mojom

'use strict';

// Module namespace
var filesystem = filesystem || {};
filesystem.mojom = filesystem.mojom || {};


// Enum: Whence
filesystem.mojom.Whence = {
  FROM_BEGIN: 0,
  FROM_CURRENT: 1,
  FROM_END: 2,
};

// Enum: FsFileType
filesystem.mojom.FsFileType = {
  UNKNOWN: 0,
  REGULAR_FILE: 1,
  DIRECTORY: 2,
};

// Struct: TimespecOrNow
filesystem.mojom.TimespecOrNowSpec = {
  $: {
    structSpec: {
      name: 'filesystem.mojom.TimespecOrNow',
      packedSize: 24,
      fields: [
        { name: 'now', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'seconds', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: FileInformation
filesystem.mojom.FileInformationSpec = {
  $: {
    structSpec: {
      name: 'filesystem.mojom.FileInformation',
      packedSize: 48,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: filesystem.mojom.FsFileTypeSpec, nullable: false },
        { name: 'size', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'atime', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'mtime', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'ctime', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DirectoryEntry
filesystem.mojom.DirectoryEntrySpec = {
  $: {
    structSpec: {
      name: 'filesystem.mojom.DirectoryEntry',
      packedSize: 32,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.SafeBaseNameSpec, nullable: false },
        { name: 'display_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'type', packedOffset: 16, packedBitOffset: 0, type: filesystem.mojom.FsFileTypeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
