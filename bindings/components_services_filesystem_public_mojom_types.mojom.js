// Auto-generated MojoJS binding
// Source: chromium_src/components/services/filesystem/public/mojom/types.mojom
// Module: filesystem.mojom

'use strict';

// Module namespace
var filesystem = filesystem || {};
filesystem.mojom = filesystem.mojom || {};


filesystem.mojom.mojom.kFlagOpen = 0x1;

filesystem.mojom.mojom.kFlagCreate = 0x2;

filesystem.mojom.mojom.kFlagOpenAlways = 0x4;

filesystem.mojom.mojom.kCreateAlways = 0x8;

filesystem.mojom.mojom.kFlagOpenTruncated = 0x10;

filesystem.mojom.mojom.kFlagRead = 0x20;

filesystem.mojom.mojom.kFlagWrite = 0x40;

filesystem.mojom.mojom.kFlagAppend = 0x80;

filesystem.mojom.mojom.kDeleteOnClose = 0x2000;

filesystem.mojom.mojom.kFlagWriteAttributes = 0x4000;

filesystem.mojom.mojom.kDeleteFlagRecursive = 0x1;

// Enum: Whence
filesystem.mojom.mojom.Whence = {
  FROM_BEGIN: 0,
  FROM_CURRENT: 1,
  FROM_END: 2,
};
filesystem.mojom.mojom.WhenceSpec = { $: mojo.internal.Enum() };

// Enum: FsFileType
filesystem.mojom.mojom.FsFileType = {
  UNKNOWN: 0,
  REGULAR_FILE: 1,
  DIRECTORY: 2,
};
filesystem.mojom.mojom.FsFileTypeSpec = { $: mojo.internal.Enum() };

// Struct: TimespecOrNow
filesystem.mojom.mojom.TimespecOrNowSpec = {
  $: {
    structSpec: {
      name: 'filesystem.mojom.TimespecOrNow',
      packedSize: 24,
      fields: [
        { name: 'now', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'seconds', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: FileInformation
filesystem.mojom.mojom.FileInformationSpec = {
  $: {
    structSpec: {
      name: 'filesystem.mojom.FileInformation',
      packedSize: 48,
      fields: [
        { name: 'type', packedOffset: 32, packedBitOffset: 0, type: filesystem.mojom.FsFileTypeSpec, nullable: false, minVersion: 0 },
        { name: 'size', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'atime', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'mtime', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'ctime', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: DirectoryEntry
filesystem.mojom.mojom.DirectoryEntrySpec = {
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
