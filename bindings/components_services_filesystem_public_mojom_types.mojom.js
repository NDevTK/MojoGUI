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
      packedSize: 16,
      fields: [
        { name: 'seconds', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'ctime', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
