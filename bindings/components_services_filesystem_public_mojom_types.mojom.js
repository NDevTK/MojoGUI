// Auto-generated MojoJS binding
// Source: chromium_src/components/services/filesystem/public/mojom/types.mojom
// Module: filesystem.mojom

'use strict';

// Module namespace
var filesystem = filesystem || {};
filesystem.mojom = filesystem.mojom || {};

filesystem.mojom.WhenceSpec = { $: mojo.internal.Enum() };
filesystem.mojom.FsFileTypeSpec = { $: mojo.internal.Enum() };
filesystem.mojom.TimespecOrNowSpec = { $: {} };
filesystem.mojom.FileInformationSpec = { $: {} };
filesystem.mojom.DirectoryEntrySpec = { $: {} };

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

// Enum: FsFileType
filesystem.mojom.FsFileType = {
  UNKNOWN: 0,
  REGULAR_FILE: 1,
  DIRECTORY: 2,
};

// Struct: TimespecOrNow
mojo.internal.Struct(
    filesystem.mojom.TimespecOrNowSpec, 'filesystem.mojom.TimespecOrNow', [
      mojo.internal.StructField('seconds', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('now', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: FileInformation
mojo.internal.Struct(
    filesystem.mojom.FileInformationSpec, 'filesystem.mojom.FileInformation', [
      mojo.internal.StructField('type', 0, 0, filesystem.mojom.FsFileTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('size', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('atime', 16, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('mtime', 24, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('ctime', 32, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: DirectoryEntry
mojo.internal.Struct(
    filesystem.mojom.DirectoryEntrySpec, 'filesystem.mojom.DirectoryEntry', [
      mojo.internal.StructField('name', 0, 0, mojo_base.mojom.SafeBaseNameSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('display_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('type', 16, 0, filesystem.mojom.FsFileTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);
