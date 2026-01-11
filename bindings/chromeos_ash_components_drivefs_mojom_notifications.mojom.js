// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/components/drivefs/mojom/notifications.mojom
// Module: drivefs.mojom

// Module namespace
var drivefs = drivefs || {};
drivefs.mojom = drivefs.mojom || {};
var mojo_base = mojo_base || {};

drivefs.mojom.DriveFsNotificationSpec = { $: {} };
drivefs.mojom.MirrorDownloadDeletedNotificationSpec = { $: {} };

// Union: DriveFsNotification
mojo.internal.Union(
    drivefs.mojom.DriveFsNotificationSpec, 'drivefs.mojom.DriveFsNotification', {
      'unknown': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'mirror_download_deleted': {
        'ordinal': 1,
        'type': drivefs.mojom.MirrorDownloadDeletedNotificationSpec.$,
        'nullable': false,
      },
    });

// Struct: MirrorDownloadDeletedNotification
mojo.internal.Struct(
    drivefs.mojom.MirrorDownloadDeletedNotificationSpec, 'drivefs.mojom.MirrorDownloadDeletedNotification', [
      mojo.internal.StructField('parent_title', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);
