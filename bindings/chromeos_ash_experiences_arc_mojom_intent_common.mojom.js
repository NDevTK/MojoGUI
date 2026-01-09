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

// Struct: ActivityName
arc.mojom.ActivityNameSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ActivityName',
      packedSize: 24,
      fields: [
        { name: 'package_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'activity_name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
