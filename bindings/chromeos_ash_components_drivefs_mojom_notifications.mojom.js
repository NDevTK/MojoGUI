// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/components/drivefs/mojom/notifications.mojom
// Module: drivefs.mojom

'use strict';

// Module namespace
var drivefs = drivefs || {};
drivefs.mojom = drivefs.mojom || {};


// Union: DriveFsNotification
drivefs.mojom.DriveFsNotificationSpec = { $: mojo.internal.Union(
    'drivefs.mojom.DriveFsNotification', {
      'unknown': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
      }},
      'mirror_download_deleted': {
        'ordinal': 1,
        'type': drivefs.mojom.MirrorDownloadDeletedNotificationSpec,
      }},
    })
};

// Struct: MirrorDownloadDeletedNotification
drivefs.mojom.MirrorDownloadDeletedNotificationSpec = {
  $: {
    structSpec: {
      name: 'drivefs.mojom.MirrorDownloadDeletedNotification',
      packedSize: 16,
      fields: [
        { name: 'parent_title', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};
