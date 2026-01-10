// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/intent_common.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: ActionType
arc.mojom.ActionType = {
  VIEW: 0,
  SEND: 1,
  SEND_MULTIPLE: 2,
  CREATE_NOTE: 3,
  EDIT: 4,
};
arc.mojom.ActionTypeSpec = { $: mojo.internal.Enum() };

// Struct: ActivityName
arc.mojom.ActivityNameSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ActivityName',
      packedSize: 24,
      fields: [
        { name: 'package_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'activity_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
