// Auto-generated MojoJS binding
// Source: chromium_src/components/services/filesystem/public/mojom/types.mojom
// Module: filesystem.mojom

'use strict';

// Module namespace
var filesystem = filesystem || {};
filesystem.mojom = filesystem.mojom || {};


filesystem.mojom.kFlagOpen = 0x1;

filesystem.mojom.kFlagCreate = 0x2;

filesystem.mojom.kFlagOpenAlways = 0x4;

filesystem.mojom.kCreateAlways = 0x8;

filesystem.mojom.kFlagOpenTruncated = 0x10;

filesystem.mojom.kFlagRead = 0x20;

filesystem.mojom.kFlagWrite = 0x40;

filesystem.mojom.kFlagAppend = 0x80;

filesystem.mojom.kDeleteOnClose = 0x2000;

filesystem.mojom.kFlagWriteAttributes = 0x4000;

filesystem.mojom.kDeleteFlagRecursive = 0x1;

// Enum: Whence
filesystem.mojom.Whence = {
  FROM_BEGIN: 0,
  FROM_CURRENT: 1,
  FROM_END: 2,
};
filesystem.mojom.WhenceSpec = { $: mojo.internal.Enum() };

// Enum: FsFileType
filesystem.mojom.FsFileType = {
  UNKNOWN: 0,
  REGULAR_FILE: 1,
  DIRECTORY: 2,
};
filesystem.mojom.FsFileTypeSpec = { $: mojo.internal.Enum() };

// Struct: TimespecOrNow
filesystem.mojom.TimespecOrNowSpec = {
  $: {
    structSpec: {
      name: 'filesystem.mojom.TimespecOrNow',
      packedSize: 24,
      fields: [
        { name: 'now', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'seconds', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: filesystem.mojom.FsFileTypeSpec, nullable: false, minVersion: 0 },
        { name: 'size', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'atime', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'mtime', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'ctime', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
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
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.SafeBaseNameSpec, nullable: false, minVersion: 0 },
        { name: 'display_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 16, packedBitOffset: 0, type: filesystem.mojom.FsFileTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};
